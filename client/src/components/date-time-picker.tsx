'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cn } from '../lib/utils'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { ScrollArea } from './ui/scroll-area'
import { toast } from 'sonner'
import { CalendarIcon } from 'lucide-react'
import { MeetingFormSchema } from '@/lib/event'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useMeetingStore } from '@/store/meetings-store'

export function DateTimePickerV2() {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState<string>('05:00')
  const [date, setDate] = useState<Date | null>(null)
  const form = useForm<z.infer<typeof MeetingFormSchema>>({
    resolver: zodResolver(MeetingFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const createMeeting = useMeetingStore((state) => state.createMeeting)


  async function onSubmit(data: z.infer<typeof MeetingFormSchema>) {
    const formatTime = data.meeting_time.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    const formatDate = data.meeting_date.toISOString().split('T')[0]

    await createMeeting({
      name: data.name,
      description: data.description,
      meeting_date: formatDate,
      meeting_time: formatTime,
    })

    toast.success(`Meeting at: ${formatDate} ${formatTime}`)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <div className='flex flex-col justify-between w-full gap-6  p-4 '>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete='off'
                      autoCorrect='off'
                      type='text'
                      placeholder='Enter the name of the meeting'
                      className='placeholder:text-primary'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meeting Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Description of the meeting'
                      className='placeholder:text-primary'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='meeting_date'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full'>
                  <FormLabel>Date</FormLabel>
                  <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            `${format(field.value, 'PPP')}, ${time}`
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        captionLayout='buttons'
                        selected={date || field.value}
                        onSelect={(selectedDate) => {
                          const [hours, minutes] = time?.split(':')!
                          selectedDate?.setHours(
                            parseInt(hours),
                            parseInt(minutes),
                          )
                          setDate(selectedDate!)
                          field.onChange(selectedDate)
                        }}
                        onDayClick={() => setIsOpen(false)}
                        fromYear={2000}
                        toYear={new Date().getFullYear()}
                        disabled={(date) =>
                          Number(date) < Date.now() - 1000 * 60 * 60 * 24
                        }
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription className='text-[11px] font-semibold text-black'>
                    Set your date and time.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='meeting_time'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={time!}
                      onValueChange={(e) => {
                        setTime(e)
                        if (date) {
                          const [hours, minutes] = e.split(':')
                          const newDate = new Date(date.getTime())
                          newDate.setHours(parseInt(hours), parseInt(minutes))
                          setDate(newDate)
                          field.onChange(newDate)
                        }
                      }}
                    >
                      <SelectTrigger className='font-normal focus:ring-0 w-[120px]'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <ScrollArea className='h-[15rem]'>
                          {Array.from({ length: 96 }).map((_, i) => {
                            const hour = Math.floor(i / 4)
                              .toString()
                              .padStart(2, '0')
                            const minute = ((i % 4) * 15)
                              .toString()
                              .padStart(2, '0')
                            return (
                              <SelectItem key={i} value={`${hour}:${minute}`}>
                                {hour}:{minute}
                              </SelectItem>
                            )
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className='mx-4' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
    </>
  )
}
