"use client";
import { useState } from "react";
import Payment from "./Payment";
import TopPayment from "./TopPayment";

const PaymentForm = () => {
  const [acticeTab, setActiceTab] = useState("tab1");
  const [formData, setFormData] = useState({
    dropdown1: "",
    dropdown2: "",
    text1: "",
    text2: "",
  });

  return (
    <div className=" h-full w-full bg-[#27272a] text-center">
      {/* nạp thẻ */}
      <div className="flex">
        {/* phần click vào nạp thẻ */}
        <div
          className={`${
            acticeTab === "tab1" ? "bg-none" : "bg-black"
          } flex-[1]  py-1 px-2`}
        >
          <p
            className="bg-gradient-to-b from-[#ff6a00] to-[#fdff00] bg-clip-text text-transparent text-2xl font-bold cursor-pointer"
            onClick={() => {
              setActiceTab("tab1");
            }}
          >
            NẠP THẺ
          </p>
        </div>
        {/* phần click vào nạp thẻ */}
        {/* top mua tháng 3 */}
        {/* phần click vào nạp thẻ */}
        <div
          className={`${
            acticeTab === "tab2" ? "bg-none" : "bg-black"
          } flex-[2] py-1 px-2`}
        >
          <p
            className="bg-gradient-to-b from-[#ff6a00] to-[#fdff00] bg-clip-text text-transparent text-2xl font-bold cursor-pointer"
            onClick={() => {
              setActiceTab("tab2");
            }}
          >
            TOP MUA THÁNG 03
          </p>
        </div>
        {/* phần click vào nạp thẻ */}
      </div>

      {/* phần form */}
      <div className={`${acticeTab === "tab1" ? "flex-[1]" : "hidden"}`}>
        <Payment />
      </div>
      <div className={`${acticeTab === "tab2" ? "flex-[1]" : "hidden"}`}>
        <TopPayment />
      </div>
      {/* phần form */}
    </div>
  );
};
export default PaymentForm;
