import React from "react";
import type { SVGProps } from "react";

export function CharmArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.75 7.25l4.5-4.5l4.5 4.5m-4.5 6V2.75"
      ></path>
    </svg>
  );
}
