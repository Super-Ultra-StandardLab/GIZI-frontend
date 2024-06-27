import AppyFormContainer from "@/components/apply";
import SubmitInfoContainer from "@/components/information";
import ApplyInfoType from "@/type/applyInfoType.interface";
import ApplyPropsType from "@/type/applyPropsType.interface";

const Info = ({ info }: { info: ApplyInfoType }) => {
  return (
    <SubmitInfoContainer
      programId={info.programId}
      programName={info.programName}
      time={info.time}
      date={info.date}
      email={info.email}
      name={info.name}
      phone={info.phone}
      organization={info.organization}
      participant={info.participant}
      grade={info.grade}
      question={info.question}
      x={info.x}
      y={info.y}
    />
  );
};

export default Info;
