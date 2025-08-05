import React from 'react'
<<<<<<< HEAD
import {
    Dialog,
    DialogContent,
    DialogTitle,
=======

import {
    Dialog,
    DialogContent,
    
    
    DialogTitle,
    
>>>>>>> c33ccb5 (Part-1)
  } from "@/components/ui/dialog"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
<<<<<<< HEAD
=======
  

>>>>>>> c33ccb5 (Part-1)
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: React.ReactNode;
    handleClick?: () => void;
    buttonText?: string;
<<<<<<< HEAD
    image?: string;
=======
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
>>>>>>> c33ccb5 (Part-1)
    buttonIcon?: string;
  }

const MeetingModal = ({
    isOpen,
    onClose,
    title,
    className,
    children,
    handleClick,
    buttonText,
<<<<<<< HEAD
    image,
=======
    instantMeeting,
    image,
    buttonClassName,
>>>>>>> c33ccb5 (Part-1)
    buttonIcon,
  }: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<<<<<<< HEAD
    <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-[#1C1F2E] px-6 py-9 text-white'>
=======
    <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-slate-900 px-6 py-9 text-white'>
>>>>>>> c33ccb5 (Part-1)
        <div className='flex flex-col gap-6'>
            {image && (
                <div className='flex justify-center'>
                    <Image src={image} alt="image" width={72} height={72} />
                </div>
            )}
            <DialogTitle className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</DialogTitle>
            {children}
            <Button
                className={
                "bg-[#0E78F9] focus-visible:ring-0 focus-visible:ring-offset-0"
                }
                onClick={handleClick}
            >
                {buttonIcon && (
                <Image
                    src={buttonIcon}
                    alt="button icon"
                    width={13}
                    height={13}
                />
                )}{" "}
                &nbsp;
                {buttonText || "Schedule Meeting"}
            </Button>
        </div>
    </DialogContent>
    </Dialog>
<<<<<<< HEAD
=======

>>>>>>> c33ccb5 (Part-1)
  )
}

export default MeetingModal
