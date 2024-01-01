import React from "react";
import Image from "next/image";
import UnclockImage from "../../public/assets/unlockImage.png";

const Unclock = () => {
  return (
    <div className="px-36 mb-12">
      <div className="flex items-center justify-center">
        <Image src={UnclockImage} alt="Unlock Image" width={440} height={340} />
        <div>
          <h1 className="text-[#4D4D4D] font-semibold text-4xl mb-4">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-sm text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-[#4CAF4F] rounded px-8 py-[14px] text-white text-base mt-8">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unclock;
