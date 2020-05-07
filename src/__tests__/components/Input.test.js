/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Input from "../../components/Input/Input";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("test button component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Input change={() => {}} value="Hello" dataTest="mumble-input" />
    );
  });

  test("button renders", () => {
    expect(wrapper).toBeTruthy();
  });

  test("input text renders correctly", () => {
    expect(wrapper.find("[data-test='mumble-input']").props().value).toEqual(
      "Hello"
    );
  });
});
