import { uploadImage } from "@/api";
import { useState } from "react";

// const Post = () => {
//   // const [file, setFile] = useState<File | undefined>(undefined);

//   const logout = () => {
//     localStorage.clear();
//     location.reload();
//   };

//   const handleImage = async (file: File) => {
//     if (file) {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await fetch(formData);
//       const blob = await response.blob();
//       const result = await uploadImage(new File([blob], 'image.png'));

//       // const result = await uploadImage(file);
//       if (result.success === false)
//         return alert("이미지 등록에 실패하였습니다.");
//       console.log(result);
//     }
//   };

//   return (
//     <div className="w-full h-full mt-[9vh] p-10 bg-red-200">
//       {/* <button onClick={() => console.log(file)}>file</button>
//       <button onClick={() => handleImage()}>submit Image</button> */}
//       {/* <button onClick={() => logout()} className="bg-orange-500 p-4">
//         logout
//       </button> */}
//       <div className="w-full h-full flex flex-col gap-4 bg-blue-200">
//         <div>
//           <input
//             className="w-full h-[50px] text-[30px] p-3"
//             placeholder="게시물 제목을 입력해주세요."
//           />
//           <input
//             type="file"
//             onChange={(e) => {
//               if (e.target.files && e.target.files.length > 0) {
//                 handleImage(e.target.files[0])
//               }
//             }}
//           />
//         </div>
//         <div>content</div>
//       </div>
//     </div>
//   );
// };

// export default Post;

const Post = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleImage = async () => {
    console.log("잉", file);
    if (file) {
      const result = await uploadImage(file);
      console.log("결과", result);
    }
  };

  return (
    <div className="w-full h-full mt-[9vh] p-10 bg-red-200">
      <div className="w-full h-full flex flex-col gap-4 bg-blue-200">
        <div>
          <input
            className="w-full h-[50px] text-[30px] p-3"
            placeholder="게시물 제목을 입력해주세요."
          />
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <button onClick={handleImage} className="bg-green-500 p-4">
          Upload Image
        </button>
        <div>content</div>
      </div>
    </div>
  );
};

export default Post;
