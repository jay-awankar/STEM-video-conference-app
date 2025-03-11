"use client"

import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { toast } from 'sonner';
import Loader from './Loader';


const MeetingTypeList = () => {

    const router = useRouter();
    const [meetingState, setMeetingState] = useState<
        'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
    >(undefined);
    const { user } = useUser();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: '',
      });
    const [callDetail, setCallDetail] = useState<Call>();

    const createMeeting = async () => {
        if (!client || !user) return;
        try {
            if (!values.dateTime) {
                toast('Please select a date and time');
                return;
            }
            const id = crypto.randomUUID();

            const call = client.call('default', id);
            if (!call) throw new Error('Failed to create meeting');

            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || 'Instant Meeting';

            await call.getOrCreate({
                data: {
                starts_at: startsAt,
                custom: {
                    description,
                    },
                },
            });
            
            setCallDetail(call);

            if (!values.description) {
                router.push(`/meeting/${call.id}`);
            }
            toast('Meeting Created');
        } catch (error) {
            console.error(error);
            toast('Failed to create Meeting');
        }
    }

    if (!client || !user) return <Loader />;

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
        <HomeCard 
              img="/icons/add-meeting.svg"
              title="New Meeting"
              description="Start an instant meeting"
              handleClick={() => setMeetingState('isInstantMeeting')}
              className="bg-[#FF742E]"
        />
        <HomeCard 
              img="/icons/schedule.svg"
              title="Schedule Meeting"
              description="Plan your meeting"
              handleClick={() => setMeetingState('isScheduleMeeting')}
              className="bg-[#0E78F9]"
        />
        <HomeCard 
              img="/icons/recordings.svg"
              title="View Recordings"
              description="Check out your recordings"
              handleClick={() => setMeetingState('isJoiningMeeting')}
              className="bg-[#830EF9]"
        />
        <HomeCard 
              img="/icons/join-meeting.svg"
              title="Join Meeting"
              description="via invitation link"
              handleClick={() => router.push('/recordings')}
              className="bg-[#F9A90E]"
        />

        <MeetingModal 
            isOpen={meetingState === 'isInstantMeeting'}
            onClose={() => setMeetingState(undefined)}
            title="Start an Instant Meeting"
            className="text-center"
            buttonText="Start Meeting"
            handleClick={createMeeting}
        />
    </section>
  )
}

export default MeetingTypeList
