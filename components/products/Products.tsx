interface ProductProps {
  nameTitle: string;
  products: ProductType[];
}
const Products: React.FC<ProductProps> = ({ nameTitle, products }) => {
  return (
    <>
      <h2 className=" text-[#fdff00] text-[28px] font-bold h-full w-full text-center my-[14px] ">
        {nameTitle}
      </h2>
      <div className="grid grid-cols-4 gap-x-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-[3px] border-[#ff5a05eb] rounded-[4px]"
          >
            {/* Ảnh */}
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-auto p-[1px]"
            />
            {/* Chữ */}
            <div className="py-1">
              <div className="uppercase text-[#fdff00] font-bold text-[14.4px] text-center py-1">
                {product.name}
              </div>
              <div className="text-[#ffc800] font-bold text-[14px] text-center">
                Số Tài Khoản: {product.numberAccount}
              </div>
              <div className="text-[#ffc800] font-bold text-[14px] text-center">
                Đã bán: {product.sold}
              </div>
              <div className="flex justify-center items-center my-2 px-2 py-1 mx-2">
                <button
                  className="text-[#fff] px-12 py-2 rounded text-[14px] font-bold
                  transition-all duration-300 
                  bg-[#ef4444] shadow-[0px_10px_50px_0px_#ff000063]
                  hover:bg-gradient-to-r from-[#d9e021] via-[#f87611] to-[#d9e021] 
                  hover:shadow-[0px_10px_50px_0px_#f87611]"
                >
                  XEM TẤT CẢ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
