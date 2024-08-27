import React, { useContext, useEffect, useState } from "react";
import SidebarTopSection, { Teams } from "./SidebarTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidebarBottomSection from "./SidebarBottomSection";
import { toast, useToast } from "@/components/ui/use-toast";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FileListContext } from "../_contexts/FileListContext";


const Sidebar = () => {
  const { user }: any = useKindeBrowserClient();
  const { toast } = useToast();
  const convex = useConvex();
  const { fileList, setFileList } = useContext(FileListContext)!;
 
  const [activeTeam, setActiveTeam] = useState<Teams>({
    createdBy: "",
    teamName: "",
    _id: "",
  });

  const [numberOfFiles, setNumberOfFiles] = useState<number>(0);
  const createNewFile = async (fileName: string) => {
    try {
      const result = await convex.mutation(api.file.createFile, {
        fileName: fileName,
        createdBy: user?.email,
        teamId: activeTeam?._id,
        whiteboard: "",
        document: "",
        archived: false,
      });
      console.log("File Created with id : ", result);
      toast({
        title: "File created succesfully!",
      });
      getFilesFromTeamId();
    } catch (error) {
      console.log("Error in Sidebar.tsx while creating new file : ", error);
      toast({
        title: "Oops!! Something went wrong",
      });
    }
  };

  useEffect(() => {
    activeTeam && getFilesFromTeamId();
  }, [activeTeam]);

  const getFilesFromTeamId = async () => {
    const result = await convex.query(api.file.getFile, {
      teamId: activeTeam?._id,
    });
    setNumberOfFiles(result?.length);
    setFileList(result);
  };
  return (
    <>
     
        <div className="bg-black overflow-y-scroll md:overflow-auto  bg-opacity-40  h-screen text-white p-4 flex flex-col">
          <div className="flex-1">
            <SidebarTopSection
              user={user}
              activeTeam={activeTeam}
              setActiveTeam={setActiveTeam}
            />
          </div>
          <div>
            <SidebarBottomSection
              createNewFile={createNewFile}
              numberOfFiles={numberOfFiles}
            />
          </div>
        </div>
      
    </>
  );
};

export default Sidebar;
