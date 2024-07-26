import { getAllMeetings } from '@/apis/meeting'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'


interface Meeting {
    id: number
    title: string
    description: string
    meeting_date: Date
    meeting_time: string
}

interface MeetingsState {
    meetings: Meeting[]
    createMeeting: (meeting: Meeting) => void
    getAllMeetings: () => void
    updateMeeting: (id: string, updatedMeeting: Partial<Meeting>) => void
    deleteMeeting: (id: number) => void
}

export const useMeetingsStore = create<MeetingsState>()(
    devtools((set) => ({
        meetings: [],
        createMeeting: (meeting) => set((state) => ({ meetings: [...state.meetings, meeting] })),
        getAllMeetings: async () => {
            try{
                const response = await getAllMeetings()
                set({ meetings: response.meetings })
            } catch (error) {
               console.error('Failed to get meetings', error)
            }
        },
        updateMeeting: async (id, updatedMeeting) => {
            set((state) => (
                { meetings: state.meetings.map((meeting) => (meeting.id === id ? { ...meeting, ...updatedMeeting } : meeting)) }
            ))
        },
        deleteMeeting: async (id) => {
            set((state) => (
                { meetings: state.meetings.filter((meeting) => meeting.id !== id) }
            ))
        }
    })),
)
