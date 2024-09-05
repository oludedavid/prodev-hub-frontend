import BackgroundRectPattern from "@/components/custom-component/background/backgroundRect";

export default function AboutPage() {
  return (
    <div className={`sm:px-2 lg:px-[150px] md:px-[150px]`}>
      <BackgroundRectPattern>
        <h1 className="text-[40px] w-[220px] font-bold leading-[126.794%]">
          About us
        </h1>
      </BackgroundRectPattern>
    </div>
  );
}
