"use client";

import { useState } from "react";

export default function ThemeToggle() {

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <div>

      <button
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Toggle Theme
      </button>

      {darkMode ? (
        <h3>Dark Mode Enabled</h3>
      ) : (
        <h3>Light Mode Enabled</h3>
      )}

    </div>
  );
}