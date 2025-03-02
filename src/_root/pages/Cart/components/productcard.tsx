import React from "react";

type ProductCards = {
  havediscount: boolean;
  discount: string;
  image: string;
  title: string;
  price: string;
  price2: string;
};

function ProductCard({
  havediscount,
  discount,
  image,
  title,
  price,
  price2,
}: ProductCards) {
  const [addtocart, setaddtocart] = React.useState(false);
  const [isdeleted, setisdeleted] = React.useState("");

  return (
    <>
      <div
        className={`flex flex-col gap-4 w-[270px]`}
        style={{
          display: isdeleted,
        }}
      >
        <div
          className="bg-[#F5F5F5] relative max-w-[270px] h-[250px]"
          onMouseEnter={() => setaddtocart(true)}
          onMouseLeave={() => setaddtocart(false)}
        >
          {havediscount && (
            <button className="bg-[#DB4444] text-xs absolute top-4 left-6 text-white px-3 py-1 rounded-sm hover:bg-[#DB4579]">
              {discount}
            </button>
          )}
          <button
            className={`absolute bottom-0 bg-black text-white w-full font-medium py-2`}
            style={
              addtocart === true ? { display: "block" } : { display: "none" }
            }
          >
            Add To Cart
          </button>
          <img src={image} className="m-[50px]" alt="" />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <svg
              onClick={() => setisdeleted("none")}
              className="bg-white rounded-full w-[34px] h-[34px] p-2 cursor-pointer"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143"
                stroke="black"
                stroke-width="1.56"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-medium">{title}</p>
          <div className="flex gap-3">
            <p className="text-[#DB4444] font-medium">{price}</p>
            <p className="text-gray-400 font-medium line-through">{price2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
