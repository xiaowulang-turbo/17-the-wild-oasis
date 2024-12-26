import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      toast.success("Login successful");
      navigate("/dashboard");
    },

    onError: (error) => {
      console.log("ERROR", error);
      toast.error("Provide email or password are incorrect");
    },
  });

  return { login, isLoading };
}
