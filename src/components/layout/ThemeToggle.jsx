import { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.background = dark ? "#121212" : "#f4f6f9";
    document.body.style.color = dark ? "#fff" : "#000";
  }, [dark]);

  return (
    <button className="btn btn-sm btn-secondary" onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
