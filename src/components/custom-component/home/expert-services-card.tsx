// src/components/custom-component/expert-service-card.tsx
import { IoMdBookmark } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExpertServiceCardProps } from "@/app/types/expertService";
import Rating from "@/components/custom-component/ratings/rating";

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
      className="relative w-[255px] h-[324px]"
    >
      {/* header */}
      <div className="relative flex flex-col py-2 items-center">
        <img
          src={imageUrl}
          className="w-[232px] h-[156px]"
          alt={`${name}'s profile`}
        />
        <div className="absolute top-3 right-3">
          <IoMdBookmark
            className=""
            style={{
              color: "rgba(16, 25, 43, 0.44)",
            }}
          />
        </div>
      </div>
      {/* body */}
      <div>
        <h6 className="text-center w-[200px] mx-auto text-white font-semibold text-[14px]">
          {title}
        </h6>
      </div>
      {/* footer */}
      <div className="px-2 flex flex-col gap-2">
        <Separator className="my-2 bg-gray-500" />
        <div className="flex justify-between">
          <small>{name}</small>
          <Rating rating={rating} />
        </div>
        <Button className="grid w-full border-none bg-gradient-to-r from-[#465BB8] to-[#663FD6] place-content-center rounded-[32px]">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ExpertServiceCard;
