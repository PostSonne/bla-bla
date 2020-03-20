import React, { FC } from "react";
import ItemsFilter from "./ItemsFilter";

const ItemsFiltersList: FC = () => {
    return (
        <div className="row">
            <div>Filters:</div>
            {filters.map(
                item =>
                    <ItemsFilter
                        id={item.get("id")}
                        key={item.get("id")}
                        changeFilter={this.props.changeFilter}
                    />
            )}
        </div>
    )
};


export default ItemsFiltersList;