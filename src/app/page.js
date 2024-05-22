"use client";

import Navbar from "../components/navbar";
import Intro from "../components/intro";
import Login from "@/components/login";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  // const containerRef = useRef();

  // const [containerSize, setContainerSize] = useState({
  //   width: containerRef.innerWidth,
  //   height: containerRef.innerheight,
  // });

  // useEffect(() => {
  //   if (containerRef.current) {
  //     setContainerSize({
  //       width: containerRef.current.offsetWidth,
  //       height: containerRef.current.offsetHeight,
  //     });
  //   }
  // }, []);

  return (
    <>
      {/* <div ref={containerRef} className="w-[20em] bg-yellow-500">
        Size: {containerSize.width}
      </div> */}
      <Intro/>
      {/* <Login/> */}
      {/* <Navbar /> */}
      </>
  );
}
