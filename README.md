# geobuff/flags
![npm](https://img.shields.io/npm/v/@geobuff/flags)
![David](https://img.shields.io/david/geobuff/flags)

A collection of free-to-use flag URL's.

## Mappings
- 🇺🇸 US, States
- 🇬🇧 UK, Counties

## Install
```
npm install @geobuff/flags
```

## Usage
```
import React from "react";
import { getFlagUrl } from "@geobuff/flags";

const ExampleComponent = () => (
  <>
    <img src={getFlagUrl("us-al")} />
  </>
);

export default ExampleComponent;
```
