'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const moment = require("moment");

class Debt extends Model {
  static get table(){
    return 'debts'
  }
  static get primaryKey () {
    return 'id_debts'
  }
  static get dates () {
    return super.dates.concat(['term'])
  }
  static formatDates (field, value) {
    if (field === 'term') {
     return moment(value).format('YYYY-MM-DD')
    }
    return super.formatDates(field, value)
  }
  static castDates (field, value) {
    if (field === 'term') {
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

  debts_payment(){
    return this.hasMany('App/Models/DebtPayment', 'id_debts', 'id_debts_payment')
  }

}

module.exports = Debt
