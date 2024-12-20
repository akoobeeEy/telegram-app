import { useQuery } from "@tanstack/react-query";
import request from "@/services";
import * as API from "@/constants/api";
import { toast } from "react-toastify";

const fetchData = async ({ key, userId }) => {
  const response = await request.get(`${API.ENDPOINT}/${key}/${userId}/`);

  return response.data;
};

const useData = (key, userId) => {
  return useQuery({
    queryKey: [key, userId],
    queryFn: () => fetchData({ key, userId }),
    enabled: !!userId,
    onError: (error) => {
      toast.error("Error:", error);
    },
  });
};

export const useFetchData = (key, userId) => useData(key, userId);
