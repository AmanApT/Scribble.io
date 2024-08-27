"use client";
import React, { useContext, useEffect, useState } from "react";
import { File, FileListContext } from "../_contexts/FileListContext";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import moment from "moment";
import { Archive, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const FileList = ({searchQuery}:{searchQuery:string}) => {
  const { fileList } = useContext(FileListContext)!;
  const [fileListLocal, setFileListLocal] = useState<File[]>([]);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    const filteredFiles = fileList.filter(file =>
      file.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFileListLocal(filteredFiles);
  }, [fileList, searchQuery]);
  console.log("fileList", fileList);
  
  return (
    <div className="text-white p-2 dark overflow-x-scroll">
      <div className=" mt-7">
        <table className="overflow-x-scroll w-10rem md:overflow-hidden md:w-full divide-y-2 divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                File Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Created At
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Edited At
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                Author
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {fileListLocal.length > 0 ? (
              fileListLocal.map((eachFile: File) => (
                <tr
                  onClick={() => {
                    router.push("/workspace/" + eachFile?._id);
                  }}
                  key={eachFile?._id}
                  className="odd:bg-gray-50 dark:odd:bg-gray-800/50 cursor-pointer"
                >
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    {eachFile?.fileName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {moment(eachFile?._creationTime).format("Do MMM, YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    {moment(eachFile?._creationTime).format("Do MMM, YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">
                    <Image
                      className="rounded-full"
                      src={user?.picture}
                      width={25}
                      height={25}
                      alt="user"
                    />
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreHorizontal size={15} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="">
                        <DropdownMenuItem className="gap-3 cursor-pointer">
                          <Archive size={17} /> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))
            ) : (
              <>
                <h2 className="text-white w-full p-2">
                  No Files Created 
                </h2>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
