import { ReactNode } from "react";
interface WrapperProps {
  children: ReactNode;
}

const Information = ({ children }: WrapperProps) => {
  return (
    <div className="overflow-x-hidden shadow-lg bg-[#2d2b2b] bg-[url('/assets/background_Image.jpg')] bg-cover bg-fixed bg-center min-h-screen">
      {/*  */}
      <div className="relative flex justify-center items-center h-[60px] mt-[24px]">
        <div className="absolute inset-0 bg-[#ffe14e] opacity-40"></div>
        <h1 className="relative text-2xl text-[#dc2626]  font-bold ">
          Shop LMHT - Mua Bán ACC LOL & Liên Minh Uy Tín Giá Tốt
        </h1>
      </div>
      {/*  */}
      <div className="flex w-full bg-[#27272a] mb-[24px] ">
        <div className="flex-[1]">abc</div>
        <div className="flex-[2]">
          <img
            src="/assets/background_Image_2.jpg"
            alt="ảnh nền 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      {children}
    </div>
  );
};
export default Information;
