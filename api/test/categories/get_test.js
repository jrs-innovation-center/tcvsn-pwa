const test = require('tape')
const request = require('supertest')
const nock = require('nock')

//nock.recorder.rec()

nock('http://localhost:5984')
  .get('/veteran/')
  .reply(200, { db_name: 'veteran' })

nock('http://localhost:5984')
  .get('/veteran/category_benefits?')
  .reply(200, {
    _id: 'category_benefits',
    _rev: '1-606618bbd8fc683e98a48434717a5099',
    type: 'category',
    name: 'Benefits',
    shortDesc: 'federal, state, and local agencies',
    desc:
      'Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.',
    icon: 'card_giftcard'
  })

const app = require('../../')

test('GET /categories/category_benefits', t => {
  t.plan(1)
  request(app)
    .get('/categories/category_benefits')
    .expect(200)
    .then(res => {
      t.equals(res.body._id, 'category_benefits')
    })
})
