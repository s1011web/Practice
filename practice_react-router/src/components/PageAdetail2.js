import { useHistory } from 'react-router-dom';
export const PageAdetail2 = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>PageAdetail2</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
