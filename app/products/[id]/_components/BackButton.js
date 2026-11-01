"use client";

import IconButton from "@/app/_components/ui/IconButton";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <div className="absolute left-3 top-3" onClick={() => router.back()}>
      <IconButton iconName="back" size="lg" />
    </div>
  );
}

export default BackButton;
