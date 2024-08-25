import { Button } from "@/components/ui/button";

export default function BottomBar() {
  const handlePrevius = () => {};

  const handleNext = () => {
    console.log("Next");
  };
  return (
    <div className="h-[50px] px-3 flex justify-end">
      <Button
        variant={"secondary"}
        size={"sm"}
        className="mr-3"
        onClick={handlePrevius}
      >
        Previus
      </Button>
      <Button size={"sm"} onClick={handleNext}>
        Continue
      </Button>
    </div>
  );
}
