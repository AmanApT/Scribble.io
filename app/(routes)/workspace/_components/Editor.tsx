"use client";
import React, { useEffect, useRef, useState } from "react";
import EditorJS, { BlockToolConstructable } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// @ts-ignore
import Checklist from "@editorjs/checklist";

import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import InlineCode from "@editorjs/inline-code";
import { updateFile } from "@/convex/file";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const Editor = ({ onSaveTrigger, fileId,fileData }: {onSaveTrigger:any, fileId:string| any,fileData:File | any}) => {
  const rawData = {
    time: 1550476186479,
    blocks: [
      {
        data: {
          text: "Document Name",
          level: 5,
        },
        id: "123",
        type: "header",
      },
      {
        data: {
          level: 0,
        },
        id: "1234",
        type: "header",
      },
    ],
    version: "2.8.1",
  };

  console.log(fileId,"fileId")

  const updateDocument = useMutation(api.file.updateFile);
  const ref = useRef<EditorJS>();
  useEffect(() => {
     fileData && initEditor();
     
  }, [fileData]);

  useEffect(() => {
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);


  const initEditor = () => {
    const editor = new EditorJS({
      tools: {
        quote: {
          class: Quote as unknown as BlockToolConstructable,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        table: {
          class: Table as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: "CMD+SHIFT+M",
        },
        header: {
          class: Header as unknown as BlockToolConstructable,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        list: {
          class: List as unknown as BlockToolConstructable,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
      },
      holder: "editorjs",
   
      data: fileData.document?  JSON.parse(fileData.document) : rawData
    });
    ref.current = editor;
  };

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          })
            .then((result) => {
              toast({
                title: "File Saved Succesfully!",
              });
            })
            .catch((error) => {
              console.log("Error while saving in DB : ", error);

              toast({
                title: "OOPS! Server Error occured!",
                variant: "destructive",
              });
            });
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };

  return (
    <div className="p-2">
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
