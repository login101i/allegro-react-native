import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved
} from "@testing-library/react-native";
import { ProductRow } from "./ProductRow";

describe("ProductRow", () => {

  const product = { name: "Milky Way" };

  it("displays the restaurant name", () => {
    render(<ProductRow product={product} />);

    expect(screen.getByText(product.name)).toBeTruthy();
  });

  it("delete product succeeds", () => {
    const onDelete = jest.fn().mockName("onDelete");

    render(<ProductRow onDelete={onDelete} product={product} />);

    fireEvent.press(screen.queryByText("Delete"));

    expect(screen.queryByText("Deleting…")).toBeTruthy();
    expect(screen.getByTestId("delete-button")).toHaveProp(
      "accessibilityState",
      {
        disabled: true
      }
    );
    expect(onDelete).toHaveBeenCalledWith();
  });

  it("delete product fails", async () => {
    const onDelete = jest.fn().mockName("onDelete").mockRejectedValue();

    render(<ProductRow onDelete={onDelete} product={product} />);

    fireEvent.press(screen.queryByText("Delete"));
    expect(screen.queryByText("Deleting…")).toBeTruthy();
    expect(screen.getByTestId("delete-button")).toHaveProp(
      "accessibilityState",
      {
        disabled: true
      }
    );

    expect(onDelete).toHaveBeenCalledWith();


    await waitForElementToBeRemoved(()=>screen.getByText("Deleting.."))

    expect(screen.getByTestId("delete-button")).toHaveProp(
      "accessibilitystate",
      { disabled: false }
    );
  });
});
