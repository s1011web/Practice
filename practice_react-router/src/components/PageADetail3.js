import { useLocation } from 'react-router-dom';
export const PageAdetail3 = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>PageAdetail3</h1>
      <p>渡されたstateは{state}です</p>
    </div>
  );
};
