import { useLocation } from 'react-router-dom';
export const Page1DetailB = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>Page1DetailBです</h1>
      <p>渡されたstateは{state}です</p>
    </div>
  );
};
