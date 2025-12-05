import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const items = [
    { title: "Judul Berita 1", date: "01 Januari 2025", content: "Isi berita 1...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Judul Berita 3", date: "30 Maret 2025", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae neque, expedita rerum dolorum ab veritatis laborum saepe qui aspernatur, aliquam impedit, quisquam corporis laudantium explicabo voluptate libero nulla adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint inventore minus odit amet temporibus, tenetur nobis doloremque minima incidunt praesentium consectetur optio dolorum labore voluptatem veritatis sunt aperiam tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos magnam quidem laborum placeat saepe iste odio accusantium, nemo tempora modi, aliquid, numquam voluptatem. Illum harum libero labore aut. Vitae, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae neque, expedita rerum dolorum ab veritatis laborum saepe qui aspernatur, aliquam impedit, quisquam corporis la", image: "/tes.png" },
  ];

  const {slug} = await params;
  const item = items.find((it) => slugify(it.title) === slug);

  if (!item) return notFound();

  return (
    <main className="max-w-7xl mx-auto px-8 sm:mt-24 mt-18 py-8"    >
      <Link href="/berita" className="inline-block text-sm text-[#FB4D4D] mb-4">
        ← Kembali ke Berita
      </Link>

      <article className="bg-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-black">{item.title}</h1>
          <p className="text-sm text-gray-500 -mt-2">{item.date}</p>
          <div className="w-full flex justify-center mt-10">
            <Image src={item.image} alt={item.title} width={600} height={360} className="rounded-md object-cover" />
          </div>
          <div className="prose max-w-none mt-8 text-justify text-black">
            {item.content}
          </div>
        </div>
      </article>
    </main>
  );
}
