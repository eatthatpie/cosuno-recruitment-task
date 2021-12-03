import React from 'react';
import { Checkbox } from '../checkbox/checkbox';

export interface ChecklistProps {
  items: {
    id: string;
    label: string;
  }[];
  onChange: (checkedItemsIds: string[]) => void
}

export function Checklist({
  items,
  onChange
}: ChecklistProps): React.ReactElement<ChecklistProps> {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

  const handleChange = React.useCallback((itemId: string) => (checked: boolean) => {
    if (!checked) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems((state) => ([
        ...state,
        itemId
      ]));
    }
  }, [checkedItems]);

  React.useEffect(() => {
    onChange(checkedItems);
  }, [checkedItems, onChange]);

  return (
    <>
      {items.map((item: any) => (
        <Checkbox
          id={item.id}
          key={item.id}
          label={item.label}
          onChange={handleChange(item.id)}
        />
      ))}
    </>
  );
}
