import styled, { css } from 'styled-components';
import { borderRadius } from '../../styles/mixins';

export const Checkbox = styled.div`
 box-sizing: border-box;
`;

export const Label = styled.label`${({ theme }) => css`
  cursor: pointer;
  display: block;
  padding: 8px 32px;
  position: relative;

  &:before {
    ${borderRadius()};

    border: 1px solid ${theme.colors.bg};
    bottom: 7px;
    content: '';
    height: 16px;
    left: 0;
    position: absolute;
    width: 16px;
  }

  &:after {
    ${borderRadius()};

    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    bottom: 7px;
    content: '';
    height: 16px;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 16px;
  }

  &:hover {
    &:before,
    &:after {
      border-color: ${theme.colors.muted};
    }
  }
`}`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    &:after {
      opacity: 1;
    }
  }
`;
