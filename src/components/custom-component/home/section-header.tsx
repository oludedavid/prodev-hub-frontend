const SectionHeader = ({ title }: { title: string }) => {
  return (
    <h4
      className="w-[168px] h-[32px] text-[10px] flex items-center justify-center font-semibold text-center rounded-[22px]"
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
