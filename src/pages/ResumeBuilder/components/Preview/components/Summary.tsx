import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";

function Summary() {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;
  return (
    <section className="text-sm my-4 ">
      <div
        style={{
          color: "black",
          wordWrap: "break-word",
          textAlign: "justify",
          lineHeight: "1",
        }}
      >
        {resumeData.header.description.value}
      </div>
    </section>
  );
}

export default Summary;
