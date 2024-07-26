import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { UpdateMeetingForm } from './forms/update-meeting-form'

export default function ActionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Meeting</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Actions</DialogTitle>
          <DialogDescription>
            Make changes to your  here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <UpdateMeetingForm />
      </DialogContent>
    </Dialog>
  )
}
