import { useState } from "react";
import { useNavigate, Link } from "react-router";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Logging in...");
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at 10% 10%, #243b71 0%, transparent 35%), radial-gradient(circle at 90% 20%, #9d4edd 0%, transparent 30%), linear-gradient(120deg, #0b132b, #1c2541)",
        color: "#f5f7ff",
        fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif',
      }}
    >
      {/* Animated Ring Container */}
      <div
        className="gs-ring"
        style={{
          position: "relative",
          width: 360,
          height: 360,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Three rotating ring items */}
        <i className="gs-ring-item" />
        <i className="gs-ring-item" />
        <i className="gs-ring-item" />

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            width: 260,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            zIndex: 1,
          }}
        >
          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className="inline-grid place-items-center rounded-lg font-black text-sm"
              style={{ width: 28, height: 28, background: "#ffb703", color: "#1a1a1a" }}
            >
              G
            </span>
            <span className="font-extrabold text-base tracking-wide">GameStream</span>
          </div>

          <h2 className="text-center text-xl font-bold">Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 6,
              background: "rgba(255,255,255,0.08)",
              color: "#f5f7ff",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 6,
              background: "rgba(255,255,255,0.08)",
              color: "#f5f7ff",
              outline: "none",
              fontSize: "1rem",
            }}
          />

          {status && (
            <p className="text-center text-sm" style={{ color: "#bfc7e6", minHeight: 18 }}>
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-base transition-all duration-200 cursor-pointer"
            style={{
              background: "#ffb703",
              color: "#161616",
              border: "none",
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffc947"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#ffb703"; }}
          >
            Login
          </button>

          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="text-sm no-underline transition-colors duration-200"
              style={{ color: "#bfc7e6" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f5f7ff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#bfc7e6"; }}
            >
              Forgot Password?
            </a>
            <Link
              to="/"
              className="text-sm no-underline transition-colors duration-200"
              style={{ color: "#bfc7e6" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#ffb703"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#bfc7e6"; }}
            >
              ← Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
