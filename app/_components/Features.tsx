import { Database, File, FileArchive, Group, Pen, Store, Timer } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className=" bg-black text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What do we offer ? 
            </h2>

       
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
             <Group className="text-purple-500" size={30}/>

              <h2 className="mt-4 text-xl font-bold text-white">
                Teams
              </h2>

              <p className="mt-1 text-sm text-gray-300">
              Create multiple teams for different projects
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
             <File className="text-purple-500" size={30}/>

              <h2 className="mt-4 text-xl font-bold text-white">
                Files
              </h2>

              <p className="mt-1 text-sm text-gray-300">
              Multiple files can be created in each team
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
             <FileArchive className="text-purple-500" size={30} />

              <h2 className="mt-4 text-xl font-bold text-white">
                Documentation
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Document everything with your custom documentation friend
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
        <Pen className="text-purple-500" size={30} />

              <h2 className="mt-4 text-xl font-bold text-white">
               Canvas
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Draw your imagination, desires, shapes and figures however you want!!
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
        <Database className="text-purple-500" size={30}/>

              <h2 className="mt-4 text-xl font-bold text-white">
                Database Storage
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Store and fetch all your saved files at once
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-purple-500/10"
              href="#"
            >
          <Timer className="text-purple-500" size={30} />

              <h2 className="mt-4 text-xl font-bold text-white">
               Management
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Manage your teams and files on dashboard
              </p>
            </a>
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Support 
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Features;
