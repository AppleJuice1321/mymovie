"use client";

import Link from "next/link";

export default function NavbarLink(props) {
  return (
    <>
      <Link href={`${props.linkToPage}`}>
        <span className={`material-symbols-outlined ${props.styling} ${props.centerStyling}`}>{props.iconName}</span>
      </Link>
    </>
  );
}
