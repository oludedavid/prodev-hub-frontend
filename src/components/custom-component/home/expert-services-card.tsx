// src/components/custom-component/expert-service-card.tsx
import { IoMdBookmark } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExpertServiceCardProps } from "@/types/expertService";
import Rating from "@/components/custom-component/ratings/rating";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
const ExpertServiceCard: React.FC<ExpertServiceCardProps> = ({
  name,
  title,
  rating,
  imageUrl,
}) => {
  return (
    <div
    style={{
      background:
        "linear-gradient(110deg, rgba(255, 255, 255, 0.15) -1.51%, rgba(183, 183, 183, 0.05) 20.46%, rgba(18, 18, 18, 0.00) 60.51%, rgba(18, 18, 18, 0.00) 80.48%, rgba(255, 255, 255, 0.13) 98.36%)",
      borderRadius: "10px",
      border: "0.7px solid rgba(255, 255, 255, 0.39)",
      backdropFilter: "blur(1.6px)",
    }}
    className="relative w-full p-1"
  >
    <div className="flex flex-col aspect-square items-center">
      <div className="relative flex flex-col py-2 items-center">
        <Image
          width={1000}
          height={1000}
          src={imageUrl}
          alt={`${name}'s profile`}
        />
        <div className="absolute top-3 right-3">
          <IoMdBookmark
            size={24}
            style={{
              color: "rgba(16, 25, 43, 0.44)",
            }}
          />
        </div>
      </div>
      <h6 className="text-center mx-auto text-white font-semibold text-xs">
        {title}
      </h6>
      <div className="w-full px-2 flex flex-col gap-2">
        <Separator className="my-2 bg-gray-500" />
        <div className="w-full flex justify-between">
          <small className="text-white">{name}</small>
          <Rating rating={rating} />
        </div>
        <Button className="grid w-full border-none bg-gradient-to-r from-[#465BB8] to-[#663FD6] place-content-center rounded-[32px]">
          Book Now
        </Button>
      </div>
    </div>
  </div>
  );
};

export default ExpertServiceCard;
