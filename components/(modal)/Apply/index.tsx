import { FC } from "react";
import AppyFormContainer from "@/components/apply";
import ApplyPropsType from "@/type/applyPropsType.interface";

const Apply = ({
  info,
  position,
}: {
  info: ApplyPropsType;
  position: { x: number; y: number };
}) => {
  return <AppyFormContainer info={info} position={position} />;
};

export default Apply;
