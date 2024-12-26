/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  background-color: var(--color-grey-50);
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. If there is no authenticated user, redirect to login page
  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  // 3. While loading, show a loading spinner
  if (isLoading) {
    return <Spinner />;
  }

  // 4. If there is an authenticated user, render the app
  if (user) {
    return <FullPage>{children}</FullPage>;
  }
}
