import BuyButton from "@/components/shared/Button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

function Wishlist() {
  const [price, setprice] = useState(1);
  const [price2, setprice2] = useState(1);
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
              <BreadcrumbLink className="text-black" href="/cart">
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Table>
          <TableHeader>
            <TableRow className="py-6 px-10 ">
              <TableHead className="w-[347px] py-6 pl-10 text-black">
                Product
              </TableHead>
              <TableHead className="w-[347px] text-black">Price</TableHead>
              <TableHead className="text-black">Quantity</TableHead>
              <TableHead className="text-right pr-10 text-black">
                Subtotal
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium pl-10 py-6 w-[347px]">
                <div className="flex items-center gap-5">
                  <img src="../../../public/table/monik.png" alt="" />
                  LCD Monitor
                </div>
              </TableCell>
              <TableCell className="w-[347px] text-left pl-3">$650</TableCell>
              <TableCell>
                <input
                  className="max-w-[60px] border-2 border-gray-300 rounded py-2 px-3"
                  type="number"
                  onChange={(e) => setprice(e.target.valueAsNumber)}
                />
              </TableCell>
              <TableCell className="text-right pr-10">
                ${price !== 0 ? 650 * price : 0}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium pl-10 py-6">
                <div className="flex items-center gap-5">
                  <img src="../../../public/table/gamepad.png" alt="" />
                  LCD Monitor
                </div>
              </TableCell>
              <TableCell className="w-[347px] text-left pl-3">$550</TableCell>
              <TableCell>
                <input
                  className="max-w-[60px] border-2 border-gray-300 rounded py-2 px-3"
                  type="number"
                  onChange={(e) => setprice2(e.target.valueAsNumber)}
                />
              </TableCell>
              <TableCell className="text-right pr-10">
                ${price2 !== 0 ? 550 * price2 : 0}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-between mt-6 mb-[80px]">
          <BuyButton>Return To Shop</BuyButton>
          <BuyButton>Update Cart</BuyButton>
        </div>
        <div className="flex items-start justify-between mb-[140px]">
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="border-2 border-gray-300 rounded py-4 pl-6 w-[300px]"
              placeholder="Coupon Code"
            />
            <button className="py-4 px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
              Apply Coupon
            </button>
          </div>
          <div className="w-[470px] py-8 px-6 border-2 border-black rounded">
            <p className="font-medium text-xl mb-6">Cart Total</p>
            <div className="flex flex-col gap-4 ">
              <div className="flex justify-between border-b border-b-gray-300 pb-4">
                Subtotal:
                <p>${price * 650 + price2 * 550}</p>
              </div>
              <div className="flex justify-between border-b border-b-gray-300 pb-4">
                Shipping:
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                Total:
                <p>${price * 650 + price2 * 550}</p>
              </div>
              <button className="mx-auto max-w-[260px] py-4 px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Wishlist;
