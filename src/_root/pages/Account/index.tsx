import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Link, useLocation } from "react-router";

function Accaunt() {
  const [username, setUserName] = React.useState("Md Rimel");
  return (
    <>
      <main className="max-w-[1170px] mx-auto">
        <div className="flex justify-between items-center">
          <Breadcrumb className="my-[80px]">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <p>/</p>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black" href="/accaunt">
                  My Account
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <p>
            Welcome! <span className="text-[#DB4444]">{username}</span>
          </p>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li className="font-medium">Manage My Account</li>
            <li className="flex flex-col gap-2 ml-[35px]">
              <Link
                className={
                  useLocation().pathname == "/accaunt"
                    ? "text-[#DB4444]"
                    : "text-gray-500"
                }
                to={"/accaunt"}
              >
                My Profile
              </Link>
              <Link
                className={
                  useLocation().pathname == "/address-book"
                    ? "text-[#DB4444]"
                    : "text-gray-500"
                }
                to={"/address-book"}
              >
                Address Book
              </Link>
              <Link
                className={
                  useLocation().pathname == "/payment-options"
                    ? "text-[#DB4444]"
                    : "text-gray-500"
                }
                to={"/address-book"}
              >
                My Payment Options
              </Link>
            </li>
            <li className="font-medium">My Orders</li>
            <li className="flex flex-col gap-2 ml-[35px]">
              <Link
                className={
                  useLocation().pathname == "/my-returns"
                    ? "text-[#DB4444]"
                    : "text-gray-500"
                }
                to={"/my-returns"}
              >
                My Returns
              </Link>
              <Link
                className={
                  useLocation().pathname == "/my-cancellations"
                    ? "text-[#DB4444]"
                    : "text-gray-500"
                }
                to={"/my-returns"}
              >
                My Cancellations
              </Link>
            </li>
            <li className="font-medium">My WishList</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Accaunt;
