import React from "react";
import Page from "../../components/Layout/Page";
import CategoryGrid from "../../components/Categories/CategoryGrid";

export default function Homepage() {
  const categories = [
    {
      title: "Hats",
      size: "medium",
      image: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      title: "Jackets",
      size: "medium",
      image: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      title: "Sneakers",
      size: "medium",
      image: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      title: "Womens",
      size: "large",
      image: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      title: "Mens",
      size: "large",
      image: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <Page title="Homepage">
      <CategoryGrid categories={categories} />
    </Page>
  );
}
