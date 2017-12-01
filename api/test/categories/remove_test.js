const test = require('tape')
const request = require('supertest')
const nock = require('nock')

//nock.recorder.rec()

nock('http://localhost:5984')
  .get('/veteran/')
  .reply(200, { db_name: 'veteran' })

nock('http://localhost:5984', { encodedQueryParams: true })
  .post('/veteran/_find', { selector: { categoryId: 'category_benefits' } })
  .reply(200, { docs: [] })

nock('http://localhost:5984')
  .get('/veteran/category_benefits')
  .query({})
  .reply(200, {
    _id: 'category_benefits',
    _rev: '1-1'
  })

nock('http://localhost:5984', { encodedQueryParams: true })
  .delete('/veteran/category_benefits')
  .query({ rev: '1-1' })
  .reply(200, { ok: true })

const app = require('../../')

test('DELETE /categories/category_benefits', t => {
  t.plan(1)
  request(app)
    .delete('/categories/category_benefits')
    .expect(200)
    .then(res => {
      t.ok(res.body.ok)
    })
})
