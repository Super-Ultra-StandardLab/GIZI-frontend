"use client";

const FloorContainer = ({
  name,
  subtitle,
  content,
  img,
}: {
  name: string;
  subtitle: string;
  content: string;
  img: string;
}) => {
  return (
    <div className="w-screen h-screen bg-[#a7a7a75b] fixed flex justify-center">
      <div
        className="w-[50vw] h-[35vw] my-auto bg-white rounded-lg p-20 flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-5xl font-bold">{name}</div>
        <div className="text-xl">{subtitle}</div>
        <div className="text-xl">{content}</div>
      </div>
    </div>
  );
};

export default FloorContainer;
