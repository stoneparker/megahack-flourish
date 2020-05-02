'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Goal = use('App/Models/Goal')
const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with goals
 */
class GoalController {
  /**
   * Show a list of all goals.
   * GET goals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new goal.
   * POST goals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    const { name, value, proportion, term } = request.post();
    const fk_user = params.id;

    const goal = await Goal.create({
      name, value, proportion, term, fk_user
    });

    return response.json({ id: goal.id_goal });
  }

  /**
   * Display a single goal.
   * GET goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const user = await User.findOrFail(1);
    const goals = await user.goals().fetch();

    return goals;
  }

  /**
   * Update goal details.
   * PUT or PATCH goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const fk_user = params.fk_user;
    const { name, value, proportion, term } = request.only(['name', 'value', 'proportion', 'term']);
    const goal = await Goal.findOrFail(params.id);

    goal.merge({
      name, value, proportion, term, fk_user
    });
    await goal.save();

    return response.status(204).end();
  }

  /**
   * Delete a goal with id.
   * DELETE goals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    const goal = await Goal.findOrFail(params.id);
    await goal.delete();

    return response.status(204).end();
  }
}

module.exports = GoalController
