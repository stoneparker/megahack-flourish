'use strict'

const { rule } = use('Validator');
class StoreUser {
  get rules () {
    return {
      name: [
        rule('required'),
        rule('max', 45)
      ],
      email: [
        rule('required'),
        rule('email')
      ],
      password: [
        rule('required')
      ],
      birth_date: [
        rule('required'),
        rule('date'),
        rule('dateFormat', 'YYYY-MM-DD')
      ],
      genre: [
        rule('required'),
        rule('in', ['M', 'F'])
      ],
      rent: [
        rule('required'),
        rule('number')
      ]
    }
  }
  get messages() {
    return {
      'genre.in': 'Genre must be one of the following options: M and F '
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = StoreUser
