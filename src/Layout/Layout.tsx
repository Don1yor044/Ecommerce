import {
  Button,
  Col,
  Dropdown,
  Image,
  Input,
  MenuProps,
  Row,
  Space,
  Typography,
} from "antd";
import { Outlet, Link } from "react-router-dom";
import { FaInstagram, FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { DownOutlined } from "@ant-design/icons";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { VscGithubInverted } from "react-icons/vsc";

const Layout = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="/product">Product</a>,
      key: "0",
    },

    {
      label: <a href="/listing">Listing</a>,
      key: "1",
    },
    {
      label: <a href="#">Shopping Cart</a>,
      key: "2",
    },
  ];
  return (
    <div>
      <header>
        <div className="bg-black p-2 flex justify-center items-center ">
          <Typography className="text-white me-1">
            Get 25% OFF on your first order.
          </Typography>
          <a href="#" className="text-white">
            Order Now
          </a>
        </div>
        <div className="flex mx-40 pt-5 pb-3 border-b border-gray gap-44">
          <div className="flex items-start gap-2">
            <Image src="/header.svg" style={{ height: "35px" }} />
            <Typography.Title level={3} className="!font-bold">
              Ecommerce
            </Typography.Title>
          </div>
          <ul className="flex items-center gap-6 text-[#5C5F6A]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className="cursor-pointer"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Categories
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 ms-16 ">
            <Input placeholder="Search products" className="me-5" />
            <Button type="text" className="p-1 !text-[#5C5F6A]">
              <PiShoppingCartSimpleBold size={18} />
            </Button>
            <Button type="text" className="p-1 !text-[#5C5F6A]">
              <FaRegUserCircle size={18} />
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
      <div className="px-40  bg-[#F6F6F6] h-52 pt-20">
        <Row>
          <Col span={12}>
            {" "}
            <Typography.Title level={3} className="!font-semibold">
              Join Our Newsletter
            </Typography.Title>
            <Typography style={{ color: "#5C5F6A" }}>
              We love to surprise our subscribers with occasional gifts.
            </Typography>
          </Col>
          <Col span={12} className="ps-10">
            {" "}
            <div className="flex gap-2 items-center">
              <Input
                className="w-80 py-2 bg-inherit"
                placeholder="Your email address"
              />
              <Button type="text" className="bg-black text-white px-8 py-5">
                Subscribe
              </Button>
            </div>{" "}
          </Col>
        </Row>
      </div>
      <footer className="px-40 pt-20">
        <Row>
          <Col span={7}>
            <div className="flex gap-2 items-end">
              <Button className="py-5 px-3">
                <img src="../../footer/footer.svg" alt="" />
              </Button>
              <Typography.Title level={4} className="!font-bold">
                Ecommerce
              </Typography.Title>
            </div>
            <Typography
              style={{ color: "#5C5F6A", fontSize: "16px", marginTop: 15 }}
            >
              DevCut is a YouTube channel for <br /> practical project-based
              learning.
            </Typography>
            <div className="flex gap-8 mt-7 text-[#5C5F6A]">
              <a href="#">
                <VscGithubInverted size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#">
                <FaYoutube size={20} />
              </a>
            </div>
          </Col>
          <Col span={4}>
            <Typography className="font-semibold text-[#878A92]">
              SUPPORT
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-8">
              FAQ
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Terms of use
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Privacy Policy
            </Typography>
          </Col>
          <Col span={4}>
            <Typography className="font-semibold text-[#878A92]">
              COMPANY
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-8">
              About us
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Contact{" "}
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Careers{" "}
            </Typography>
          </Col>
          <Col span={4}>
            <Typography className="font-semibold text-[#878A92]">
              SHOP
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-8">
              My Account{" "}
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Checkout{" "}
            </Typography>
            <Typography className="font-semibold text-[#5C5F6A] mt-4 ">
              Cart{" "}
            </Typography>
          </Col>
          <Col span={5}>
            <Typography className="font-semibold text-[#878A92]">
              ACCEPTED PAYMENTS
            </Typography>

            <div className="flex gap-5 mt-8">
              <img src="./footer/masterCard.svg" alt="" />
              <img src="./footer/amex.svg" alt="" />
              <img src="./footer/visa.svg" alt="" />
            </div>
          </Col>
        </Row>
        <hr className="mt-16" />
        <Typography className="text-center my-7 ">
          © 2023 DevCut. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
