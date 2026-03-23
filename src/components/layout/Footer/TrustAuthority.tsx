"use client";

import Image from "next/image";

export default function TrustAuthority() {
  const logos = [
    {
      name: "Digital India",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/330px-Digital_India_logo.svg.png",
      width: 80,
    },
    {
      name: "CSC",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Common_Service_Centres_logo.png/500px-Common_Service_Centres_logo.png",
      width: 50,
    },
    {
      name: "UPI",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/UPI_logo.svg/960px-UPI_logo.svg.png",
      width: 70,
    },
    {
      name: "Sarkari Result",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sarkari_Result_Info.webp",
      width: 80,
    },
    {
      name: "Govt of India",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_of_India_logo.svg/330px-Government_of_India_logo.svg.png",
      width: 30,
    },
  ];

  return (
    <div className="flex  items-center gap-6 pt-4 ">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="relative flex items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={40}
            className="object-contain h-18 w-auto"
          />
        </div>
      ))}
    </div>
  );
}
