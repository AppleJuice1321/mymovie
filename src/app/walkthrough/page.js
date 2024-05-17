"use client";

import { useState } from "react";
import WalkIntro from "../../components/walkIntro";
import { useRouter } from "next/navigation";

export default function WalkthroughPage() {
  const router = useRouter();

  function clickHandler() {
    router.push("/player");
  }

  function clickHandler() {

  }
 

  return (
    <div className="h-screen p-8 text-center relative">
        <div className="flex overflow-x-scroll gap-4">
          <WalkIntro
            title="Where Words Fail, Music Speaks"
            text="Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."
          />
          <WalkIntro
            title="No Music No Life"
            text="Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."
          />
          <WalkIntro
            title="Peace Love Music"
            text="Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend."
          />
        </div>
        <div onClick={clickHandler} className="flex justify-center gap-6 my-10">
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            sensors
          </span>
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            favorite
          </span>
          <span className="material-symbols-outlined border-2 border-black h-14 w-14 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-none">
            music_note
          </span>
        </div>
        <button onClick={clickHandler}>SKIP</button>
      </div>
  );
}
