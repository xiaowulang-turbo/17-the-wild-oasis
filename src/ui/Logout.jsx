import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import useLogout from "../features/authentication/useLogout";

export default function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}
