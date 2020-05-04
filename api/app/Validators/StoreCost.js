'use strict'

const { rule } = use('Validator');
class StoreCost {
  get rules () {
    return {
      name: [
        rule('required')
      ],
      date: [
        rule('required'),
        rule('date'),
        rule('dateFormat', 'YYYY-MM-DD')
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

module.exports = StoreCost
