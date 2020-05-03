'use strict'

const { rule } = use('Validator');
class StoreGoal {
  get rules () {
    return {
      name: [
        rule('required')
      ],
      value: [
        rule('required'),
        rule('number')
      ],
      proportion: [
        rule('required'),
        rule('in', ['meta', 'metinha', 'metona'])
      ],
      term: [
        rule('required'),
        rule('date'),
        rule('dateFormat', 'YYYY-MM-DD')
      ],
      fk_user: [
        rule('number')
      ]
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreGoal
