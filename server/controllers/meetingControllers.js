import { StatusCodes } from 'http-status-codes'
import { connection } from '../db.connect.js'

// Create a meeting
// @route POST /api/v1/meetings
export const createMeeting = (req, res) => {
  const { title, description, date, time } = req.body
  connection.query(
    'INSERT INTO meetings (title, description, date, time) VALUES (?, ?, ?, ?)',
    [title, description, date, time],
    (err, result) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: 'Error creating meeting', error: err })
      } else {
        res
          .status(StatusCodes.CREATED)
          .json({ message: 'Meeting created successfully', data: result })
      }
    },
  )
}

// Get all meetings
// @route GET /api/v1/meetings
export const getMeetings = (_, res) => {
  connection.query('SELECT * FROM meetings', (err, result) => {
    if (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error getting meetings', error: err })
    } else {
      res.status(StatusCodes.OK).json({ data: result })
    }
  })
}

// Get meetings by date
// @route GET /api/v1/meetings?date=
export const getMeetingsByDate = (req, res) => {
  const { date } = req.query
  connection.query(
    'SELECT * FROM meetings WHERE date = ?',
    [date],
    (err, result) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: 'Error getting meetings', error: err })
      } else {
        res.status(StatusCodes.OK).json({ data: result })
      }
    },
  )
}

// Update meeting by id
// @route PUT /api/v1/meetings?id=
export const updateMeeting = (req, res) => {
  const { id } = req.query
  const { title, description, date, time } = req.body
  connection.query(
    'UPDATE meetings SET title = ?, description = ?, date = ?, time = ? WHERE id = ?',
    [title, description, date, time, id],
    (err, result) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: 'Error updating meeting', error: err })
      } else {
        res
          .status(StatusCodes.OK)
          .json({ message: 'Meeting updated successfully', data: result })
      }
    },
  )
}

// Delete meeting by id
// @route DELETE /api/v1/meetings?id=
export const deleteMeeting = (req, res) => {
  const { id } = req.query
  connection.query('DELETE FROM meetings WHERE id = ?', [id], (err, result) => {
    if (err) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error deleting meeting', error: err })
    } else {
      res
        .status(StatusCodes.OK)
        .json({ message: 'Meeting deleted successfully', data: result })
    }
  })
}
