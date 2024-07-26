import showToast from '@/lib/us-toast'
import axios from 'axios'

const meetingsApis = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/meetings`,
  withCredentials: true,
})

// Interfaces for Meeting Apis

interface ICreateMeetingRequest {
  name: string
  description: string
  meeting_date: Date
  meeting_time: string
}

interface ICreateMeetingResponse {
  status: string
  message: string
  data: any
}

interface IGetOneMeetingByIDRequest {
  id: string
}

interface IGetMeetingsByDateRequest {
  meeting_date: string
}

interface IGetMeetingsByDateResponse {
  status: string
  meetings: any[]
}

interface IGetOneMeetingResponse {
  status: string
  meeting: any
}
interface IGetAllMeetingsResponse {
  status: string
  meetings: any[]
}

interface IUpdateMeetingRequest {
  id: string
  name?: string
  description?: string
  meeting_date?: Date
  meeting_time?: string
}

interface IUpdateMeetingResponse {
  status: string
  message: string
}

interface IDeleteMeetingRequest {
  id: string
}

interface IDeleteMeetingResponse {
  status: string
  message: string
}

// Create a new meeting
// POST /api/v1/meetings/create
export const createEvent = async (
  data: ICreateMeetingRequest,
): Promise<ICreateMeetingResponse> => {
  try {
    const response = await meetingsApis.post('/create', data)
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}

// Get all meetings
// GET /api/v1/meetings
export const getAllMeetings = async (): Promise<IGetAllMeetingsResponse> => {
  try {
    const response = await meetingsApis.get('/')
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}

// Get one meeting by id
// GET /api/v1/meetings/?id=
export const getOneMeeting = async (
  data: IGetOneMeetingByIDRequest,
): Promise<IGetOneMeetingResponse> => {
  try {
    const response = await meetingsApis.get(`/?id=${data.id}`)
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}

// Get meetings by date
// GET /api/v1/meetings/date?meeting_date=
export const getMeetingsByDate = async (
  data: IGetMeetingsByDateRequest,
): Promise<IGetMeetingsByDateResponse> => {
  try {
    const response = await meetingsApis.get(
      `/date?meeting_date=${data.meeting_date}`,
    )
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}

// Update a meeting
// PUT /api/v1/meetings/update/?id=
export const updateMeeting = async (
  data: IUpdateMeetingRequest,
): Promise<IUpdateMeetingResponse> => {
  try {
    const response = await axios.put(`/api/v1/meetings/update?id=${data.id}`, {
      name: data.name,
      description: data.description,
      meeting_date: data.meeting_date,
      meeting_time: data.meeting_time,
    })
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}

// Delete an meeting
// DELETE /api/v1/meetings/delete?id=
export const deleteMeeting = async (
  data: IDeleteMeetingRequest,
): Promise<IDeleteMeetingResponse> => {
  try {
    const response = await meetingsApis.delete(`/delete?id=${data.id}`)
    return response.data
  } catch (error: any) {
    showToast({
      message: error.response.data.message,
      variant: 'error',
    })
    throw error
  }
}
