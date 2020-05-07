import axios from "axios";
import mumbleRequest from "../../request/mumbleRequest";

jest.mock("axios");

describe("validate Mumble Request", () => {
  test("mumbled correctly", async () => {
    axios.post.mockResolvedValue({ data: { result: "A-Bb-Ccc-Dddd" } });
    const response = await mumbleRequest("abcd");
    expect(response.result).toEqual("A-Bb-Ccc-Dddd");
  });
});
