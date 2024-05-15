"use client"
import Link from 'next/link'

export const HomeDesign = () => {
  return (
    <div>
      <div className="relative mt-28">
        <div className="flex flex-col gap-2 bg-blue-900 h-[80vh] w-9/12 ml-24 rounded-3xl mt-8 relative">
          <p className="font-thin text-9xl ml-5 mb-0 text-blue-200 z-40">Fast,<br></br>Safe, Social,<br></br>Payments.</p>
          <p className="z-50 mt-5 w-1/3 ml-5 font-thin text-2xl text-left text-white">Pay, get paid, grow a business, and more. Join the tens of millions of people on PayZap.</p>
          <Link href={'/signup'}>
          <button className="border-blue-900 bg-transparent border rounded-full mt-4 px-8 py-2 m-auto ml-4 text-xl hover:bg-blue-900 hover:text-white font-thin">
            Get PayZap
          </button>
        </Link>
        </div>
        <img className="w-5/12 float-right absolute top-20 right-24 z-0" src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=webp&bg=transparent"></img>
      </div>
    </div>
  );
};
