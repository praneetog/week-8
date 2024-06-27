import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard"
import { VideoGrid } from "@/components/VideoGrid"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
        thumbnail="https://via.placeholder.com/150"
        channelLogo="https://via.placeholder.com/50"
        title="TailwindCSS for Beginners"
        channelName="praneetog"
        views="100K"
        timestamp="2 days ago"
      />
    </div>
  );
}
