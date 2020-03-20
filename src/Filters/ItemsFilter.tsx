import React, { FC } from "react";

const ItemsFilter: FC = () => {
    return (
        <div className="col-sm-2">
            <input type="checkbox"
                   className="toggle"
            />
        </div>
    )
};

export default ItemsFilter;