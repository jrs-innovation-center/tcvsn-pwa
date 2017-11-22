require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
console.log(
  'loading data to :',
  process.env.COUCHDB_URL + process.env.COUCHDB_NAME
)
const data = [
  {
    name: 'Basic Needs Assistance',
    shortDesc: 'shelter, food, emergency EDIT THIS',
    desc:
      'Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship.',
    icon: 'help',
    type: 'category'
  },
  {
    name: 'Basic Needs Assistance Feeding',
    shortDesc: 'shelter, food, emergency, feeding',
    desc:
      'Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship.I AM HUNGRY',
    icon: 'help'
  },
  {
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'VA',
    formalName: 'VA Homeless Prevention Program and Walk-In Clinic',
    avatarImgURL: 'https://blah',
    shortDesc: 'housing, medical',
    purpose:
      'The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.',
    website: 'http://www.charleston.va.gov/services/homeless/index.asp',
    contacts: [
      {
        name: 'Linda Williams',
        office: null,
        title: '',
        phone: '843-577-5011',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        isPrimary: true,
        location: 'Ralph H. Johnson Veterans Affairs Medical Center',
        street: '109 Bee Street',
        city: 'Charleston',
        state: 'SC',
        zip: '29401'
      }
    ],
    rank: 10,
    faq: [
      {
        question: 'What are you office hours?',
        answer: 'M-F 9 a.m. to 4 p.m. except federal holidays.',
        sort: 10
      },
      {
        question: 'What forms of payment do you accept?',
        answer: 'cash, debit, credit',
        sort: 20
      }
    ]
  },
  {
    type: 'resource',
    categoryId: 'category_basic-needs-assistance',
    name: 'VA_SC',
    formalName: 'VA Homeless Prevention Program and Walk-In Clinic',
    avatarImgURL: 'https://blah',
    shortDesc: 'housing, medical',
    purpose:
      'The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.',
    website: 'http://www.charleston.va.gov/services/homeless/index.asp',
    contacts: [
      {
        name: 'Linda Williams',
        office: null,
        title: '',
        phone: '843-577-5011',
        email: null,
        isPrimary: true
      }
    ],
    addresses: [
      {
        isPrimary: true,
        location: 'Ralph H. Johnson Veterans Affairs Medical Center',
        street: '109 Bee Street',
        city: 'Charleston',
        state: 'SC',
        zip: '29401'
      }
    ],
    rank: 10,
    faq: [
      {
        question: 'What are you office hours?',
        answer: 'M-F 9 a.m. to 4 p.m. except federal holidays.',
        sort: 10
      },
      {
        question: 'What forms of payment do you accept?',
        answer: 'cash, debit, credit',
        sort: 20
      }
    ]
  }
]
db
  .bulkDocs(data)
  .then(res => console.log('Successfully loaded data!'))
  .catch('An error has occurred will loading data')
