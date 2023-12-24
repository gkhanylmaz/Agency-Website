import React from "react";
import ClientLogo1 from "../../public/assets/clientLogo1.png";
import ClientLogo2 from "../../public/assets/clientLogo2.png";
import ClientLogo3 from "../../public/assets/clientLogo3.png";
import ClientLogo4 from "../../public/assets/clientLogo4.png";
import ClientLogo5 from "../../public/assets/clientLogo5.png";
import ClientLogo6 from "../../public/assets/clientLogo6.png";
import ClientLogo7 from "../../public/assets/clientLogo7.png";
import Image from "next/image";

const logoClient = [
  ClientLogo1,
  ClientLogo2,
  ClientLogo3,
  ClientLogo4,
  ClientLogo5,
  ClientLogo6,
  ClientLogo7,
];

const logoClientArray = logoClient.map((logo, index) => ({
  id: index + 1,
  logo,
}));

console.log(logoClientArray);

const Clients = () => {
  return (
    <div>
      <div className="px-36 py-10">
        <div className="text-center ">
          <h2 className="font-semibold text-3xl text-[#4D4D4D]">Our Clients</h2>
          <p className="text-base text-[#717171] mt-2">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="h-[98px] ">
          <div className="flex justify-between mt-10 ">
            {logoClientArray.map((client, index) => (
              <Image
                key={index}
                src={client.logo}
                alt={`Logo ${client.id}`}
                width={48}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
