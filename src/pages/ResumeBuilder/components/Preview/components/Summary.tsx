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
        {resumeData.summary.description.value} Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Blanditiis corporis optio dolorem maxime
        aliquid obcaecati saepe, voluptate ipsum nemo, cupiditate omnis porro
        ipsam nihil adipisci eius cumque pariatur dolore est.
      </div>
    </section>
  );
}

export default Summary;
