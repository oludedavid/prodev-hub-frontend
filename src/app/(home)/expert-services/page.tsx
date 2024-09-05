import BackgroundRectPattern from "@/components/custom-component/background/backgroundRect";

export default function ExpertServicesPage() {
  return (
    <div
      style={{
        background: "#010415",
        boxShadow: " 0px 4px 80.3px 0px rgba(0, 0, 0, 0.25)",
      }}
      className={`sm:px-2 lg:px-[150px] md:px-[150px]`}
    >
      <BackgroundRectPattern>
        <h1 className="text-[40px] w-[auto] font-bold leading-[126.794%]">
          Expert Services
        </h1>
      </BackgroundRectPattern>
      <div className="pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, sequi
        inventore modi est delectus, aliquam aspernatur cum consectetur iste
        tenetur maiores at minima fugit ducimus sunt quas, iure rerum beatae.
      </div>
    </div>
  );
}
