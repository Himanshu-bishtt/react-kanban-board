import styles from "./Option.module.css";

interface OptionProps {
  options: { name: string; id: string | number }[];
  value: string;
  defaultMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Option: React.FC<OptionProps> = ({ options, value, onChange }) => {
  return (
    <select className={styles.options} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default Option;
