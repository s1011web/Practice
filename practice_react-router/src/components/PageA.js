import { Link } from 'react-router-dom';
export const PageA = () => {
  return (
    <div>
      <h1>PageA</h1>
      <p>
        <Link to="/pageA/detail1">Detail1</Link>
      </p>
      <p>
        <Link to="/pageA/detail2">Detail2</Link>
      </p>
      <p>
        <Link to={{ pathname: '/pageA/detail3', state: 'Hello' }}>Detail3</Link>
      </p>
    </div>
  );
};
