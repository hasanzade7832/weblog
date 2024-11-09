import Header from "@/components/Header/header";
import Slider from "@/components/Slider/slider";
import ImageGrid from "@/components/ImageGrid/imagegrid";
import CartLastPOst from "@/components/BoxLastPost/boxlastpost";
import MainLastPost from "@/components/MainLastPost/mainLastPost"


export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Slider />
      </div>
      <div>
        <ImageGrid />
      <div>
        <CartLastPOst
        
        title="عنوان کارت دوم"
                    description="توضیحات مربوط به کارت دوم"
                    imageUrl='/image/flower6.webp'
                    buttons={[
                        { label: 'نویسنده', icon: '👤', color: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
                        { label: '6 ماه پیش', icon: '📅', color: 'bg-gray-300', hoverColor: 'hover:bg-gray-400' },
                        { label: 'مقاله', icon: '📄', color: 'bg-yellow-500', hoverColor: 'hover:bg-yellow-600' },
                    ]}
        />
      </div>
      </div>
      <div>
        <MainLastPost />
      </div>
    </>
  );
}
