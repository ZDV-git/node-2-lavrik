/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import auth from '@adonisjs/auth/services/main'
import router from '@adonisjs/core/services/router'
const PostsController = () => import('#controllers/posts_controller')
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .get('/hello', (ctx) => {
    const child: { id: number; name: string; parent: object | null } = {
      id: 1,
      name: 'name',
      parent: null,
    }
    const parent = { id: 2, name: 'parent', child: child }
    child.parent = parent
    return parent
  })
  .as('Privet')

router.resource('posts', PostsController).except(['create', 'edit'])
