import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock4 } from 'lucide-react'
import ActionsDialog from '../actions-dialog'

export const MeetingDetailsCard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 w-full h-full gap-2 lg:gap-3 border border-gray-100'>
      <Card className='col-span-1 flex flex-col justify-center pt-1 lg:pb-8 border border-b-gray-100'>
        <CardHeader>
          <CardTitle>
            <Badge variant='secondary' className='bg-green-300'>
              New
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-start gap-2'>
          <div className='flex items-center gap-1'>
            <Clock4 className='text-muted-foreground' />
            <p className='text-base font-semibold'>9:30AM</p>
          </div>
          <p className='text-xs font-medium text-muted-foreground'>
            Starts in 10 minutes
          </p>
        </CardContent>
      </Card>

      <Card className='col-span-3 flex flex-col '>
        <CardHeader className='flex flex-col gap-2'>
          <CardDescription>Meeting Name:</CardDescription>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-[14px] font-medium '>
            This is a description of the meeting. It can be a short summary, or
            a more detailed description of the meeting.
          </p>
        </CardContent>
      </Card>

      <Card className='col-span-1 flex flex-col '>
        <CardHeader>
          <CardDescription>Thursday</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-start gap-2'>
          <p className='text-[14px] font-medium'>17 July 2022</p>
          <ActionsDialog />
        </CardContent>
      </Card>
    </div>
  )
}
