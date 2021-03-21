import styled from 'styled-components';
export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background: #fff;
  box-shadow: 0px 0px 4px 2px #ddd;
  border-radius: 8px;
  padding: 16px;
`;
