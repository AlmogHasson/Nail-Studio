import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Schedule from "./Schedule";

const Calendar = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function generateCalendar(year: number, month: number) {
    const calendarElement = document.getElementById("calendar");

    // Create a date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear the calendar
    if (calendarElement) calendarElement.innerHTML = "";

    // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Create headers for the days of the week
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "text-center font-semibold";
      dayElement.innerText = day;
      calendarElement?.appendChild(dayElement);
    });

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayElement = document.createElement("div");
      calendarElement?.appendChild(emptyDayElement);
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "text-center py-2 border cursor-pointer";
      dayElement.innerText = day.toString();

      // Check if this date is the current date
      const currentDate = new Date();
      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        dayElement.classList.add("bg-gray-900", "text-white");
      }

      calendarElement?.appendChild(dayElement);
    }
  }

  // Initialize the calendar with the current month and year
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  generateCalendar(currentYear, currentMonth);

  const handlePrev = () => {
    setCurrentMonth((currentMonth) =>
      currentMonth === 0 ? 11 : currentMonth - 1
    );
    setCurrentYear((currentYear) =>
      currentMonth === 0 ? currentYear - 1 : currentYear
    );
    generateCalendar(currentYear, currentMonth);
  };

  const handleNext = () => {
    setCurrentMonth((currentMonth) =>
      currentMonth >= 11 ? 0 : currentMonth + 1
    );
    setCurrentYear((currentYear) =>
      currentMonth === 11 ? currentYear + 1 : currentYear
    );
    generateCalendar(currentYear, currentMonth);
  };

  // Function to show the modal with the selected date
  function showModal(selectedDate: string) {
    const modal = document.getElementById("myModal");
    const modalDateElement = document.getElementById("modalDate");
    if (modalDateElement) {
      modalDateElement.innerText = selectedDate;
    }
    //insert inner schedule here;
    modal?.classList.remove("hidden");
  }

  // Function to hide the modal
  function hideModal() {
    const modal = document.getElementById("myModal");
    modal?.classList.add("hidden");
  }

  useEffect(() => {
    generateCalendar(currentYear, currentMonth);
    // Event listener for date click events
    const dayElements = document.querySelectorAll(".cursor-pointer");
    dayElements.forEach((dayElement: any) => {
      dayElement.addEventListener("click", () => {
        const day = parseInt(dayElement.innerText);
        const selectedDate = new Date(currentYear, currentMonth, day);
        const options: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = selectedDate.toLocaleDateString(
          undefined,
          options
        );
        showModal(formattedDate);
      });

      // Event listener for closing the modal
      document.getElementById("closeModal")?.addEventListener("click", () => {
        hideModal();
      });
    });
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="lg:w-6/12 md:w-9/12 sm:w-10/12 mx-auto p-4"
      >
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="flex px-6 py-7 bg-pink-300 justify-between items-center">
            <button onClick={handlePrev} id="prevMonth" className="text-white">
              Previous
            </button>
            <h2 id="currentMonth" className="text-white">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <button onClick={handleNext} id="nextMonth" className="text-white">
              Next
            </button>
          </div>
          <div
            className="grid grid-cols-7 gap-2 p-4 lg:h-[70vh]"
            id="calendar"
          />
          {/*Calendar Days*/}
          <div id="myModal"className="modal hidden fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Selected Date</p>
                  <button
                    id="closeModal"
                    className="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">
                    ✕
                  </button>
                </div>
                <div id="modalDate" className="text-xl font-semibold"></div>
                {Schedule()}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calendar;
