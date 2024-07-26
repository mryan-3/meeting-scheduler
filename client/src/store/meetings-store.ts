import { createMeeting, deleteMeeting, getAllMeetings, getMeetingsByDate, getOneMeeting, updateMeeting } from '@/apis/meeting'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Meeting {
  id?: string
  name: string
  description: string
  meeting_date: string
  meeting_time: string
}

interface MeetingState {
  meetings: Meeting[]
  getMeetings: () => Promise<void>
  getMeetingsById: (id: string) => Promise<void>
  getMeetingsByDate: (date: string) => Promise<Meeting[]>
  createMeeting: (data: Meeting) => Promise<void>
  updateMeeting: (id: string, updatedMeeting: Partial<Meeting>) => Promise<void>
  deleteMeeting: (id: string) => Promise<void>
}

export const useMeetingStore = create<MeetingState>()(
  devtools((set) => ({
    meetings: [],
    getMeetings: async () => {
      try {
        const response = await getAllMeetings()
        set({ meetings: response.meetings })
      } catch (error) {
        console.error('Failed to get meetings', error)
      }
    },
    getMeetingsById: async (id) => {
      try {
        const response = await getOneMeeting({ id })
        set((state) => ({
          meetings: state.meetings.map((meeting) => {
            return meeting.id === id ? response.meeting : meeting
          }),
        }))
      } catch (error) {
        console.error('Failed to get meeting', error)
      }
    },
    getMeetingsByDate: async (date) => {
      try {
        const response = await getMeetingsByDate({ meeting_date: date })
        set({ meetings: response.meetings })
        return response.meetings
      } catch (error) {
        console.error('Failed to get meetings', error)
        return []
      }
    },
    createMeeting: async (data) => {
      try {
        const response = await createMeeting(data)
        set((state) => ({ meetings: [...state.meetings, response.data] }))
      } catch (error) {
        console.error('Failed to create meeting', error)
      }
    },
    updateMeeting: async (id, updatedMeeting) => {
      try {
        const response = await updateMeeting({ id, ...updatedMeeting })
        set((state) => ({
          meetings: state.meetings.map((meeting) => {
            return meeting.id === id ? response.data : meeting
          }),
        }))
      } catch (error) {
        console.error('Failed to update meeting', error)
      }
    },
    deleteMeeting: async (id) => {
      try {
        await deleteMeeting({ id })
        set((state) => ({
          meetings: state.meetings.filter((meeting) => meeting.id !== id),
        }))
      } catch (error) {
        console.error('Failed to delete meeting', error)
      }
    },
  })),
)
