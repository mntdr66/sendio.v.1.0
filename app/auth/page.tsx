"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: { emailRedirectTo: window.location.origin },
    });

    if (error) setMessage(error.message);
    else setMessage("Check your email for the login link!");
    
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <button 
        onClick={handleLogin}
        disabled={loading}
        style={{ width: "100%", padding: "10px", background: "#2563eb", color: "white", border: "none", borderRadius: "5px" }}
      >
        {loading ? "Sending..." : "Send Magic Link"}
      </button>
      {message && <p style={{ marginTop: "15px", fontSize: "14px" }}>{message}</p>}
    </div>
  );
}

