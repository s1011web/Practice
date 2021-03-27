import { VFC } from 'react';
type PropsType = {
  color: string;
  fontSize: string;
}
export const Text: VFC<PropsType> = (props) => {
  const { color, fontSize } = props;
  return (
    <p style={{color, fontSize}}>テキストです</p>
  )
}
