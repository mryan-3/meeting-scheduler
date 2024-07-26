import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DateTimePickerV2 } from './date-time-picker'
import { Calendar } from '@/components/ui/calendar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useMeetingStore } from '@/store/meetings-store'
import { format } from 'date-fns/format'

interface CalendarTabsProps {
  setMeetings?: (meetings: any[]) => void
}

export function CalendarTabs({ setMeetings }: CalendarTabsProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const { getMeetingsByDate } = useMeetingStore()

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd')
      console.log(formattedDate)
      getMeetingsByDate(formattedDate).then((data) => {
        if (setMeetings) {
          setMeetings(data)
        }
      })
    }
  }, [selectedDate, getMeetingsByDate, setMeetings])

  return (
    <Tabs
      defaultValue={
        window.location.pathname === '/meetings' ? 'view' : 'create'
      }
      className='flex flex-col h-full shadow:md'
    >
      <TabsList className='flex gap-2 bg-white'>
          <TabsTrigger value='create'>Schedule a Meeting</TabsTrigger>
          <TabsTrigger value='view'>View Meetings</TabsTrigger>
      </TabsList>
      <TabsContent value='create'>
        <DateTimePickerV2 />
      </TabsContent>
      <TabsContent
        value='view'
        className='w-full  flex items-center justify-center'
      >
        <Calendar
          onDayClick={(date: Date) => setSelectedDate(date)}
          className='flex '
        />
      </TabsContent>
    </Tabs>
  )
}
