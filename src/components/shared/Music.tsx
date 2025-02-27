import * as React from "react";
import { SlidingNumber } from "@/components/ui/sliding-number";

function Music() {
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
    <>
      <div className="bg-black flex  justify-between mb-[70px]">
        <div className="flex flex-col gap-8 ml-[56px] my-[69px]">
          <p className="font-semibold text-[#00FF66]">Categories</p>
          <p className="text-[#FAFAFA] font-semibold text-5xl max-w-[433px]">
            Enhance Your Music Experience
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center bg-white rounded-full w-[62px] h-[62px]">
              <SlidingNumber value={days} padStart={true} />
              <p className="text-xs">Days</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-full w-[62px] h-[62px]">
              <SlidingNumber value={hours} padStart={true} />
              <p className="text-xs">Hours</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-full w-[62px] h-[62px]">
              <SlidingNumber value={minutes} padStart={true} />
              <p className="text-xs">Minutes</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-full w-[62px] h-[62px]">
              <SlidingNumber value={seconds} padStart={true} />
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <button className="bg-[#00FF66] text-white rounded hover:bg-[#42f087] max-w-[170px] py-4 px-12">
            Buy Now!
          </button>
        </div>
        <img src="../../../public/Frame 694.png" alt="" className="mr-[44px]" />
      </div>
    </>
  );
}
export default Music;
