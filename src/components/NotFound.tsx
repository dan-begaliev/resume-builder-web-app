import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>404 - Not Found</h1>
      <Button asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}
