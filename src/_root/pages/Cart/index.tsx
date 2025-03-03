import BuyButton from "@/components/shared/Button";
import ProductCard from "./components/productcard";
import WishlistProduct from "./components/prcard";

function Cart() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto mt-20">
        <div className="flex items-center justify-between mb-[60px]">
          <p className="text-xl">Wishlist (4)</p>
          <BuyButton>Move All To Bag</BuyButton>
        </div>
        <div className="flex gap-[30px] mb-[80px]">
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
        <div>
          <div className="flex justify-between items-center mb-[60px]">
            <div className="flex gap-4 items-center ">
              <div className="block w-5 h-10 bg-[#DB4444] rounded-sm"></div>
              <p className="text-xl">Just For You</p>
            </div>
            <BuyButton>See All</BuyButton>
          </div>
          <div className="flex justify-between mb-[140px]">
            <WishlistProduct
              isNew={false}
              havediscount={true}
              discount={"-35%"}
              image={"../../../public/ProductCards/asus.png"}
              title={"ASUS FHD Gaming Laptop"}
              price={"$960"}
              price2={"$1160"}
              comments={"(65)"}
            />
            <WishlistProduct
              isNew={false}
              havediscount={false}
              discount={"-35%"}
              image={"../../../public/ProductCards/monitor.png"}
              title={"IPS LCD Gaming Monitor"}
              price={"$1160"}
              price2={""}
              comments={"(65)"}
            />{" "}
            <WishlistProduct
              isNew={true}
              havediscount={true}
              discount={"-35%"}
              image={"../../../public/ProductCards/qiziljoystik.png"}
              title={"HAVIT HV-G92 Gamepad"}
              price={"$560"}
              price2={""}
              comments={"(65)"}
            />{" "}
            <WishlistProduct
              isNew={false}
              havediscount={false}
              discount={"-35%"}
              image={"../../../public/ProductCards/klava.png"}
              title={"AK-900 Wired Keyboard"}
              price={"$200"}
              price2={""}
              comments={"(65)"}
            /> 
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;
