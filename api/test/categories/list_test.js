const test = require('tape')
const request = require('supertest')
const nock = require('nock')

nock('http://localhost:5984')
  .get('/veteran/')
  .reply(200, { db_name: 'veteran' })

nock('http://localhost:5984', { encodedQueryParams: true })
  .get('/veteran/_all_docs')
  .query({
    include_docs: 'true',
    startkey: '%22category_%22',
    endkey: '%22category_%EF%BF%B0%22',
    inclusive_end: 'true'
  })
  .reply(200, {
    rows: [
      {
        doc: {
          _id: 'category_benefits',
          _rev: '1-606618bbd8fc683e98a48434717a5099',
          type: 'category',
          name: 'Benefits',
          shortDesc: 'federal, state, and local agencies',
          desc:
            'Benefits include federal, state, and local agencies that assist veterans and their families in filing for claims to receive benefits earned as a result of military service.',
          icon: 'card_giftcard'
        }
      }
    ]
  })

const app = require('../../')

test('GET /categories', t => {
  t.plan(1)
  request(app)
    .get('/categories')
    .expect(200)
    .then(res => {
      t.equals(res.body[0]._id, 'category_benefits')
    })
})
