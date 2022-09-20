import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find scoop images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // $ means end of string
  expect(scoopImages).toHaveLength(2); // Because we are only returning two elements in handler.js

  // confirm alt text of scoop images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);
  // find topping images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // Confirm alt text of scoop images
  const toppingAltText = toppingImages.map((element) => element.alt);
  expect(toppingAltText).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
