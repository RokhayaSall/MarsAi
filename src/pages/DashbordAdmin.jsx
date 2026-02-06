import { useEffect, useState } from "react"

import Sidebar from "../components/DashbordAdmin/Sidebar"
import DashbordHeader from "../components/DashbordAdmin/DashbordHeader"
import Card from "../components/DashbordAdmin/Card"
import ProgressBar from "../components/DashbordAdmin/ProgressBar"


export default function DashbordAdmin() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch("/api/dashboard")
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  if (!stats) {
    return <div className="p-10">Chargement…</div>
  }

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-gray-100 min-h-screen">
        <DashbordHeader />

        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Films évalués" value={stats.filmsReviewed.count}>
            <ProgressBar percent={stats.filmsReviewed.percentage} />
          </Card>
        </section>
      </main>
    </div>
  )
}
