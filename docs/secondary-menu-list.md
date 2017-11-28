
##
Things to do:

- pass in some type of information (boolean, secondary? menu component?) as a prop into **menuAppBar.js**.   
- Build the secondary menu component with individual menu items:
  - edit (routes/links to /resources/:id/edit)
  - delete  (routes/links to /resources/:id/delete) (initially disabled until we get delete up and running)

- Create app route for resources and category deletes

- handle the toggle of the secondaryMenu.  Maintain the state within the component.

## LIST ITEMS (NOT SECONDARY MENU)

- Handle the toggle of the listItem such as a item within the list of catetories such as **resource-item.js** or **category-item.js** .  WHen the ellpsis button is clicked toggle the state on or off.  
  - Amend the list of resources in state store with an additional prop called `itemIsToggled`: false.  Within the thunk that retrieves the list of resources or categories, after we retrieve the list, amend each item in the array with a prop/key/property named `itemIsToggled` with a default value of `false`.
  - sample action to dispatch:  

    ```
    {type: TOGGLE_CATEGORIES_LIST_ITEM, payload: "category_basic-needs-assistance"}
    ```

    state before
    ```
    [
      {
      _id: "category_basic-needs-assistance",
      _rev: "6-552082ac0c9d0d015e4a05236daab04a",
      type: "category",
      name: "Basic Needs Assistance",
      shortDesc: "shelter, food, emergency",
      desc: "Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship...",
      icon: "add_circle",
      itemIsToggled: false
      },
      {
      _id: "category_benefits",
      _rev: "5-67242645be39326ca728f8f765f1ed62",
      type: "category",
      name: "Benefits",
      shortDesc: "federal, state, and local agencies",
      desc: "This is a description of the category.  Please provide a good description using the pdf.",
      icon: "add_circle",
      itemIsToggled: false
      },
      ...
      ]

    ```

    after state
    ```
    [
      {
      _id: "category_basic-needs-assistance",
      _rev: "6-552082ac0c9d0d015e4a05236daab04a",
      type: "category",
      name: "Basic Needs Assistance",
      shortDesc: "shelter, food, emergency",
      desc: "Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship...",
      icon: "add_circle",
      itemIsToggled: true
      },
      {
      _id: "category_benefits",
      _rev: "5-67242645be39326ca728f8f765f1ed62",
      type: "category",
      name: "Benefits",
      shortDesc: "federal, state, and local agencies",
      desc: "This is a description of the category.  Please provide a good description using the pdf.",
      icon: "add_circle",
      itemIsToggled: false
      },
      ...
      ]

    ```

    - TOGGLE_RESOURCES_LIST_ITEM
