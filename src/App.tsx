import React, { FC } from "react";
import styled from "styled-components";
import FirstFilter, { IFirstFilter } from "./Filters/FirstFIlter";
import SecondFilter, { ISecondFilter } from "./Filters/SecondFilter";
import { ITrackItem } from "./index";

interface IAppProps {
    tracks: ITrackItem[];
}

const TrackCards: FC<IAppProps> = ({
    tracks
}) => {
    return (
        <>
            <div>
                {tracks.map(
                    item => (
                        <div className="good">
                            <img src={n.image}/>
                        </div>
                    ))}
            </div>
        </>
    );
};

const App: FC<IAppProps> = ({
    tracks,
}) => {
  const countries = React.useMemo(() =>
      [...new Set(tracks.map(n => n.value))],
      [ tracks ]
  );


  return (
      <div>
        <div className="filters">
          <FirstFilter
          />
          <SecondFilter
              value={size}
          />
        </div>
      </div>
  );
};

export default App;