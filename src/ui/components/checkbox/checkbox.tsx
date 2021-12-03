import React from 'react';
import * as S from './checkbox.styles';

export interface CheckboxProps {
  id: string;
  label: string;
  onChange?: (checked: boolean) => void;
}

export function Checkbox({
  id,
  label,
  onChange
  }: CheckboxProps): React.ReactElement<CheckboxProps> {
  const handleChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    onChange?.(e.target.checked);
  }, [onChange]);

  return (
    <S.Checkbox>
      <S.Input
        id={id}
        onChange={handleChange}
        type="checkbox"
      />
      <S.Label htmlFor={id}>
        {label}
      </S.Label>
    </S.Checkbox>
  );
}
