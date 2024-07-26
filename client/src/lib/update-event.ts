import * as z from 'zod'

export const UpdateFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  meeting_date: z.date({}),
  meeting_time: z.date({}),
})
