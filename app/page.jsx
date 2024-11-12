// import Header from "@/components/Header/header";
// import Slider from "@/components/Slider/slider";
// import ImageGrid from "@/components/ImageGrid/imagegrid";
// import MainLastPost from "@/components/MainLastPost/Main/mainLastPost";
// import CategoryPost from "@/components/MainLastPost/Main/categoryPost";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <Slider />
//       <div className="mt-10">
//         <ImageGrid />
//       </div>
//       <div className="mt-10">
//         <MainLastPost />
//       </div>
//       <div>
//         <CategoryPost />
//       </div>
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import Sidebar from "../components/adminTest/sidebar";
import MainContent from "../components/adminTest/mainbar";

const Home = () => {
  const [items, setItems] = useState([]);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("drag-item-type", type);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("drag-item-type");
    const newItems = [...items];
    newItems[index] = { type, buttonType: "default", inputType: "text" };
    setItems(newItems);
  };

  const handleButtonTypeChange = (index, type) => {
    const updatedItems = [...items];
    updatedItems[index].buttonType = type;
    setItems(updatedItems);
  };

  const handleInputTypeChange = (index, type) => {
    const updatedItems = [...items];
    updatedItems[index].inputType = type;
    setItems(updatedItems);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/8 bg-gray-300">
        <Sidebar
          onDragStart={handleDragStart}
          onButtonTypeChange={handleButtonTypeChange}
          onInputTypeChange={handleInputTypeChange}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow w-1/2 bg-white" style={{ padding: 0, margin: 0 }}>
        <MainContent
          items={items}
          onDrop={handleDrop}
          generatedCode={generatedCode}
          setGeneratedCode={setGeneratedCode}
        />
      </div>
    </div>
  );
};

export default Home;
