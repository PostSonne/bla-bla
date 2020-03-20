import React, { FC } from "react";

export interface IFirstFilter {
    value: string;
    onChange: () => {};
    items: string[];
}

export const FirstFilter: FC<IFirstFilter> = ({
    value,
    onChange,
    items
}) => {
  return (
      <>
          {items.map(item =>
            <div key={item}>
                item={item}
                value={value}
                onChange={onChange}
            </div>)
          }
      </>
  )
};

export default FirstFilter;