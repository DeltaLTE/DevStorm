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
                    <br/>
                    <h1>Anggota Kelompok:</h1>
                    <div className='flex justify-between'>
                        <div className='p-2'>
                            <Image src='/kayla.jpg' alt='gambar fortuna' width={500} height={500}></Image>
                            <h2>Chaila Zefanya W.</h2>
                        </div>

                        <div className='p-2'>
                            <Image src='/fortun.jpeg' alt='gambar fortuna' width={500} height={500}></Image>
                            <h2>Fortuna Natalina S.</h2>
                        </div>

                        <div className='p-2'>
                            <Image src='/prilla.jpg' alt='gambar fortuna' width={500} height={500}></Image>
                            <h2>Prilla Diah Mawarni</h2>
                        </div>

                        <div className='p-2'>
                            <Image src='/jose.jpeg' alt='gambar fortuna' width={500} height={500}></Image>
                            <h2>Jose Morinho Ngadio</h2>
                        </div>
                    </div>
                
                </section>
            </main>
    );
}