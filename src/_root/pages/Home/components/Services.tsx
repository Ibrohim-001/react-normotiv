import React from "react";

function Services() {
  const [btnActive, setbtnactive] = React.useState("block");
  const ScrollUp = () => {
    if (window.scrollY > 500) {
      setbtnactive("block");
    } else {
      setbtnactive("none");
    }
  };
window.addEventListener('scroll',()=>ScrollUp())

//   React.useEffect(()=>{
//     ScrollUp()
//     console.log(btnActive)
//   },[window.scroll])
  return (
    <>
      <div className="flex gap-[88px] justify-center mb-[140px] mt-[140px]">
        <div className="flex flex-col gap-6 items-center">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40.5" cy="40" r="29" fill="black" />
            <g clip-path="url(#clip0_7268_331)">
              <path
                d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 31.8184H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3182 35.4546H28.9848"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 39.0908H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7268_331">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(20.5 20)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-xl">FREE AND FAST DELIVERY</p>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40.5" cy="40" r="29" fill="black" />
            <g clip-path="url(#clip0_7268_331)">
              <path
                d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 31.8184H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3182 35.4546H28.9848"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 39.0908H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7268_331">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(20.5 20)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-xl">FREE AND FAST DELIVERY</p>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-6 items-center">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M80.5 40C80.5 62.0914 62.5914 80 40.5 80C18.4086 80 0.5 62.0914 0.5 40C0.5 17.9086 18.4086 0 40.5 0C62.5914 0 80.5 17.9086 80.5 40ZM11.4071 40C11.4071 56.0675 24.4325 69.0929 40.5 69.0929C56.5675 69.0929 69.5929 56.0675 69.5929 40C69.5929 23.9325 56.5675 10.9071 40.5 10.9071C24.4325 10.9071 11.4071 23.9325 11.4071 40Z"
              fill="#2F2E30"
            />
            <circle cx="40.5" cy="40" r="29" fill="black" />
            <g clip-path="url(#clip0_7268_331)">
              <path
                d="M32.1667 51.6667C34.0076 51.6667 35.5 50.1743 35.5 48.3333C35.5 46.4924 34.0076 45 32.1667 45C30.3257 45 28.8333 46.4924 28.8333 48.3333C28.8333 50.1743 30.3257 51.6667 32.1667 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.8333 51.6667C50.6743 51.6667 52.1667 50.1743 52.1667 48.3333C52.1667 46.4924 50.6743 45 48.8333 45C46.9924 45 45.5 46.4924 45.5 48.3333C45.5 50.1743 46.9924 51.6667 48.8333 51.6667Z"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.8333 48.3335H27.5C26.3954 48.3335 25.5 47.4381 25.5 46.3335V41.6668M23.8333 28.3335H40.1666C41.2712 28.3335 42.1666 29.2289 42.1666 30.3335V48.3335M35.5 48.3335H45.5M52.1667 48.3335H53.5C54.6046 48.3335 55.5 47.4381 55.5 46.3335V38.3335M55.5 38.3335H42.1666M55.5 38.3335L51.0826 30.9712C50.7211 30.3688 50.0701 30.0002 49.3676 30.0002H42.1666"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.5 48H27.1667C26.0621 48 25.1667 47.1046 25.1667 46V41.3333M23.5 28H39.8333C40.9379 28 41.8333 28.8954 41.8333 30V48M35.5 48H45.1667M52.5 48H53.1667C54.2712 48 55.1667 47.1046 55.1667 46V38M55.1667 38H41.8333M55.1667 38L50.7493 30.6377C50.3878 30.0353 49.7368 29.6667 49.0343 29.6667H41.8333"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 31.8184H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3182 35.4546H28.9848"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 39.0908H32.1667"
                stroke="#FAFAFA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_7268_331">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="translate(20.5 20)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-xl">FREE AND FAST DELIVERY</p>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>
        </div>
      </div>
      <button
      style={{
        display:btnActive
      }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed transition right-5 bottom-5 p-4 rounded-full bg-[#F5F5F5]"
      >
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 17V1M1 8L8 1L15 8"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
}

export default Services;
