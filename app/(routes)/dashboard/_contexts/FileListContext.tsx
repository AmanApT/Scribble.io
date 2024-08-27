import { createContext } from "react";

export interface File {
  _id: string;
  fileName:string;
  archived: boolean;
  createdBy: string;
  document: string;
  whiteboard: string;
  teamId: string;

  _creationTime: number;
}

interface FileList {
  fileList: File[];
  setFileList: React.Dispatch<React.SetStateAction<File[]>>;
}

export const FileListContext = createContext<FileList | undefined>(undefined);
