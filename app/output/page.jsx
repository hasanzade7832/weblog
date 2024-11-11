"use client";
import { useEffect, useState } from "react";

const Output = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    console.log("aaa", storedItems);
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setSavedItems(parsedItems);
        console.log("Loaded items from localStorage:", parsedItems);
      } catch (error) {
        console.error("Error parsing savedItems from localStorage:", error);
      }
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Output</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {savedItems.map(
          (item, index) =>
            item ? ( // بررسی وجود item و type قبل از دسترسی به آن‌ها
              <div
                key={index}
                style={{ border: "1px solid #ddd", padding: "10px" }}
              >
                {item === "button" ? (
                  <input
                    type="text"
                    placeholder="Saved input"
                    readOnly
                    style={{ padding: "5px" }}
                  />
                ) : (
                  <button style={{ padding: "5px 10px" }}>Saved Button</button>
                )}
              </div>
            ) : null // نادیده گرفتن itemهایی که null هستند
        )}
      </div>
    </div>
  );
};

export default Output;
