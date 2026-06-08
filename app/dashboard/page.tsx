"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome: {user.email}</p>
          <button onClick={() => supabase.auth.signOut()}>Log Out</button>
        </div>
      ) : (
        <p>Please sign in to view this page.</p>
      )}
    </div>
  );
}

