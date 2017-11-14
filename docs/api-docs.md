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
