// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.0.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(d,t,m,o,a){var l,f,u;if(0===(f=n(d)))throw new TypeError(r("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",f));if((u=t)<0){if((u+=f)<0)throw new RangeError(r("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",f,t))}else if(u>=f)throw new RangeError(r("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",f,t));return(l=s(null,f))[u]=m,m=e.apply(null,l),i(d,m,o,a)}export{d as default};
//# sourceMappingURL=index.mjs.map
