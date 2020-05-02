'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require("moment");

class User extends Model {
  static get table(){
    return 'users'
  }
  static get primaryKey () {
    return 'id_user'
  }
  static get dates () {
    return super.dates.concat(['birth_date'])
  }
  static formatDates (field, value) {
    if (field === 'birth_date') {
     return moment(value).format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }
  static castDates (field, value) {
    if (field === 'birth_date') {
      return moment(value).format('DD-MM-YYYY')
    }
    return super.formatDates(field, value)
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }

  debts(){
    this.hasMany('App/Models/Debt', 'id_user', 'id_debts')
  }
  costs_type(){
    this.hasMany('App/Models/CostType', 'id_user', 'id_cost_type')
  }
  goals(){
    this.hasMany('App/Model/Goal', 'id_user', 'id_goal')
  }

}

module.exports = User
