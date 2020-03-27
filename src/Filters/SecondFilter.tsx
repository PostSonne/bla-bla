import React, { FC } from "react";

export interface ISecondFilter {
    value: string;
    onChange: () => {};
    items: string[];
    checked?: boolean;
}

export const SecondFilter: FC<ISecondFilter> = ({
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

export default SecondFilter;