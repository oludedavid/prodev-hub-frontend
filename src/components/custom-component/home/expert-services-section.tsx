import SectionHeader from "./section-header";
import { ExpertService } from "@/types/expertService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import { IoMdBookmark } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Rating from "../ratings/rating";
import ExpertServiceCard from "./expert-services-card";

const ExpertServicesSection: React.FC<{ experts: ExpertService[] }> = ({
  experts = [],
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 py-2 px-8 md:px-16">
      <SectionHeader title={"Expert Services"} />
      <h1 className="text-center font-bold text-2xl lg:text-3xl">
        Connect with Industry Specialists
      </h1>
      <p className="text-center w-full max-w-xl font-normal text-sm md:text-base text-[#E3E3E3] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-sm md:max-w-3xl lg:max-w-5xl"
      >
        <CarouselContent className="w-full">
          {experts.map((expert, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <ExpertServiceCard {...expert} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Link
        href="/expert-services"
        style={{
          border: "1px solid rgba(230, 230, 230, 0.36)",
        }}
        className="font-medium text-[15px] bg-[#05091E] w-[110px] h-[40px] text-white rounded-[32px] text-center px-4 py-2"
      >
        View All
      </Link>
    </div>
  );
};

export default ExpertServicesSection;
