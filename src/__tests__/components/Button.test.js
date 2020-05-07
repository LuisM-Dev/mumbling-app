/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Button from "../../components/Button/Button";

Enzyme.configure({ adapter: new EnzymeAdapter() });

// const findComponent = (wrapper,dataTest) => wrapper.find(`[data-test='${dataTest}']`);

describe("test button component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  test("button renders", () => {
    expect(wrapper).toBeTruthy();
  });

  test("button text renders correctly", () => {
    expect(wrapper.find("[data-test='component-button']").text()).toEqual(
      "Mumble"
    );
  });
});
