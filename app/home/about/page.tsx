'use client';

import React from 'react';

const About = () => {
  return (
    <>
      {/* Load Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        .font-luckiest {
          font-family: 'Luckiest Guy', sans-serif;
          color: black;
        }
      `}</style>

      <div className="bg-white text-center">
        {/* Header */}
        <header className="flex justify-between items-center bg-yellow-400 p-4 text-white">
        </header>

        {/* Company Description Section */}
        <br />
        <section className="bg-yellow-200 p-5 mt-11 rounded-[140px]"> {/* Menggunakan rounded-[20px] untuk lekukan lebih besar */}
          <h2 className="text-2xl font-luckiest">COMPANY DESCRIPTION:</h2>
          <br />
          <p className="text-lg font-luckiest">
            LOLMART: YOUR ONE-STOP SHOP FOR UNIQUE & FUN CREATIONS! AT LOLMART, WE BELIEVE LIFE SHOULD BE FULL OF LAUGHTER, SURPRISES, AND SELF-EXPRESSION. THAT'S WHY WE SPECIALIZE IN SELLING CUSTOM-MADE UNIQUE ITEMS, PRANK TOOLS, QUIRKY ACCESSORIES, STYLISH HOODIES & APPAREL, AND ONE-OF-A-KIND SNACKS THAT YOU WON'T FIND ANYWHERE ELSE!
          </p>
          <br />
          <p className="text-lg font-luckiest">
            OUR MISSION IS TO BRING FUN AND CREATIVITY INTO EVERYDAY LIFE WITH PRODUCTS THAT SPARK JOY, CREATE UNFORGETTABLE MOMENTS, AND LET YOU EXPRESS YOUR UNIQUE PERSONALITY. WHETHER YOU'RE LOOKING FOR THE PERFECT PRANK, A BOLD FASHION STATEMENT, OR A SNACK THAT CHALLENGES YOUR TASTE BUDS, LOLMART HAS GOT YOU COVERED!
          </p>
        </section>

        {/* Management Team Section */}
        <br />
        <section className="bg-yellow-200 p-3 rounded-[140px]"> {/* Menggunakan rounded-[20px] untuk lekukan lebih besar */}
          <h2 className="text-2xl font-luckiest">MANAGEMENT TEAM:</h2>
          <div className="flex justify-around flex-wrap mt-4">
            <div className="text-center m-2">
              <img
                src="/kayla.jpg" // Ganti dengan path gambar yang sesuai
                alt="Kayla"
                className="h-32 w-32 rounded-full mx-auto object-cover"
              />
              <p className="mt-2 font-luckiest">KAYLA</p>
            </div>
            <div className="text-center m-2">
              <img
                src="/prilla.jpg" // Ganti dengan path gambar yang sesuai
                alt="Prilla"
                className="h-32 w-32 rounded-full mx-auto object-cover"
              />
              <p className="mt-2 font-luckiest">PRILLA</p>
            </div>
            <div className="text-center m-2">
              <img
                src="/jose.jpeg" // Ganti dengan path gambar yang sesuai
                alt="Jose"
                className="h-32 w-32 rounded-full mx-auto object-cover"
              />
              <p className="mt-2 font-luckiest">JOSE</p>
            </div>
            <div className="text-center m-2">
              <img
                src="/fortun.jpeg" // Ganti dengan path gambar yang sesuai
                alt="Fortuna"
                className="h-32 w-32 rounded-full mx-auto object-cover"
              />
              <p className="mt-2 font-luckiest">FORTUNA</p>
            </div>
          </div>
        </section>
        <br />
      </div>
    </>
  );
};

export default About;