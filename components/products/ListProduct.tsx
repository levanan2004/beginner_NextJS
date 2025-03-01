import Products from "./Products";

const ListProduct: React.FC = () => {
  // LIÊN MINH HUYỀN THOẠI
  const products_1: ProductType[] = [
    {
      id: 1,
      imageURL: "/assets/product_1.png",
      name: "LMHT TỰ CHỌN",
      numberAccount: 3397,
      sold: 1371,
    },
    {
      id: 2,
      imageURL: "/assets/product_2.png",
      name: "LMHT NƯỚC NGOÀI",
      numberAccount: 250,
      sold: 14,
    },
    {
      id: 3,
      imageURL: "/assets/product_3.png",
      name: "LMHT NHIỀU TƯỚNG",
      numberAccount: 1209,
      sold: 413,
    },
    {
      id: 4,
      imageURL: "/assets/product_4.png",
      name: "ZIN THÔNG THẠO",
      numberAccount: 56,
      sold: 71,
    },
  ];
  //   RANDOM LIÊN MINH HUYỀN THOẠI
  const products_2: ProductType[] = [
    {
      id: 5,
      imageURL: "/assets/product1_1.png",
      name: "RANDOM LM 20K",
      numberAccount: 494,
      sold: 822,
    },
    {
      id: 6,
      imageURL: "/assets/product1_2.png",
      name: "RANDOM LM 100K",
      numberAccount: 54,
      sold: 500,
    },
    {
      id: 7,
      imageURL: "/assets/product1_3.png",
      name: "RANDOM LM 150K",
      numberAccount: 191,
      sold: 385,
    },
    {
      id: 8,
      imageURL: "/assets/product1_4.png",
      name: "VÒNG QUAY LINH THÚ HÀNG HIỆU",
      numberAccount: 404,
      sold: 404,
    },
  ];

  //   ĐẤU TRƯỜNG CHÂN LÝ
  const products_3: ProductType[] = [
    {
      id: 9,
      imageURL: "/assets/product2_1.png",
      name: "ĐTCL VIỆT NAM",
      numberAccount: 149,
      sold: 117,
    },
    {
      id: 10,
      imageURL: "/assets/product2_2.png",
      name: "ĐTCL NƯỚC NGOÀI",
      numberAccount: 153,
      sold: 6,
    },
    {
      id: 11,
      imageURL: "/assets/product2_3.png",
      name: "PET TÍM",
      numberAccount: 293,
      sold: 423,
    },
    {
      id: 12,
      imageURL: "/assets/product2_4.png",
      name: "SÀN TÍM",
      numberAccount: 0,
      sold: 48,
    },
  ];

  //  RANDOM ĐẤU TRƯỜNG CHÂN LÝ
  const products_4: ProductType[] = [
    {
      id: 13,
      imageURL: "/assets/product3_1.png",
      name: "ACC 400 KỈ VẬT",
      numberAccount: 1853,
      sold: 147,
    },
    {
      id: 14,
      imageURL: "/assets/product3_2.png",
      name: "ACC 450 KỈ VẬT",
      numberAccount: 1978,
      sold: 25,
    },
    {
      id: 15,
      imageURL: "/assets/product3_3.png",
      name: "ACC 500 KỈ VẬT",
      numberAccount: 532,
      sold: 1468,
    },
    {
      id: 16,
      imageURL: "/assets/product3_4.png",
      name: "ĐẬP TRỨNG LINH THÚ 10K",
      numberAccount: 10623,
      sold: 57,
    },
  ];

  const products_5: ProductType[] = [
    {
      id: 17,
      imageURL: "/assets/product4_1.png",
      name: "THỬ VẬN MAY RANDOM TFT 25K",
      numberAccount: 168,
      sold: 79,
    },
    {
      id: 18,
      imageURL: "/assets/product4_2.png",
      name: "TÚI MÙ ĐẤU TRƯỜNG CHÂN LÝ 40K",
      numberAccount: 2390,
      sold: 15,
    },
    {
      id: 19,
      imageURL: "/assets/product4_3.png",
      name: "RANDOM TFT 50K - CÓ TRÊN 3000 PHA LÊ TRỞ LÊN",
      numberAccount: 279,
      sold: 43,
    },
    {
      id: 20,
      imageURL: "/assets/product4_4.png",
      name: "RANDOM TFT 100K - SỞ HỮU RANDOM PET TÍM 100%",
      numberAccount: 0,
      sold: 42,
    },
  ];

  const products_6: ProductType[] = [
    {
      id: 21,
      imageURL: "/assets/product5_1.png",
      name: "RANDOM TFT 200K - PET TÍM TÍ NỊ + RANDOM HUY CHƯƠNG",
      numberAccount: 77,
      sold: 26,
    },
    {
      id: 22,
      imageURL: "/assets/product5_2.png",
      name: "RANDOM TFT 400K",
      numberAccount: 0,
      sold: 0,
    },
    {
      id: 23,
      imageURL: "/assets/product5_3.png",
      name: "ACC DƯ 10-25 HUY CHƯƠNG: RANDOM TFT 700K",
      numberAccount: 11,
      sold: 1,
    },
    {
      id: 24,
      imageURL: "/assets/product5_4.png",
      name: "RANDOM TFT 999K - PET TÍM HÀNG HIỆU SIÊU HOT",
      numberAccount: 19,
      sold: 5,
    },
  ];

  return (
    <div className="relative">
      <div className="w-full py-1 my-2">
        <Products nameTitle="LIÊN MINH HUYỀN THOẠI" products={products_1} />
      </div>
      <div className="w-full py-1 my-2">
        <Products
          nameTitle="RANDOM LIÊN MINH HUYỀN THOẠI"
          products={products_2}
        />
      </div>
      <div className="w-full py-1 my-2">
        <Products nameTitle="ĐẤU TRƯỜNG CHÂN LÝ" products={products_3} />
      </div>
      <div className="w-full py-1 my-2">
        <Products nameTitle="RANDOM ĐẤU TRƯỜNG CHÂN LÝ" products={products_4} />

        <Products nameTitle="" products={products_5} />

        <Products nameTitle="" products={products_6} />
      </div>
    </div>
  );
};
export default ListProduct;
