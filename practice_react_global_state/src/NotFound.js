import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>ページが見つかりませんでした。</p>
      <Link to="/">Topへ戻る</Link>
    </div>
  );
};
