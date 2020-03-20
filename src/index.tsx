import React from "react";
import ReactDOM from "react-dom";
import { TracksFilterApp } from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducer";

export interface ITrackItem {
    index?: string,
    image?: string,
    isLoved?: boolean,
    trackName?: string,
    artist?: string,
    listeningCounter?: number,
}

const AppStore = createStore(reducer);

const getItems = (Tracks: ITrackItem[]) => {
    const Items: ITrackItem[] = [];
    Tracks.forEach(track => {
        Items.push({
            "index" : track["index"],
            "image" : track["image"],
            "isLoved" : track["isLoved"],
            "trackName": track["trackName"],
            "artist": track["artist"],
            "listeningCounter": track["listeningCounter"]

        })
    });
    return Items;
};

export const Tracks = [
    {
        "index" : "1",
        "image" : "",
        "isLoved" : true,
        "trackName": "Hey You",
        "artist": "Ann",
        "listeningCounter": 144
    }
];

function setItems(Items: ITrackItem[]) {
    AppStore.dispatch ({
        type: "SET_STATE",
        state: {
            filters: [
                {id: "hasImage", inuse: false },
                {id: "liked", inuse: false },
                {id: "hasArtist", inuse: false },
            ],
            campgrounds: Items
        }
    })
}

setItems(getItems(Tracks));

ReactDOM.render(
    <Provider store={AppStore}>
        <TracksFilterApp />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
