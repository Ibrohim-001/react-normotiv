import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Input from "./components/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-select";
import { useState } from "react";

function Checkout() {
  const [price, setprice] = useState(650);
  const [price2, setprice2] = useState(1100);
  const [total, setTotal] = useState(price + price2);
  const [kupon, setKupon] = useState(0);
  return (
    <>
      <main className="max-w-[1170px] mx-auto">
        <Breadcrumb className="my-[80px]">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <p>/</p>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">My Account</BreadcrumbLink>
            </BreadcrumbItem>
            <p>/</p>{" "}
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Product</BreadcrumbLink>
            </BreadcrumbItem>
            <p>/</p>{" "}
            <BreadcrumbItem>
              <BreadcrumbLink href="/">View Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <p>/</p>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-black" href="/cart">
                CheckOut
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="font-medium text-[36px] leading-8 mb-12">
          Billing Details
        </p>
        <div className="flex justify-between">
          <div className="mb-[140px]">
            <div className="flex flex-col gap-8">
              <Input>First Name</Input>
              <Input>Company Name</Input>
              <Input>Street Address</Input>
              <Input>Apartment, floor, etc. (optional)</Input>
              <Input>Town/City</Input>
              <Input>Phone Number</Input>
              <Input>Email Address</Input>
            </div>
            <div className="items-top flex mt-6 flex items-center gap-4 ">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="max-w-[425px] flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <img src="../../../public/table/gamepad.png" alt="" />
                <p>LCD Monitor</p>
              </div>
              <p>${price}</p>
            </div>
            <div className="max-w-[425px] flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <img src="../../../public/table/monik.png" alt="" />
                <p>H1 Gamepad</p>
              </div>
              <p>${price2}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between border-b border-b-gray-300 pb-4 max-w-[422px]">
                Subtotal:
                <p>${total}</p>
              </div>
              <div className="flex justify-between border-b border-b-gray-300 pb-4 max-w-[422px]">
                Shipping:
                <p>Free</p>
              </div>
              <div className="flex justify-between max-w-[422px]">
                Total:
                <p>${total - kupon}</p>
              </div>
            </div>
            <RadioGroup defaultValue="option-one" className="max-w-[422px]">
              <div className="flex items-center  justify-between">
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <label htmlFor="option-one">Bank</label>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="../../../public/payments/Bkash.png" alt="" />
                  <img src="../../../public/payments/visa.svg" alt="" />
                  <img src="../../../public/payments/master.svg" alt="" />
                  <img src="../../../public/payments/china.svg" alt="" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <label htmlFor="option-two">Cash on delivery</label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-4">
              <input
                onChange={(e) => {
                  e.target.value === "exclusive" ? setKupon(100) : setKupon(0);
                }}
                type="text"
                className="border-2 border-gray-300 rounded py-4 pl-6 w-[300px]"
                placeholder="Coupon Code"
              />
              <button className="py-4 px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
                Apply Coupon
              </button>
            </div>
            <button className="py-4 w-[190px] px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
              Place Order
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Checkout;
