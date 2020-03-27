import React, { FC } from "react";
import { ITrackItem } from "../index";

export interface ITrackItem {
    index: string,
    image: unknown,
    isLoved: boolean,
    trackName: string,
    artist: string,
    listeningCounter: number;
}

const TrackItem: FC<ITrackItem> = () => {
    return (
        <div className="col-sm-3" style={{"marginBottom":20}}>
            <div className="row">
                123
            </div>
        </div>
    )
};

export default TrackItem;