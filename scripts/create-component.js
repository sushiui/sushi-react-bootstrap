import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentName = process.argv[2];
if (!componentName) {
  console.error('Please supply a component name');
  process.exit(1);
}

const componentDir = path.join(__dirname, '../src/components', componentName);

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Create component files
const files = {
  [`${componentName}.tsx`]: `import React from 'react';
import { ${componentName}Props } from './${componentName}.types';

const ${componentName}: React.FC<${componentName}Props> = ({ ...props }) => {
  return (
    <div className={\`\${props.className || ""}\`} {...props}>
      {props.children}
    </div>
  );
};

export default ${componentName};`,

  [`${componentName}.types.ts`]: `import { PropsWithChildren } from "react";

export interface ${componentName}Props extends PropsWithChildren<any> {
    className?: string;
}`,

  [`${componentName}.test.tsx`]: `import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from 'vitest';
import ${componentName} from "./${componentName}";

describe("${componentName}", () => {
    test("renders with correct text", () => {
        render(<${componentName}>Test Content</${componentName}>);
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    test("applies custom className", () => {
        render(<${componentName} className="custom-class">Custom</${componentName}>);
        const element = screen.getByText("Custom");
        expect(element.classList.contains("custom-class")).toBe(true);
    });
});`,

  [`${componentName}.stories.tsx`]: `import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ${componentName} from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
    title: 'Sushi Design/${componentName}',
    component: ${componentName},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
    },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default ${componentName}',
    },
};

export const WithCustomClass: Story = {
    args: {
        className: 'custom-class',
        children: '${componentName} with custom class',
    },
};`,
};

Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(componentDir, filename), content);
});

console.log(`Component ${componentName} created successfully!`);
