"use client";
import React from "react";

const Sidebar = ({ onDragStart }) => {
  return (
    <div
      style={{ width: "200px", padding: "10px", borderRight: "1px solid #ddd" }}
    >
      <div
        draggable
        onDragStart={(e) => onDragStart(e, "input")}
        style={{
          padding: "10px",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Input
      </div>
      <div
        draggable
        onDragStart={(e) => onDragStart(e, "button")}
        style={{
          padding: "10px",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        Button
      </div>
    </div>
  );
};

export default Sidebar;
