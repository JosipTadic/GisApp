import { FC, ReactElement } from 'react';

interface ChildProps {
  header: string | number,
  secondHeader?: string
}

const TitleText: FC<ChildProps> = ({header, secondHeader}): ReactElement => { 
  return <h3>{header} {secondHeader}</h3>
};

export default TitleText;