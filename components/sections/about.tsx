import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#faefea]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={"/sky-bg.png"}
              width={300}
              height={400}
              alt="Diday's crafting process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-zinc-900 ">
              About Diday&apos;s Corner
            </h2>
            <p className="text-lg text-zinc-600 font-light leading-relaxed">
              Welcome to Diday&apos;s Succulent Corner and Garden Decor!
              We&apos;re a certified business specializing in unique and
              affordable souvenirs for all occasions.
            </p>
            <p className="text-zinc-600 font-light leading-relaxed">
              From personalized mugs to beautiful succulents, each piece is
              crafted with love and attention to detail. Whether you need custom
              invitations for your special day or corporate gifts, we&apos;ve
              got you covered.
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-4 border border-amber-200">
              <p className="font-medium" style={{ color: "#823613" }}>
                💡 Custom designs available - You choose, we create!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
