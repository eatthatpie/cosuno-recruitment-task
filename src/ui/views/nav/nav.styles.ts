import styled, { css } from 'styled-components';
import { borderRadius, panel, textRegular } from '../../styles/mixins';
import { px, Space } from '../../styles/spacing';

export const TextField = styled.input`${({ theme }) => css`
  ${borderRadius()};
  ${textRegular()};

  border: 1px solid ${theme.colors.bg};
  outline: 0;
  padding: ${px(Space.S)} ${px(Space.M)};

  &:focus {
    border-color: ${theme.colors.muted};
  }

  &::placeholder {
    color: ${theme.colors.muted};
  }
`}`;

export const Nav = styled.div`
  ${panel()};

  box-sizing: border-box;
  max-width: 100%;
  padding: ${px(Space.M)};
  width: 320px;

  > ${TextField} {
    margin-bottom: ${px(Space.L)};
    width: calc(100% - ${px(2 * Space.M)});
  }
`;
