'use client'
import { CalendarTabs } from '@/components/calendar-tabs'
import { AllMeetings } from '@/components/layout/all-meetings'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col px-4 py-16 gap-4 antialiased md:mx-10 lg:mx-16'>
      <div className='grid grid-cols-1 md:grid-cols-4 w-full justify-center gap-4'>
        <div className='col-span-1'>
          <CalendarTabs />
        </div>
        <div className='col-span-1 md:col-span-3'>
          <div className='flex flex-col gap-4'>
            <AllMeetings />
          </div>
        </div>
      </div>
    </div>
  )
}
