import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getAllCategories,
  loginUser,
  registerUser,
  updateName,
} from "../appwrite/api";
export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllCategories,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (phoneNumber: string) => registerUser(phoneNumber),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: ({ userID, OTP }: { userID?: string; OTP?: string }) =>
      loginUser({ userID, OTP }),
  });
};

export const useUpdateName = () => {
  return useMutation({
    mutationKey: ["updateName"],
    mutationFn: (userName: string) => updateName(userName),
  });
};
