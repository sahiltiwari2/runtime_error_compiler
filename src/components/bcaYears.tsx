import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "1st Year",
    description:
      "Codes for Semister 1 and 2.",
    link: "/SEMPages/BCASem1",
  },
  {
    title: "2nd Year",
    description:
      "Codes for Semister 3 and 4.",
    link: "/SEMPages/BCASem2",
  },
  {
    title: "3rd Year",
    description:
      " Codes for Semister 5 and 6.",
    link: "/SEMPages/BCASem3",
  },
];

const CardHoverEffectDemo = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default CardHoverEffectDemo;
export { projects };
