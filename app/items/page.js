"use client";
import { useEffect, useState } from "react";
import { frappe } from "@/lib/frappe";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Calling the "Item" Doctype from your Ubuntu Backend
    frappe.db.getDocList("Item", {
      fields: ["item_name", "item_code", "standard_rate"]
    })
    .then(data => {
      setItems(data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Connection failed:", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Connecting to Ubuntu Backend...</p>;

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-5">ERPNext Products</h1>
      <div className="grid gap-4">
        {items.map(item => (
          <div key={item.item_code} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold">{item.item_name}</h2>
            <p className="text-gray-600">{item.item_code}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
