'use strict'

const { rule } = use('Validator');
class StoreDebt {
  get rules () {
    return {
      name: [
        rule('required')
      ],
      term: [
        rule('required'),
        rule('date'),
        rule('dateFormat', 'YYYY-MM-DD')
      ],
      interest: [
        rule('required'),
        rule('number')
      ],
      value: [
        rule('required'),
        rule('number')
      ]
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreDebt
