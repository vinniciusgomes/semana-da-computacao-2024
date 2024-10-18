import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{snakeCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{snakeCase name}}/styles.ts",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "append",
        path: "src/components/index.ts",
        pattern: /^(export \* from .+);/g,
        template: 'export * from "./{{snakeCase name}}";',
      },
    ],
  });
}
