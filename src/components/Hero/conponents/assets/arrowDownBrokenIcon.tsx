import React from "react";
import type { SVGProps } from "react";

export function SolarArrowDownBroken(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
      ></path>
    </svg>
  );
}
