import React, { ChangeEvent, SetStateAction } from 'react';

export interface StateData {
  name: string;
  capital: string;
  abbreviation: string;
}

export interface CityData {
  state: string;
  cities: string[];
}

export interface AreaData {
  state: string;
  city: string;
  areas: string[];
}


export interface TempleData {
  state: string;
  city: string;
  area: string;
  temples: Temple[]
}
export interface Temple {
  name: string;
  location: string;
  pincode: number;
  direction: string;
 }

export interface SelectedData {
  state: string | undefined;
  city: string | undefined;
  area: string | undefined;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface TempleSearchProps {
  selectedData: SelectedData;
  setSelectedData: React.Dispatch<SetStateAction<SelectedData>>;
  statesData: StateData[];
  citiesData: CityData[];
  areasData: AreaData[];
}

export interface TempleListProps {
  filteredTemples: Temple[]
}