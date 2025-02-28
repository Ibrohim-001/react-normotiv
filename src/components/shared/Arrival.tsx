import { Link } from "react-router"

type NewArrival={
  w:number
  h:number
  title:string
  desc:string
  img:string
  left:boolean
}

function Arrival ({w,h,img,title,desc,left}:NewArrival){
  return(
  <>
  <div style={{
    width:w,
    height:h
  }} className="bg-[#0D0D0D] relative flex ">
    <img src={img} className="mx-auto mt-auto" alt="" />
    <div className="flex flex-col gap-4 text-white absolute bottom-6 left-6">
  <p className="font-semibold text-[24px]">{title}</p>
  <p className="text-[14px] max-w-[242px] text-[#FAFAFA]">{desc}</p>
  <Link to={'/'} className="pb-1 border-b border-b-[gray-300] max-w-[80px]">Shop Now</Link>
    </div>
  </div>
  </>
  )
}

export default Arrival