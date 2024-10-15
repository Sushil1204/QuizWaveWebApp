import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Phone } from "lucide-react";
import { useState } from "react"; // Import useState
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import loader from "@/assets/loader.gif";
import Loader from "@/components/shared/loader";

const formSchema = z.object({
  phone: z
    .string()
    .regex(/^[0-9]*$/, "Invalid phone number")
    .min(10, "Phone number must be 10 digits.")
    .max(10, "Phone number must be 10 digits."),
  otp: z.string().max(6, "OTP must be 6 digits.").optional(),
});

const Login = () => {
  const [otpSent, setOtpSent] = useState(false); // Track OTP status
  const isLoading = true;
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  // Simulate sending OTP
  const sendOtp = async (phone: string) => {
    try {
      setIsSubmitting(true);
      console.log(`Sending OTP to phone: ${phone}`);
      // Simulate successful OTP sending
      setOtpSent(true);
    } catch (error) {
      form.setError("phone", {
        message: "Failed to send OTP. Please try again.",
      });
    }
  };

  // Simulate OTP verification and login
  const verifyOtp = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      console.log("Verifying OTP:", values.otp);
      // Simulate successful verification
      console.log("Logged in successfully");
    } catch (error) {
      form.setError("otp", {
        message: "Invalid OTP. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form submission
  const handleLogin = (values: z.infer<typeof formSchema>) => {
    if (!otpSent) {
      sendOtp(values.phone); // Send OTP if not sent yet
    } else {
      verifyOtp(values); // Verify OTP if already sent
    }
  };

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
                        // disabled={otpSent} // Disable input if OTP is sent
                        {...field} // Spread field props correctly
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
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Submit Button */}
            <Button className="w-full flex items-center gap-4 " type="submit">
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
