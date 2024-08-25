import { Outlet } from "react-router-dom";
import { BuilderHeader } from "../BuilderHeader";

export function BuilderLayout() {
  return (
    <>
      <BuilderHeader />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}
