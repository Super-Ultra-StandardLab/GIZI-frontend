import FloorContainer from "@/components/FloorContainer";
import AppyFormContainer from "@/components/apply";
import ApplyPropsType from "@/type/applyPropsType.interface";

const Floor = ({
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
    <FloorContainer
      name={name}
      subtitle={subtitle}
      content={content}
      img={img}
    />
  );
};

export default Floor;
