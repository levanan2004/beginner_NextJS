import Link from "next/link";
import ButtonForm from "./ButtonForm";
import "boxicons/css/boxicons.min.css";
const Header = () => {
  return (
    <header className="p-[8px] w-screen h-[85px] bg-black flex text-[16px]">
      <div>
        <img
          src={"/assets/logo.png"}
          alt="Shop LMHT"
          width={200}
          height={50}
          className="v-logo"
        />
      </div>
      <ul className="flex space-x-4 text-[#ffc800] text-[15px] font-bold ml-auto items-center">
        <li>
          <Link href={"/"}>TRANG CHỦ</Link>
        </li>
        <li>
          <Link href={"/tutorials_buy"}>HƯỚNG DẪN MUA ACC</Link>
        </li>
        <li>
          <Link href={"/tutorials_security"}>HƯỚNG DẪN BẢO MẬT</Link>
        </li>
        <li>
          <Link href={"/reputation"}>UY TÍN CỦA SHOP</Link>
        </li>
        <li className="relative group">
          DỊCH VỤ
          <ul className="absolute left-0 mt-2 w-48 bg-white text-black border  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <li>
              <Link
                href="/service_page"
                className="block px-4 py-2 hover:bg-[#e74c3c] font-normal"
              >
                &gt; NẠP GAME GIÁ RẺ
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <ButtonForm href="/login" icon="bx bxs-user" text="Đăng Nhập" />
        </li>
        <li>
          <ButtonForm href="/register" icon="bx bxs-user-plus" text="Đăng Ký" />
        </li>
      </ul>
    </header>
  );
};
export default Header;
