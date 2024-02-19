import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="flex flex-row items-center justify-center">
      <FaSearch />
      <input
        type="text"
        placeholder="Search Here"
        className="input input-bordered input-info ml-2"
      />
    </div>
  );
}
