import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeed", async () => {

    window.fetch = jest.fn()
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: "First post"}, {id: 'p2', title: "Second post"}]
    })
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
