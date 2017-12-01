# Veteran Support API

**Version:** 1.0.0

### /resources

---

##### **_POST_**

**Description:** create new resource

**Parameters**

| Name | Located in | Description     | Required | Schema                |
| ---- | ---------- | --------------- | -------- | --------------------- |
| body | body       | Resource Object | Yes      | [Resource](#resource) |

**Responses**

| Code | Description                     | Schema |
| ---- | ------------------------------- | ------ |
| 200  | Success                         | object |
| 400  | Missing body or required fields | object |

##### **_GET_**

**Description:** list resources

**Parameters**

| Name   | Located in | Description | Required | Schema |
| ------ | ---------- | ----------- | -------- | ------ |
| filter | query      |             | No       | string |

**Responses**

| Code | Description | Schema                    |
| ---- | ----------- | ------------------------- |
| 200  | Success     | [ [Resource](#resource) ] |

### /resources/{id}

---

##### **_GET_**

**Description:** get resource by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id   | path       |             | Yes      | string |

**Responses**

| Code | Description | Schema                |
| ---- | ----------- | --------------------- |
| 200  | Success     | [Resource](#resource) |
| 500  | Error       |

##### **_PUT_**

**Description:** update resource

**Parameters**

| Name | Located in | Description     | Required | Schema                |
| ---- | ---------- | --------------- | -------- | --------------------- |
| id   | path       |                 | Yes      | string                |
| body | body       | Resource Object | Yes      | [Resource](#resource) |

**Responses**

| Code | Description                     | Schema |
| ---- | ------------------------------- | ------ |
| 200  | Success                         | object |
| 400  | Missing body or required fields | object |

##### **_DELETE_**

**Description:** remove resource by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| id   | path       |             | Yes      | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200  | Success     | object |

### /categories

---

##### **_POST_**

**Description:** Adds a category to the collection of categories. When adding a
category the `name`, `short desc`, and `desc` are required fields.

**Parameters**

| Name | Located in | Description     | Required | Schema                |
| ---- | ---------- | --------------- | -------- | --------------------- |
| body | body       | Category Object | Yes      | [Category](#category) |

**Responses**

| Code | Description                     | Schema |
| ---- | ------------------------------- | ------ |
| 200  | Success                         | object |
| 400  | Missing body or required fields | object |

### Models

---

### Resource

| Name         | Type            | Description                          | Required |
| ------------ | --------------- | ------------------------------------ | -------- |
| _id          | string          |                                      | No       |
| categoryId   | string          | reference identifier to category doc | No       |
| name         | string          | name of resource for veteran         | No       |
| formalName   | string          | Long Name description of resource    | No       |
| shortDesc    | string          | Short Name of resource               | No       |
| purpose      | string          | long description of resource         | No       |
| website      | string:         | url of website                       | No       |
| primaryPhone | string          | primary contact phone number         | No       |
| rank         | integer         | resource rank                        | No       |
| faq          | [ [Faq](#faq) ] |                                      | No       |

### Faq

| Name     | Type    | Description               | Required |
| -------- | ------- | ------------------------- | -------- |
| _id      | string  |                           | No       |
| question | string: | Frequently Asked Question | No       |
| answer   | string  | Answer to question        | No       |

### Category

| Name      | Type   | Description                   | Required |
| --------- | ------ | ----------------------------- | -------- |
| id        | string |                               | No       |
| name      | string | name of category              | No       |
| shortDesc | string | short description of category | No       |
| icon      | string | icon class name               | No       |
