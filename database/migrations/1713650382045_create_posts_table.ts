import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('title', 256).notNullable()
      table.text('content').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
