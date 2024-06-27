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
        className="w-[50vw] h-[60vh] my-auto bg-white rounded-lg p-[5vh] flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-4xl font-bold">{name}</div>
        <div>{subtitle}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default FloorContainer;
