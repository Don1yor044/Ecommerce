/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button, Col, Image, Row, Typography } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import { ProductApi } from "../../../../api/api";
import { ProductsType } from "../../../../types/types";
import { setProducts } from "../../../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../store";

const features = [
  {
    img: "/truck.svg",
    title: "Free Shipping",
    description:
      "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    img: "/starBadge.svg",
    title: "Satisfaction Guarantee",
    description:
      "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
  },
  {
    img: "/check.svg",
    title: "Secure Payment",
    description:
      "Your security is our priority. Your payments are secure with us.",
  },
];
export const NewOnline = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(
    (store: RootState) => store.products.products
  );

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

  const filterBest = productsData?.filter(
    (item: ProductsType) => item.type === "Best"
  );
  const filterFeatured = productsData?.filter(
    (item: ProductsType) => item.type === "Featured"
  );
  return (
    <>
      <div className="bg-[#F6F6F6] px-40">
        <div>
          <Row>
            <Col span={12}>
              <div className="flex items-center h-96">
                <div>
                  <Typography.Title level={1} className="!mb-2">
                    Fresh Arrivals Online
                  </Typography.Title>
                  <Typography.Title
                    level={5}
                    style={{ color: " #474B57", margin: 0 }}
                  >
                    Discover Our Newest Collection Today.
                  </Typography.Title>
                  <Button
                    type="text"
                    className="bg-black text-white mt-14 px-5 py-5 flex items-center"
                  >
                    View Collection
                    <FaArrowRight color="white" />
                  </Button>
                </div>
              </div>
            </Col>
            <Col span={12} className="ps-60">
              <div css={divStyle}>
                <Image
                  src="/userPhoto.svg"
                  alt="User Photo"
                  className="ps-24"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="px-40 py-32">
        <Row>
          {features.map((feature, index) => (
            <Col key={index} span={8} className="pe-24">
              <div css={featuresdiv}>
                <img src={feature.img} alt="" />
              </div>
              <Typography.Title level={4}>{feature.title}</Typography.Title>
              <Typography style={{ fontSize: 17, color: "#5C5F6A" }}>
                {feature.description}
              </Typography>
            </Col>
          ))}
        </Row>
      </div>
      <div className="px-40 pb-32">
        <div className="flex justify-center pt-10">
          <div className="text-center">
            <Typography style={{ color: " [#878A92]" }}>Shop now</Typography>
            <Typography.Title level={4} className="!font-bold">
              Best Selling
            </Typography.Title>
          </div>
        </div>
        <div className="mt-16">
          <Row gutter={[40, 16]}>
            {filterBest.map((item: ProductsType) => (
              <Col key={item.id} span={6}>
                <Link to={`/product/${item.id}`}>
                  <div className="bg-[#F6F6F6] flex justify-center rounded-md">
                    <img src={item.img} alt="" />
                  </div>
                </Link>
                <div className="px-1">
                  <Typography className="font-semibold mt-4">
                    {item.title}
                  </Typography>

                  <div className="flex gap-5 items-center mt-3">
                    <Typography className="!py-1 rounded-2xl px-4 !text-gray-500 !border-gray border">
                      {item.status}
                    </Typography>
                    <Typography style={{ color: "#474B57", fontWeight: 400 }}>
                      ${item.price}
                    </Typography>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div className="bg-[#F6F6F6] px-40">
        <Row>
          <Col span={12}>
            <div className="flex items-center h-96">
              <div>
                <Typography.Title level={3} className="!font-bold">
                  Browse Our Fashion Paradise!
                </Typography.Title>
                <Typography>
                  Step into a world of style and explore our diverse collection
                  of <br />
                  clothing categories.
                </Typography>
                <Button
                  type="text"
                  className="bg-black text-white mt-14 px-5 py-5 flex items-center"
                >
                  Start Browsing
                  <FaArrowRight color="white" />
                </Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="h-96 ps-72">
              <img src="/fashionImg.svg" alt="" className="h-full" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-40 py-28">
        <Typography.Title level={5} className="text-center">
          Featured
        </Typography.Title>
        <div className="mt-16">
          <Row gutter={[40, 16]}>
            {filterFeatured.map((item, index) => (
              <Col key={index} span={6}>
                <Link to={`/product/${item.id}`}>
                  <div className="bg-[#F6F6F6] flex justify-center rounded-md">
                    <img src={item.img} alt="" />
                  </div>
                </Link>

                <div className="px-1">
                  <Typography className="font-semibold mt-4">
                    {item.title}
                  </Typography>

                  <div className="flex gap-5 items-center mt-3">
                    <Typography className="!py-1 rounded-2xl px-4 !text-gray-500 !border-gray border">
                      {item.status}
                    </Typography>
                    <Typography style={{ color: "#474B57", fontWeight: 400 }}>
                      ${item.price}
                    </Typography>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};
const divStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-top: 30px;
  background-image: url("/backgroundImg.svg");
  background-position: center;
  background-size: 100% 100% !important;
  background-repeat: no-repeat;
`;
const featuresdiv = css`
  width: 41px;
  border-radius: 50%;
  height: 40px;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 5px;
`;
