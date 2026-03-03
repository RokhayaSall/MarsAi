export default function ProgressBar({ percent }) {
  return (
    <div className="w-full max-w-full h-2 sm:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-2 sm:h-3 bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
