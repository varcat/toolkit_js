## CDN

通过`script`标签引入

```html
<script src="https://unpkg.com/browse/wsp-toolkit/dist/wsp-toolkit.global.js"></script>
或
<script src="https://cdn.jsdelivr.net/npm/wsp-toolkit/dist/wsp-toolkit.global.js"></script>
```

使用：

```javascript
window.toolkit.isExist(''); // true

```
## npm

通过`npm`安装

```bash
npm i wsp-toolkit
```

使用

```javascript
// esmodule
import { isExist } from "wsp-toolkit";
isExist(null); // false
isExist(0); // true

// node
const { typeOf } = require("wsp-toolkit");
typeOf(0); // Number
```
