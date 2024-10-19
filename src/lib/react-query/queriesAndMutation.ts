import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import {
  getAllCategories,
  getUser,
  loginUser,
  logoutUser,
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

export const useGetUser = () => {
  return useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(),
    refetchOnWindowFocus: false,
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ["registerUser"],
    mutationFn: (phoneNumber: string) => registerUser(phoneNumber),
  });
};

export const useLoginUser = () => {
  const query = new QueryClient();
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

export const useLogoutUser = () => {
  return useMutation({
    mutationKey: ["logoutUser"],
    mutationFn: () => logoutUser(),
  });
};
