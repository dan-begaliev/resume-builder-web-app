import { Outlet, useLocation } from "react-router-dom";

export default function Editor() {
  const locations = useLocation();
  console.log(locations);
  return (
    <div className="flex h-full items-center justify-center p-6">
      <Outlet />
    </div>
  );
}
