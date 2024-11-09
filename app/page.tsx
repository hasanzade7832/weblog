import Header from "@/components/Header/header";
import Slider from "@/components/Slider/slider";
import ImageGrid from "@/components/ImageGrid/imagegrid";
import MainLastPost from "@/components/MainLastPost/mainLastPost";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Slider />
      </div>
      <div className="mt-10">
        <ImageGrid />
      </div>
      <div className="mt-60 md:mt-40 lg:mt-10">
        <MainLastPost />
      </div>
    </>
  );
}
