import React from "react";

type Props = {};

export default function Search({}: Props) {
  return (
    <input
      type="text"
      placeholder="Search Here"
      className="input input-bordered input-primary"
    />
  );
}
