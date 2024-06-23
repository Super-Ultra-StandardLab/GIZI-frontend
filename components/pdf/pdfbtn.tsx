"use client";

const PdfBtn = () => {
  const openPdf = () => {
    window.open("/info.pdf", "_blank");
  };

  return (
    <button
      className="w-[48%] p-7 rounded-3xl bg-[#EEF7FD]"
      onClick={() => openPdf()}
    >
      <div className="text-[24px] font-bold">단체체험 안내문</div>
      <div className="">다운로드</div>
    </button>
  );
};

export default PdfBtn;
