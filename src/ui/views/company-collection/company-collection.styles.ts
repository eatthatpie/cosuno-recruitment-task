import styled from 'styled-components';
import { px, Space } from '../../styles/spacing';

export const CompanyCollection = styled.div`
  width: 640px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const NotFound = styled.div`
  padding: ${px(Space.S)} ${px(Space.M)};
  text-align: center;
`;
