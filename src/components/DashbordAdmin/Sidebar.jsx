

export default function Sidebar() {
  return (
    <aside className="w-64 bg-darkblue text-black h-screen p-6">
      <h1 className="text-xl font-bold mb-10">ADMIN</h1>

      <nav className="space-y-4 text-sm">
        {[
          "Dashboard",
          "Gestion Films",
          "Jury",
          "Résultats",
          "Événements",
          "Configuration",
        ].map(item => (
          <div
            key={item}
            className="cursor-pointer hover:text-accent transition"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  )
}
