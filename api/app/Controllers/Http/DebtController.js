'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Debt = use('App/Models/Debt')
const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with debts
 */
class DebtController {
  /**
   * Show a list of all debts.
   * GET debts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new debt.
   * POST debts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const fk_user = params.fk_user;
    const { name, value, interest, term } = request.only(['name', 'value', 'interest', 'term'])

    const debt = await Debt.create({
      name, value, interest, term, fk_user
    });

    return response.json({ id: debt.id_debts });
  }

  /**
   * Display a single debt.
   * GET debts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response}) {
    const user = await User.findOrFail(params.fk_user);
    const debts = await user.debts().fetch();

    return debts;
  }


  /**
   * Update debt details.
   * PUT or PATCH debts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fk_user = params.fk_user;
    const { name, value, interest, term } = request.only(['name', 'value', 'interest', 'term']);

    const debts = await Debt.findOrFail(params.id);

    debts.merge({
      name, value, interest, term, fk_user
    });

    await debts.save();
    return response.status(204).end();
  }

  /**
   * Delete a debt with id.
   * DELETE debts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const debts = await Debt.findOrFail(params.id);
    await debts.delete();

    return response.status(204).end();
  }
}

module.exports = DebtController
