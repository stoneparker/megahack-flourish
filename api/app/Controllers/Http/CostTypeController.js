'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const CostType = use('App/Models/CostType')
const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with costtypes
 */
class CostTypeController {
  /**
   * Show a list of all costtypes.
   * GET costtypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new costtype.
   * POST costtypes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const fk_user = params.fk_user;
    const { name, value } = request.only(['name', 'value']);
    const cost_type = await CostType.create({
      name, value, fk_user
    });

    return cost_type//response.json({ id: cost_type.id_cost_type });

  }

  /**
   * Display a single costtype.
   * GET costtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    const user = await User.findOrFail(params.id_user);
    const costsType = await user.costs_type().fetch();

    return costsType;

  }

  /**
   * Update costtype details.
   * PUT or PATCH costtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fk_user = params.fk_user;
    const costType = await CostType.findOrFail(params.id);
    const { name, value } = request.only(['name', 'value']);

    costType.merge({
        name, value, fk_user
     });
     await costType.save();

     return response.status(204).end();
  }

  /**
   * Delete a costtype with id.
   * DELETE costtypes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const costType = await CostType.findOrFail(params.id);
    await costType.delete();

    return response.status(204).end();
  }
}

module.exports = CostTypeController
