import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Label } from "@radix-ui/react-select";
import { useScroll } from "framer-motion";
import { p } from "node_modules/react-router/dist/development/fog-of-war-D6dP9JIt.d.mts";
import React, { useState } from "react";
import { Link, useLocation } from "react-router";

function Accaunt() {
  const [username, setUserName] = React.useState("Md Rimel");
  const [formData, setFormData] = React.useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");
  const [savedData, setSavedData] = useState({});
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSave() {
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmNewPassword
    ) {
      setError("New password do not match");
      return;
    }
    setError("");
    setSavedData({ ...formData });
    alert("Changes saved succesfully");
  }
  function handleCancel() {
    setFormData({ ...savedData });
    setError("");
  }

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
        <div className="flex items-start justify-between">
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
          <div className="w-[870px] shadow-[0px_1px_13px_0px_#0000000D] mb-[140px]">
            <div className="px-[80px] py-10">
              <p className="font-medium text-xl text-[#DB4444]">
                Edit Your Profile
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-2">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder={formData.firstName}
                    className="py-[13px] pl-4 w-[330px] bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder={formData.lastName}
                    className="py-[13px] pl-4 w-[330px] bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={formData.email}
                    className="py-[13px] pl-4 w-[330px] bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={formData.address}
                    className="py-[13px] pl-4 w-[330px] bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="mb-2">
                  Password Changes
                </label>
                <div className="flex flex-col gap-4">
                  <input
                    // value={formData.currentPassword}
                    type="text"
                    placeholder="Current Passwod"
                    className="py-[13px] pl-4 w-full bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />{" "}
                  <input
                    type="text"
                    placeholder="New Passwod"
                    className="py-[13px] pl-4 w-full bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />{" "}
                  <input
                    type="text"
                    placeholder="Confirm New Passwod"
                    className="py-[13px] pl-4 w-full bg-[#F5F5F5] rounded"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 justify-end mt-6">
                {error && <p>{error}</p>}
                <button onClick={handleCancel}>Cancel</button>
                <button
                  onClick={handleSave}
                  className="py-4 w-[214px] px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Accaunt;
