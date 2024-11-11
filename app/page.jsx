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
import { useState } from "react";
import Sidebar from "../components/adminTest/sidebar";
import MainContent from "../components/adminTest/mainbar";
import DragItem from "../components/adminTest/dragitems";
import Link from "next/link";

const Home = () => {
  const [items, setItems] = useState([]);

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("drag-item-type", type);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("drag-item-type");
    setItems((prevItems) => [...prevItems, { id: prevItems.length, type }]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // تابع برای ذخیره داده‌ها در localStorage هنگام کلیک روی دکمه
  const handleSaveToLocalStorage = () => {
    localStorage.setItem("savedItems", JSON.stringify(items));
    console.log("Items saved to localStorage:", items);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onDragStart={handleDragStart} />
      <MainContent onDrop={handleDrop} onDragOver={handleDragOver}>
        {items.map((item) => (
          <DragItem key={item.id} type={item.type} />
        ))}
      </MainContent>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <Link href="/output">
          <button
            onClick={handleSaveToLocalStorage}
            style={{ padding: "10px 20px", marginTop: "20px" }}
          >
            Save & View Output
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
