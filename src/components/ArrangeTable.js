import React, { useMemo } from "react";
import Table from "./Table";
import Data from "../DataHook/Data";
import { tableImage } from "../resources/table.svg";

const ArrangeTable = ({ query, runtime, isOpen, data }) => {
  //console.log(allData)

  console.log(data);
  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key]
          .replace(/([A-Z]+)/g, " $1")
          .replace(/([A-Z][a-z])/g, " $1");

        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);
  //console.log(data)
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="px-5">
            <Table
              columns={columns}
              runtime={runtime}
              data={queryData}
              allData={data}
            />
          </div>
        </>
      ) : (
        <>
          {/* <div className="h-full flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-52 sm:h-24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9CA3AF"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <div className="text-gray-400 text-2xl sm:text-lg">Select a Database or Run Query</div>
          </div> */}

          <div className="px-5 w-full flex flex-col justify-center items-center h-full container sm:mb-20">
            <div className="border border-blue-100 shadow rounded-md p-4 w-1/2 h-auto ">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-200 rounded"></div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-400 text-2xl sm:text-lg mt-5">Select a Database or Run Query</div>

          </div>
        </>
      )}
    </>
  );
};

export default ArrangeTable;
