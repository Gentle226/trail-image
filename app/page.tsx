import Image from "next/image";
import ImageTrail from "../components/ImageTrail";

const imageUrls = [
  "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/566501638_2611816692499290_5384439878565303426_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=gTiop_VgIqoQ7kNvwF8nnmH&_nc_oc=AdkhzL1vVkJq_xO4pO0inW49Mwplj16eaWtMWWrG_p3-wlVJ-TzpWNGzV83-kOmuv8g33Qb2hMCJ-TYi7TWW8olH&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&oh=03_Q7cD3wGe4ovP4UU3jAaPU9xqUEQcBH9217-TfEwvN_5MPU5flQ&oe=692D2A30",
  "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/575319611_1939266826932192_6120599469933702911_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=uXyNlaP5xGsQ7kNvwHZrINV&_nc_oc=Adk6jVnDKUDeUAYTq26AUxeOUIljh2qJzz7ScHYcBYxnJX-ZdYAl_WFax_9kr6mBMivZ_MRRAXxLJ-zkx9_7tdEn&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&oh=03_Q7cD3wFqUo0a0_ltJPIomOB_AGL0B-YFrsihy-ljc2fo-OyRHA&oe=692D3CD6",
  "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/569792885_1074368694637001_6275022163627317388_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y7Ne2QI9QqgQ7kNvwHW5F4b&_nc_oc=Adma4bSZMtOg38lIosLTeS4iH0qW3rGvGng0e4zMf15qk8DJT5fhS5Pc6sSqxw3aEiVslUvxEssWkYb2d0-E3bLi&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&oh=03_Q7cD3wH3Kf7eZePXrn4Z6bbO-ZMad4i5EzI4lhS2gQ0x6dxafw&oe=692D3287",
  "https://scontent.fhan15-2.fna.fbcdn.net/v/t1.15752-9/553643726_678349475003730_2244323498151317268_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=AuAfF6BJkEIQ7kNvwHN7sw0&_nc_oc=AdlHT_LxFxY3iZ88Hx2enmyVr2pffCHzctysmLm1XS8Hx4GZ7METoU_C10MIr7lTzTktWPqCrZJilATpEGjWY_mF&_nc_zt=23&_nc_ht=scontent.fhan15-2.fna&oh=03_Q7cD3wGF9NRPoPqLFjlJQDYBIDqXDKoXR2_z54AV_qR-yu85GQ&oe=692D5EBF",
  "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/566619488_2229611120858044_9069435662889719205_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=R4j0JeCk1ncQ7kNvwEK1_Sk&_nc_oc=Adn50-yiPAWLmwsLzbuuGaTWMJtafA0_0MMgqP8M3wsZVrk94CRblmWQIDotbe5GWGHjRHBuHbqDyfghyoTbemK8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&oh=03_Q7cD3wG4m3t1INRfh-gv_DUpyl_HZxziU28CnJUP85KGb19ahQ&oe=692D4CE0",
  "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/550859965_1551401706003584_3001291392807184239_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=jAcWYxHS6HcQ7kNvwF1rsYt&_nc_oc=AdnSOUEPPAaq1AFGKNm07maB6AgrFeDZ2PnQSNm1i0W4nRbqzCVsSy_z3Xrpnmz32KRGr2_9bSbqiARhe4YtV_V8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&oh=03_Q7cD3wGXKSBT7NmTV7gG1HqSZQTOIh_Ol8O4YW0UgLYsyimrPQ&oe=692D4293",
  "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/566552720_1316310323052055_8106288559789755094_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=jOyrG8IVIW0Q7kNvwGBmlMa&_nc_oc=AdmHiq-PNcK_9fI8BLH6okyHw42YOUV7PIKCiNBXTwCRUYnhxdcxjx4K-FZscvjG1yjku-QLy7zKJKogxzPVVHzV&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&oh=03_Q7cD3wG44MOVCx2fvOL008tXDGR5CGxEB_vKVFpNFgLYmuIHGg&oe=692D4DEC",
  "https://scontent.fhan15-1.fna.fbcdn.net/v/t1.15752-9/557705522_2754466748234695_3336730528224325100_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=WFCoi_mKNXIQ7kNvwFy6bn5&_nc_oc=Adl3bJ5BgpVyE_mbks52x3cA5T4tLNwYsq1by_M5DDy4b6vSCPjz3E_nSzRUKXCBXR5BdDWJSA7_6pKGF0l6rOv7&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&oh=03_Q7cD3wGDXuJmkzKt6Mx-VF-g8otU8fSaR57d1mEkqZApy3fB9w&oe=692D5FAC",
];

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <ImageTrail items={imageUrls} />

      {/* Phần tử này để hiển thị chữ lên trên, bạn có thể xóa nếu không cần */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-md">
          Di Chuột Xung Quanh
        </h1>
      </div>
    </div>
  );
}
