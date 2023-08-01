import styles from '@/styles/CustomDropDown.module.css';
import { CustomDropDownProps } from './types';

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  label,
  handleChange,
  placeHolder,
  options,
}) => {
  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.dropdownLabel} htmlFor="customDropdown">
        {label}
      </label>
      <select id="customDropdown" onChange={handleChange} className={styles.customDropdown}>
        <option value="">{placeHolder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropDown;
