# geobuff/flags
[![npm](https://img.shields.io/npm/v/@geobuff/flags)](https://www.npmjs.com/package/@geobuff/flags)
[![David](https://img.shields.io/david/geobuff/flags)](https://david-dm.org/geobuff/flags)

A collection of free-to-use flag URL's.

## Mappings
- :earth_americas: World, Countries
- 🇦🇺 Australia, States and Territories
- 🇦🇷 Argentina, Provinces
- 🇧🇷 Brazil, States
- 🇨🇦 Canada, Provinces and Territories
- 🇫🇷 France, Regions
- 🇩🇪 Germany, States
- 🇯🇵 Japan, Prefectures
- :us: US, States
- :uk: UK, Counties

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
    <img src={getFlagUrl("nz")} />
  </>
);

export default ExampleComponent;
```
