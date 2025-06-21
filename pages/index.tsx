import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [ipos, setIpos] = useState([])

  useEffect(() => {
    fetch('/api/ipos')
      .then(res => res.json())
      .then(data => setIpos(data))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">IPO Listings</h1>
      <ul className="space-y-4">
        {ipos.map(ipo => (
          <li key={ipo.id} className="border p-4 rounded shadow">
            <Link href={`/ipos/${ipo.id}`}>
              <div>
                <h2 className="text-xl font-semibold">{ipo.company.name}</h2>
                <p>Status: {ipo.status}</p>
                <p>Price Band: {ipo.priceBand}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}