import React from "react";
import Page from "./Page";
export default function NotFound() {
  return (
    <Page title="Not Found">
      <h1 style={{ textAlign: "center", fontWeight: "600" }}>
        Oh no! The page you are looking for cant be found.
      </h1>
    </Page>
  );
}
