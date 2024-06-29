import PostContainer from "@/components/PostModalContainer";
import PostType from "@/type/postType.interface";

const Post = ({ post }: { post: PostType }) => {
  return (
    <PostContainer
      boardId={post.boardId}
      type={post.type}
      thumbnail={post.thumbnail}
      title={post.title}
      detail={post.detail}
      createdAt={post.createdAt}
    />
  );
};

export default Post;
