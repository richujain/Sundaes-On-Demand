import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //   // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i }); // $ means end of string
  expect(scoopImages).toHaveLength(2); // Because we are only returning two elements in handler.js

  //   // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
