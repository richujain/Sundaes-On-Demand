// Write test to ensure that
// 1. Checkbox is unchecked by default
// 2. Checking checkbox enables button
// 3. Unchecking checkbox again disables button

import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

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
test("Checking and unchecking checkbox enables and disabled button", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmOrderButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  // Checking checkbox enables button
  fireEvent.click(checkbox);
  expect(confirmOrderButton).toBeEnabled();

  // Unchecking checkbox disabled button
  fireEvent.click(checkbox);
  expect(confirmOrderButton).toBeDisabled();
});
