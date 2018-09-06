import Home from '@/views/Home'
import Edit from '@/views/Edit'
import Create from '@/views/Create'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '*',
    component: {
      template: '<div><h1>Not found</h1></div>'
    }
  }
]
