'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CostType extends Model {
  static get table(){
    return 'costs_type'
  }
  static get primaryKey () {
    return 'id_cost_type'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  debts(){
    this.belongsTo('App/Models/User', 'id_cost_type', 'id_user')
  }
}

module.exports = CostType
