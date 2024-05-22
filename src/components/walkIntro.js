"use client"

export default function WalkIntro(props, ref) {
  return (
      <div className="text-center">
        <h1 className="block mb-4 font-bold text-2xl w-[12em]">{props.title}</h1>
        <p className="block">
          {props.text}
        </p>
      </div>
  );
}
