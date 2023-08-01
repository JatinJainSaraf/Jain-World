import React, { ChangeEvent } from 'react';

export interface DropdownOption {
    value: string;
    label: string;
  }
  
  export interface CustomDropDownProps {
    label: string;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    placeHolder: string;
    options: DropdownOption[];
  }