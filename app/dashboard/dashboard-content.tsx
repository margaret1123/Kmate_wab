"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-client";
import { useState } from "react";

interface DashboardContentProps {
  email: string;
  hasBasic: boolean;
  hasPro: boolean;
  orders: any[];
}

export function DashboardContent({
  email,
  hasBasic,
  hasPro,
  orders,
}: DashboardContentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const handleBuy = async (productId: string) => {
    setLoading(productId);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userId: "", // will be filled by webhook
          email,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f9ffff 0%, #f5fbfb 50%, #ffffff 100%)",
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "rgba(248,255,255,.78)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(15,148,136,.16)",
          padding: "16px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: "linear-gradient(135deg, #09b39f, #087c75)",
              display: "inline-grid",
              placeItems: "center",
              color: "#fff",
              fontWeight: 900,
            }}
          >
            K
          </span>
          <span style={{ fontWeight: 800, fontSize: 18 }}>Kmate</span>
        </a>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ color: "#5d6b7c", fontSize: 14 }}>{email}</span>
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(10,166,150,.22)",
              background: "transparent",
              color: "#087c75",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            退出
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 22px" }}>
        <h1
          style={{
            fontSize: 32,
            color: "#0b1220",
            letterSpacing: "-0.03em",
            marginBottom: 8,
          }}
        >
          👋 欢迎回来
        </h1>
        <p style={{ color: "#5d6b7c", fontSize: 16, marginBottom: 40 }}>
          {hasPro
            ? "你已是专业版用户，可以下载所有资源"
            : hasBasic
            ? "你已是基础版用户"
            : "你还没有购买任何方案"}
        </p>

        {/* Purchase Card */}
        {!hasPro && (
          <div
            style={{
              background: "linear-gradient(135deg, rgba(10,166,150,.97), rgba(8,124,117,.98))",
              borderRadius: 28,
              padding: 36,
              color: "#fff",
              marginBottom: 32,
            }}
          >
            <h3 style={{ margin: "0 0 12px", fontSize: 22 }}>
              {!hasBasic ? "开始你的科研写作之旅" : "升级到专业版"}
            </h3>
            <p style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.7, marginBottom: 24 }}>
              {!hasBasic
                ? "一次性购买，永久使用。包含桌面端APP + AI写作工具。"
                : "解锁50篇文献库、高级图表方案、PPT模板包等全部功能。"}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {!hasBasic && (
                <button
                  onClick={() => handleBuy("basic")}
                  disabled={loading === "basic"}
                  style={{
                    padding: "14px 28px",
                    borderRadius: 999,
                    border: "none",
                    background: "#fff",
                    color: "#087c75",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                  }}
                >
                  {loading === "basic" ? "跳转中..." : "¥299 购买基础版"}
                </button>
              )}
              <button
                onClick={() => handleBuy("pro")}
                disabled={loading === "pro"}
                style={{
                  padding: "14px 28px",
                  borderRadius: 999,
                  border: "2px solid rgba(255,255,255,.6)",
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                {loading === "pro" ? "跳转中..." : "¥599 购买专业版"}
              </button>
            </div>
          </div>
        )}

        {/* Downloads */}
        {hasPro && (
          <div
            style={{
              borderRadius: 28,
              background: "rgba(255,255,255,.82)",
              border: "1px solid rgba(15,148,136,.16)",
              padding: 36,
              marginBottom: 32,
              boxShadow: "0 18px 48px rgba(16,82,92,.09)",
            }}
          >
            <h3 style={{ margin: "0 0 16px", fontSize: 20, color: "#0aa696" }}>
              📥 你的下载
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("APP即将上线。请通过邮件收到的链接下载。");
                }}
                style={{
                  display: "block",
                  padding: "14px 20px",
                  borderRadius: 14,
                  background: "#f5fbfb",
                  border: "1px solid rgba(15,148,136,.16)",
                  color: "#0b1220",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                🖥️ Kmate 桌面端 (Windows)
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("macOS版本即将推出。");
                }}
                style={{
                  display: "block",
                  padding: "14px 20px",
                  borderRadius: 14,
                  background: "#f5fbfb",
                  border: "1px solid rgba(15,148,136,.16)",
                  color: "#0b1220",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                🍎 Kmate 桌面端 (macOS)
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("PPT模板即将上线。");
                }}
                style={{
                  display: "block",
                  padding: "14px 20px",
                  borderRadius: 14,
                  background: "#f5fbfb",
                  border: "1px solid rgba(15,148,136,.16)",
                  color: "#0b1220",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                📊 PPT 模板包
              </a>
            </div>
          </div>
        )}

        {/* Order History */}
        {orders.length > 0 && (
          <div
            style={{
              borderRadius: 28,
              background: "rgba(255,255,255,.76)",
              border: "1px solid rgba(15,148,136,.12)",
              padding: 36,
              boxShadow: "0 12px 30px rgba(16,82,92,.06)",
            }}
          >
            <h3 style={{ margin: "0 0 16px", fontSize: 18, color: "#0b1220" }}>
              📋 订单记录
            </h3>
            {orders.map((order: any) => (
              <div
                key={order.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(15,148,136,.08)",
                }}
              >
                <div>
                  <strong style={{ color: "#0b1220" }}>{order.product_name}</strong>
                  <div style={{ color: "#5d6b7c", fontSize: 13 }}>
                    {new Date(order.created_at).toLocaleDateString("zh-CN")}
                  </div>
                </div>
                <span style={{ color: "#0aa696", fontWeight: 700 }}>
                  ¥{(order.amount / 100).toFixed(0)}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
