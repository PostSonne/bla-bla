import React, { FC } from "react";
import styled from "styled-components";
import FirstFilter, { IFirstFilter } from "./Filters/FirstFIlter";
import SecondFilter, { ISecondFilter } from "./Filters/SecondFilter";

interface IAppProps {
    tracks: object[];
}

const GoodsList = ({ goods }) => (
    <div>
        {goods.map(n => (
            <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
                <img src={n.image} />
            </Block>
        ))}
    </div>
);

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