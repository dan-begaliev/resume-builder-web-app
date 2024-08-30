import { Header } from "@/components/Header";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Preview from "./components/Preview/Preview";
import Editor from "./components/Editor";
import { ResizeHandleCustom } from "@/components/ResizableHandleCustom";
import BottomBar from "./components/BottomBar";
export default function ResumeBuilder() {
  const sidebarLayoutSizes = [10, 90];
  const editorLayoutSizes = [50, 50];

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <>
      <Header />
      <main
        id="content"
        className={cn("flex size-full !h-[calc(100dvh-var(--header-height))]")}
      >
        <ResizablePanelGroup direction="horizontal">
          {/* Sidebar Panel */}
          <ResizablePanel
            defaultSize={sidebarLayoutSizes[0]}
            minSize={15}
            maxSize={15}
            collapsible={true}
            collapsedSize={4}
            onCollapse={() => setIsSidebarCollapsed(true)}
            onExpand={() => setIsSidebarCollapsed(false)}
            className={cn("max-w-64", isSidebarCollapsed && "min-w-[60px]")}
          >
            <Sidebar isCollapsed={isSidebarCollapsed} />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Editor & Preview Panels */}
          <ResizablePanel
            defaultSize={sidebarLayoutSizes[1]}
            className="flex flex-col"
          >
            <ResizablePanelGroup
              className={cn("relative size-full grow px-3 py-3 ")}
              direction="horizontal"
            >
              <ResizablePanel defaultSize={editorLayoutSizes[1]} minSize={20}>
                <Editor />
              </ResizablePanel>

              <ResizeHandleCustom />

              <ResizablePanel defaultSize={editorLayoutSizes[2]} minSize={15}>
                <Preview />
              </ResizablePanel>
            </ResizablePanelGroup>
            <BottomBar />
            <ResizablePanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
