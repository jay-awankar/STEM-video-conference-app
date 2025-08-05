import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import MobileNav from './MobileNav';

import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="flex-between fixed z-50 w-full bg-[#1C1F2E] px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.png"
=======
    <nav className="flex-between fixed z-50 w-full bg-slate-800 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
>>>>>>> c33ccb5 (Part-1)
          width={32}
          height={32}
          alt="STEM logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          STEM
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
<<<<<<< HEAD
          <UserButton 
            afterSignOutUrl="/sign-in"
            appearance={{
              variables: {
                colorPrimary: 'blue',
                colorText: 'white'
              }
            }}
          />
=======
          <UserButton />
>>>>>>> c33ccb5 (Part-1)
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;