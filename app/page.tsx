import ListProduct from "@/components/products/ListProduct";
import Wrapper from "@/components/Information";
export default function Home() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
