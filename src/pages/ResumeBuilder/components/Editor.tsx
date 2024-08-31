import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet, useLocation } from "react-router-dom";

export default function Editor() {
  const locations = useLocation();
  console.log(locations);
  return (
    <Card className="size-full p-6">
      <ScrollArea className="h-full w-full max-w-full">
        <Outlet />
      </ScrollArea>
    </Card>
  );
}
