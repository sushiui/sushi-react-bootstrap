# Sushi Bootstrap

A React component library built on top of React Bootstrap with custom design system components.

## Installation

```bash
npm install sushi-react-bootstrap
```

## Local Development Setup

If you want to test this library locally with your project:

1. Clone and build sushi-react-bootstrap

```bash
git clone https://github.com/sushiui/sushi-react-bootstrap
cd sushi-react-bootstrap
npm install
npm run build
npm link
```

2. Create a new React project

```bash
# Create a new Vite project
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

# Link to sushi-react-bootstrap
npm link sushi-react-bootstrap
```

3. Install peer dependencies

```bash
npm install react-react-bootstrap bootstrap
```

4. Use in your project

```tsx
import { Button, HelloWorld } from "sushi-react-bootstrap";

function App() {
  return (
    <div>
      <Button variant="primary">Click me!</Button>
      <HelloWorld />
    </div>
  );
}
```

## Usage

```tsx
import { Button } from "sushi-react-bootstrap";

// Use components in your React application
function MyComponent() {
  return <Button variant="primary">Click me!</Button>;
}
```
