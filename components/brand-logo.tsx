import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/">
      <div className="w-8 h-8 bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
        <Sparkles className="w-4 h-4 text-white" />
      </div>
    </Link>
  );
}
