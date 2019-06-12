import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import BlogScreen from "./screens/BlogScreen";

const initialState = {
  action: ""
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <BlogScreen />
  </Provider>
);

export default App;
