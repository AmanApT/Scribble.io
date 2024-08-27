"use client";
import React, { useEffect, useState } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import Canvas from "../_components/Canvas";

const Workspace = ({ params }: any) => {
  const [triggerSave, setTriggerSave] = useState(0);
  const convex = useConvex();
  const [fileData, setFileData] = useState<File | any>();

  useEffect(() => {
    params.fileId && getFileData();
  }, []);
  const getFileData = async () => {
    const result = await convex.query(api.file.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
    console.log(result);
  };

  return (
    <div className="bg-hero-pattern bg-cover h-screen">
      <WorkspaceHeader onSave={() => setTriggerSave(Date.now())} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white border-r ">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params?.fileId}
            fileData={fileData}
          />
        </div>
        <div className="h-screen bg-white border-l">
          <Canvas
           onSaveTrigger={triggerSave}
           fileId={params?.fileId}
           fileData={fileData}
            />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
