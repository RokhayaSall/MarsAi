export default function ProgressBar({ percent }) {
  return (
    <div className="w-full h-2 bg-softgray rounded">
      <div className="h-2 bg-accent rounded" style={{ width: `${percent}%` }} />
    </div>
  );
}
