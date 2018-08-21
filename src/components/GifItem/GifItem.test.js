import React from "react";
import { shallow } from "enzyme";
import GifItem from "./GifItem";

describe("<GifItem/>", () => {
  it("should init props", () => {
    const wrapper = shallow(<GifItem url={"bla"} />);

    const elem = wrapper.find("iframe");
    expect(elem.length).toBe(1);
    expect(elem.prop("src")).toBe("bla");
  });
});
