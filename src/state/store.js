/**
 * function used to create our store by getting root reducer in parametter
 * create Store object
 * @param {object} reducer
 */
export function createStore(reducers, preloadedState) {
  let state = {};
  reducers.map(r => {
    let initialState = r();
    state = { ...state, ...initialState };
  });
  /**
   * function constructor for Store object
   * It's just an object with a few methods on it.
   * To create it, pass your root reducing function to createStore.
   * @param {*} state
   */
  return Object.create({
    /**
     * return the current state tree of our application
     */
    getState: function() {
      return state;
    },

    /**
     * this is the only way to trigger a state change
     * it update the state attribute of our store
     * @param {object} action
     */
    dispatch: function(action) {
      let nextState;
      /** todo for multiple reducers */
      reducers.map(r => {
        nextState = r(state, action);
        state = { ...state, ...nextState };
      });
    },
  });
}
