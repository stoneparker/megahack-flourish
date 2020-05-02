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
  costs() {
    return this.hasMany('App/Models/Cost', 'id_cost_type', 'fk_cost_type')
  }
}

module.exports = CostType
