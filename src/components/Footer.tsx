import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#393939] pt-6 px-0 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 px-8">
        <div className="flex items-center gap-4">
          <Image src="/pgri.png" alt="Logo" width={150} height={150} />
        </div>
        <div className="flex flex-col gap-2 text-white text-sm">
          <div className="font-bold mb-1 border-b-2 border-[#FB4D4D] w-fit pb-1">Hubungi Kami</div>
          <div className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>Jl. Talaga Bodas No.56, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat 40263</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <a href="mailto:pgrijabar@gmail.com" className="underline">pgrijabar@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">•</span>
            <span>+62 812 2490 5256</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white text-sm md:ml-12">
          <div className="font-bold mb-1 border-b-2 border-[#FB4D4D] w-fit pb-1">Media Sosial</div>
          <div className="flex items-center gap-2">
            <span className="text-lg">■</span>
            <span>@pgrijabar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">■</span>
            <span>pgrijabar</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">■</span>
            <span>pgrijabar</span>
          </div>
        </div>
      </div>
      <div className="bg-[#FB4D4D] text-white text-xs text-center py-2 mt-6 mb-0">
        © Pengurus besar persatuan guru republik Indonesia | Created by Rafli Rafiansyah
      </div>
    </footer>
  );
}
