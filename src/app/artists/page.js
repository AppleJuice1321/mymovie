"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Artists() {
  const [searchKey, setSearchKey] = useState("");
  const [artist, setArtist] = useState({});

  const ACCESS_TOKEN =
    "BQBlmuL4FCTxco2N4OJrNl981L_aW9Ei3Ip0t3GjEknoHGcyeMQcxxfSWmDxItXtQmE0xxH0o1FS1ibf69-y5vl1xS96tBuDpnaZXd2IDSgrmFrvkV_Fr9KRq4EfkaZKuac-1xW98TLwPSuUd7mxA84qilMBx3E2kx9-tC7F";

  

  useEffect(() => {
    const getArtist = async () => {
        try {
          const RESPONSE = await axios.get(
            "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
            {
              headers: {
                Authorization: "Bearer " + ACCESS_TOKEN,
              },
              // params: {
              //   q: searchKey,
              //   type: "artist",
              // },
            }
          );
          setArtist(RESPONSE.data);

        } catch (err) {
          console.log(err);
        }
      };

    getArtist();
  }, []);

  console.log(artist)

  return (
  <>
  </>
  );
}
