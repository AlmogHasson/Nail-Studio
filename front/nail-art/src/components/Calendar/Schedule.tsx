import { useEffect, useState } from "react";
//
const hours = [10,11,12,13,14,15,16,17,18,19,20]

const Schedule = () => {
  function rows (): JSX.Element[] {
    return(
        hours.map((hr => {
            return(
              <tr key={hr.toString()}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{hr}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className="justify-end inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Delete
                    </button>
                </td>
              </tr>
            )
        })
     )
    )
    }

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="justify-start px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Available Time Table
                  </th>
                  <th
                    scope="col"
                    className="justify-end px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <thead>
                  {rows()}
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
