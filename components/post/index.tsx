"use client";

import { createPost, getPost, login, uploadImage } from "@/api";
import { useEffect, useState } from "react";
import DragDrop from "../dragdrop";
import { useAtom } from "jotai";
import { loginContext } from "@/context";
import { useRouter } from "next/navigation";

const Post = () => {
  const [isLogin, setIsLogin] = useAtom(loginContext);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState({
    type: "news",
    thumbnail: "",
    title: "",
    detail: "",
  });

  const router = useRouter();

  useEffect(() => {
    return () => {
      const token = localStorage.getItem("access_token");
      if (token) return setIsLogin(true);
      setIsLogin(false);
    };
  }, []);

  const typeGenerator = (type: string) => {
    if (type === "news") return "기지소식";
    if (type === "기지소식") return "news";
    if (type === "activity") return "기지활동";
    if (type === "기지활동") return "activity";
    if (type === "notice") return "공지";
    return "notice";
  };

  const translator = (content: string) => {
    const result = content.replaceAll("\n", "<br />");
    return result;
  };

  const handleImage = async (file: File) => {
    if (file) {
      const result = await uploadImage(file);
      if (result.success === false) {
        alert("이미지 업로드에 실패하였습니다.");
        return -1;
      }
      setPost((prev) => ({ ...prev, thumbnail: result.image }));
    }
  };

  const handlePost = async () => {
    if (post.title.length === 0) {
      alert("제목을 입력해주세요.");
      return -1;
    }
    if (post.detail.length === 0) {
      alert("내용을 입력해주세요.");
      return -1;
    }
    const result = await createPost(post);
    if (result.success === false) {
      alert("게시물 등록에 실패하였습니다.");
      return -1;
    }
    alert("게시물이 성공적으로 등록되었습니다.");
    router.push("/");
  };

  const handleLogin = async () => {
    if (userId === "") return alert("아이디가 입력되지 않았습니다.");
    if (password === "") return alert("비밀번호가 입력되지 않았습니다.");
    const result = await login({ userId, password });
    if (result.success === false) {
      setUserId("");
      setPassword("");
      return alert("로그인에 실패하였습니다.");
    }
    alert("로그인에 성공하였습니다.");
    localStorage.setItem("access_token", result.token);
    setIsLogin(true);
  };

  return (
    <div
      className={`w-screen px-[8vw] ${
        isLogin
          ? "fixed bg-white"
          : "h-screen flex flex-col justify-center bg-[#f1f1f1]"
      }`}
    >
      {isLogin ? (
        <div className="w-full h-full flex justify-between">
          <button
            className="bg-[#BBEBFF] text-2xl font-bold rounded-[0.5vw] top-[85vh] right-[6vw] p-[1vw] fixed"
            onClick={() => handlePost()}
          >
            게시하기
          </button>
          <div className="w-full flex flex-col gap-[1vw] py-[5vw]">
            <div className="w-full h-[7%]">
              <input
                className="w-full h-full text-5xl py-[1.5vw] font-semibold"
                placeholder="제목을 입력해주세요"
                value={post.title}
                onChange={(e) =>
                  setPost((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
            <div className="flex gap-[1vw] bg-white">
              {["기지소식", "기지활동", "공지"].map((item) => (
                <div
                  key={item}
                  className={`cursor-pointer py-[0.5vw] px-[1.5vw] rounded-full font-bold text-base ${
                    post.type === typeGenerator(item)
                      ? "bg-[#BBEBFF]"
                      : "bg-[#eeeeee]"
                  }`}
                  onClick={() =>
                    setPost((prev) => ({ ...prev, type: typeGenerator(item) }))
                  }
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="w-full h-[1vw] flex gap-[1vw]">
              <div className="flex flex-col justify-center">
                <div className="text-lg font-bold flex gap-[1vw]">
                  <p className="my-auto">이미지 삽입:</p>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleImage(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <textarea
              className="w-full min-h-[15vw] p-[1vw] text-base"
              placeholder="게시물 내용을 작성해주세요"
              value={post.detail}
              onChange={(e) =>
                setPost((prev) => ({ ...prev, detail: e.target.value }))
              }
            />
          </div>
          <div className="bg-[#f1f1f1] w-[0.5vw] h-screen"></div>
          <div className=" w-full min-h-[60vw] flex flex-col gap-[1vw] py-[5vw]">
            <div className="w-full h-[7%] flex flex-col justify-center p-[1vw]">
              <div
                className={`text-5xl font-semibold border-b-[0.25vw] py-[0.5vw] border-black ${
                  post.title.length === 0 ? "border-[#9CA3AF]" : "border-black"
                }`}
              >
                {post.title.length === 0 ? (
                  <p className="text-[#9CA3AF]">제목을 입력해주세요</p>
                ) : (
                  post.title
                )}
              </div>
            </div>
            <div className="w-full h-[2.4vw] flex gap-[1vw]">
              <div className="flex flex-col justify-center">
                <div className="p-[1vw] text-xl font-bold">
                  분류: {typeGenerator(post.type)}
                </div>
              </div>
            </div>
            <div className="h-[1vw] flex flex-col justify-center">
              <div className="p-[1vw]"></div>
            </div>
            <p
              className={`h-[15vw] p-[1vw] overflow-y-auto text-base ${
                translator(post.detail) === "" ? "text-[#9CA3AF]" : "text-black"
              }`}
              dangerouslySetInnerHTML={{
                __html:
                  translator(post.detail) === ""
                    ? "게시물 내용을 작성해주세요"
                    : translator(post.detail),
              }}
            ></p>
            {post.thumbnail === "" ? (
              <div className="h-[2.4vw] flex flex-col justify-center">
                <div className="p-[1vw] text-xl">
                  ※ 이곳에 이미지가 표시됩니다
                </div>
              </div>
            ) : (
              <div className="w-full h-[20vw] overflow-y-auto bg-[#f1f1f1]">
                <img
                  className="w-full"
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}${post.thumbnail}`}
                  alt="THUMBNAIL_IMG"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="w-[45vw] h-[30vw] flex mx-auto justify-center rounded-2xl bg-[#ffffff] shadow-md">
          <form
            className="w-[70%] h-[70%] my-auto flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-3xl font-bold mx-auto my-4">
              관리자 계정 로그인
            </div>
            <div className="mx-auto text-lg">
              게시물 작성을 위해 관리자 계정으로 로그인
            </div>
            <input
              className="w-full h-[50px] rounded-md mx-auto bg-[#ececec] p-3"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Id"
            />
            <input
              className="w-full h-[50px] rounded-md mx-auto bg-[#ececec] p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="w-full h-[50px] rounded-md bg-red-400 font-bold"
              onClick={() => handleLogin()}
            >
              로그인
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
