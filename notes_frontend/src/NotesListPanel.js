import React from "react";
import "./NotesListPanel.css";

/**
 * NotesListPanel renders the left sidebar (search, note list)
 * for the Noted app. Provides UI shell and style for search and list.
 * Actual note items and data filling will follow in next steps.
 */
// PUBLIC_INTERFACE
export default function NotesListPanel({ notes, selectedId, onSelect, onSearchChange }) {
  return (
    <div className="notes-list-panel">
      <div className="notes-search-row">
        <input
          className="notes-search-input"
          type="text"
          placeholder="Search notes…"
          onChange={e => onSearchChange && onSearchChange(e.target.value)}
          aria-label="Search notes"
        />
        <span className="notes-search-icon" aria-hidden>🔍</span>
      </div>
      <ul className="notes-list-ul">
        {/* Placeholders – to be replaced with proper notes data */ }
        {(notes && notes.length > 0) ? (
          notes.map(note => (
            <li
              key={note.id}
              className={"notes-list-li" + (note.id === selectedId ? " selected" : "")}
              onClick={() => onSelect && onSelect(note.id)}
            >
              <div className="notes-list-title">{note.title || "Untitled Note"}</div>
              {/* <span className="notes-list-snippet">{note.body?.slice(0, 50)}</span> */}
            </li>
          ))
        ) : (
          <li className="notes-list-li notes-list-empty">No notes yet</li>
        )}
      </ul>
      {/* Extra: create note button may go here */}
    </div>
  );
}
