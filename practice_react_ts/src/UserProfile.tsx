import { VFC } from "react";
import { User } from "./types/user";

type PropsType = {
  user: User;
}

export const UserProfile: VFC<PropsType> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(' / ')}</dd>
    </dl>
  )
}
