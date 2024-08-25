import { Card } from "@/components/ui/card";
import { Outlet, useLocation } from "react-router-dom";

export default function Editor() {
  const locations = useLocation();
  console.log(locations);
  return (
    <Card className="size-full p-6">
      <Outlet />
    </Card>
  );
}
