import { TextEffect } from "@/components/ui/text-effect";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <main className="mt-[60px] mb-[140px]">
        <div className="flex items-center gap-[130px]">
          <img src="../../../public/login.png" alt="" />
          <div>
            <TextEffect
              preset="fade-in-blur"
              className="font-medium text-[36px] mb-6"
              speedReveal={1.1}
              speedSegment={0.3}
            >
              Log in to Exclusive
            </TextEffect>

            <p className="mb-12">Enter your details below</p>
            <form className="flex  flex-col gap-10">
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="pb-2 w-[370px] bg border-b border-b-gray-300"
              />
              <input
                type="text"
                placeholder="Password"
                className="w-[370px] pb-2 bg border-b border-b-gray-300"
              />
            </form>
            <div className="flex justify-between gap-4 mt-10">
              <button className="py-4 bg-[#DB4444] px-12 rounded text-white font-medium">
              Log In
              </button>
             
              <button className="text-[#DB4444] font-medium">
              Forget Password?
              </button>
            </div>
          
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
