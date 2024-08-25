import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export function LandingLayout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
