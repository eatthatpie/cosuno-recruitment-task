import styled, { css } from 'styled-components';
import { px, Space } from '../../styles/spacing';
import { Nav } from '../../views/nav/nav.styles';

export const App = styled.div`${({ theme }) => css`
  align-items: start;
  background-color: ${theme.colors.bg};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  min-height: 100%;
  padding: ${px(Space.XXL)};

  > * + * {
    margin-left: ${px(Space.M)};
  }

  > ${Nav} {
    position: sticky;
    top: ${px(Space.XXL)};
  }

  @media (max-width: 1024px) {
    display: block;

    > * + * {
      margin-left: 0;
    }

    > ${Nav} {
      position: static;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: ${px(Space.M)};
  }
`}`;
