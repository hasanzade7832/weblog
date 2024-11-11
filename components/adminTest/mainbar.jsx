import React, { useState, useEffect } from "react";
import DragItem from "../adminTest/dragitems";

const MainContent = () => {
  const [showMainPlus, setShowMainPlus] = useState(true);
  const [showRectangles, setShowRectangles] = useState(false);
  const [plusCount, setPlusCount] = useState(0);
  const [items, setItems] = useState(Array(2).fill(null));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const storedItems = localStorage.getItem("savedItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // ذخیره اطلاعات در لوکال استوریج هر بار که items یا plusCount تغییر کند
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("plusCount", plusCount);
    console.log("Saved items to local storage:", items);
    console.log("Saved plusCount to local storage:", plusCount);
  }, [items, plusCount]);

  const handleMainPlusClick = () => {
    setShowMainPlus(false);
    setShowRectangles(true);
  };

  const handleReset = () => {
    setShowMainPlus(true);
    setShowRectangles(false);
    setPlusCount(0);
    setItems(Array(2).fill(null));
    localStorage.removeItem("items");
    localStorage.removeItem("plusCount");
    console.log("Reset items and plusCount, removed from local storage");
  };

  const handleRectangleClick = (count) => {
    setPlusCount(count);
    setShowRectangles(false);
    console.log("Rectangle clicked, set plusCount to:", count);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("drag-item-type");
    const newItems = [...items];
    newItems[index] = type;
    setItems(newItems);
    setHoveredIndex(null);
    console.log("Dropped item:", type, "at index:", index);
    localStorage.setItem("savedItems", JSON.stringify(newItems));
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (index) => setHoveredIndex(index);
  const handleDragLeave = () => setHoveredIndex(null);

  return (
    <div
      style={{
        flex: 1,
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          border: "2px dashed #ddd",
          padding: "20px",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexDirection: "column",
        }}
      >
        {showMainPlus && (
          <span
            onClick={handleMainPlusClick}
            style={{ fontSize: "24px", cursor: "pointer" }}
          >
            +
          </span>
        )}

        {showRectangles && (
          <div style={{ display: "flex", gap: "20px" }}>
            <div
              onClick={() => handleRectangleClick(2)}
              style={{
                background:
                  "linear-gradient(to right, #ccc 45%, #fff 50%, #ccc 55%)",
                height: "100px",
                width: "100px",
                cursor: "pointer",
              }}
            ></div>

            <div
              onClick={() => handleRectangleClick(1)}
              style={{
                backgroundColor: "#ccc",
                height: "100px",
                width: "100px",
                cursor: "pointer",
              }}
            ></div>
          </div>
        )}

        {!showMainPlus && (
          <button
            onClick={handleReset}
            style={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              backgroundColor: "transparent",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#333",
            }}
          >
            ×
          </button>
        )}

        {!showRectangles && plusCount > 0 && (
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            {[...Array(plusCount)].map((_, index) => (
              <div
                key={index}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                onDragEnter={() => handleDragEnter(index)}
                onDragLeave={handleDragLeave}
                style={{
                  border:
                    hoveredIndex === index
                      ? "3px solid blue"
                      : "3px dashed #ddd",
                  transition: "border 0.3s ease",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "auto",
                  minWidth: "100px",
                  height: "auto",
                  minHeight: "40px",
                  cursor: "pointer",
                  fontSize: "24px",
                  padding: "10px",
                }}
              >
                {items[index] ? <DragItem type={items[index]} /> : "+"}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
