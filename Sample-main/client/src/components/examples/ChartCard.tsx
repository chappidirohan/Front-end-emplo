import ChartCard from "../ChartCard";

const barData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 75 },
  { name: "Mar", value: 85 },
  { name: "Apr", value: 90 },
];

export default function ChartCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <ChartCard title="Monthly Progress" data={barData} type="bar" />
    </div>
  );
}
