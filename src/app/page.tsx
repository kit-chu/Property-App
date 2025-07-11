"use client"; // ← ถ้าใช้ Next.js App Router ต้องใส่

import { useState } from "react";
import { ComponentsSearch } from "@/app/components/ComponentsSearch";
import PropertyCard from "@/app/components/ComponentsPropertyCard";
import { useKeenSlider } from "keen-slider/react";
import ComponentsLocationCard from "@/app/components/ComponentsLocationCard";
import ComponentsFeatureCard from "@/app/components/ComponentsFeatureCard";
import { SearchCheck, Bot, Sparkles } from "lucide-react";
import ComponentsAgentCard from "@/app/components/ComponentsAgentCard";
export default function Home() {
  const [selected, setSelected] = useState("SELL");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 3, // ✅ แสดง 3 ตัว
      spacing: 16,
    },
    slideChanged(slider) {
      const newIndex = Math.floor(slider.track.details.rel / 3); // ✅ index ทีละกลุ่ม
      setCurrentIndex(newIndex);
    },
  });

  const properties = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 13000 + index * 500,
    isFeatured: index % 2 === 0,
    status: "For Sale" as const,
    category: "บ้านเดี่ยว",
    title: `บ้านหรู ${index + 1}`,
    location: "ถนนสุขุมวิท, กรุงเทพมหานคร",
    beds: 2,
    baths: 1,
    sqft: 120 + index * 10,
    agentName: "สมชาย",
    agentAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    postedAt: "1 วันที่แล้ว",
  }));

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center flex-col w-full max-w-6xl items-center">
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">
              ยกระดับธุรกิจของคุณด้วยเทคโนโลยี
            </h1>
            <p className="mb-5">
              เราช่วยให้คุณเติบโตได้รวดเร็วยิ่งขึ้น
              ด้วยเครื่องมืออัจฉริยะและโซลูชันที่ออกแบบมาเพื่อคุณโดยเฉพาะ
            </p>
            <DividerSelect selected={selected} setSelected={setSelected} />
          </div>

          <div className="w-full mt-5 flex justify-center items-center">
            <ComponentsSearch />
          </div>
        </div>
      </div>
      <div className="w-full mt-5 px-3 ">
        {/* แสดงรายการ Property */}
        <div className=" w-full mt-10 max-w-7xl mx-auto overflow-hidden flex flex-col pb-15 pt-5 justify-center">
          <div
            ref={sliderRef}
            className="keen-slider px-4 flex" // ✅ เพิ่ม padding ด้านข้าง
          >
            {properties.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <PropertyCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination วงกลม */}
      <div className="flex justify-center gap-2 pb-15">
        {Array.from({
          length: Math.ceil(properties.length / 3),
        }).map((_, i) => (
          <span
            key={i}
            onClick={() => {
              slider.current?.moveToIdx(i * 3); // ไปทีละ 3
              setCurrentIndex(i);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
              currentIndex === i ? "bg-primary scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 pb-15 flex-col items-center text-center">
        <div>
          <h2 className="text-3xl font-bold text-base-content mb-2">
            ค้นหาทำเลน่าสนใจ
          </h2>
          <p className="text-base text-base-content/70 max-w-md">
            สำรวจเมืองยอดนิยมที่มีอสังหาริมทรัพย์ให้เลือกมากมาย
            เพื่อการลงทุนหรืออยู่อาศัย
          </p>
        </div>

        {/* Grid แสดง 6 การ์ด */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ComponentsLocationCard
            imageUrl="/images/bangkok.jpg" // 👈 เปลี่ยนภายหลัง
            location="กรุงเทพฯ"
            total={120}
          />
          <ComponentsLocationCard
            imageUrl="/images/chiangmai.jpg"
            location="เชียงใหม่"
            total={65}
          />
          <ComponentsLocationCard
            imageUrl="/images/phuket.jpg"
            location="ภูเก็ต"
            total={42}
          />
          <ComponentsLocationCard
            imageUrl="/images/khonkaen.jpg"
            location="ขอนแก่น"
            total={30}
          />
          <ComponentsLocationCard
            imageUrl="/images/udonthani.jpg"
            location="อุดรธานี"
            total={25}
          />
          <ComponentsLocationCard
            imageUrl="/images/hatyai.jpg"
            location="หาดใหญ่"
            total={35}
          />
        </div>
      </div>

      <div className="bg-base-200 py-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Why Choose Us</h2>
          <p className="text-base-content/70 max-w-md mx-auto mt-2">
            ทำไมถึงควรเลือกเราในฐานะพาร์ทเนอร์ด้านอสังหาริมทรัพย์
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ComponentsFeatureCard
            icon={<SearchCheck />}
            title="Smart Search"
            description="ค้นหาอสังหาฯ ได้อย่างแม่นยำ ด้วยระบบค้นหาอัจฉริยะจาก AI"
          />

          <ComponentsFeatureCard
            icon={<Bot />}
            title="AI Agent Avatar"
            description="เอเจนต์ AI พูดคุยโต้ตอบแบบเรียลไทม์ พร้อมให้คำแนะนำตลอดการค้นหา"
          />

          <ComponentsFeatureCard
            icon={<Sparkles />}
            title="Personalized Experience"
            description="ระบบแนะนำอสังหาฯ ที่ตรงใจ ตามความสนใจและพฤติกรรมของคุณ"
          />
        </div>
      </div>
      <div className="py-12 bg-base-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-base-content">
            นายหน้าผู้เชี่ยวชาญ
          </h2>
          <p className="text-base text-base-content/70 max-w-xl mx-auto mt-2">
            พบกับทีมงานมืออาชีพที่พร้อมให้คำแนะนำด้านอสังหาริมทรัพย์
            ครอบคลุมพื้นที่ทั่วประเทศ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          <ComponentsAgentCard
            avatarUrl="https://randomuser.me/api/portraits/women/68.jpg"
            name="คุณวราภรณ์ สุขใจ"
            position="นายหน้าประจำโครงการ"
            area="เชียงใหม่ และลำพูน"
            rating={4.9}
            propertyCount={25}
          />
          <ComponentsAgentCard
            avatarUrl="https://randomuser.me/api/portraits/men/22.jpg"
            name="คุณอธิวัฒน์ แสงทอง"
            position="นายหน้าอิสระ"
            area="กรุงเทพฯ และปทุมธานี"
            rating={4.6}
            propertyCount={14}
          />
          <ComponentsAgentCard
            avatarUrl="https://randomuser.me/api/portraits/women/32.jpg"
            name="คุณอารีย์ รุ่งเรือง"
            position="ผู้เชี่ยวชาญอสังหาฯ มือสอง"
            area="ขอนแก่น และอุดรธานี"
            rating={4.8}
            propertyCount={19}
          />
          <ComponentsAgentCard
            avatarUrl="https://randomuser.me/api/portraits/men/85.jpg"
            name="คุณประเสริฐ มงคลชัย"
            position="ที่ปรึกษาด้านการลงทุน"
            area="ภูเก็ต และสุราษฎร์ฯ"
            rating={4.7}
            propertyCount={21}
          />
        </div>
      </div>
      <JoinAsContributorSection />
    </>
  );
}

function JoinAsContributorSection() {
  return (
    <div className="bg-primary text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* ข้อความ */}
        <div>
          <h2 className="text-2xl font-bold">
            เริ่มต้นเป็นผู้เผยแพร่อสังหาฯ กับเรา
          </h2>
          <p className="text-sm opacity-90">
            ไม่ว่าคุณจะเป็นเจ้าของทรัพย์ นายหน้า หรือผู้ที่ต้องการหารายได้เสริม
            — ระบบของเราช่วยให้คุณลงประกาศได้ง่ายและเข้าถึงผู้ซื้อได้จริง
          </p>
        </div>

        {/* ปุ่ม */}
        <div>
          <button className="btn bg-white text-primary hover:bg-primary-content hover:text-white transition-all">
            เริ่มใช้งานทันที
          </button>
        </div>
      </div>
    </div>
  );
}

function DividerSelect({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (val: string) => void;
}) {
  const baseStyle = "btn grow h-10 text-white btn-square";

  return (
    <div className="flex w-full mt-5 gap-2">
      <button
        className={`${baseStyle} ${
          selected === "SELL" ? "bg-green-500" : "bg-gray-800"
        }`}
        onClick={() => setSelected("SELL")}
      >
        SELL
      </button>
      <div className="divider divider-horizontal text-white">OR</div>
      <button
        className={`${baseStyle} ${
          selected === "RANGE" ? "bg-green-500" : "bg-gray-800"
        }`}
        onClick={() => setSelected("RANGE")}
      >
        RANGE
      </button>
    </div>
  );
}
