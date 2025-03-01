import Link from "next/link"
import ButtonForm from "./ButtonForm";
import 'boxicons/css/boxicons.min.css';
const Header = () => {
    return (
        <header className="p-[8px] w-screen h-[85px] bg-black flex">
            <div>
                <img src={'/assets/logo.png'} 
        alt="Shop LMHT"
        width={200}
        height={50}
        className="v-logo"/>
            </div>
            <ul className="flex space-x-4 text-[#ffc800] text-[15px] font-bold ml-auto items-center">
                <li><Link href={"/user/1"}>TRANG CHỦ</Link></li>
                <li><Link href={"/user/1"}>HƯỚNG DẪN MUA ACC</Link></li>
                <li><Link href={"/user/1"}>HƯỚNG DẪN BẢO MẬT</Link></li>
                <li><Link href={"/user/1"}>UY TÍN CỦA SHOP</Link></li>
                <li><Link href={"/user/1"}>DỊCH VỤ</Link></li>
      <li><ButtonForm href="/login" icon="bx bxs-user" text="Đăng Nhập" /></li>
      <li><ButtonForm href="/register" icon="bx bxs-user-plus" text="Đăng Ký" /></li>
            </ul>
        </header>
    )
}
export default Header;