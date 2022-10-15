import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./customSelect.module.css";

interface IProps {
  data: {
    label: string;
    value: string;
  }[];
  name: string;
  style?: any;
  onChange: (e: any, name: any) => void;
  filters: any;
}

const CustomSelect = ({
  name = "name",
  data,
  style = {},
  onChange,
  filters,
}: IProps) => {
  return (
    <div className={styles.select_box} style={style}>
      <div className={styles.select_box_current} tabIndex={1}>
        {data?.map((item, index) => {
          return (
            <div className={styles.select_box_value} key={index}>
              <input
                className={styles.select_box_input}
                type="radio"
                id={item.value}
                value={item.value}
                name={name}
                checked={
                  filters[name]
                    ? filters[name][filters[name].length - 1] === item.value
                    : false
                }
                onChange={(e) => {
                  onChange(e, name);
                }}
              />
              <p className={styles.select_box_input_text}>
                <span style={{ marginRight: "20px" }}>{item.label}</span>
              </p>
            </div>
          );
        })}
        <RiArrowDropDownLine
          color="#000000"
          size={24}
          className={styles.select_box_icon}
        />
      </div>

      <ul className={styles.select_box_list}>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <label
                className={styles.select_box_option}
                htmlFor={item.value}
                aria-hidden
              >
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomSelect;
