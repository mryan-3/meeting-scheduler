import * as z from 'zod'

export const MeetingFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Event name is required' })
    .max(100, { message: 'Event name is too long' }),
  description: z
    .string()
    .min(1, { message: 'Event name is required' })
    .max(1000, { message: 'Event name is too long' }),
  meeting_date: z.date({
    required_error: 'Date is required!.',
  }),
  meeting_time: z.date({
    required_error: 'Time is required!.',
  })
})
