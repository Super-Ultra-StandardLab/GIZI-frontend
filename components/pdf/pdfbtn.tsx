"use client";

const PdfBtn = ({ content }: { content: string }) => {
  const openPdf = () => {
    window.open("/info.pdf", "_blank");
  };

  return (
    <button
      className="w-[48%] p-7 rounded-3xl bg-[#EEF7FD]"
      onClick={() => openPdf()}
    >
      <div className="text-2xl font-bold">{content} 안내문</div>
      <div className="text-xl">다운로드</div>
    </button>
  );
};

export default PdfBtn;
