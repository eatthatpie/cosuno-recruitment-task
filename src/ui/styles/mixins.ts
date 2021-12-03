import { css } from 'styled-components';
import { fade } from './keyframes';

export const borderRadius = (radius = 3) => css`
  border-radius: ${radius}px;
`;

export const panel = () => css`${({ theme }) => css`
  ${borderRadius()};

  background-color: ${theme.colors.white};
`}`;

export const positionCoverAfter = () => css`
  position: relative;

  &:after {
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const positionCoverBefore = () => css`
  position: relative;

  &:before {
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const skeletonLoaderPrepare = () => css`${({ theme }) => css`
  ${positionCoverAfter()};
  ${positionCoverBefore()};

  &:before,
  &:after {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }

  &:before {
    background-color: ${theme.colors.white};
  }

  &:after {
    background-color: ${theme.colors.gray};
  }
`}`;

export const skeletonLoaderPlay = () => css`
  &:before,
  &:after {
    opacity: 1;
    pointer-events: all;
  }

  &:after {
    animation: ${fade} 1s ease-in-out 0s infinite;
  }
`;

export const textRegular = () => css`${({ theme }) => css`
  font-size: ${theme.typo.fontSizes.regular};
  font-weight: ${theme.typo.fontWeights.regular};
  line-height: ${theme.typo.lineHeights.regular};
`}`;

export const textRegularBold = () => css`${({ theme }) => css`
  font-size: ${theme.typo.fontSizes.regular};
  font-weight: ${theme.typo.fontWeights.bold};
  line-height: ${theme.typo.lineHeights.regular};
`}`;

export const textRegularBlack = () => css`${({ theme }) => css`
  font-size: ${theme.typo.fontSizes.regular};
  font-weight: ${theme.typo.fontWeights.black};
  line-height: ${theme.typo.lineHeights.regular};
`}`;
