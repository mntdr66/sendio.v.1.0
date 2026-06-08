"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function Home() {
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    getCompanies();
  }, []);

  async function getCompanies() {
    const { data } = await supabase.from("companies").select("*");
    setCompanies(data || []);
  }

  return (
    <main style={{ padding: 30, background: "#F5FAFF", minHeight: "100vh" }}>
      
      <section style={{ textAlign: "center", padding: "50px 0" }}>
        <h1 style={{ color: "#4A90E2", fontSize: 42 }}>
          Sendio Platform
        </h1>

        <p>Count: {companies.length}</p>
          Find companies, workers and services instantly
        </p>

        <input
          placeholder="Search..."
          style={{
            marginTop: 20,
            padding: 12,
            width: "60%",
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
        />
      </section>

      <section style={{ marginTop: 40 }}>
        <h2 style={{ color: "#1F2A37" }}>Companies</h2>

        <div style={{ display: "flex", overflowX: "auto", gap: 15, padding: 10 }}>
          {companies.map((c, i) => (
            <div
              key={i}
              style={{
                minWidth: 200,
                background: "#fff",
                padding: 15,
                borderRadius: 12,
                border: "1px solid #4A90E2",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#38BDF8",
                  marginBottom: 10,
                }}
              />

              <h4>{c.company_name}</h4>
              
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
