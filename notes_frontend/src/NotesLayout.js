import React from "react";
import "./NotesLayout.css";

/**
 * NotesLayout is the structural shell for the Noted app,
 * incorporating a modern, minimal light theme, with
 * three main layout sections:
 * - TopNavBar: displays app title/logo and actions.
 * - LeftPanel: notes list and search/filter.
 * - MainPanel: note detail view and editing.
 * 
 * Children may be injected for MainPanel content.
 */
// PUBLIC_INTERFACE
export default function NotesLayout({ children, leftPanel }) {
  return (
    <div className="noted-root">
      <nav className="noted-navbar">
        <div className="noted-logo">
          {/* Simple geometric logo based on Figma */}
          <span className="logo-stack">
            <span className="logo-box box-1" />
            <span className="logo-box box-2" />
            <span className="logo-box box-3" />
          </span>
          <span className="noted-title">noted</span>
        </div>
        <div className="noted-navbar-actions">
          {/* Place for profile, theme toggle, or actions */}
        </div>
      </nav>
      <div className="noted-content">
        <aside className="noted-sidebar">
          {leftPanel}
        </aside>
        <main className="noted-main">
          {children}
        </main>
      </div>
    </div>
  );
}
