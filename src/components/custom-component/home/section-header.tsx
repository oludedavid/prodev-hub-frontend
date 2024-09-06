const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h4
      className="text-base md:text-3xl flex items-center justify-center font-semibold text-center rounded-full"
      style={{
        textTransform: "uppercase",
        background: "rgba(218, 218, 218, 0.09)",
        border: "0.6px solid rgba(244, 244, 244, 0.36)",
      }}
    >
      {title}
    </h4>
  );
};

export default SectionHeader;
