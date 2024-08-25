import { useAppSelector } from "@/hooks/reduxHooks";
import { RootState } from "@/store";
import DynamicInputGenerator from "@/components/DynamicInputGenerator";

export default function Contact() {
  const contact = useAppSelector(
    (state: RootState) => state.resumeBuilder.contact
  );

  return (
    <div className="grid grid-flow-col gap-6 w-full">
      <DynamicInputGenerator sectionName="contact" sectionData={contact} />
    </div>
  );
}
