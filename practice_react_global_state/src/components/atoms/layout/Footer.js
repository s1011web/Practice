import styled from 'styled-components';

export const Footer = () => {
  return <SFooter>&copy; 2021 test Inc.</SFooter>;
};

const SFooter = styled.footer`
  background: #11999e;
  color: #fff;
  text-algin: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
