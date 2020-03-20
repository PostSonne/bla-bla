import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

interface ITrackItem {
    index: string,
    image: string,
    isLoved: boolean,
    trackName: string,
    artist: string,
    listeningCounter: number,
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

let Tracks = [
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
                {id: "shower", inuse: false },
                {id: "pets", inuse: false },
                {id: "flush", inuse: false },
                {id: "water", inuse: false }
            ],
            markers: Items,
            campgrounds: Items
        }
    })
}

setItems(getItems(Tracks));

ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
