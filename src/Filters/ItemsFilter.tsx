import React, { FC } from "react";

const ItemsFilter: FC = () => {
    return (
        <div className="col-sm-2">
            <input type="checkbox"
                   className="toggle"
                   id={id}
                   defaultChecked={this.props.inuse}
                   onClick={() => this.props.changeFilter(this.props.id)}
            />
            <label ref="text">{this.props.id}</label>
        </div>
    )
};

export default ItemsFilter;