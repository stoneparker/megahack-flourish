'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('user', 'UserController.store')
Route.post('session', 'UserController.session')
Route.put('user/:id', 'UserController.update')
// --
Route.resource('goal', 'GoalController').apiOnly().except(['show'])
Route.get('user/:id/goal', 'GoalController.show')
// --
Route.resource('cost', 'CostController').apiOnly()
// --
Route.resource('debt', 'DebtController').apiOnly()
// --
Route.resource('user/:id_user/cost_type', 'CostTypeController').apiOnly()