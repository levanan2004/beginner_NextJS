import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListProduct from "@/components/products/ListProduct";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="overflow-x-hidden shadow-lg bg-[#2d2b2b] bg-[url('/assets/background_Image.jpg')] bg-cover bg-fixed bg-center min-h-screen">
      <Header />
      {/*  */}
      <div className="relative flex justify-center items-center h-[60px] mt-[24px]">
        <div className="absolute inset-0 bg-[#ffe14e] opacity-40"></div>
        <h1 className="relative text-2xl text-[#dc2626] opacity-100 font-bold ">
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
      {/*  */}
      <div className="relative w-full py-[48px] ">
        {/* Background mờ */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        {/* Chữ chạy */}
        <div className="relative  marquee text-white font-semibold text-sm animate-marquee">
          TÀI KHOẢN:{" "}
          <span className="text-yellow-400">ACC 450 KỈ VẬT# 82948</span> ĐÃ ĐƯỢC
          MUA - GIÁ:
          <span style={{ color: "#ff0000" }}>4,000</span>
          <sup className="text-muted">VND</sup> -{" "}
          <span className="text-muted">
            <i>Cách Đây 10 Phút Trước</i>
          </span>
          <i>
            , TÀI KHOẢN:{" "}
            <span className="text-yellow-400">
              ĐẬP TRỨNG LINH THÚ 10K# 84976
            </span>{" "}
            ĐÃ ĐƯỢC MUA - GIÁ:
            <span style={{ color: "#ff0000" }}>10,000</span>
            <sup className="text-muted">VND</sup> -{" "}
            <span className="text-muted">
              <i>Cách Đây 1 Giờ Trước</i>
            </span>
          </i>
        </div>
        {/* LIÊN MINH HUYỀN THOẠI */}
        <ListProduct />
      </div>
      <Footer />
    </div>
  );
}
