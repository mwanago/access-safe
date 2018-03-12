# `access-safe`

# Description
A lightweight package that makes dealing with `Cannot read property of undefined` errors easy in a way that your IDE can understand. You can also specify a default value that will be returned, if the value will be undefined. No strings used.

## Usage

```javascript
import { accessSafe } from 'access-safe';
```
```javascript
const { accessSafe } = require('access-safe');
```

```javascript
const area = accessSafe(() => user.address.city.area);
const zipCode = accessSafe(() => user.address.zipCode, 90895);
```