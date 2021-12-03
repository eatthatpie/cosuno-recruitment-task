import React from 'react';
import * as S from './tag.styles';

export interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps): React.ReactElement {
  return (
    <S.Tag>
      {label}
    </S.Tag>
  )
}
