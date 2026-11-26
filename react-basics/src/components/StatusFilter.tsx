import type { StatusFilterValue } from "../types";

const FILTER_OPTIONS: { value: StatusFilterValue; label: string }[] = [
  { value: "all", label: "Semua" },
  { value: "active", label: "Aktif" },
  { value: "inactive", label: "Tidak Aktif" },
  { value: "maintenance", label: "Perawatan" },
];

interface StatusFilterProps {
  value: StatusFilterValue;
  onChange: (value: StatusFilterValue) => void;
}

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className="filter">
      {FILTER_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={
            option.value === value ? "filter-button active" : "filter-button"
          }
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
