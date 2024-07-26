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
import { format } from 'date-fns/format'

interface MeetingDetailsCardProps {
  time: string
  date: string
  dayOfWeek: string
  remainingTime: string
  name: string
  description: string
}

export const MeetingDetailsCard = ({
  time,
  date,
  remainingTime,
  name,
  description,
  dayOfWeek,
}: MeetingDetailsCardProps) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 w-full h-full gap-2 lg:gap-3 border border-gray-100'>
      <Card className='col-span-1 flex flex-col justify-center pt-1 lg:pb-8'>
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
            <p className='text-base font-semibold'>{time}</p>
          </div>
          <p className='text-xs font-medium text-muted-foreground'>
            Starts in {remainingTime}
          </p>
        </CardContent>
      </Card>

      <Card className='col-span-3 flex flex-col '>
        <CardHeader className='flex flex-col gap-2'>
          <CardDescription>Meeting Name:</CardDescription>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-[14px] font-normal '>{description}</p>
        </CardContent>
      </Card>

      <Card className='col-span-1 flex flex-col '>
        <CardHeader>
          <CardDescription>{dayOfWeek}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-start gap-2'>
          {format(new Date(date), 'PPP')}
          <p className='text-[14px] font-medium'></p>
          <ActionsDialog />
        </CardContent>
      </Card>
    </div>
  )
}
