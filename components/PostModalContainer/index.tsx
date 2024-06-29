"use client";

import PostType from "@/type/postType.interface";

const PostContainer = ({
  boardId,
  type,
  thumbnail,
  title,
  detail,
  createdAt,
}: PostType) => {
  return (
    <div className="w-screen h-screen bg-[#a7a7a75b] fixed flex justify-center">
      <div
        className="w-[42vw] h-screen my-auto bg-white rounded-lg p-20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" w-full min-h-[60vw] flex flex-col gap-[0.5vw]">
          <div className="w-full h-[7%] flex flex-col justify-center p-[1vw]">
            <div className="text-5xl font-semibold border-b-[0.25vw] py-[0.5vw] border-black">
              {title}
            </div>
          </div>
          <div className="w-full h-[3%] flex gap-[1vw]">
            <div className="flex flex-col justify-center">
              <div className="p-[1vw] text-xl font-bold">분류: {type}</div>
            </div>
          </div>
          <p
            className={`h-[30%] p-[1vw] overflow-y-auto text-black`}
            dangerouslySetInnerHTML={{
              __html: detail.replaceAll("\n", "<br />"),
            }}
          ></p>
          {thumbnail ? (
            <div className="w-full h-[30%] overflow-y-auto bg-[#f1f1f1]">
              <img
                className="w-full"
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${thumbnail}`}
                alt="THUMBNAIL_IMG"
              />
            </div>
          ) : (
            <div className="h-[2.4vw] flex flex-col justify-center">
              <div className="p-[1vw] text-lg">
                ※ 삽입된 이미지가 없는 게시물입니다.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
