import * as React from "react";
import { SlidingNumber } from "@/components/ui/sliding-number";

type Sales = {
  timer: boolean;
  headline: string;
  title: string;
  buttons: boolean;
  right: boolean;
};

function Sales({ timer, headline, title, buttons, right }: Sales) {
  const [days, setDays] = React.useState(new Date().getDay());
  const [hours, setHours] = React.useState(new Date().getHours());
  const [minutes, setMinutes] = React.useState(new Date().getMinutes());
  const [seconds, setSeconds] = React.useState(new Date().getSeconds());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
      setDays(new Date().getDay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="mb-10">
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 items-center">
          <div className="block w-5 h-10 bg-[#DB4444] rounded-sm"></div>
          <p className="font-semibold text-[#DB4444]">{headline}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <div className="flex justify-between gap-[87px] ">
              <h2 className="font-semibold text-4xl mt-5">{title}</h2>
              {timer && (
                <div className="flex items-center gap-4">
                  <div className="felx flex-col">
                    <p>Days</p>
                    <SlidingNumber value={days} padStart={true} />
                  </div>
                  <span className="text-[#E07575] text-2xl">:</span>
                  <div className="felx flex-col">
                    <p>Hours</p>
                    <SlidingNumber value={hours} padStart={true} />
                  </div>
                  <span className="text-[#E07575] text-2xl">:</span>
                  <div className="felx flex-col">
                    <p>Minutes</p>
                    <SlidingNumber value={minutes} padStart={true} />
                  </div>

                  <span className="text-[#E07575] text-2xl">:</span>
                  <div className="felx flex-col">
                    <p>Seconds</p>
                    <SlidingNumber value={seconds} padStart={true} />
                  </div>
                </div>
              )}
            </div>
          </div>
          {buttons && (
            <div className="flex items-center gap-2">
              <button className="p-4 rounded-full bg-[#F5F5F5] transition hover:bg-gray-200">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1L1 8L8 15M1 8H17"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="p-4 rounded-full bg-[#F5F5F5] transition hover:bg-gray-200">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 8H18M18 8L11 1M18 8L11 15"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          {right && (
            <button className="py-4 px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
              View All
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Sales;
