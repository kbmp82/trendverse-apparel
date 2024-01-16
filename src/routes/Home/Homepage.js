import React from "react";
import Page from "../../components/Layout/Page";
import CategoryGrid from "../../components/Categories/CategoryGrid";

export default function Homepage() {
  const categories = [
    {
      title: "Hats",
      size: "medium",
      image: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      title: "Jackets",
      size: "medium",
      image: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      title: "Sneakers",
      size: "medium",
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      title: "Womens",
      size: "large",
      image: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/womens",
    },
    {
      title: "Mens",
      size: "large",
      image: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/mens",
    },
  ];
  return (
    <Page title="Homepage">
      <CategoryGrid categories={categories} />
    </Page>
  );
}
