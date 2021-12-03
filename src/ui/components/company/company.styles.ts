import styled, { css } from 'styled-components';
import { panel, skeletonLoaderPlay, skeletonLoaderPrepare, textRegular, textRegularBold } from '../../styles/mixins';
import { px, Space } from '../../styles/spacing';
import { Tag } from '../tag/tag.styles';

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;

  > * + * {
    margin-left: ${px(Space.M)};
  }
`;

export const LogoContainer = styled.div`
  border-radius: 50%;
  height: 32px;
  overflow: hidden;
  width: 32px;
`;

export const NameAndCityContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  ${textRegularBold()};

  margin-bottom: ${px(Space.S)};
  min-width: 165px;
`;

export const City = styled.div`
  ${textRegular()};

  min-width: 65px;
`;

export const Specialties = styled.div`
  display: flex;

  > ${Tag} + ${Tag} {
    margin-left: ${px(Space.S)};
  }
`;

export const Company = styled.div`${({ theme }) => css`
  ${panel()};

  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding: ${px(Space.M)};
  width: 640px;

  & + & {
    margin-top: ${px(Space.S)};
  }

  ${LogoContainer},
  ${Name},
  ${City},
  ${Specialties} > ${Tag} {
    ${skeletonLoaderPrepare()};
  }

  &.is-loading {
    ${LogoContainer},
    ${Name},
    ${City},
    ${Specialties} > ${Tag} {
      ${skeletonLoaderPlay()};
    }
  }
`}`;