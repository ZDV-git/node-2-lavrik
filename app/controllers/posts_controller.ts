import Post from '#models/post'
import postValidator from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Post.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(postValidator)
    return Post.create(payload)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
