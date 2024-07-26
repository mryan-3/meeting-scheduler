import { CalendarTabs } from '@/components/calendar-tabs'
import { MeetingDetailsCard } from '@/components/cards/meeting-details-card'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col px-4 py-16 gap-4 antialiased md:mx-10 lg:mx-16'>
      <h1 className='text-3xl font-bold text-center'>Meeting Scheduler</h1>
      <p className='text-center'>Very cool meeting scheduler</p>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full justify-center gap-4'>
        <div className='col-span-1'>
          <CalendarTabs />
        </div>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex flex-col gap-4'>
            <MeetingDetailsCard
              date={new Date()}
              dayOfWeek='Monday'
              remainingTime={10}
              time='10:00'
              name='Meeting 1'
              description='Meeting 1 description is a long tome coming to he is a man'
            />

          </div>
        </div>
      </div>
    </div>
  )
}
