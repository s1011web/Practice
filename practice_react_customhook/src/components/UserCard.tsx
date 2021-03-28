import { VFC } from 'react';
import { UserProfile } from '../types/userProfile';

type PropsType = {
  user: UserProfile
}
export const UserCard: VFC<PropsType> = (props) => {
  const { user } = props;
  const style = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: ' 0 16px',
    margin: '8px'
  }
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  )
}
