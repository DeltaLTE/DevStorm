'use client';

import React from 'react';
import Image from 'next/image'; // Untuk logo

const Contact = () => {
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
          <div className="flex items-center">
          </div>
        </header>

        {/* Contact Section */}
        <br />
        <br />
        <br />
        <br />
        <section className="bg-yellow-200 p-6 mt-11 rounded-[50px] max-w-2xl mx-auto"> {/* Kotak dengan sudut bengkok */}
          <h2 className="text-2xl font-luckiest">CONTACT US</h2>
          <br />
          <div className="text-left font-luckiest text-lg">
            <h3>SOCIAL MEDIA:</h3>
            <div className="flex items-center space-x-2 mt-2">
              <Image
                src="/WhatsApp.png" // Ganti dengan path ikon WhatsApp
                alt="WhatsApp"
                width={24}
                height={24}
              />
              <p>081267672379</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Image
                src="/Instagram.png" // Ganti dengan path ikon Instagram
                alt="Instagram"
                width={24}
                height={24}
              />
              <p>LOLMARTIDN</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Image
                src="/tiktok.png" // Ganti dengan path ikon TikTok
                alt="TikTok"
                width={24}
                height={24}
              />
              <p>@LOLMARTIDN</p>
            </div>
            <br />
            <h3>OFFLINE STORE ADDRESS:</h3>
            <p className="mt-2">JL. SETURAN RTM DEPOK, SLEMAN YOGYAKARTA</p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Contact;