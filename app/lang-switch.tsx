export function LangSwitch({ current }: { current: "zh" | "en" }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", fontSize: 13 }}>
      <a
        href="/"
        style={{
          padding: "4px 10px",
          borderRadius: 8,
          fontWeight: current === "zh" ? 800 : 400,
          background: current === "zh" ? "rgba(10,166,150,.12)" : "transparent",
          color: current === "zh" ? "#087c75" : "#5d6b7c",
          textDecoration: "none",
        }}
      >
        中文
      </a>
      <a
        href="/en"
        style={{
          padding: "4px 10px",
          borderRadius: 8,
          fontWeight: current === "en" ? 800 : 400,
          background: current === "en" ? "rgba(10,166,150,.12)" : "transparent",
          color: current === "en" ? "#087c75" : "#5d6b7c",
          textDecoration: "none",
        }}
      >
        EN
      </a>
    </div>
  );
}
