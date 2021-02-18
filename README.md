# geobuff/flags
![npm](https://img.shields.io/npm/v/@geobuff/flags)
![David](https://img.shields.io/david/geobuff/flags)

A collection of free-to-use flag URL's from wikimedia.org.

## Mappings
- 🇺🇸 [US, States](https://github.com/geobuff/flags/blob/main/index.js#L48)
- 🇬🇧 [UK, Counties](https://github.com/geobuff/flags/blob/main/index.js#L3)

## Install
```
npm install @geobuff/flags
```

## Usage
```
import React from "react";
import { getUSStateFlagUrl } from "@geobuff/flags";

const ExampleComponent = () => (
  <>
    <img src={getUSStateFlagUrl("us-al")} />
  </>
);

export default ExampleComponent;
```
