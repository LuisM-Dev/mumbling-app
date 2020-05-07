/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "../../App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("test App component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders correctly", () => {
    expect(wrapper.find("[data-test='component-app']")).toBeTruthy();
  });

  test("renders intial components correctly", () => {
    expect(wrapper.find("[data-test='card-header']")).toBeTruthy();
    expect(wrapper.find("[data-test='mumble-input']")).toBeTruthy();
    expect(wrapper.find("[data-test='mumble-button']")).toHaveLength(1);
    expect(wrapper.find("[data-test='mumble-output']")).toHaveLength(0);
  });

  test("renders title correclty", () => {
    expect(wrapper.find("[data-test='card-header']").props().title).toEqual(
      "Mumbling"
    );
    expect(wrapper.find("[data-test='card-header']").props().subheader).toEqual(
      "The Official App"
    );
  });

  test("renders result component correctly", () => {
    wrapper = shallow(<App initialResponse="abcd" />);
    expect(wrapper.find("[data-test='mumble-output']")).toHaveLength(1);
  });
});
