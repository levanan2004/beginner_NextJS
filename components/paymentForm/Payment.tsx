const Payment = () => {
  return (
    <form onSubmit={() => {}} className=" text-[14px] pt-3 px-5">
      <div className="w-full space-y-[6px]">
        <select
          name="dropDown1"
          value={""}
          onChange={() => {}}
          className="w-full border-[2px] border-[#52525b] bg-[#18181b] rounded-md text-white py-2 px-3 focus:border-yellow-500"
        >
          <option value={""}>Chọn Nhà Mạng</option>
          <option value={""}>Viettle</option>
          <option value={""}>Vina</option>
          <option value={""}>Mobi</option>
          <option value={""}>GATE</option>
          <option value={""}>Zing</option>
          <option value={""}>VietnameMobi</option>
          <option value={""}>Garena</option>
          <option value={""}>Vcoin</option>
        </select>
        {/* Dropdown 2 */}
        <select
          name="dropDown2"
          value={""}
          onChange={() => {}}
          className="w-full border-[2px] border-[#52525b] bg-[#18181b] rounded-md text-white py-2 px-3 focus:border-yellow-500"
        >
          <option value={""}>Chọn Mệnh Giá</option>
          <option value={""}>10.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>20.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>30.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>50.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>100.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>200.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>300.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>500.000 VNĐ - (Nhận 80%)</option>
          <option value={""}>1.000.000 VNĐ - (Nhận 80%)</option>
        </select>
        <input
          type="text"
          placeholder="Mã Số Thẻ"
          className="w-full border-[2px] border-[#52525b] bg-[#18181b] rounded-md text-white py-2 px-3 focus:border-yellow-500"
        />
        <input
          type="text"
          placeholder="Số Serial"
          className="w-full border-[2px] border-[#52525b] bg-[#18181b] rounded-md text-white py-2 px-3 focus:border-yellow-500"
        />
        <button className="w-full bg-gradient-to-t from-[#ff6a00] to-[#fdff00] text-[24px] font-bold rounded-sm pt-1">
          NẠP THẺ
        </button>
        <div className="text-[14px] text-white font-[600]">
          Nạp Thẻ Cào : 100K Thẻ Cào = 100K Shop.
          <br></br>
          Nạp ATM/MoMo KHUYẾN MÃI 25%: 100K ATM/MoMo = 125K Shop.
        </div>
        <button className="w-full bg-gradient-to-t from-[#ff6a00] to-[#fdff00] text-[24px] font-bold rounded-sm pt-1">
          NẠP MOMO VÀ ATM
        </button>
      </div>
    </form>
  );
};
export default Payment;
