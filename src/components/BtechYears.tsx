import { HoverEffect } from "./ui/card-hover-effect2";

const projects = [
  {
    title: "1st Year",
    description:
      "Codes for Semister 1 and 2.",
    link: "/SEMPages/BTechSem1",
  },
  {
    title: "2nd Year",
    description:
      "Codes for Semister 3 and 4.",
    link: "/SEMPages/BTechSem2",
  },
  {
    title: "3rd Year",
    description:
      " Codes for Semister 5 and 6.",
    link: "/SEMPages/BTechSem3",
  },
  {
    title: "4Th Year",
    description:
      " Codes for Semister 7 and 8.",
    link: "/SEMPages/BTechSem4",
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
