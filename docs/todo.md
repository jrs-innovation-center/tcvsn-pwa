## LIST resources

- Dispatch initial when the app is loaded: within **index.js** --> `store.dispatch(setResources)`
- GET resources from API (GET /resources) will return an array of resource objects
- Action creator (Thunk)
  - dispatch an action object: {type: SET_RESOURCES, payload: resources??? }
  - make constants.js and add a constant for SET_RESOURCES
- update our state with the array
  - need a reducer
    - SWITCH / CASE for action.type  for SET_RESOURCES
    - return action.payload to emit a new state containing our resources array
      - state:

         ```
         {
           resources: [{},{}, {}]
         }
         ```
