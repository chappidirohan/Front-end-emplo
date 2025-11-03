import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getVariant = () => {
    const lowercaseStatus = status.toLowerCase();
    if (lowercaseStatus.includes('active') || lowercaseStatus.includes('completed')) return 'default';
    if (lowercaseStatus.includes('progress')) return 'secondary';
    if (lowercaseStatus.includes('pending') || lowercaseStatus.includes('planning')) return 'outline';
    return 'secondary';
  };

  return (
    <Badge variant={getVariant()} className="rounded-full" data-testid={`badge-status-${status.toLowerCase().replace(/\s+/g, '-')}`}>
      {status}
    </Badge>
  );
}
