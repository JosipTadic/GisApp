import  {FC} from "react";

interface ButtonProps {
  value?: number | string,
}

const ButtonComponent: FC<ButtonProps>
= props => {
  return <button {...props}></button>;
};

export default ButtonComponent;