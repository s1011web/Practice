import { Link } from 'react-router-dom';
export const PageB = () => {
  return (
    <div>
      <h1>PageB</h1>
      <p>
        <Link to="/pageB/100">URL Parameter</Link>
      </p>
      <p>
        <Link to="/pageB/999?name=taro">Query Parameter</Link>
      </p>
    </div>
  );
};
