"use client";

import Link from "next/link";

function ButtonCheckOut() {
  return (
    <Link href={"/check-out"}>
      <button
        className={`cursor-pointer text-[1.4rem] font-medium bg-primary text-white rounded-lg hover:bg-primary-strong transition-colors duration-150 px-4 py-2 w-full`}
      >
        Check out
      </button>
    </Link>
  );
}

export default ButtonCheckOut;
