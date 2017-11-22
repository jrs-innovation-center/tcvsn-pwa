require('dotenv').config()

const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db
  .bulkDocs([
    {
      _id: 'category_basic-needs-assistance',
      type: 'category',
      name: 'Basic Needs Assistance',
      shortDesc: 'shelter, food, emergency',
      desc:
        'Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship...',
      icon: 'add_circle'
    },
    {
      _id: 'category_benefits',
      type: 'category',
      name: 'Benefits',
      shortDesc: 'federal, state, and local agencies',
      desc:
        'This is a description of the category.  Please provide a good description using the pdf.',
      icon: 'add_circle'
    },
    {
      _id: 'resource_american-red-cross-of-lowcountry-sc',
      categoryId: 'category_basic-needs-assistance',
      name: 'Red Cross',
      formalName: 'American Red Cross of Lowcountry – SC',
      shortDesc: 'employment assistance, separation prep',
      purpose:
        'The American Red Cross provides emergency communication services to military (active duty, National Guard, Reserves, retired, and veterans) and their families, helping them locate and send messages to their loved ones across the globe. When service members return home, they have access to several programs and American Red Cross volunteers who are ready and willing to ease the transition from deployment or discharge into the civilian sector. Programs provided include, but are not limited to, emergency financial assistance referrals, disaster preparedness and response, reconnection and family mental health education, resiliency training to cope with the challenges of life in the military, and supportive transitional services for wounded soldiers and their family members. We also offer volunteer opportunities in all lines of service.  To initiate an Emergency Communication Message, call 1-877-272-7337 when you need to contact a service member in the event of a family emergency. This service is available 365 days a year, 24 hours a day.',
      website: 'http://www.redcross.org/what-we-do/support-military-families',
      contacts: [
        {
          name: 'Jeanne Carmichael',
          office: 'Service to the Armed Forces',
          title: 'Manager',
          phone: '843-764-2323',
          email: 'Jeanne.Carmichael@redcross.org',
          isPrimary: true
        }
      ],
      addresses: [
        {
          isPrimary: true,
          location: '',
          street: '2424 City Hall Lane, Suite A',
          city: 'North Charleston',
          state: 'SC',
          zip: '29406'
        }
      ],
      rank: 10,
      faq: [],
      type: 'resource'
    },
    {
      _id: 'resource_va',
      type: 'resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'VA',
      formalName: 'VA Homeless Prevention Program and Walk-In Clinic',
      shortDesc: 'housing, medical',
      purpose:
        'The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.',
      website: 'http://www.charleston.va.gov/services/homeless/index.asp',
      contacts: [
        {
          name: 'Linda Williams',
          office: 'Ralph H. Johnson Veterans Affairs Medical Center',
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
      _id: 'resource_tap',
      type: 'resource',
      categoryId: 'category_basic-needs-assistance',
      name: 'TAP',
      formalName:
        'Airmen & Family Readiness Center Transition Assistance Program',
      avatarImgURL: 'https://blah',
      shortDesc: 'employment assistance, separation prep',
      purpose:
        'The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs ofarmed services members.',
      website:
        'http://www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness',
      contacts: [
        {
          name: null,
          office: null,
          title: null,
          phone: '843-963-7231',
          email: null,
          isPrimary: true
        }
      ],
      addresses: [
        {
          isPrimary: true,
          location:
            'Airmen & Family Readiness Center Transition Assistance Program',
          street: '104 E. Simpson St, building 500,',
          city: 'Joint Base Charleston',
          state: 'SC',
          zip: '29404'
        }
      ],
      rank: 10,
      faq: []
    }
  ])
  .then(function(result) {
    console.log('attempting to load data. Inspect each result item below: ')
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(function(err) {
    console.log(err)
  })
