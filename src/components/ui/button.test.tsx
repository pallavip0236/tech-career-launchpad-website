import { buttonVariants } from "./button";

describe("Button component animations", () => {
  it("should include transition and active scale/shadow for press effect", () => {
    const buttonClassNames = buttonVariants({}); // Get the default button class names

    // Assert that the class names contain the expected animation utilities
    expect(buttonClassNames).toContain("transition-transform");
    expect(buttonClassNames).toContain("duration-150");
    expect(buttonClassNames).toContain("active:scale-95");
    expect(buttonClassNames).toContain("active:shadow-inner");
  });
});
