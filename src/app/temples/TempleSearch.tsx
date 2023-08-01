import React, { ChangeEvent } from 'react';
import styles from '@/styles/TempleSearch.module.css';
import CustomDropDown from '../components/CustomDropDown';
import { TempleSearchProps } from './types';

const TempleSearch: React.FC<TempleSearchProps> = ({ selectedData, setSelectedData, statesData, citiesData, areasData }) => {
  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedState = event.target.value;
    setSelectedData((prevData) => ({
      state: selectedState,
      city: undefined,
      area: undefined,
    }));
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedData({
      ...selectedData,
      city: event.target.value,
      area: undefined,
    });
  };

  const handleAreaChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedData({
      ...selectedData,
      area: event.target.value,
    });
  };

  const filteredCitiesData = citiesData.find((cityData) => cityData.state === selectedData.state) ?? { cities: [] };
  const citiesOptions = filteredCitiesData.cities.map((city) => ({ value: city, label: city }));

  const filteredAreaData = areasData.find((areaData) => areaData.state === selectedData.state && areaData.city === selectedData.city) ?? { areas: [] };
  const areaOptions = filteredAreaData.areas.map((area) => ({ value: area, label: area }));

  return (
    <div className={styles.main}>
      <CustomDropDown
        label="State"
        handleChange={handleStateChange}
        placeHolder="Select a state"
        options={statesData.map((state) => ({ value: state.name, label: state.name }))}
      />
      {selectedData.state && (
        <CustomDropDown
          label="City"
          handleChange={handleCityChange}
          placeHolder="Select a city"
          options={citiesOptions}
        />
      )}
      {selectedData.city && (
        <CustomDropDown
          label="Area"
          handleChange={handleAreaChange}
          placeHolder="Select an area"
          options={areaOptions}
        />
      )}
    </div>
  );
};

export default TempleSearch;
