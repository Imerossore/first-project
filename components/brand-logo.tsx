import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/">
      <Image
        src={"/brand-logo.jpg"}
        width={50}
        height={50}
        alt="Diday's Corner Logo"
        className="rounded-full object-cover"
      />
    </Link>
  );
}
