import Image from "next/image";
import { Inter, Unlock } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Clients from "@/components/Clients";
import Community from "@/components/Community";
import Unclock from "@/components/Unclock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
      <Unclock />
    </main>
  );
}
