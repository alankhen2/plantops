import type { PlantStatus } from "../types";

const STATUS_LABELS: Record<PlantStatus, string> = {
  active: "Aktif",
  inactive: "Tidak Aktif",
  maintenance: "Perawatan",
};

interface StatusBadgeProps {
  status: PlantStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`badge badge-${status}`}>{STATUS_LABELS[status]}</span>
  );
}
