const fs = require('fs');
const path = require('path');

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
  'index.ts': `export * from './${componentName}';`,

  [`${componentName}.tsx`]: `import React from 'react';
import './${componentName}.scss';

export interface ${componentName}Props {
  /** Add prop description */
  example?: string;
}

/**
 * ${componentName} component description
 */
export const ${componentName}: React.FC<${componentName}Props> = ({ example }) => {
  return (
    <div className="sushi-${componentName.toLowerCase()}">
      {example}
    </div>
  );
};`,

  [`${componentName}.scss`]: `.sushi-${componentName.toLowerCase()} {
  // Add styles here
}`,

  [`${componentName}.stories.tsx`]: `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    example: 'Example content',
  },
};`,

  [`${componentName}.test.tsx`]: `import { render, screen } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders correctly', () => {
    render(<${componentName} example="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});`,
};

Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(path.join(componentDir, filename), content);
});

console.log(`Component ${componentName} created successfully!`);
