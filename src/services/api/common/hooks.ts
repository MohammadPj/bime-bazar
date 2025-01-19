import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getMyAddresses,
  orderCompletion,
} from "@/services/api/common/services";

export const useGetMyAddresses = () =>
  useQuery({
    queryKey: ["my-addresses"],
    queryFn: getMyAddresses,
    staleTime: 15 * 60 * 1000,
  });

export const useOrderCompletionMutation = () =>
  useMutation({
    mutationKey: ["order-completion"],
    mutationFn: orderCompletion,
  });
