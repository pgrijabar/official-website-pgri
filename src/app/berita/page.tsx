import Image from "next/image";
import Link from "next/link";

export default function BeritaPage() {
    function generateSlug(title: string) {
        return title.toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
      }
    const item = [
    { title: "Judul Berita 1", date: "01 Januari 2025", content: "Isi berita 1...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Pemerintah Umumkan Kebijakan Baru untuk Kendalikan Harga BBM", date: "15 Februari 2025", content: "Isi berita 2...", image: "/tes.png" },
    { title: "Judul Berita 3", date: "30 Maret 2025", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae neque, expedita rerum dolorum ab veritatis laborum saepe qui aspernatur, aliquam impedit, quisquam corporis laudantium explicabo voluptate libero nulla adipisci! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint inventore minus odit amet temporibus, tenetur nobis doloremque minima incidunt praesentium consectetur optio dolorum labore voluptatem veritatis sunt aperiam tempora. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos magnam quidem laborum placeat saepe iste odio accusantium, nemo tempora modi, aliquid, numquam voluptatem. Illum harum libero labore aut. Vitae, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae neque, expedita rerum dolorum ab veritatis laborum saepe qui aspernatur, aliquam impedit, quisquam corporis la", image: "/tes.png" },
    ]

    const sort = item.sort((a, b) => {
        const dateA = new Date(a.date.split(" ").reverse().join("-"));
        const dateB = new Date(b.date.split(" ").reverse().join("-"));
        return dateB.getTime() - dateA.getTime();
    });
  const content = sort[0].content;
  const max = 600;
  const isTruncated = content.length > max;
  const truncated = isTruncated ? content.slice(0, max) : content;
  const baseSlug = generateSlug(sort[0].title);

  return (
    <main className="max-w-7xl mx-auto px-8 py-8 sm:mt-24 mt-18">
        <div className="w-full rounded-md mb-8 md:gap-8 flex md:flex-row flex-col">
            <div className="m- md: justify-center flex md:flex-1 items-center">
                <Image src={sort[0].image} alt="Placeholder Berita" width={200} height={400} />
            </div>
            <div className="font-roboto flex md:flex-5 m-4 ml-0 flex-col justify-center">
                <h1 className="font-bold text-3xl text-black">{sort[0].title}</h1>
                <p className="text-gray-500">{sort[0].date}</p>
                <p className="text-justify mt-2 text-black">
                  {truncated}
                  {isTruncated && (
                    <Link href={`/berita/${baseSlug}`} className="text-[#FB4D4D] ml-1">
                      . Selengkapnya...
                    </Link>
                  )}
                </p>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {sort.slice(1).map((berita, index) => {
            const baseSlug = generateSlug(berita.title);
            return (
              <Link
                key={index}
                href={`/berita/${baseSlug}`}
                className="block h-40 rounded-md shadow overflow-hidden relative group"
                aria-label={berita.title}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 filter grayscale-50 blur-[1px] group-hover:grayscale-0 group-hover:blur-none transition-all duration-300"
                  style={{ backgroundImage: `url(${berita.image})` }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex items-start text-left h-full p-3 text-white flex-col justify-end">
                  <div className="font-bold text-sm">
                    <h1>{berita.title}</h1>
                  </div>
                  <div className="text-xs">
                    <p>{berita.date}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
    </main>
  );
}