/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/no-debugging-utils */
import { shallow, mount } from "enzyme";
import App from "./App";
import { Main } from "./components/layout/Main";

/**
 * Factory funcion to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test]='${val}'`);

test("renders App without crashing", () => {
  const wrapper = setup();
  //console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test("renders the main component", () => {
  const wrapper = setup();
  expect(wrapper.find(Main).length).toBe(1);
});
