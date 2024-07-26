import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DateTimePickerV2 } from './date-time-picker'
import { Calendar } from '@/components/ui/calendar'

export function CalendarTabs() {
  return (
    <Tabs defaultValue='create' className='border border-r-slate-300 flex flex-col h-full'>
      <TabsList className='flex gap-6'>
        <TabsTrigger value='create'>Schedule a Meeting</TabsTrigger>
        <TabsTrigger value='view'>View Meetings</TabsTrigger>
      </TabsList>
      <TabsContent value='create'>
        <DateTimePickerV2 />
      </TabsContent>
      <TabsContent value='view' className='w-full  flex items-center justify-center'>
        <Calendar className='flex '/>
      </TabsContent>
    </Tabs>
  )
}
