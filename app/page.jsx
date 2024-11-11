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
import Link from "next/link";

const Home = () => {
  const [buttonType, setButtonType] = useState("default");
  const [inputType, setInputType] = useState("text");
  const [configType, setConfigType] = useState(null);

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
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        onDragStart={handleDragStart}
        onSelectButtonType={handleSelectButtonType}
        onSelectInputType={handleSelectInputType}
        configType={configType}
        onClose={handleCloseConfig}
      />
      <MainContent
        buttonType={buttonType}
        inputType={inputType}
        onButtonClick={handleButtonClick}
        onInputClick={handleInputClick}
      />
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Link href="/output">
          <button style={{ padding: "10px 20px", marginTop: "20px" }}>
            Save & View Output
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
