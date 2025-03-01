
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    created_at: Date;  // Hoặc Date nếu muốn dùng kiểu Date
    updated_at: Date;  // Hoặc Date nếu muốn dùng kiểu Date
}

    const Loading = () => {
        return (
          <div className="flex flex-col items-center justify-center h-100 w-100">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-lg text-gray-600">Đang tải dữ liệu...</p>
          </div>
        );
      }
      
    async function wait(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      
    const SetTimeOutNe = async() => {
        await wait(3000);
        return <h1>Nội dung đã tải xong</h1> 
    }
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <SetTimeOutNe />
            </Suspense>
            <h1>Đây là trang home</h1>
            <ul>
                <li><Link href={"/user/1"}>User1</Link></li>
                <li><Link href={"/user/2"}>User2</Link></li>
                <li><Link href={"/user/3"}>User3</Link></li>
                <li><Link href={"/user/4"}>User4</Link></li>
                <li><Link href={"/user/5"}>User5</Link></li>
            </ul>
            </div>
    )
}
export default Page;
