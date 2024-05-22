import { useEffect, useState } from "react";

export default function Login() {
  const CLIENT_ID = "66558bd9b2a14e5da75fc2655b370c16";
  const REDIRECT_URI = "http://localhost:3000/redirect";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <a
        className="rounded-full flex justify-center items-center w-14 h-14 bg-pink-600"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        <span className="material-symbols-outlined text-white">fingerprint</span>
      </a>
      <span>One-Touch Login</span>
    </div>
  );
}
