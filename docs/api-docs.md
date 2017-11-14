# API

[home](../readme.md)

## Getting Started

### Environment Variables


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

[home](../readme.md)




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
  avatarImgURL: "https://blah",
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
    avatarImgURL: "https://blah",
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
    avatarImgURL: "https://blah",
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
GET /resources/resource_va
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
    avatarImgURL: "https://blah",
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
    avatarImgURL: "https://blah",
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
  avatarImgURL: "https://blah",
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
