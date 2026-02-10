export default function DashbordHeader() {
  return (
    <header className="bg-darkblue text-black px-6 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">BACK-OFFICE OFFICIEL</h2>
        <p className="text-xs opacity-70">ADMIN MANAGEMENT</p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm">admin@festival.org</span>
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}
