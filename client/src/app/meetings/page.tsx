'use client'
import { CalendarTabs } from '@/components/calendar-tabs'
import { MeetingDetailsCard } from '@/components/cards/meeting-details-card'
import {
  getRemainingTimeInHoursAndMinutes,
} from '@/components/layout/all-meetings'
import { useState } from 'react'

export default function Meetings() {
  const [meetings, setMeetings] = useState<any[]>([])
  return (
    <div className='flex min-h-screen flex-col px-4 py-16 gap-4 antialiased md:mx-10 lg:mx-16'>
      <div className='grid grid-cols-1 md:grid-cols-4 w-full justify-center gap-4'>
        <div className='col-span-1'>
          <CalendarTabs setMeetings={setMeetings} />
        </div>
        <div className='col-span-1 md:col-span-3'>
        hey
          <div>
            {meetings.map((meeting, i) => (
              <MeetingDetailsCard
                key={i}
                date={meeting.meeting_date}
                dayOfWeek='Monday'
                remainingTime={getRemainingTimeInHoursAndMinutes(
                  meeting.meeting_date,
                )}
                time={meeting.meeting_time}
                name={meeting.name}
                description={meeting.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
