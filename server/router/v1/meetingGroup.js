import { Router } from 'express'
import { createMeeting, getMeetings, getMeetingsByDate, deleteMeeting, updateMeeting } from '../../controllers/meetingControllers.js'
const router = Router()

router.post('', createMeeting)
router.get('/', getMeetings)
router.get('', getMeetingsByDate)
router.put('', updateMeeting)
router.delete('', deleteMeeting)

export default router
