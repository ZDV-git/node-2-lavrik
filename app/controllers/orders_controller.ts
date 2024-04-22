import Order from '#models/order'
import orderValidator from '#validators/order'
import type { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return Order.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(orderValidator)
    return Order.create(payload)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return Order.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const order = await Order.findOrFail(params.id)
    const payload = await request.validateUsing(orderValidator)
    return await order.merge(payload).save()
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const order = await Order.findOrFail(params.id)
    await order.delete()
    return true
  }
}
