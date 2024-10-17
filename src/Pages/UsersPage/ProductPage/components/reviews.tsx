import React, { useState } from "react";
import { List, Button, Rate, Skeleton, Avatar, Typography } from "antd";
import { IoChevronDownOutline } from "react-icons/io5";

const ReviewList: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const data = [
    {
      id: 1,
      name: "Donik1",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
      data: "11.03.2006",
      title: "Salom",
    },
    {
      id: 2,
      name: "Donik2",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
      data: "11.03.2006",
      title: "Salom",
    },
    {
      id: 3,
      name: "Donik3",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
      data: "11.03.2006",
      title: "Salom",
    },
    {
      id: 4,
      name: "Donik4",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
      data: "11.03.2006",
      title: "Salom",
    },
    {
      id: 5,
      name: "Donik5",
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--men-people-male-pack-avatars-icons-5187871.png?f=webp",
      data: "11.03.2006",
      title: "Salom",
    },
  ];

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  const stopComents = () => {
    setVisibleItems(1);
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        <Typography.Title level={3} className="!mt-2 !font-bold">
          4.2
        </Typography.Title>
        <Typography className="!text-[#5C5F6A]">— 54 Reviews</Typography>
      </div>
      <Button className="text-black border-black">Write a review</Button>

      <>
        {visibleItems > 1 && (
          <div className="flex justify-end">
            <Button
              type="text"
              className="flex items-center"
              onClick={stopComents}
            >
              <Typography>Sort by</Typography>
              <IoChevronDownOutline />
            </Button>
          </div>
        )}
        <hr className="mt-3" />

        <List
          size="small"
          itemLayout="horizontal"
          dataSource={data.slice(0, visibleItems)} // Faqat ko'rinadigan elementlarni kesib olish
          renderItem={(item) => (
            <List.Item
              actions={[
                <Rate allowHalf defaultValue={4.0} style={{ fontSize: 15 }} />,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={item.img} />}
                  title={
                    <Typography className="font-semibold">
                      {item.name}
                    </Typography>
                  }
                  description={
                    <div>
                      <div>{item.data}</div>
                      <div className="mt-2 text-gray-500 !text-xs">
                        {item.title}
                      </div>
                    </div>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />

        {visibleItems < data.length && (
          <div className="flex justify-center">
            <Button type="default" onClick={loadMore} className="mt-16 p-4">
              Load more reviews
            </Button>
          </div>
        )}
      </>
    </div>
  );
};

export default ReviewList;
