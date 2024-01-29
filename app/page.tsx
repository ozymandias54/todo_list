import { Mode } from "@/components/shape/mode";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Mode />
    </div>
  );
}
