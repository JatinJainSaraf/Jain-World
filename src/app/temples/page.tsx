"use client";
import React, { useState } from "react";
import TempleSearch from "./TempleSearch";
import states from "@/json/state.json";
import cities from "@/json/city.json";
import areas from "@/json/area.json";
import temples from "@/json/temples.json";

import {
  StateData,
  CityData,
  AreaData,
  SelectedData,
  TempleData,
  Temple,
} from "./types";
import styles from "@/styles/page.module.css";
import searchStyles from "@/styles/TempleSearch.module.css";
import TempleList from "./TempleList";

const Temples: React.FC = () => {
  const [selectedData, setSelectedData] = useState<SelectedData>({
    state: undefined,
    city: undefined,
    area: undefined,
  });
  const statesData: StateData[] = states;
  const citiesData: CityData[] = cities;
  const areasData: AreaData[] = areas;
  const [filteredTemples, setFilteredTemples] = useState<Temple[]>([]);

  const handleSearchClick = () => {
    const filteredTemplesData = temples.filter((temple) => {
      return (
        temple.state === selectedData.state &&
        temple.city === selectedData.city &&
        temple.area === selectedData.area
      );
    });
    setFilteredTemples(filteredTemplesData[0]?.temples || []);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          justifyContent: "center",
          margin: "100px",
          display: "flex",
        }}
      >
        <TempleSearch
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          statesData={statesData}
          citiesData={citiesData}
          areasData={areasData}
        />
        {selectedData.area && (
          <div className={searchStyles.search}>
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={() => setFilteredTemples([])}>Clear</button>
          </div>
        )}
      </div>
      <div>
        <TempleList filteredTemples={filteredTemples} />
      </div>
    </>
  );
};

export default Temples;
