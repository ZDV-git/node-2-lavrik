import vine from '@vinejs/vine'

const postValidator = vine.compile(
  vine.object({
    title: vine.string().minLength(10).maxLength(256),
    content: vine.string().minLength(20).maxLength(1000),
  })
)

export default postValidator
