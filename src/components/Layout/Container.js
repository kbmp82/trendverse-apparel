import React from "react";

export default function Container(props) {
  return (
    <div className={"container" + (props.wide ? "" : " container--narrow")}>
      {props.children}
    </div>
  );
}
