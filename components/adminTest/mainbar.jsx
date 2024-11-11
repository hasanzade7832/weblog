import React, { useState, useEffect } from "react";
import DragItem from "../adminTest/dragitems";

const MainContent = ({
  buttonType,
  inputType,
  onButtonClick,
  onInputClick,
}) => {
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
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("plusCount", plusCount);
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
  };

  const handleRectangleClick = (count) => {
    setPlusCount(count);
    setShowRectangles(false);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("drag-item-type");
    const newItems = [...items];
    newItems[index] = type;
    setItems(newItems);
    setHoveredIndex(null);
    localStorage.setItem("savedItems", JSON.stringify(newItems));
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (index) => setHoveredIndex(index);
  const handleDragLeave = () => setHoveredIndex(null);

  const getButtonStyle = () => {
    switch (buttonType) {
      case "info":
        return { backgroundColor: "blue", color: "white" };
      case "success":
        return { backgroundColor: "green", color: "white" };
      case "warning":
        return { backgroundColor: "orange", color: "white" };
      case "danger":
        return { backgroundColor: "red", color: "white" };
      default:
        return { backgroundColor: "gray", color: "white" };
    }
  };

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
                onClick={() =>
                  items[index] === "button" ? onButtonClick() : onInputClick()
                }
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
                  ...(items[index] === "button" ? getButtonStyle() : {}),
                }}
              >
                {items[index] === "input" ? (
                  <input
                    type={inputType} // Setting the input type dynamically
                    placeholder="Enter text"
                    style={{
                      padding: "5px",
                      border: "1px solid #ddd", // Adding border for clarity
                      outline: "none",
                      borderRadius: "4px",
                      width: "100%", // To fit well in the container
                    }}
                  />
                ) : items[index] === "button" ? (
                  <button style={{ padding: "5px 10px", ...getButtonStyle() }}>
                    Button
                  </button>
                ) : (
                  "+"
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
