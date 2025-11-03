import StatusBadge from "../StatusBadge";

export default function StatusBadgeExample() {
  return (
    <div className="p-6 flex flex-wrap gap-2">
      <StatusBadge status="Active" />
      <StatusBadge status="Completed" />
      <StatusBadge status="In Progress" />
      <StatusBadge status="Pending" />
    </div>
  );
}
