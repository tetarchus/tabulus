<link rel='preconnect' href='https://fonts.googleapis.com' />
<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
<link href='https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@500&display=swap' rel='stylesheet' />

<div style='display:flex;flex-direction:column;align-items:center;justify-content:center;'>
  <img  src='./apps/docs/app/images/Logo@0.25x.png' style='' width='150px'/>
  <h1 style='line-height:1;font-size:4rem;font-family:"Smooch Sans", sans-serif;margin:0px;padding-bottom:12px'>Tabulus</h1>
  <!-- <h3 style='line-height:1;font-size:2rem;font-family:"Smooch Sans", sans-serif;margin:0px'>Fabulus React Tables</h3> -->
</div>

> An easy to use, interactive table library for React.

Tabulus is a React library for displaying and interacting with tabular data. It offers tonnes of customization, but you can be up and running in a few simple steps.

## Contents

1. [Setup](#setup)
2. [Usage](#usage)
   1. [1. React Component](#1-react-component)
   2. [2. useTabulus Hook](#2-usetabulus-hook)
3. [Contributing](#contributing)

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

More information about each method, and the various options is available in our [Documentation](@todo).

### 1. React Component

This is the simplest method for using `tabulus`. Just import the component, define your columns, data, and any options you want, and that's it!

```jsx
import {tabulus} from 'tabulus';

export default function App() {
  const columns = useMemo(() => [/* Column Definitions */], []);
  const data = useMemo(() => [/* Data Definition */], []);


  return <Tabulus columns={columns} data={data} id='My Table' />
}
```

### 2. useTabulus Hook

## Contributing

> For more information please see the [Contribution Guide](./CONTRIBUTING.md).
