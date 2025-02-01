import Navigation from "@/Navigation";
import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/toaster";

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Toaster duration={1000}/>
    </>
  );
}

export default RootLayout;
