"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [companies, setCompanies] = useState<any[]>([]);

  useEffect(() => {
    async function init() {
      // Fetch user data
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      // Fetch companies data
      if (user) {
        const { data } = await supabase.from("companies").select("*");
        setCompanies(data || []);
      }
    }
    init();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome: {user.email}</p>
          <button onClick={() => supabase.auth.signOut()}>Log Out</button>
          
          <div style={{ marginTop: "30px" }}>
            <h2>Companies List</h2>
            {companies.length > 0 ? (
              <ul>
                {companies.map((company: any) => (
                  <li key={company.id} style={{ marginBottom: "10px" }}>
                    {company.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No companies found.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Please sign in to view this page.</p>
      )}
    </div>
  );
}
