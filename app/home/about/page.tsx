import Image from 'next/image'

export default function Page() {
    return (
            <main className="mt-8 p-20">
                <section>
                    <h2 className="text-xl mb-2">COMPANY DESCRIPTION:</h2>
                    <p>
                        LOLMART: Your one-stop shop for unique & fun creations!<br />
                        At LOLMART, we believe life should be full of laughter, surprises, and self-expression. That’s why we specialize in selling custom-made unique items, prank tools, quirky accessories, stylish hoodies & apparel, and one-of-a-kind snacks that you won’t find anywhere else!
                    </p>
                    <p className="mt-2">
                        Our mission is to bring fun and creativity into everyday life with products that spark joy, create unforgettable moments, and let you express your unique personality. Whether you’re looking for the perfect prank, a bold fashion statement, or a snack that challenges your taste buds, LOLMART has got you covered!
                    </p>
                </section>

                <section>
                    <br/>
                    <h2 className="text-xl mb-2">OFFLINE STORE ADDRESS:</h2>
                    <p>Jl. Seturan RT.III Depok, Sleman Yogyakarta</p>
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
                            <Image src="/tiktok.png" alt="TikTok" width={50} height={50} className='rounded-full'/>
                            <span>@LOLMARTIDN_</span>
                        </li>
                    </ul>
                </section>
            </main>
    );
}