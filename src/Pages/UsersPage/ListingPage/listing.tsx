import styled from "@emotion/styled";
import { Button, Checkbox, Col, Row, Typography } from "antd";
import { useState } from "react";

export const Listing = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [activeColor, setActiveColor] = useState("red");

  const [activeSize, setActiveSize] = useState("S");
  const handleClick = (color: string) => {
    setActiveColor(color);
  };
  const checkboxes = [
    "Perfume",
    "Trousers",
    "Shoe",
    "Handbag",
    "Hat",
    "Thermos",
  ];
  const colors = [
    { name: "red", className: "bg-red-600" },
    { name: "yellow", className: "bg-yellow-400 " },
    { name: "green", className: "bg-green-700" },
  ];
  const handleCheckboxChange = (label: string) => {
    if (checkedItems.includes(label)) {
      setCheckedItems(checkedItems.filter((item) => item !== label));
    } else {
      setCheckedItems([...checkedItems, label]);
    }
  };
  return (
    <div className="mx-40 pt-10">
      <Row>
        <Col span={5} className="border px-4 py-6">
          <Typography.Title level={5} className="!mb-7">
            Categories
          </Typography.Title>
          {checkboxes.map((label, index) => (
            <>
              <div key={index} className="flex items-center gap-2 mb-2">
                <Checkbox
                  checked={checkedItems.includes(label)}
                  onChange={() => handleCheckboxChange(label)}
                />
                <Typography>{label}</Typography>
              </div>
              <hr className="my-3" />
            </>
          ))}
          <div className="flex gap-2 mt-4 items-center">
            {colors.map((color) => (
              <ButtonColor
                key={color.name}
                isActive={activeColor === color.name}
              >
                <Button
                  type="text"
                  style={{ width: "0px" }}
                  className={`${color.className} rounded-full `}
                  onClick={() => handleClick(color.name)}
                />
              </ButtonColor>
            ))}
          </div>
          <Typography.Title level={5} className="!text-gray-500 mt-4">
            Select Size
          </Typography.Title>
          <ButtonContainer className="flex flex-wrap">
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
        </Col>
        <Col span={18} offset={1}>
          2
        </Col>
      </Row>
    </div>
  );
};
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;
const ButtonCss = styled(Button)<{ isActive: boolean }>`
  width: 40px;
  height: 35px;
  border-radius: 5px;
  border: ${(props) =>
    props.isActive ? "2px solid black" : " 1px solid #505050b7"};
  color: ${(props) => (props.isActive ? "black" : "#262626b7")};
`;
const ButtonColor = styled.div<{ isActive: boolean }>`
  width: 35px;
  height: 35px;
  padding: 19px;
  border-radius: 50%;
  border: ${(props) => (props.isActive ? "1px solid black" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
