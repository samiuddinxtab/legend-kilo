import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeader from "@/components/ui/SectionHeader";

describe("SectionHeader", () => {
  it("renders label and title", () => {
    render(<SectionHeader label="Test Label" title="Test Title" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <SectionHeader
        label="Label"
        title="Title"
        description="A description here"
      />
    );
    expect(screen.getByText("A description here")).toBeInTheDocument();
  });

  it("does not render description when omitted", () => {
    const { container } = render(
      <SectionHeader label="Label" title="Title" />
    );
    const p = container.querySelector("p");
    expect(p).toBeNull();
  });

  it("applies center alignment", () => {
    const { container } = render(
      <SectionHeader label="L" title="T" align="center" />
    );
    expect(container.firstChild).toHaveClass("text-center");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionHeader label="L" title="T" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
