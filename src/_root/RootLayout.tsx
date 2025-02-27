import Navbar from "@/components/shared/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <div className="bg-black">
        <div className="text-white max-w-[1170px] mx-auto flex justify-end items-center">
          <div className="flex gap-2 py-3 items-center">
            <p className="">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link className="underline font-semibold" to={"/"}>
              ShopNow
            </Link>
          </div>
          <Select>
            <SelectTrigger className="w-[90px] ml-[230px]">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">English</SelectItem>
                <SelectItem value="banana">Russian</SelectItem>
                <SelectItem value="blueberry">Uzbek</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="pb-4 border-b border-b-gray-300">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
