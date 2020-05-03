'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Cost = use('App/Models/Cost');
const CostType = use('App/Models/CostType')
/**
 * Resourceful controller for interacting with costs
 */
class CostController {
  /**
   * Show a list of all costs.
   * GET costs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new cost.
   * POST costs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const { name, value, date } = request.only(['name', 'value', 'date']);
    const fk_cost_type = params.fk_costs_type;
    const cost = await Cost.create({
      name, value, date, fk_cost_type
    });

    return response.json({ id: cost.id_cost });
  }

  /**
   * Display a single cost.
   * GET costs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request }) {
    const costsType = await CostType.findOrFail(params.fk_costs_type);
    const costs = await costsType.costs().fetch();

    return costs;

  }

  /**
   * Update cost details.
   * PUT or PATCH costs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fk_cost_type = params.fk_costs_type;
    const { name, date, value } = request.only(['name', 'date', 'value'])
    const cost = await Cost.findOrFail(params.id);

    cost.merge({
      name, value, date, fk_cost_type
    })

    await cost.save();
    return response.status(204).end();
  }

  /**
   * Delete a cost with id.
   * DELETE costs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cost = await Cost.findOrFail(params.id);
    await cost.delete();

    return response.status(204).end();
  }
}

module.exports = CostController
