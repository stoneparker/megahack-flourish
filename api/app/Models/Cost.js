'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require("moment");

class Cost extends Model {
  static get table(){
    return 'costs'
  }
  static get primaryKey () {
    return 'id_cost'
  }
  static get dates () {
    return super.dates.concat(['date'])
  }
  static formatDates (field, value) {
    if (field === 'date') {
     return moment(value).format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }
  static castDates (field, value) {
    if (field === 'date') {
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

  costs_type(){
    return this.belongsTo('App/Models/CostType', 'id_cost', 'id_cost_type')
  }
}

module.exports = Cost
