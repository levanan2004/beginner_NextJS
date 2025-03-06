const TopPayment = () => {
  const dataPaymentTop = [
    {
      name: "Phan Đình Phùng",
      large: "100000",
    },
    {
      name: "Lê Chính Thành",
      large: "350000",
    },
    {
      name: "Nguyễn Xuân Son",
      large: "100,000,000",
    },
    {
      name: "Trần Đình Trung",
      large: "500000",
    },
    {
      name: "Phạm Ngũ Sơn",
      large: "10000",
    },
    {
      name: "Phạm Ngũ Sơn",
      large: "10000",
    },
  ];
  return (
    <div className="mt-2 py-2 px-3">
      {dataPaymentTop.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-1 px-2"
        >
          {/* Hạng & Tên */}
          <div className="flex items-center ">
            <div className="relative inline-block w-8 h-8">
              <i className="bx bxs-star text-3xl text-red-500"></i>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-[#fdff00]">
                {index + 1}
              </span>
            </div>

            <span className="text-[#fdff00] text-[14px] font-[700] pl-2">
              {item.name}
            </span>
          </div>
          {/* Giá tiền đã nạp */}
          <div className="bg-[#dc2626] text-[#fdff00] font-[700] text-lg text-[18px] px-3 py-1 rounded-sm w-[180px] text-center">
            {item.large} VNĐ
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopPayment;
