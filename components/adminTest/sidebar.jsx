"use client";
import React from "react";

const Sidebar = ({ onDragStart, onButtonTypeChange, onInputTypeChange }) => {
  return (
    <div
      style={{
        width: "250px",
        padding: "10px",
        borderRight: "1px solid #ddd",
        position: "relative",
      }}
    >
      <h3>Sidebar</h3>
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

      {/* تنظیمات نوع دکمه */}
      <h4>Button Type</h4>
      <select onChange={(e) => onButtonTypeChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
      </select>

      {/* تنظیمات نوع اینپوت */}
      <h4>Input Type</h4>
      <select onChange={(e) => onInputTypeChange(e.target.value)}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="password">Password</option>
      </select>
    </div>
  );
};

export default Sidebar;
