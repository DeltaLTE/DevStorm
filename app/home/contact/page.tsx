import Image from 'next/image'

export default function Page() {
    return (
            <main className="mt-8 p-20">
                <section>
                    <h2 className="text-xl mb-2">Jika kalian ada pertanyaan atau ingin memesan produk, silahkan hubungi kami melalui sosial media dibawah</h2>
                </section>

                <section>
                    <h2 className="text-xl mb-2">SOCIAL MEDIA:</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Image src="/WhatsApp.png" alt="WhatsApp" width={50} height={50} className='rounded-full'/>
                            <span>081267672379</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/Instagram.png" alt="Instagram" width={50} height={50} className='rounded-full'/>
                            <span>LOLMARTIDN</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Image src="/tiktok.png" alt="TikTok" width={50} height={50} className='rounded-full w-10 h-10'/>
                            <span>@LOLMARTIDN_</span>
                        </li>
                    </ul>
                </section>
            </main>
    );
}