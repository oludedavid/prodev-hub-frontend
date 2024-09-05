// src/components/custom-component/home/expert-services-section.tsx
import React from "react";
import SectionHeader from "./section-header";
import ExpertServiceCard from "./expert-services-card";
import { ExpertService } from "@/app/types/expertService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExpertServicesSection: React.FC<{ experts: ExpertService[] }> = ({
  experts = [],
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 py-2">
      <SectionHeader title={"Expert Services"} />
      <h1 className="text-center w-[555px] font-bold text-[32px]">
        Connect with Industry Specialists
      </h1>
      <p className="text-center w-[660px] font-normal text-[16px] text-[#E3E3E3] ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-4xl"
      >
        <CarouselContent>
          {experts.map((expert) => (
            <CarouselItem key={expert.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <ExpertServiceCard {...expert} />
              </div>
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
