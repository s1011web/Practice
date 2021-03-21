import { Link, useHistory } from 'react-router-dom';
export const Page1 = () => {
  const history = useHistory();
  const onClickDetailA = () => history.push('/page1/detailA');
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/page1/detailA">Page1DetailA</Link>
      <br />
      <Link to={{ pathname: '/page1/detailB', state: 'hoge' }}>
        Page1DetailB
      </Link>
      <br />
      <button onClick={onClickDetailA}>Page1DetailA</button>
    </div>
  );
};
