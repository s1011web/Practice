import { Link } from 'react-router-dom';
export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりませんでした。</h1>
      <p>
        <Link to="/">Topへ戻る</Link>
      </p>
    </div>
  );
};
