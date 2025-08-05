import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "STEM",
<<<<<<< HEAD
    description: "A workspace for your team, powered by Stream Chat and Clerk.",
    icons: {
      icon: '/icons.logo.png'
=======
    description: "Video Calling App",
    icons: {
      icon: '/icons.logo.svg'
>>>>>>> c33ccb5 (Part-1)
    }
  };

const HomeLayout = ( { children }:{ children: React.ReactNode} ) => {
  return (
<<<<<<< HEAD
    <main className="relative">
      <Navbar />

      <div className="flex">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
=======
    <main className='relative'>
        <Navbar />
        <div className='flex'>
            <Sidebar />

            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}
                </div>
            </section>
        </div>
>>>>>>> c33ccb5 (Part-1)
    </main>
    )
}

export default HomeLayout
