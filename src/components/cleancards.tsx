import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Improved Readability and Maintainability",
    description:
      "Clean code is easy to read, understand, and modify, making it easier to maintain the codebase over time. This reduces the time required to grasp the code's functionality, leading to faster development and debugging.",
    link: "https://blog.codacy.com/what-is-clean-code#:~:text=Readability%20and%20maintenance%3A%20Clean%20code,leading%20to%20faster%20development%20times.",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "Clean code encourages collaboration among team members, as it is more consistent and organized, making it easier for multiple developers to work on the same project seamlessly.",
    link: "https://www.linkedin.com/pulse/power-clean-code-why-matters-how-benefits-your-projects-sahoo-f9tgc/",
  },
  {
    title: "Reduced Bug Likelihood",
    description:
      " Clean code reduces the likelihood of introducing bugs, as code that is difficult to understand is more prone to errors during modifications or enhancements.",
    link: "https://community.sonarsource.com/t/clean-as-you-code-how-to-win-at-code-quality-without-even-trying/19001",
  },
  {
    title: "Improved Efficiency",
    description:
      "Clean code is typically more efficient, as it avoids unnecessary operations and complexity, leading to faster execution and lower resource usage.",
    link: "https://www.freecodecamp.org/news/how-to-write-clean-code/#:~:text=One%20important%20principle%20of%20writing,arise%20from%20using%20unnecessary%20data.",
  },
  {
    title: "Increased Developer Satisfaction and Reduced Burnout",
    description:
      " By implementing clean code practices, developers can spend more time on interesting and impactful work, rather than dealing with mundane repetitive tasks like fixing code errors. This helps to increase job satisfaction and reduce developer burnout.",
    link: "https://devops.com/avoiding-developer-burnout-with-clean-code-best-practices/",
  },
  {
    title: "Adherence to Software Engineering Principles",
    description:
      "Clean code follows a set of well-established software engineering principles, such as those outlined in the book Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin. Adopting these principles leads to higher-quality, more maintainable code.",
    link: "https://blog.codacy.com/what-is-clean-code",
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
