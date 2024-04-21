import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 256).notNullable()
      table.string('phone', 20)
      table.string('email', 100)
      table.date('date')
      table.time('time')
      table.integer('duration')
      table.enum('type', ['corporative', 'birthday', 'masterclass'])
      table.string('slag').unique()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
