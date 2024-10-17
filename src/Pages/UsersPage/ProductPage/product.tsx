import styled from "@emotion/styled";
import { Button, Col, FloatButton, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GoShareAndroid } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useEffect, useState } from "react";
import ReviewList from "./components/reviews";
import { AlsoLike } from "./components/alsoLike";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ProductApi } from "../../../api/api";
import { useParams } from "react-router";
import { ProductsType } from "../../../types/types";
import { setProducts } from "../../../store/slices/productsSlice";

export const Product = () => {
  const { id } = useParams<{ id: string }>();
  const productsData = useSelector(
    (store: RootState) => store.products.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await ProductApi.getProduct();
        dispatch(setProducts(products));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  const [activeMenu, setActiveMenu] = useState("Details");
  const [activeColor, setActiveColor] = useState("red");
  const [activeSize, setActiveSize] = useState("S");
  const [activeIndex, setActiveIndex] = useState(0); // Swiperning hozirgi slayd indeksini saqlash uchun state

  // Swiper slaydlar o'zgarganda chaqiriladigan funksiya
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex); // Swiperning hozirgi aktiv indeksini olish
  };
  const handleClick = (color: string) => {
    setActiveColor(color);
  };
  const filteredProducts = id
    ? productsData.filter((item) => item.id === parseInt(id, 10)) // Agar id bo'lsa, mahsulotni ID bo'yicha filterlaymiz
    : productsData; // ID bo'lmasa, barcha mahsulotlarni ko'rsatamiz

  return (
    <div className="px-40">
      <div className="py-5">
        <Row>
          <Col span={11}>
            <div className="!bg-[#F6F6F6] rounded-md">
              <StyledSwiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }} // Pagination dots enabled
                // navigation={true} // Navigation arrows enabled
                onSwiper={(swiper) => console.log(swiper)} // Event handler when Swiper is initialized
                onSlideChange={handleSlideChange}
              >
                {filteredProducts.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={product.img} // Mahsulotning rasmini ko'rsatadi
                      alt={`slide-${product.id}`}
                      className="w-96 h-full"
                    />
                  </SwiperSlide>
                ))}
              </StyledSwiper>
            </div>
          </Col>
          <Col span={11} offset={2}>
            {filteredProducts.map(
              (item: ProductsType, index) =>
                index === activeIndex && (
                  <>
                    <div className="flex justify-between me-10 pt-2">
                      <Typography.Title level={3} className="!font-bold">
                        {item.title}
                      </Typography.Title>
                      <Button type="text" className="!px-0 h-6">
                        <GoShareAndroid size={24} color="gray" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <div className="!bg-gray-100 flex items-center gap-3 rounded-2xl px-5 font-semibold">
                        <Button className="!p-0 !h-5" type="text">
                          <IoStar size={17} className="!text-[#464851]" />
                        </Button>
                        <Typography className="!text-[#5C5F6A]">
                          4.2 — 54 Reviews
                        </Typography>
                      </div>
                      <div>
                        <Typography className="!py-1 rounded-2xl px-4 !text-gray-500 font-semibold !border-gray border">
                          {item.status}
                        </Typography>
                      </div>
                    </div>
                    <Typography.Title level={4} className="!font-bold mt-5">
                      ${item.price}
                    </Typography.Title>
                    <Typography.Title level={5} className="!text-gray-500">
                      Available Colors
                    </Typography.Title>
                    <div className="flex gap-4 mt-4 items-center">
                      <ButtonColor isActive={activeColor === "red"}>
                        <Button
                          type="text"
                          className="bg-red-600 w-7 rounded-full"
                          onClick={() => handleClick("red")}
                        />
                      </ButtonColor>

                      <ButtonColor isActive={activeColor === "yellow"}>
                        <Button
                          type="text"
                          className="bg-yellow-400 w-7 rounded-full"
                          onClick={() => handleClick("yellow")}
                        />
                      </ButtonColor>

                      <ButtonColor isActive={activeColor === "green"}>
                        <Button
                          type="text"
                          className="bg-green-700 w-7 rounded-full"
                          onClick={() => handleClick("green")}
                        />
                      </ButtonColor>
                    </div>
                    <Typography.Title level={5} className="!text-gray-500 mt-4">
                      Select Size
                    </Typography.Title>
                    <ButtonContainer>
                      {["S", "M", "X", "XL", "XXL"].map((size) => (
                        <ButtonCss
                          key={size}
                          isActive={activeSize === size}
                          onClick={() => setActiveSize(size)}
                        >
                          {size}
                        </ButtonCss>
                      ))}
                    </ButtonContainer>
                    <Typography.Title level={5} className="!text-gray-500 mt-4">
                      Quantity
                    </Typography.Title>
                    <ButtonQuantity>
                      <Button type="text">
                        <FaMinus />
                      </Button>
                      <Typography.Title level={5} className="mt-1">
                        1
                      </Typography.Title>
                      <Button type="text">
                        <FaPlus />
                      </Button>
                    </ButtonQuantity>
                    <div className="flex gap-3 mt-5">
                      <Button
                        className="py-5 px-28 bg-black text-white font-semibold"
                        type="text"
                      >
                        Add to cart
                      </Button>
                      <Button className="py-5 p-4">
                        <FaRegHeart size={19} />
                      </Button>
                    </div>
                    <Typography.Title
                      level={5}
                      className="mt-2 !text-[#5C5F6A]"
                    >
                      — Free shipping on orders $100+
                    </Typography.Title>
                  </>
                )
            )}
          </Col>
        </Row>
      </div>
      <div className="mt-36">
        <Row>
          <Col span={5} className="pt-16">
            <Button
              type="text"
              className={`w-full flex justify-start gap-3 font-semibold py-5 ${
                activeMenu === "Details" ? " bg-gray-100" : ""
              }`}
              onClick={() => setActiveMenu("Details")}
            >
              <MdOutlineMoreHoriz /> Details
            </Button>

            <Button
              type="text"
              className={`my-1 w-full flex justify-start gap-3 font-semibold py-5 ${
                activeMenu === "Reviews" ? " bg-gray-100" : ""
              }`}
              onClick={() => setActiveMenu("Reviews")}
            >
              <FaRegStar /> Reviews
            </Button>
          </Col>
          <Col span={18} offset={1} className="pe-56">
            <Typography.Title level={5}>{activeMenu}</Typography.Title>
            {activeMenu === "Details" ? (
              <>
                <div>
                  {filteredProducts.map(
                    (item: ProductsType, index) =>
                      index === activeIndex && (
                        <>
                          <Typography className="text-[#5C5F6A] leading-6">
                            {item.description}
                          </Typography>
                          <ul className="list-disc list-inside my-10 leading-6 text-[#5C5F6A]">
                            <li>Premium Quality</li>
                            <li>Versatile Wardrobe Staple</li>
                            <li>Available in Various Sizes </li>
                            <li>Tailored Fit </li>
                          </ul>
                        </>
                      )
                  )}
                </div>
              </>
            ) : (
              <ReviewList />
            )}
          </Col>
        </Row>
      </div>

      <AlsoLike />
      <FloatButton.BackTop />
    </div>
  );
};
const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    height: 72vh !important;
    background-size: cover;
    padding: 20px;
  }

  .swiper-pagination-bullet-active {
    background: black;
  }
  .swiper-button-next {
    color: black;
  }
  .swiper-button-prev {
    color: black;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;
export const ButtonCss = styled(Button)<{ isActive: boolean }>`
  width: 50px;
  height: 40px;
  border-radius: 5px;
  border: ${(props) =>
    props.isActive ? "2px solid black" : " 1px solid #505050b7"};
  color: ${(props) => (props.isActive ? "black" : "#262626b7")};
`;
const ButtonColor = styled.div<{ isActive: boolean }>`
  padding: 3px 3px;
  border-radius: 50%;
  border: ${(props) => (props.isActive ? "1px solid black" : "")};
`;
const ButtonQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px double #51515144;
  width: 150px;
  border-radius: 5px;
  padding: 3px;
`;
