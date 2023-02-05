import styled from 'styled-components';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { HashLink } from 'react-router-hash-link';

const ToBottomButton = () => (
  <StyledHashLink to="/#what-i-offer">
    <StyledDownArrow />
  </StyledHashLink>
);

const StyledDownArrow = styled(DownArrow)`
  height: 3.5rem;
  width: 3.5rem;
  background: ${({ theme }) => theme.colors.lila};
  border-radius: 50%;
  padding: 0.5rem;
  fill: ${({ theme }) => theme.colors.fern};
  -moz-animation: bounce 2s;
  -webkit-animation: bounce 2s;
  animation: bounce 2s;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const StyledHashLink = styled(HashLink)`
  &::after {
    display: none;
  }
`;

export default ToBottomButton;
