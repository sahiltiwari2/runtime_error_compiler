import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "1st Year",
    description:
      "Codes for Semister 1 and 2.",
    link: "/",
  },
  {
    title: "2nd Year",
    description:
      "Codes for Semister 3 and 4.",
    link: "https://www.linkedin.com/pulse/power-clean-code-why-matters-how-benefits-your-projects-sahoo-f9tgc/",
  },
  {
    title: "3rd Year",
    description:
      " Codes for Semister 5 and 6.",
    link: "https://community.sonarsource.com/t/clean-as-you-code-how-to-win-at-code-quality-without-even-trying/19001",
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
