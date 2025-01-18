import HomeTopButtons from "@/components/home-topButtons";
import RealCarusel from "@/components/real-carusel";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div className="w-full flex flex-col bg-white min-h-screen mt-4">
      <HomeTopButtons />
      <RealCarusel />
      <Separator />
      <h2>NOUTATI</h2>
      <Separator />
    </div>
  );
}
