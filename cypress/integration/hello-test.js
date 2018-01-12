import { mount } from 'cypress-hyperapp-unit-test'
import { h } from 'hyperapp'
// view function we are testing
const view = (state, actions) =>
  h('div', { class: 'greeting' }, 'Hello, World')
describe('Hello World', () => {
  beforeEach(() => {
    const state = {}
    const actions = {}
    // no state or actions for this simple example
    mount(state, actions, view)
  })
  it('shows greeting', () => {
    // use any Cypress command - we have
    // real Hyperapp application for testing
    cy.contains('.greeting', 'Hello, World')
  })
})