import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {/* Navbar */}
        <nav style={{ 
          padding: "15px 30px", 
          background: "#ffffff", 
          borderBottom: "1px solid #eaeaea",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center" 
        }}>
          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#2563eb" }}>
            Sendio Platform
          </div>
          
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
            <a href="/dashboard" style={{ textDecoration: 'none', color: '#333' }}>Dashboard</a>
            <button style={{ 
              background: "#2563eb", 
              color: "white", 
              border: "none", 
              padding: "8px 16px", 
              borderRadius: "6px",
              cursor: "pointer" 
            }}>
              Sign In (Biometrics)
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main style={{ padding: "40px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
