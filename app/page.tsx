import { Mode } from "@/components/shape/mode";
import TacheItem from "@/components/shape/tacheItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Mode />
      <TacheItem
        title="tache1"
        description="lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu"
        date="2023/12/11"
        isCompleted={false}
        id="1"
      />
      <TacheItem
        title="tache1"
        description="lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu"
        date="2023/12/11"
        isCompleted={true}
        id="1"
      />
      <TacheItem
        title="tache1"
        description="lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu"
        date="2023/12/11"
        isCompleted={false}
        id="1"
      />
      <TacheItem
        title="tache1"
        description="lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu"
        date="2023/12/11"
        isCompleted={false}
        id="1"
      />
      <TacheItem
        title="tache1"
        description="lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu lorem ipsu"
        date="2023/12/11"
        isCompleted={false}
        id="1"
      />
    </div>
  );
}
