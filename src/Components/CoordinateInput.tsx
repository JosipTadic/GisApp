import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const CoordinateInput: FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default CoordinateInput;
