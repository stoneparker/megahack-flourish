'use strict'

const { rule } = use('Validator');
class StoreCostType {
  get rules () {
    return {
      name: [
        rule('required')
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

module.exports = StoreCostType
