export default function Home() {
  return (
    <main style={ fontFamily: "Arial, sans-serif" }>
      
      <section style={
        backgroundImage: "url('https://tnow-prod-weur.367791ca7abea81096902b345fee7b1f.r2.cloudflarestorage.com/2026-03-04/4d7e31b9167a93131af2a871d24be6b1/20260304R5MM4zzc/E0rAqQ/WhatsApp%20Image%202026-03-03%20at%2012.38.59.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center"
      }>
        <div style={ backgroundColor: "rgba(0,0,0,0.6)", padding: "40px", borderRadius: "12px" }>
          <h1 style={ fontSize: "48px", marginBottom: "20px" }>Cafeneaua Pieselor Auto</h1>
          <p style={ fontSize: "20px" }>Piese auto de calitate și o cafea bună în timp ce aștepți.</p>
        </div>
      </section>

      <section style={ padding: "60px 20px", maxWidth: "1200px", margin: "auto" }>
        <div style={ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }>
          <div style={ flex: "1 1 500px" }>
            <img src="https://tnow-prod-weur.367791ca7abea81096902b345fee7b1f.r2.cloudflarestorage.com/2026-03-04/4d7e31b9167a93131af2a871d24be6b1/20260304R5MM4zzc/LbNWEn/WhatsApp%20Image%202026-03-03%20at%2012.36.35.jpeg" style={ width: "100%", borderRadius: "12px" } />
          </div>
          <div style={ flex: "1 1 400px" }>
            <h2 style={ fontSize: "32px", marginBottom: "20px" }>Despre Noi</h2>
            <p style={ fontSize: "18px", lineHeight: "1.6" }>
              La Cafeneaua Pieselor Auto îmbinăm pasiunea pentru mașini cu atmosfera relaxată a unei cafenele.
              Oferim piese auto pentru toate mărcile, consultanță specializată și posibilitatea de a savura
              o cafea bună în timp ce comanda ta este pregătită.
            </p>
          </div>
        </div>
      </section>

      <footer style={ background: "#111", color: "white", padding: "30px", textAlign: "center" }>
        © 2026 Cafeneaua Pieselor Auto - Giurgiu
      </footer>

    </main>
  );
}