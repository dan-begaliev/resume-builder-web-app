import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Applayout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
