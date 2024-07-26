import * as z from 'zod'

export const MeetingFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Event name is required' })
    .max(100, { message: 'Event name is too long' }),
  description: z
    .string()
    .min(1, { message: 'Event name is required' })
    .max(100, { message: 'Event name is too long' }),
  datetime: z.date({
    required_error: 'Date & time is required!.',
  }),
})
