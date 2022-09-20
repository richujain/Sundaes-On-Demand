// Write test to ensure that
// 1. Checkbox is unchecked by default
// 2. Checking checkbox enables button
// 3. Unchecking checkbox again disables button

//Install UserEvent
// npm install --save-dev @testing-library/user-event @testing-library/dom

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox is unchecked by default", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmOrderButton).toBeDisabled();
});
test("Checkbox enables button on first click and disables on second click", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
test("popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);

  await userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument(); // ******Not necessary because the getBy in above line throws an error and this won't be executed. But adding this line is the best practise and for readability.

  //   // popover disappears when we mouse out
  //   await userEvent.unhover(termsAndConditions);

  //   await waitForElementToBeRemoved(() =>
  //     screen.queryByText(/no ice cream will actually be delivered/i)
  //   );
});

//   const nullPopoverAgain = screen.queryByText(
//     /no ice cream will actually be delivered/i
//   );
// expect(nullPopoverAgain).not.toBeInTheDocument();

// Doesn't work on Verison 14. Only works on Version 13.
// test("Checking and unchecking checkbox enables and disabled button", () => {
//   render(<SummaryForm />);

//   const checkbox = screen.getByRole("checkbox", {
//     name: /terms and conditions/i,
//   });
//   const confirmOrderButton = screen.getByRole("button", {
//     name: /confirm order/i,
//   });

//   // Checking checkbox enables button
//   userEvent.click(checkbox);
//   expect(confirmOrderButton).toBeEnabled();

//   // Unchecking checkbox disabled button
//   userEvent.click(checkbox);
//   expect(confirmOrderButton).toBeDisabled();
// });
