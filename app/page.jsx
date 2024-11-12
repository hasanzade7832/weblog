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
  const [buttonType, setButtonType] = useState("default");
  const [inputType, setInputType] = useState("text");
  const [configType, setConfigType] = useState(null);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("drag-item-type", type);
  };

  const handleSelectButtonType = (type) => {
    setButtonType(type);
    localStorage.setItem("buttonType", type);
  };

  const handleSelectInputType = (type) => {
    setInputType(type);
    localStorage.setItem("inputType", type);
  };

  const handleButtonClick = () => {
    setConfigType("button");
  };

  const handleInputClick = () => {
    setConfigType("input");
  };

  const handleCloseConfig = () => {
    setConfigType(null);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/8 bg-gray-300">
        <Sidebar
          onDragStart={handleDragStart}
          onSelectButtonType={handleSelectButtonType}
          onSelectInputType={handleSelectInputType}
          configType={configType}
          onClose={handleCloseConfig}
        />
      </div>

      {/* Main Content Area (no extra padding/margin) */}
      <div className="flex-grow w-1/2 bg-white" style={{ padding: 0, margin: 0 }}>
        <MainContent
          buttonType={buttonType}
          inputType={inputType}
          onButtonClick={handleButtonClick}
          onInputClick={handleInputClick}
          setGeneratedCode={setGeneratedCode}
          generatedCode={generatedCode}
        />
      </div>

    </div>
  );
};

export default Home;
