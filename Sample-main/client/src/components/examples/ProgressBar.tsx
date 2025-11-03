import ProgressBar from "../ProgressBar";

export default function ProgressBarExample() {
  return (
    <div className="p-6 space-y-4">
      <ProgressBar value={75} />
      <ProgressBar value={45} />
      <ProgressBar value={90} />
    </div>
  );
}
