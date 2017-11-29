import { compose, join, props } from 'ramda'

export const searchStringBuilder = arrProps =>
  compose(join(' '), props(arrProps))

// example call to searchStringBuilder with an array of props to search within a document.
// searchStringBuilder(['name', 'formalName', 'shortDesc'])
// searchStringBuilder will return a function that accepts a document which contains
//  at least one of the props passed into arrProps parameter.

/*
const doc = {
_id: "resource_vocational_rehabilitation_ralph_h._johson_va_medical_center",
_rev: "1-e5c86f109bebe2dc7f378c38dc854ccd",
type: "resource",
organization: "general",
categoryId: "category_employment",
name: "Vocational Rehabilitation",
formalName: "Vocational Rehabilitation, Ralph H. Johnson VA Medical Center",
shortDesc: "assisting the homeless, unemployed and those with disabilities with employment services",
}

searchStringBuilder(['name', 'formalName', 'shortDesc'])(doc)  // ->  "Vocational Rehabilitation Vocational Rehabilitation, Ralph H. Johnson VA Medical Center assisting the homeless, unemployed and those with disabilities with employment services"
*/
