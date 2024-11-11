"use client";
import { useEffect, useState } from "react";

const Output = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [buttonType, setButtonType] = useState("default");
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    const savedButtonType = localStorage.getItem("buttonType");
    const savedInputType = localStorage.getItem("inputType");

    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setSavedItems(parsedItems);
      } catch (error) {
        console.error("Error parsing savedItems from localStorage:", error);
      }
    }

    if (savedButtonType) setButtonType(savedButtonType);
    if (savedInputType) setInputType(savedInputType);
  }, []);

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
    <div style={{ padding: "20px" }}>
      <h1>Output</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {savedItems.map((item, index) =>
          item ? (
            <div key={index} style={{ padding: "10px" }}>
              {item === "input" ? (
                <input
                  type={inputType} // Setting the input type dynamically
                  placeholder="Saved input"
                  style={{
                    padding: "5px",
                    border: "1px solid #ddd", // Adding border for clarity
                    outline: "none",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                <button
                  style={{
                    padding: "5px 10px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    ...getButtonStyle(),
                  }}
                >
                  Saved Button
                </button>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Output;
