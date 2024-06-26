export default interface ApplyInfoType {
  programName: string;
  time: "morning" | "afternoon" | "allday";
  date: Date;
  email: string;
  name: string;
  phone: string;
  organization: string;
  participant: number;
  grade: string;
  question: string;
}
