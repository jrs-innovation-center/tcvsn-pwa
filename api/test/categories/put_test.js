const test = require('tape')
const request = require('supertest')
const nock = require('nock')

//nock.recorder.rec()

nock('http://localhost:5984')
  .get('/veteran/')
  .reply(200, { db_name: 'veteran' })

nock('http://localhost:5984', { encodedQueryParams: true })
  .put('/veteran/category_benefits', {
    type: 'category',
    name: 'Benefits',
    shortDesc: 'federal, state, and local agencies',
    desc:
      'Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.',
    icon: 'card_giftcard',
    _id: 'category_benefits',
    _rev: '1-1'
  })
  .reply(200, { ok: true })

const app = require('../../')

test('PUT /categories/category_benefits', t => {
  t.plan(1)
  request(app)
    .put('/categories/category_benefits')
    .send({
      _id: 'category_benefits',
      _rev: '1-1',
      type: 'category',
      name: 'Benefits',
      shortDesc: 'federal, state, and local agencies',
      desc:
        'Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.',
      icon: 'card_giftcard'
    })
    .expect(200)
    .then(res => {
      t.ok(res.body.ok)
    })
})
