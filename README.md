# Tabulus

> An easy to use, interactive table library for React.

Tabulus is a React library for displaying and interacting with tabular data. It offers tonnes of customization, but you can be up and running in a few simple steps.

## Setup

Install `tabulus`:

```sh
npm i tabulus
```

Both `react` and `react-dom` are peer dependencies (>= v18), so you'll need those as well if you don't already have them:

```sh
npm i react react-dom
# And for typescript, also grab their types
npm i -D @types/react @types/react-dom
```

## Usage

There are a few ways to use `tabulus` in your code. 

1. React Component

This is the simplest method for using `tabulus`. Just import the component, define your columns, data, and any options you want, and that's it!

```jsx
import {tabulus} from 'tabulus';

export default function App() {
  const columns = useMemo(() => [/* Column Definitions */], []);
  const data = useMemo(() => [/* Data Definition */], []);


  return <Tabulus columns={columns} data={data} id='My Table' />
}
```
