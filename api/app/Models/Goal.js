'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Goal extends Model {
  static get table(){
    return 'goals'
  }
  static get primaryKey () {
    return 'id_goal'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }

  goals_payment(){
    return this.hasMany('App/Models/GoalPayment', 'id_goal', 'id_goals_payment')
  }
}

module.exports = Goal
