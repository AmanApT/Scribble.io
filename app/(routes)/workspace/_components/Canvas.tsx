"use client";
import React, { useEffect, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
const Canvas = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: string | any;
  fileData: File | any;
}) => {
  const [whiteboardData, setWhiteboardData] = useState<any>();

  const updateWhiteboard = useMutation(api.file.updateWhiteboard)

  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);
  const saveWhiteboard = () => {
    updateWhiteboard({
      _id:fileId,
      whiteboard:JSON.stringify(whiteboardData)
    }).then((res)=>{
      console.log(res)
    })
  };
  return (
    <div className="h-[90vh]">
      {
        fileData && 
      
      <Excalidraw
      initialData={
        {
          elements : fileData?.whiteboard && JSON.parse(fileData.whiteboard)
        }
      }
        onChange={(excalidrawElements, appState, files) =>
          setWhiteboardData(excalidrawElements)
        }
        UIOptions={{
          canvasActions: {
            saveToActiveFile: false,
            loadScene: false,
            export: false,
          },
        }}
      >
        <MainMenu>
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
        <WelcomeScreen>
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Heading>
              Welcome to Scribble.io
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.MenuItemHelp />
          </WelcomeScreen.Center>
        </WelcomeScreen>
      </Excalidraw>
}
    </div>
  );
};

export default Canvas;
