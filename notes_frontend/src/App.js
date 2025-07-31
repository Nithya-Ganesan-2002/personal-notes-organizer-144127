import React, { useState, useEffect } from "react";
import "./App.css";
import NotesLayout from "./NotesLayout";
import NotesListPanel from "./NotesListPanel";

/**
 * App - Top-level orchestrator of Noted app.
 * Boots structural layout (navbar/sidebar/mainpanel) using the
 * extracted design system. No real data logic yet.
 */
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  // For future: notes data, selected note id, search.
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [search, setSearch] = useState("");
  // Placeholder demo notes
  const demoNotes = [
    { id: "1", title: "Welcome to Noted" },
    { id: "2", title: "Design is modern 🎨" },
    { id: "3", title: "Write your first note!" },
    { id: "4", title: "Minimalism ✨" }
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <NotesLayout
      leftPanel={
        <>
          <NotesListPanel
            notes={demoNotes.filter(n =>
              search
                ? (n.title?.toLowerCase().includes(search.toLowerCase()))
                : true
            )}
            selectedId={selectedNoteId}
            onSelect={setSelectedNoteId}
            onSearchChange={setSearch}
          />
          <div className="sidebar-actions" style={{ padding: "18px" }}>
            {/* Example: Create note button, or tips - not yet hooked */}
            <button className="side-create-btn" disabled>
              + New Note
            </button>
          </div>
        </>
      }
    >
      <div className="mainpanel-placeholder">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <div style={{ marginTop: 62, fontSize: 20, opacity: 0.4 }}>
          {/* To be replaced with detail/edit panel */}
          Note detail goes here...
        </div>
      </div>
    </NotesLayout>
  );
}

export default App;
