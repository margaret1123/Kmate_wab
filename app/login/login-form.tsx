"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase-client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${redirect}`,
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #f9ffff 0%, #f5fbfb 50%, #ffffff 100%)",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif',
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,.88)",
          borderRadius: 28,
          padding: "48px 40px",
          maxWidth: 420,
          width: "100%",
          boxShadow: "0 24px 70px rgba(16,82,92,.15)",
          border: "1px solid rgba(15,148,136,.16)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #09b39f, #087c75)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            K
          </div>
          <h2 style={{ margin: 0, fontSize: 24, color: "#0b1220", letterSpacing: "-0.02em" }}>
            {sent ? "📨 邮件已发送" : "登录 Kmate"}
          </h2>
          <p style={{ margin: "8px 0 0", color: "#5d6b7c", fontSize: 14 }}>
            {sent ? "请查看邮箱中的登录链接，点击即可登录" : "输入邮箱，我们会发送一个登录链接"}
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px 18px",
                borderRadius: 14,
                border: "1px solid rgba(15,148,136,.22)",
                fontSize: 16,
                outline: "none",
                background: "#fafefe",
                boxSizing: "border-box",
              }}
            />
            {error && <p style={{ color: "#e53e3e", fontSize: 13, marginTop: 10 }}>{error}</p>}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                marginTop: 20,
                padding: "14px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(135deg, #0aa696, #087c75)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 700,
                cursor: loading ? "wait" : "pointer",
                boxShadow: "0 12px 28px rgba(10,166,150,.28)",
              }}
            >
              {loading ? "发送中..." : "发送登录链接"}
            </button>
          </form>
        ) : (
          <button
            onClick={() => {
              setSent(false);
              setEmail("");
            }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: 999,
              border: "1px solid rgba(10,166,150,.22)",
              background: "#fff",
              color: "#087c75",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            ← 更换邮箱
          </button>
        )}

        <p style={{ textAlign: "center", marginTop: 24, color: "#5d6b7c", fontSize: 12 }}>
          无需密码，安全快捷
        </p>
      </div>
    </div>
  );
}
