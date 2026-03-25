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
      name: "PanCard",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/31/A_sample_of_Permanent_Account_Number_%28PAN%29_Card.jpg",
      width: 80,
    },
    {
      name: "Aadhaar",
      src: "https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg",
      width: 30,
    },
  ];

  return (
    <div>
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
    </div>
  );
}
