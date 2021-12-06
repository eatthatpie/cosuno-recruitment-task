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
  min-height: 14px;
  min-width: 200px;
`;

export const City = styled.div`
  ${textRegular()};

  min-height: 14px;
  min-width: 100px;
`;

export const Specialties = styled.div`
  display: flex;

  > ${Tag} {
    min-height: 14px;
    min-width: 32px;
  }

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
  overflow: hidden;
  padding: ${px(Space.M)};
  width: 640px;

  & + & {
    margin-top: ${px(Space.S)};
  }

  // #NotesToReviewer
  // I know this is not the most universal solution, as skeletonLoaderPrepare() overrides
  // :befores and :afters. This should be done with additional markup elements, but it
  // works perfectly, for this simple app.
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

  @media (max-width: 1024px) {
    display: block;
    width: 100%;

    > ${Specialties} {
      margin-top: ${px(Space.M)};
    }
  }
`}`;