import css from "@/components/SearchBox/SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      id="search"
      name="search"
      autoComplete="off"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
