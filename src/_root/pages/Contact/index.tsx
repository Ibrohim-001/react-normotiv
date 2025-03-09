import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Input from "./components/Input";

function Contact() {
  return (
    <>
      <main className="max-w-[1170px] mx-auto">
        <Breadcrumb className="my-[80px] max-w-[1170px] mx-auto">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <p>/</p>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-black" href="/cantact">
                Cantact
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-between items-center mb-[140px]">
          <div className="py-10 px-9 shadow-[0px_1px_13px_0px_#0000000D] max-w-[340px]">
            <div className="max-w-[270px]">
              <div className="flex items-center gap-4 mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path
                    d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="font-medium">Call To Us</p>
              </div>
              <p className="text-[14px] mb-4">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-[14px] pb-8 border-b-2 border-b-gray-300 mb-8">
                Phone: +8801611112222
              </p>
            </div>
            <div className="max-w-[270px]">
              <div className="flex items-center gap-4 mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="20" fill="#DB4444" />
                  <path
                    d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="font-medium">Write To US</p>
              </div>
              <p className="text-[14px] mb-4">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-[14px] mb-4">Emails: customer@exclusive.com</p>
              <p className="text-[14px]">Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-end py-10 px-8 shadow-[0px_1px_13px_0px_#0000000D]">
            <div className="flex gap-4">
              <Input />
              <Input />
              <Input />
            </div>
            <textarea
              className="w-[737px] h-[207px] bg-[#F5F5F5] pt-3 pl-4 rounded"
              placeholder="Your Massage"
              id=""
            ></textarea>
            <button className="py-4 w-[215px] px-12 bg-[#DB4444] transition-all hover:bg-[#c54135] text-white rounded">
              Send Massage
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
