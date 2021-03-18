import { useParams, useLocation } from 'react-router-dom';
export const Parameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query_name = new URLSearchParams(search).get('name');
  return (
    <div>
      <h1>Parameter</h1>
      <p>URL Parameterは{id}です</p>
      {query_name ? <p>Query Parameterは{query_name}です</p> : null}
    </div>
  );
};
