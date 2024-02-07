"use client";

import React from "react";
import { signOut } from "next-auth/react";

type Props = {};

export default function Logout({}: Props) {
  return (
    <button className="ho hover:underline" onClick={() => signOut}>
      Logout
    </button>
  );
}
