import { MeetingDetailsCard } from '@/components/cards/meeting-details-card'
import { useMeetingStore } from '@/store/meetings-store'
import { useEffect } from 'react'

export function getRemainingTimeInHoursAndMinutes(meetingDate: string) {
  const now = new Date()
  const meetingTime = new Date(meetingDate)
  const timeDiff = meetingTime.getTime() - now.getTime()
  const hours = Math.floor(timeDiff / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff / (1000 * 60)) % 60)
  return `${hours}h ${minutes}m`
}

export const AllMeetings = () => {
  const { meetings, getMeetings } = useMeetingStore()

  useEffect(() => {
    getMeetings()
  }, [getMeetings])
  return (
    <div className='col-span-1 md:col-span-3'>
      <div className='flex flex-col gap-4'>
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
  )
}
