const { NavLink } = require('react-router-dom');
const { default: styled } = require('styled-components');

export const HomeLink = styled(NavLink)`
  color: #e8e8e2;
  background-color: var(--primary-color);
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
`;

export const CartLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: #010101;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
`;
