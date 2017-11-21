# Veteran Resource Base API

[Docs](../readme.md)

This API manages the representation of many resources (organizations) filled with dedicated men and women committed to serving our veterans and families. There can be no doubt that these people care a great deal
for our warriors. We are grateful for the sacrifices of our veterans and their families. Now,
please receive our gratitude and our desire to serve you with that same spirit of excellence.

## Getting Started

Instructions on how to get a developer up and running on the Veteran Resource Base API api in a local, development environment.

> The instructions assume node >= 7x and you have access to a CouchDB installation on either your local machine or in the cloud as a DBaas, such as Cloudant.

```
$ git clone https://github.com/jrs-innovation-center/tcvsn-pwa.git
$ cd tcvsn-pwa
```

## Create a database in CouchDB

Using either a local installation of CouchDB or a DBaaS such as Cloudant, create a new database.  If your using a DBaaS, create an API key and/or ensure the key as admin rights to the database.  Admin rights are needed for creating indexes within the database.  

Using the principle of least privilege, you may wish to create a second API key for your API.  This key may only provide read, write access to the database.  

> Tip: After creating your API Key or keys, you will need to write both the key and password down and keep it secure and safe.  In the following step, you will use the key and password to create a `COUCHDB_URL` as an environment variable.

## API Environment Variables

### **.env**

- At the root of **api** folder, copy the **.env-sample** file as **.env** file.  Modify the following environment variables.  If you're using a DBaaS, use the key, password, and CouchDB base url to derive the value of `COUCHDB_URL`.  If you aren't using a DBaaS and are running couchDB locally, just use the  CouchDB base url.  See example below.  Use your newly created database name as the value of `COUCHDB_NAME`.  Provide a `PORT` number, such as 4000, that does not conflict with other port numbers in your project.:

  - `COUCHDB_URL`
  - `COUCHDB_NAME`
  - `PORT`

For example, here are example values for `COUCHDB_URL` and `COUCHDB_NAME` environment variables for an instance of CouchDB DBaaS running in IBM Blue Mix's Cloudant service:

> Warning:  Keep your API password/secret safe!  Be sure your **.env** file is referenced within your **.gitignore**.  Do not expose the secret in GitHub or anywhere else.  If your secret is compromised, you will need to regenerate a new API key and secret and update your application.

```
COUCHDB_URL=https://<API KEY>:<API PASSWORD>@<BASE URL TO CLOUDANT.com>/
COUCHDB_NAME=veteran
```

**Complete DBaaS URL Example**

```
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

// would produce something such as:
// const db = new PouchDB(https://arencharlynaturousfeli7:287bb97bafee05f3d2fb7840371182d3d2534red@90629927-b1a9-4251-9b99-f76bd577tedx8-bluemix.cloudant.com/veteran)
```

### Installing Dependencies and starting our API

After you have successfully provided the values for your environment variables, install dependencies, load data, load indexes, and start the api.  See `scripts` within the **package.json** for details:

**YARN EXAMPLE**

```
$ yarn
$ yarn load
$ yarn loadIndex
$ yarn start
```

**NPM EXAMPLE**

```
$ npm install
$ npm run load
$ npm run loadIndex
$ npm start
```

Check your terminal and verify the API starts.  Attempt the following HTTP requests using a client such as your browser or POSTman.

```
GET http://localhost:5000/resources
```

## Basics

### Scheme

Once deployed, this API will communicate over HTTPS.  Locally on your development environment, you can run this API under HTTP.

### Authorization

No authorization at this time.  Authorization will be included in future releases.

### Request Headers

The following request headers are required when calling the API:

- `Content-Type` - The `Content-Type` request header should include a value of `application/json` and is required when providing content within the body of a request.

### Date Format

Date are formatted to the ISO 8601 standard.

### HTTP Verbs

VERB     | Description
-------- | ----------------------------
GET      | Use to retrieve all resources (organizations) and resource categories via `\resources`, `\categories` and a single resource and a single category via `\resources\{id}`, and `\categories\{id}`.
POST     | Used to create a resource (organization) and resource category via `\resources` and `\categories`.
PUT      | Used to update a resource (organization) and resource category via `\resources\{id}` and a breed via `\categories\{id}`.
DELETE   | Used to delete `\resources\{id}` and `\categories\{id}`.


### Content Types

All endpoints accept and return data formatted as JSON.   See Request Headers.

### Status Code

- [200 - OK](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success)
- 201 - Created
- 400 - Bad Request
- 404 - Not Found
- 500 - Internal Server Error
- 429 - Too Many Request


### Filtering

TODO: talk about the endpoints that have a filter query string and provide a couple of examples.


## Categories

## POST /categories

Adds a category to the collection of categories.  When adding a category the `name`, `short desc`, and `desc` are required fields.

** Sample Request **

  ```
  POST /categories

  {
    name: "Benefits",
    shortDesc: ""
    desc: "federal, state, and local agencies",
    icon: "fa-user-md"
  }
  ```

** Sample 201 Response **

```
{
  "ok": true,
  "id": "category_benefits",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

## GET /categories/{id}

Gets a category from the collection of categories.  

** Sample Request **

```
GET /categories/benefits
```

** Sample 200 Response **

```
{
  _id: "category_benefits",
  _rev: "1-A6157A5EA545C99B00FF904EEF05FD9F",
  type: "category",
  name: "Benefits",
  shortDesc: ""
  desc: "federal, state, and local agencies",
  icon: "fa-whatevs"
}
```

## PUT /categories/{id}

Edits the category object. Only visible for admin
Edits a category from the collection of categories.  When adding a category the `_id`,`_rev`,`type`,`name`, `short desc`, and `desc` are required fields

** Sample Request **

```
PUT /categories/benefits

{
  _id: "category_benefits",
  _rev: "1-A6157A5EA545C99B00FF904EEF05FD9F",
  type: "category",
  name: "Benefits",
  shortDesc: "Benefits"
  desc: "federal, state, and local agencies",
  icon: "fa-whatevs"
}
```

** Sample 202 Response **

```
{
  ok: true,
  _id: "category_benefits",
  _rev: "2-A6157A5EA545C99B00FF904EEF05FF32"
}
```

## DELETE /categories/{id}

** Sample Request **

```
DELETE /categories/benefits
```

** Sample 200 Response **

```
{
  "ok":true,
  _id: "category_benefits",
  "rev":"3-A6157A5EA545C99B00FF904EEF05FF32"
}
```

## GET /categories

Retrieves a list of resource categories.

** Sample Request **

```
GET /categories
```

** Sample 200 Response **

```
[
  {
    _id: "category_basic-needs-assistance",
    _rev: "1-A6157A5EA545C99B00FF904EEF05F999",
    type: "category",
    name: "Basic Needs Assistance",
    shortDesc: "shelter, food, emergency",
    desc: "Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship.",
    icon: "fa-whatevs"
  },
  {
    _id: "category_benefits",
    _rev: "1-A6157A5EA545C99B00FF904EEF05FD9F",
    type: "category",
    name: "Benefits",
    shortDesc: ""
    desc: "federal, state, and local agencies",
    icon: "fa-whatevs"
  }, ...
]
```

## Resources

## POST /resources

Adds a resource to the collection of resources.  When adding a resource the `categoryId`, `name`, `formalName`, `short desc`, `purpose`, `website` and `desc` are required fields.

** Sample Request **

  ```
  POST /resources

{
  categoryId: "category_basic-needs-assistance",
  name: "VA",
  formalName: "VA Homeless Prevention Program and Walk-In Clinic",
  shortDesc: "housing, medical",
  purpose: "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.",
  website: "http://www.charleston.va.gov/services/homeless/index.asp",
  contacts: [
    {name: "Linda Williams", office: null, title: "", phone: "843-577-5011", email: null, isPrimary: true}
  ],
  addresses: [
    {
      isPrimary: true,
      location: "Ralph H. Johnson Veterans Affairs Medical Center",
      street:  "109 Bee Street",
      city: "Charleston",
      state: "SC",
      zip: "29401"
    }],
  rank: 10,
  faq: [
    {question: "What are you office hours?", answer: "M-F 9 a.m. to 4 p.m. except federal holidays.", sort: 10},
    {question: "What forms of payment do you accept?", answer: "cash, debit, credit", sort: 20},
  ]
}
}
  ```

** Sample 201 Response **

```
{
ok: "true",
_id: "resource_va",
_rev: "1-A6157A5EA545C99B00FF904EEF094035U"
}

```

## GET /resources

Retrieves a list of resources.

** Sample Request **

```
GET /resources
```

** Sample 200 Response **

```
[
  {
    _id: "resource_va",
    _rev: "1-A6157A5EA545C99B00FF904EEF094035U",
    type: "resource",
    categoryId: "category_basic-needs-assistance",
    name: "VA",
    formalName: "VA Homeless Prevention Program and Walk-In Clinic",
    shortDesc: "housing, medical",
    purpose: "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.",
    website: "http://www.charleston.va.gov/services/homeless/index.asp",
    contacts: [
      {name: "Linda Williams", office: null, title: "", phone: "843-577-5011", email: null, isPrimary: true}
    ],
    addresses: [
      {
        isPrimary: true,
        location: "Ralph H. Johnson Veterans Affairs Medical Center",
        street:  "109 Bee Street",
        city: "Charleston",
        state: "SC",
        zip: "29401"
      }],
    rank: 10,
    faq: [
      {question: "What are you office hours?", answer: "M-F 9 a.m. to 4 p.m. except federal holidays.", sort: 10},
      {question: "What forms of payment do you accept?", answer: "cash, debit, credit", sort: 20},
    ]
  },
  {
    _id: "resource_TAP",
    _rev: "1-A6157A5EA545C99B00FF904EEF094035U",
    type: "resource",
    categoryId: "category_basic-needs-assistance",
    name: "TAP",
    formalName: "Airmen & Family Readiness Center Transition Assistance Program",
    shortDesc: "employment assistance, separation prep",
    purpose: "The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs ofarmed services members.",
    website: "http://www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness",
    contacts: [
      {name: null, office: null, title: null, phone: "843-963-7231", email: null, isPrimary: true}
    ],
    addresses: [
      {
        isPrimary: true,
        location: "Airmen & Family Readiness Center Transition Assistance Program",
        street:  "104 E. Simpson St, building 500,",
        city: "Joint Base Charleston",
        state: "SC",
        zip: "29404"
      }],
    rank: 10,
    faq: []
  }, ...
]
```

## GET /resources/{id}

Retrieves a specific resources.

** Sample Request **

```
GET /resources/va
```

** Sample 200 Response **

```
  {
    _id: "resource_va",
    _rev: "1-A6157A5EA545C99B00FF904EEF094035U",
    type: "resource",
    categoryId: "category_basic-needs-assistance",
    name: "VA",
    formalName: "VA Homeless Prevention Program and Walk-In Clinic",
    shortDesc: "housing, medical",
    purpose: "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.",
    website: "http://www.charleston.va.gov/services/homeless/index.asp",
    contacts: [
      {name: "Linda Williams", office: null, title: "", phone: "843-577-5011", email: null, isPrimary: true}
    ],
    addresses: [
      {
        isPrimary: true,
        location: "Ralph H. Johnson Veterans Affairs Medical Center",
        street:  "109 Bee Street",
        city: "Charleston",
        state: "SC",
        zip: "29401"
      }],
    rank: 10,
    faq: [
      {question: "What are you office hours?", answer: "M-F 9 a.m. to 4 p.m. except federal holidays.", sort: 10},
      {question: "What forms of payment do you accept?", answer: "cash, debit, credit", sort: 20},
    ]
  }
```

## SEARCH /resources

Returns a listing of resources by filtering on the resource `name` property.

** Sample Request **

```
GET /resources?filter=name:VA
```

** Sample 200 Response **

```
  {
    _id: "resource_va",
    _rev: "1-A6157A5EA545C99B00FF904EEF094035U",
    type: "resource",
    categoryId: "category_basic-needs-assistance",
    name: "VA",
    formalName: "VA Homeless Prevention Program and Walk-In Clinic",
    shortDesc: "housing, medical",
    purpose: "The Ralph H. Johnson Veterans Affairs Medical Center offers a walk-in clinic for veterans searching for re-housing assistance and means to prevent homelessness. In addition to referral services, the walk-in clinic offers basic outpatient medical care.",
    website: "http://www.charleston.va.gov/services/homeless/index.asp",
    contacts: [
      {name: "Linda Williams", office: null, title: "", phone: "843-577-5011", email: null, isPrimary: true}
    ],
    addresses: [
      {
        isPrimary: true,
        location: "Ralph H. Johnson Veterans Affairs Medical Center",
        street:  "109 Bee Street",
        city: "Charleston",
        state: "SC",
        zip: "29401"
      }],
    rank: 10,
    faq: [
      {question: "What are you office hours?", answer: "M-F 9 a.m. to 4 p.m. except federal holidays.", sort: 10},
      {question: "What forms of payment do you accept?", answer: "cash, debit, credit", sort: 20},
    ]
  }
```


## UPDATE /resources/{id}

Updates an existing specific resource.

** Sample Request **

```
PUT /resources/:id

{
  _id: "resource_TAP",
  _rev: "1-A6157A5EA545C99B00FF904EEF094035U",
  type: "resource",
  categoryId: "category_basic-needs-assistance",
  name: "TAP",
  formalName: "Airmen & Family Readiness Center Transition Assistance Program",
  shortDesc: "employment assistance, separation prep",
  purpose: "The Airman & Family Readiness Center assists all Reserves, Active Duty, National Guard, retired veterans and civilian employees regardless of branch. The Transition Assistance Program (TAP) assists those associated specifically with the United States Air Force and prepares separating, retiring, and demobilizing service members and their families with skills and knowledge to facilitate a successful transition from life in the military to the civilian sector. The first step in the transition process is to complete the congressionally-mandated pre-separation counseling session, which provides detailed information on the various benefits and services available to separating members. Each Family Readiness Center is staffed to provide personalized assistance for all transition-related needs ofarmed services members.",
  website: "http://www.jbcharleston.com/youth-and-family/air-base/airman-a-family-readiness",
  contacts: [
    {name: Diane Schaffer, office: Airmen & Family Readiness, title: Director, phone: "843-963-7231", email: d.schaffer@us.af.mil, isPrimary: true}
  ],
  addresses: [
    {
      isPrimary: true,
      location: "Airmen & Family Readiness Center Transition Assistance Program",
      street:  "104 E. Simpson St, building 500,",
      city: "Joint Base Charleston",
      state: "SC",
      zip: "29404"
    }],
  rank: 10,
  faq: []
}, ...
```

** Sample 200 Response **

```
{
ok: "true",
_id: "resource_TAP",
_rev: "2-A6157A5EA545C99B00FF904EEF094035U"
}
```

## DELETE /resources/{id}

Deletes the provided resource from the resource list.

** Sample Request **

```
DELETE /resources/va
```

** Sample 200 Response **

```
[
  {
    _id: "resource_va",
    _rev: "1-A6157A5EA545C99B00FF904EEF05F999",
    ok: true
  }
]
```

[Docs](../readme.md)
