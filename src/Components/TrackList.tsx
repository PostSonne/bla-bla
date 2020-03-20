import React, { FC } from "react";
import TrackItem from "./TrackItem";
import {
    ITrackItem,
    Tracks
} from "../index";

const TrackList: FC<ITrackItem> = ({
    index,
    image,
    isLoved,
    trackName,
    artist,
    listeningCounter
}) => {
    return (
        <div>
            {Tracks.map(() =>
                <TrackItem
                    index = {index}
                    image = {image}
                    isLoved = {isLoved}
                    trackName = {trackName}
                    artist = {artist}
                    listeningCounter = {listeningCounter}
                />
            )}
        </div>
    )
};

export default TrackList;