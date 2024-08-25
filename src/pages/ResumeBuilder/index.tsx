import { Header } from "@/components/Header";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
export default function ResumeBuilder() {
  const [layoutSizes, setLayoutSizes] = useState([20, 40, 40]);

  return (
    <>
      <Header />
      <main
        id="content"
        className={cn(
          "flex size-full pt-3 px-3 overflow-scroll flex-col !h-[calc(100dvh-var(--header-height))] "
        )}
      >
        <ResizablePanelGroup
          className={cn("relative size-full grow")}
          direction="horizontal"
        >
          <ResizablePanel defaultSize={layoutSizes[0]} className="max-w-64">
            <Sidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={layoutSizes[1]}>
            <Editor />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={layoutSizes[2]}>
            <Preview />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
