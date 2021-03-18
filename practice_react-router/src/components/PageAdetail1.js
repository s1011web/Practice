import { useHistory } from 'react-router-dom';
export const PageAdetail1 = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>PageAdetail1</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
