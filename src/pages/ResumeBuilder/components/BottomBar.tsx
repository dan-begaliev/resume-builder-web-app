import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";

export default function BottomBar({
  resumeRef,
}: {
  resumeRef: React.RefObject<HTMLDivElement>;
}) {
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "Visitor Pass",
    onAfterPrint: () => console.log("Printed PDF successfully!"),
  });

  const handlePrevius = () => {};

  const handleNext = () => {
    console.log("Next");
  };
  return (
    <div className="h-[50px] px-3 flex justify-end items-center">
      <Button onClick={handlePrint} className="" size={"sm"}>
        Download
      </Button>
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
