import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At ZoomStore, our mission is to revolutionize the e-commerce landscape by providing customers with an unparalleled shopping experience that combines convenience, efficiency, and personalization. We strive to create a platform that transcends traditional online retail, enabling customers to effortlessly explore and purchase products from the comfort of their own homes, while fostering meaningful connections and delivering exceptional service.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "At ZoomStore, our vision is to become the leading e-commerce platform globally, revolutionizing the way people shop and connect online. We envision a future where Zoom Store is synonymous with exceptional customer experiences, unmatched convenience, and a vast marketplace that caters to diverse needs and desires.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "In its early years, Zoom Store started as a small-scale marketplace focused on electronics and gadgets. The founders believed in offering high-quality products at competitive prices, coupled with exceptional customer service. With a commitment to building trust and reliability, Zoom Store quickly gained a loyal customer base who appreciated the convenience and value provided.",
  },
];

//export const products_url = "https://course-api.com/react-store-products";
export const products_url = "/.netlify/functions/products";

//export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

export const single_product_url = "/.netlify/functions/single-product?id=";
