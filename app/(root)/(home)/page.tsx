import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {

  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-[url(/images/hero-background.png)] bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="bg-slate-500 max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
<<<<<<< HEAD
            <p className="text-lg font-medium text-[#C9DDFF] lg:text-2xl">{date}</p>
=======
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
>>>>>>> c33ccb5 (Part-1)
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home
