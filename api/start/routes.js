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

Route.post('user', 'UserController.store').validator('StoreUser')
Route.post('session', 'UserController.session')
Route.put('user/:id', 'UserController.update')
// --
Route.resource('user/:fk_user/goal', 'GoalController').apiOnly().except(['index', 'destroy', 'show']).validator(new Map([
  [['user/:fk_user/goal.store'], ['StoreGoal']],
  // [['user/:fk_user/goal.update'], ['UpdateUser']]
]))
Route.get('user/:fk_user/goal', 'GoalController.show')
Route.delete('goal/:id', 'GoalController.destroy')

// --
Route.resource('cost_type/:fk_costs_type/cost', 'CostController').apiOnly().except(['index', 'destroy', 'show']).validator(new Map([
  [['cost_type/:fk_costs_type/cost.store'], ['StoreCost']],
  // [['cost_type/:fk_costs_type/cost.update'], ['UpdateUser']]
]))
Route.delete('cost/:id', 'CostController.destroy')
Route.get('cost_type/:fk_costs_type/cost', 'CostController.show')
// --
Route.resource('user/:fk_user/debt', 'DebtController').apiOnly().except(['index', 'destroy', 'show']).validator(new Map([
  [['user/:fk_user/debt.store'], ['StoreDebt']],
  // [['cost_type/:fk_costs_type/cost.update'], ['UpdateUser']]
]))
Route.get('user/:fk_user/debt', 'DebtController.show');
Route.delete('debt/:id', 'DebtController.destroy')
// --
Route.resource('user/:fk_user/cost_type', 'CostTypeController').apiOnly().except(['index', 'destroy', 'show']).validator(new Map([
  [['user/:fk_user/cost_type.store'], ['StoreCostType']],
  // [['cost_type/:fk_costs_type/cost.update'], ['UpdateUser']]
]))
Route.get('user/:id_user/cost_type', 'CostTypeController.show')
Route.delete('cost_type/:id', 'CostTypeController.destroy')