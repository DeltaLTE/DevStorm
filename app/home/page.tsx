'use client';

import React from 'react';

const LolMart = () => {
  return (
    <>
      {/* Load Google Fonts directly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
        .font-luckiest {
          font-family: 'Luckiest Guy', sans-serif;
          color: black; /* Warna font tetap hitam */
        }
      `}</style>

      <div className="bg-white text-center">
        <header className="flex justify-between items-center bg-yellow-300 p-4 text-white">
        </header>

        <br />
        <br />
        
        <section className="bg-yellow-200 p-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-luckiest">WELCOME TO LOL MART!</h2>
            <p className="text-lg font-luckiest">THE FUNNIEST PRANK TOOLS, TOYS, AND FOOD STORE IN INDONESIA</p>
            <button className="mt-4 bg-white text-yellow-400 font-luckiest py-2 px-4 rounded">
              SHOP NOW!
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/home.png" alt="Hero Image" className="h-48 -ml-18" />
          </div>
        </section>

        <br />
        <section className="bg-yellow-200 p-2 rounded-[150px]">
          <h3 className="text-2xl font-luckiest">SPECIAL CRAZY PROMO THIS MONTH!</h3>
          <p className="text-lg font-luckiest">BUY 2 PRANK TOOLS, 1 MYSTERIOUS SURPRISE FREE!</p>
        </section>

        <section className="p-6">
          <h4 className="text-xl font-luckiest">Item Recommendation:</h4>
          <div className="flex justify-around flex-wrap mt-4">
            <div className="text-center m-2">
              <img
                src="/accoutrements-archie-mcphee-impulse-im-funny-stuff-disappointed-sigh-funny-gag-gifts-17289520414881.png"
                alt="Disappointed Sigh"
                className="h-24 mx-auto"
              />
              <p className="mt-2 font-luckiest">Disappointed Sigh</p>
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <div className="text-center m-2">
              <img
                src="/alliance-game-distributors-games-ultimate-werewolf-revised-edition-funny-gag-gifts-17299123306657.jpg"
                alt="Ultimate Werewolf"
                className="h-24 mx-auto"
              />
              <p className="mt-2 font-luckiest">Ultimate Werewolf: Revised Edition</p>
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <div className="text-center m-2">
              <img
                src="/91YwJyu2ElL._AC_UF894,1000_QL80_.jpg"
                alt="Gag Bag"
                className="h-24 mx-auto"
              />
              <p className="mt-2 font-luckiest">Gag Bag</p>
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <div className="text-center m-2">
              <img
                src="/cards-against-humanity-games-secret-hitler-game-15443119440008.jpg"
                alt="Hitler Secret Game"
                className="h-24 mx-auto"
              />
              <p className="mt-2 font-luckiest">Hitler Secret Game</p>
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LolMart;