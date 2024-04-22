import vine from '@vinejs/vine'
import { DateTime } from 'luxon'

const orderValidator = vine.compile(
  vine.object({
    name: vine.string().minLength(2).maxLength(256),
    phone: vine.string().minLength(6).maxLength(20),
    email: vine.string().email(),
    date: vine
      .date({ formats: ['YYYY-DD-MM'] })
      .after('today')
      .transform((dt) => DateTime.fromJSDate(dt)),
    time: vine
      .date({ formats: ['hh:mm'] })
      .after('today')
      .transform((dt) => DateTime.fromJSDate(dt)),
    duration: vine.number(),
    type: vine.enum(['corporative', 'birthday', 'masterclass']),
    slag: vine.string(),
  })
)

export default orderValidator
