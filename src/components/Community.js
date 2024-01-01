import React from "react";
import CommunityIcon1 from "../../public/assets/CommunityIcon1.png";
import CommunityIcon2 from "../../public/assets/CommunityIcon2.png";
import CommunityIcon3 from "../../public/assets/CommunityIcon3.png";
import Image from "next/image";

const Community = () => {
  const communityData = [
    {
      logo: CommunityIcon1,
      text: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: CommunityIcon2,
      text: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      logo: CommunityIcon3,
      text: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div>
      <div className="px-36 ">
        <div className="text-center">
          <div className="text-container community-h1-shadow ">
            <span className="text-4xl font-semibold overlay-text">
              Manage your entire community <br /> in a single system
            </span>
          </div>

          <p className="text-base text-[#717171] mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="grid grid-cols-12 gap-20 mt-4 ">
          {communityData.map((item, index) => (
            <div className="shadow-md col-span-4 items-center  text-center justify-center  py-6 px-8">
              <div className="h-[56px] w-full flex text-center items-center justify-center mb-4 ">
                <div className="community-logo-bg absolute"></div>

                <div className="z-50 relative right-4">
                  <Image
                    src={item.logo}
                    alt={item.text}
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-bold text-[28px] leading-9 text-[#4D4D4D] mb-2">
                  {item.text}
                </h1>
                <p className="text-sm text-[#717171] leading-5	">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
