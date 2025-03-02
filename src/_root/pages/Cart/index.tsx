import BuyButton from "@/components/shared/Button";
import ProductCard from "./components/productcard";

function Cart() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto mt-20">
        <div className="flex items-center justify-between mb-[60px]">
          <p className="text-xl">Wishlist (4)</p>
          <BuyButton>Move All To Bag</BuyButton>
        </div>
        <div className="flex gap-[30px]">
          <ProductCard
            havediscount={true}
            discount="-35%"
            image="../../../public/ProductCards/guccisumka.png"
            title="Gucci duffle bag"
            price="$960"
            price2="$1160"
          />
          <ProductCard
            havediscount={false}
            discount="-35%"
            image="../../../public/ProductCards/deepcool.png"
            title="RGB liquid CPU Cooler"
            price="$1960"
            price2=""
          />
          <ProductCard
            havediscount={false}
            discount="-35%"
            image="../../../public/ProductCards/GP11.png"
            title="GP11 Shooter USB Gamepad"
            price="$550"
            price2=""
          />{" "}
          <ProductCard
            havediscount={false}
            discount="-35%"
            image="../../../public/ProductCards/jaket.png"
            title="Quilted Satin Jacket"
            price="$750"
            price2=""
          />
        </div>
      </main>
    </>
  );
}

export default Cart;
