import { Col, Row, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductApi } from "../../../../api/api";
import { setProducts } from "../../../../store/slices/productsSlice";
import { ProductsType } from "../../../../types/types";
import { Link } from "react-router-dom";
import { RootState } from "../../../../store";

export const AlsoLike = () => {
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
  const filterProductsData = productsData.filter(
    (item: ProductsType) => item.type === "Best"
  );
  return (
    <div className="my-24 mb-36">
      <Typography.Title level={3} className="!font-bold !m-0">
        You might also like
      </Typography.Title>
      <Typography className="mt-2 text-[#AAAAAA]">SIMILAR PRODUCTS</Typography>
      <div className="my-10">
        <Row gutter={[40, 16]}>
          {filterProductsData?.map((item, index) => (
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
                  <Typography className="!py-1 rounded-2xl px-4 !text-gray-500 font-semibold !border-gray border">
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
  );
};
