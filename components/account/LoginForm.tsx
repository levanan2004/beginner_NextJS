const LoginForm = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mb-5">
      <form className=" bg-white py-4 px-6 rounded-[4px] border-[#939393] border-[1px] w-[384px] shadow-md text-center">
        <div className="text-[#343a40] font-[600] text-[24px] ">
          ĐĂNG NHẬP TÀI KHOẢN
        </div>
        <div className="border-b-[1px] border-[#475569] mt-1 mx-[103px] mb-1"></div>
        <div className="text-start">
          <label className="text-[#343a40] text-[14px] font-[600] mb-1">
            Tên Tài Khoản
          </label>
          <br></br>
          <input
            placeholder="Nhập Tài Khoản"
            className="border-[#94a3b8] border-[1px] py-2 px-3 w-full rounded-md text-[14px]"
          />
        </div>
        <div className="text-start my-2">
          <label className="text-[#343a40] text-[14px] font-[600] mb-1">
            Mật Khẩu
          </label>
          <br></br>
          <input
            placeholder="Nhập Mật Khẩu"
            type="password"
            className="border-[#94a3b8] border-[1px] py-2 px-3 w-full rounded-md text-[14px]"
          />
        </div>
        <button
          type="submit"
          className="py-[6px] px-8 mt-4 text-[20px] bg-[#dc2626] rounded-[4px] text-white w-full"
        >
          Đăng Nhập
        </button>
        <a
          href="/register"
          className="my-2 py-[6px] px-8 text-[20px] bg-white rounded-[4px] text-black w-full border-[#94a3b8] border-[1px] flex items-center justify-center hover:text-[#fb2e00e0]"
        >
          <i
            className="bx bxs-user-plus mt-[3px]"
            style={{ left: "10px", top: "9px" }}
          ></i>
          Tạo Tài Khoản
        </a>
      </form>
    </div>
  );
};
export default LoginForm;
