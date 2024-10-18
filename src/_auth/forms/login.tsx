import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Loader from "@/components/shared/loader";
import {
  useLoginUser,
  useRegisterUser,
  useUpdateName,
} from "@/lib/react-query/queriesAndMutation";
import { generateUsername } from "@/lib/generateUserName";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Zod validation schema for the form
const formSchema = z.object({
  phone: z
    .string()
    .regex(/^[0-9]*$/, "Invalid phone number")
    .min(10, "Phone number must be 10 digits.")
    .max(10, "Phone number must be 10 digits."),
  otp: z.string().length(6, "OTP must be 6 digits.").optional(),
});

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Initialize form using react-hook-form and Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  // Register user hook
  const {
    data: registrationData,
    mutateAsync: registerMutation,
    isError: registrationError,
  } = useRegisterUser();

  // Login user hook
  const {
    mutateAsync: loginMutation,
    isSuccess: loginSuccess,
    isError: loginError,
  } = useLoginUser();

  // Update name hook
  const {
    data: userInfo,
    mutateAsync: updateNameMutation,
    isSuccess: updateNameSuccessful,
    isError: updateNameError,
  } = useUpdateName();

  // Handle form submission logic
  const handleLogin = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      if (!otpSent) {
        // Send OTP step
        await registerMutation(values.phone);
        setOtpSent(true);
        toast({
          title: "OTP Sent",
          description:
            "A One-Time Password (OTP) has been successfully sent to your mobile number. Please enter it to proceed.",
        });
      } else {
        // After OTP is sent, log the user in
        const userID = registrationData?.userId;
        await loginMutation({ userID, OTP: values?.otp });

        // If login succeeds, update the username
        if (loginSuccess) {
          toast({
            title: "OTP Verified",
            description:
              "Your OTP has been successfully verified. Welcome aboard!",
          });
          const username = generateUsername();
          await updateNameMutation(username);
        }
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle navigation after success
  useEffect(() => {
    if (loginSuccess || updateNameSuccessful) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/");
    }
  }, [loginSuccess, updateNameSuccessful, userInfo, navigate]);

  return (
    <Card className="w-full md:w-2/3 mx-auto p-6 bg-[#e5e5e5] border-2 border-gray-800 md:shadow-[10px_10px_20px_rgba(0,0,0,2)]">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          Login with Phone Number
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <Phone size={20} />
                      </span>
                      <Input
                        placeholder="Enter phone number"
                        className="pl-10"
                        disabled={otpSent || isSubmitting}
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* OTP Field - Visible only after OTP is sent */}
            {otpSent && (
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">OTP</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          {[...Array(6)].map((_, index) => (
                            <InputOTPSlot index={index} key={index} />
                          ))}
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Error Message */}
            {errorMessage && (
              <p
                className="text-red-600 text-sm"
                role="alert"
                aria-live="assertive"
              >
                {errorMessage}
              </p>
            )}

            {/* Loader */}
            {isSubmitting && <Loader />}

            {/* Submit Button */}
            <Button
              className="w-full flex items-center gap-4"
              type="submit"
              disabled={isSubmitting}
            >
              <LogIn className="mr-2 h-5 w-5" />
              {otpSent ? "Continue" : "Send OTP"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
