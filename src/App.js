import { useState } from "react";

import "./App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import ArrangeTable from "./components/ArrangeTable";
import CsvDownload from "react-json-to-csv";
import { exportToJson } from "./helper/exportToJSON.js";
import Data from "./DataHook/Data";
import { AiFillGithub } from 'react-icons/ai'

function App() {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from categories");
  const [isOpen, setIsOpen] = useState(false);
  const [tableName, setTableTitle] = useState("");

  //?Data
  //const [maindata,setmainData] = useState([])
  const { data, runtime, error } = Data(query);

  return (
    <>
      <div className="App">
        {/* Navbar start */}

        <div>
          <Navbar
            setQuery={setQuery}
            setValue={setValue}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setTableTitle={setTableTitle}
          />
        </div>
        {/* Navbar end */}
        {/* Header Start*/}
        <div className="text-lg font-semibold ">
          <div className="absolute h-3 w-3 flex items-center  justify-center ">
            <span class="animate-ping absolute inline-flex  left-9 top-2 h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            <span class="absolute inline-flex rounded-full  left-9 top-2 z-10  h-3 w-3 bg-sky-500"> </span>
              <span className="h-full w-full mt-10 ml-12 z-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 absolute cursor-pointer
           rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
           
            <div></div>
          </div>
          <div className="h-14 border-b-[1px] border-gray-400 text-white bg-purple flex flex-row pl-5 items-center">
            <div className="pl-12 flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div>Sql Editor</div>
            </div>
            <div className="absolute right-5 cursor-pointer"><a href="https://github.com/VickeyMandal"><AiFillGithub size="1.5rem" /></a></div>
          </div>

          {/* Table and form segment */}

          <div className="border-gray-400 text-gray-700 grid grid-cols-6 sm:grid-cols-1">
            {/* Table Segment start*/}
            <div className="col-span-4">
              <div className={` ${ query!="" ? "col-span-4 uppercase h-12 flex items-center border-b-[1px] border-gray-300  justify-center" : "mt-10"}`}>
                {tableName}
              </div>
              <ArrangeTable query={query} runtime={runtime} isOpen={isOpen} data={data} />
            </div>
            {/* Table section end */}
            {/* Editor Section start*/}
            <div className=" border-gray-400 col-span-2 flex flex-col sm:mt-10">
              <div className=" left pl-5 uppercase h-12 sm:border-t-[1px] border-b-[1px] border-l-[1px] border-gray-300 flex items-center justify-center">
                Run Query
              </div>
              <Editor value={value} setQuery={setQuery} setValue={setValue} />

              {/* Download Buttons csv and json start */}
              <div className="h-10 m-3 flex flex-row space-x-4">
                <button
                  className={
                    "w-full h-full bg-purple hover:bg-purple hover:animate-pulse transition-colors text-white rounded-md font text-md font-semimbold drop-shadow-lg"
                  }
                  //onClick={handleclick}
                >
                  <CsvDownload
                    //className="bg-primary-dark hover:bg-secondary-dark transition-colors text-white rounded-md font-semibold px-4 py-2 mr-3 shadow-lg"
                    data={data}
                    filename={`${query}.csv`}
                  >
                    <div className="flex flex-row justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      CSV
                    </div>
                  </CsvDownload>
                </button>

                <button
                  className={
                    "w-full h-full bg-purple hover:bg-purple hover:animate-pulse transition-colors text-white rounded-md font text-md font-semimbold drop-shadow-lg"
                  }
                  onClick={() => exportToJson(data, query)}
                >
                  <div className="flex flex-row justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    JSON
                  </div>
                </button>
              </div>
              {/* Download Buttons csv and json end */}
            </div>
            {/* Editor section end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
