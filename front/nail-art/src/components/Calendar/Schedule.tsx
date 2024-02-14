//set opacity to 100% always!!!


interface ScheduleProps {
  hours: number[]; // This indicates that the hours prop should be an array of numbers
}


//FC= functional component
const Schedule: React.FC<ScheduleProps>  = ( {hours} ) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="overflow-y-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="rounded-lg dark:border-gray-700">
            <table className="min-w-full">
              <thead className="sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="justify-start border-b-2 bg-white px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Available Time Table
                  </th>
                  <th
                    scope="col"
                    className="border-b-2 bg-white justify-end px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {hours.map((hr) => (
                  <tr key={hr.toString()}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                      {hr}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="justify-end inline-flex items-center gap-x-2 text-sm font-semibold  text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Resereve
                      </button>
                    </td>
                  </tr> 
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
