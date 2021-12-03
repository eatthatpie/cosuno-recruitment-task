import styled, { css } from 'styled-components';
import { borderRadius, textRegular } from '../../styles/mixins';
import { px, Space } from '../../styles/spacing';

export const Tag = styled.div`${({ theme }) => css`
  ${borderRadius()};
  ${textRegular()};

  background-color: ${theme.colors.primary};
  max-width: 96px;
  overflow: hidden;
  padding: ${px(Space.XS)} ${px(Space.S)};
  text-overflow: ellipsis;
  white-space: nowrap;
`}`;
