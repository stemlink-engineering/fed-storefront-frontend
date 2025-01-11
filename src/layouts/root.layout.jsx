import { Outlet } from "react-router";
import Navigation from "@/Navigation";

import { useAuth } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setAuthToken, clearAuthToken } from "@/lib/features/authSlice";

import { useEffect } from "react";

function RootLayout() {
  const { getToken, userId } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    // userId indicates an active session, otherwise user is signed out
    if (userId) {
      getToken()
        .then((token) => {
          if (token) {
            dispatch(setAuthToken(token));
          }
        })
        .catch((e) => console.error("Error fetching Clerk token:", e));
    } else {
      // Signed out or no session
      dispatch(clearAuthToken());
    }
  }, [userId, getToken, dispatch]);

  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
