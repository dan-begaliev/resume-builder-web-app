import React from "react";
import { Card } from "@/components/ui/card";
import Contact from "./components/Contact";
import Education from "./components/Education";
import { ResumeData } from "@/config/builderData";
import { useAppSelector } from "@/hooks/reduxHooks";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import { ScrollArea } from "@/components/ui/scroll-area";
const ResumePreview: React.FC = () => {
  const resumeData = useAppSelector(
    (state) => state.resumeBuilder
  ) as ResumeData;
  return (
    <ScrollArea className="h-full w-full max-w-full">
      <Card
        className="h-full p-6 w-full text-[clamp(12px,5vw,16px)]"
        style={{
          color: "black",
          backgroundColor: "white",
          // width: "210mm",
          // height: "297mm",
        }}
      >
        <div
          className="text-4xl p-10 flex flex-col items-center bg-cyan-800 font-bold"
          style={{
            color: "white",
            fontFamily: "Libre Baskerville, sans-serif",
          }}
        >
          {resumeData.contact.firstname.value}{" "}
          {resumeData.contact.lastname.value}
          <div
            style={{ color: "aquamarine", fontFamily: "cursive" }}
            className="text-2xl font-normal italic mt-3"
          >
            {resumeData.contact.position.value}
          </div>
        </div>
        <div className="divide flex flex-row">
          <div className="w-1/3 h-dvh flex flex-col items-center bg-[#EEE7E1] p-7">
            <div className="">
              <div className="text-l font-bold">
                <p className="my-3">CONTACT</p>
                <Contact />
                <p className="mt-6">EDUCATION</p>
                <Education />
                <p className="mt-6 mb-3">SKILLS</p>
                <Skills />
              </div>
            </div>
          </div>
          <div className="w-2/3 h-dvh p-4">
            <p className="mt-6 text-l font-bold">SUMMARY</p>
            <Summary />
            <p className="mt-6 mb-3  text-l font-bold">EXPERIENCE</p>
            <Experience />
          </div>
        </div>
      </Card>
    </ScrollArea>
  );
};

export default ResumePreview;
