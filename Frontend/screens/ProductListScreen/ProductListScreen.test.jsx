import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor
} from "@testing-library/react-native";
import { ProductListScreen } from "./ProductListScreen";

import api from "./api";

jest.mock("./api");

const products = [
  { id: 1, name: "Snickers" },
  { id: 2, name: "Milky Way" }
];

const loadErrorMessage = "An error occurred while loading the procucts";
const deletingErrorMessage = "An error occurred while deleting the procuct";
const loadingMessage = "Loading…";

describe("ProductList", () => {
  describe("When products are available", () => {
    it("dispaly the products names", () => {
      render(<ProductListScreen products={products} />);

      expect(screen.queryByText(products[0].name)).toBeTruthy();
      expect(screen.queryByText(products[1].name)).toBeTruthy();

      expect(screen.queryByText(loadingMessage)).toBeNull();
      expect(screen.queryByText(loadErrorMessage)).toBeNull();
    });
  });

  describe("when there is a load error", () => {
    it("displays an error message", () => {
      render(<ProductListScreen loadError />);

      expect(screen.queryByText(loadErrorMessage)).toBeTruthy();
      expect(screen.queryByText(loadingMessage)).toBeNull();
    });
  });

  describe("while loading", () => {
    it("displays a loading indicator", () => {
      render(<ProductListScreen loading />);

      expect(screen.queryByText(loadingMessage)).toBeTruthy();
    });
  });

  describe("when adding a product succeeds", () => {
    const name = "Burger Place";
    const addingLabel = "Adding…";

    it("saves the product to the server", async () => {
      api.post.mockResolvedValue();

      const reloadProducts = jest
        .fn()
        .mockName("reloadProducts")
        .mockResolvedValue();

      render(
        <ProductListScreen products={[]} reloadProducts={reloadProducts} />
      );

      fireEvent.changeText(
        screen.getByPlaceholderText("New restaurant name"),
        name
      );
      fireEvent.press(screen.getByText("Add"));
      expect(screen.queryByText(addingLabel)).toBeTruthy();
      expect(screen.getByTestId("add-button")).toHaveProp(
        "accessibilityState",
        { disabled: true }
      );

      expect(api.post).toHaveBeenCalledWith("/restaurants", { name });
      await waitFor(() => expect(reloadProducts).toHaveBeenCalledWith());

      expect(screen.getByPlaceholderText("New restaurant name")).toHaveProp(
        "value",
        ""
      );

      expect(screen.queryByText(addingLabel)).toBeNull();
      expect(screen.getByTestId("add-button")).toHaveProp(
        "accessibilityState",
        { disabled: false }
      );
    });
  });

  describe("when adding a restaurant fails", () => {
    const name = "Burger Place";

    it("shows an error message", async () => {
      api.post.mockRejectedValue();

      render(<ProductListScreen restaurants={[]} />);

      fireEvent.changeText(
        screen.getByPlaceholderText("New restaurant name"),
        name
      );
      fireEvent.press(screen.getByText("Add"));

      await screen.findByText("An error occurred adding the restaurant");
    });
  });

  describe("when deleting a product succeeds", () => {
    it("deletes the product from the server", async () => {
      api.delete.mockResolvedValue();

      const reloadProducts = jest.fn().mockName("reloadProducts");

      render(
        <ProductListScreen
          products={products}
          reloadProducts={reloadProducts}
        />
      );

      fireEvent.press(screen.getAllByText("Delete")[0]);
      expect(screen.queryByText("Deleting…")).toBeTruthy();
      expect(screen.getAllByTestId("delete-button")[0]).toHaveProp(
        "accessibilityState",
        { disabled: true }
      );

      expect(api.delete).toHaveBeenCalledWith(`/restaurants/${products[0].id}`);

      await waitFor(() => expect(reloadRestaurants).toHaveBeenCalledWith());
    });
  });

  describe("when deleting a product fails", () => {
    it("deletes the product from the server", async () => {
      api.delete.mockRejectedValue();

      render(<ProductListScreen products={products} />);

      fireEvent.press(screen.getAllByText("Delete")[0]);

      expect(screen.queryByText("Deleting…")).toBeTruthy();
      expect(screen.getAllByTestId("delete-button")[0]).toHaveProp(
        "accessibilityState",
        { disabled: true }
      );

      await screen.findByText(deletingErrorMessage);

      expect(screen.queryByText("Deleting…")).toBeNull();
      expect(screen.getAllByTestId("delete-button")[0]).toHaveProp(
        "accessibilityState",
        { disabled: false }
      );
    });
  });
});
