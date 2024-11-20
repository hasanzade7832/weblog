import Header from "@/components/Header/header";
import Slider from "@/components/Slider/slider";
import ImageGrid from "@/components/ImageGrid/imagegrid";
import MainLastPost from "@/components/MainLastPost/Main/mainLastPost";
import CategoryPost from "@/components/MainLastPost/Main/categoryPost";

export default function Home() {
  return (
    <>
      <Slider />
      <ImageGrid />
      <MainLastPost />
      <CategoryPost  />
    </>
  );
}

