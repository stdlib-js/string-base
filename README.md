<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Base String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) string functions.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var string = require( '@stdlib/string-base' );
```

#### string

Namespace containing "base" (i.e., lower-level) string functions.

```javascript
var ns = string;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`altcase( str )`][@stdlib/string/base/altcase]</span><span class="delimiter">: </span><span class="description">convert a string to alternate case.</span>
-   <span class="signature">[`camelcase( str )`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="signature">[`capitalize( str )`][@stdlib/string/base/capitalize]</span><span class="delimiter">: </span><span class="description">capitalize the first character in a string.</span>
-   <span class="signature">[`codePointAt( string, position, backward )`][@stdlib/string/base/code-point-at]</span><span class="delimiter">: </span><span class="description">return a Unicode code point from a string at a specified position.</span>
-   <span class="signature">[`constantcase( str )`][@stdlib/string/base/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="signature">[`distances`][@stdlib/string/base/distances]</span><span class="delimiter">: </span><span class="description">implementations of various string similarity metrics.</span>
-   <span class="signature">[`dotcase( str )`][@stdlib/string/base/dotcase]</span><span class="delimiter">: </span><span class="description">convert a string to dot case.</span>
-   <span class="signature">[`endsWith( str, search, len )`][@stdlib/string/base/ends-with]</span><span class="delimiter">: </span><span class="description">test if a string ends with the characters of another string.</span>
-   <span class="signature">[`firstCodePoint( str, n )`][@stdlib/string/base/first-code-point]</span><span class="delimiter">: </span><span class="description">return the first `n` Unicode code points of a string.</span>
-   <span class="signature">[`firstGraphemeCluster( str, n )`][@stdlib/string/base/first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the first `n` grapheme clusters (i.e., user-perceived characters) of a string.</span>
-   <span class="signature">[`first( str, n )`][@stdlib/string/base/first]</span><span class="delimiter">: </span><span class="description">return the first `n` UTF-16 code units of a string.</span>
-   <span class="signature">[`forEachCodePoint( str, clbk[, thisArg ] )`][@stdlib/string/base/for-each-code-point]</span><span class="delimiter">: </span><span class="description">invokes a function for each Unicode code point in a string.</span>
-   <span class="signature">[`forEachGraphemeCluster( str, clbk[, thisArg ] )`][@stdlib/string/base/for-each-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.</span>
-   <span class="signature">[`forEachRight( str, clbk[, thisArg ] )`][@stdlib/string/base/for-each-right]</span><span class="delimiter">: </span><span class="description">invokes a function for each UTF-16 code unit in a string, iterating from right to left.</span>
-   <span class="signature">[`forEach( str, clbk[, thisArg ] )`][@stdlib/string/base/for-each]</span><span class="delimiter">: </span><span class="description">invokes a function for each UTF-16 code unit in a string.</span>
-   <span class="signature">[`formatInterpolate( tokens, ...args )`][@stdlib/string/base/format-interpolate]</span><span class="delimiter">: </span><span class="description">generate string from a token array by interpolating values.</span>
-   <span class="signature">[`formatTokenize( str )`][@stdlib/string/base/format-tokenize]</span><span class="delimiter">: </span><span class="description">tokenize a string into an array of string parts and format identifier objects.</span>
-   <span class="signature">[`headercase( str )`][@stdlib/string/base/headercase]</span><span class="delimiter">: </span><span class="description">convert a string to HTTP header case.</span>
-   <span class="signature">[`invcase( str )`][@stdlib/string/base/invcase]</span><span class="delimiter">: </span><span class="description">convert a string to inverse case.</span>
-   <span class="signature">[`kebabcase( str )`][@stdlib/string/base/kebabcase]</span><span class="delimiter">: </span><span class="description">convert a string to kebab case.</span>
-   <span class="signature">[`lpad( str, len, pad )`][@stdlib/string/base/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="signature">[`ltrim( str )`][@stdlib/string/base/left-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning of a string.</span>
-   <span class="signature">[`lowercase( str )`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="signature">[`pascalcase( str )`][@stdlib/string/base/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>
-   <span class="signature">[`percentEncode( str )`][@stdlib/string/base/percent-encode]</span><span class="delimiter">: </span><span class="description">percent-encode a UTF-16 encoded string according to RFC 3986.</span>
-   <span class="signature">[`removeFirstCodePoint( str, n )`][@stdlib/string/base/remove-first-code-point]</span><span class="delimiter">: </span><span class="description">remove the first `n` Unicode code points of a string.</span>
-   <span class="signature">[`removeFirstGraphemeCluster( str, n )`][@stdlib/string/base/remove-first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">remove the first `n` grapheme clusters (i.e., user-perceived characters) of a string.</span>
-   <span class="signature">[`removeFirst( str, n )`][@stdlib/string/base/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first `n` UTF-16 code units of a string.</span>
-   <span class="signature">[`removeLastCodePoint( str, n )`][@stdlib/string/base/remove-last-code-point]</span><span class="delimiter">: </span><span class="description">remove the last `n` Unicode code points of a string.</span>
-   <span class="signature">[`removeLastGraphemeCluster( str, n )`][@stdlib/string/base/remove-last-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">remove the last `n` grapheme clusters (i.e., user-perceived characters) of a string.</span>
-   <span class="signature">[`removeLast( str, n )`][@stdlib/string/base/remove-last]</span><span class="delimiter">: </span><span class="description">remove the last `n` UTF-16 code units of a string.</span>
-   <span class="signature">[`repeat( str, n )`][@stdlib/string/base/repeat]</span><span class="delimiter">: </span><span class="description">repeat a string a specified number of times and return the concatenated result.</span>
-   <span class="signature">[`replaceAfterLast( str, search, replacement, fromIndex )`][@stdlib/string/base/replace-after-last]</span><span class="delimiter">: </span><span class="description">replace the substring after the last occurrence of a specified search string.</span>
-   <span class="signature">[`replaceAfter( str, search, replacement, fromIndex )`][@stdlib/string/base/replace-after]</span><span class="delimiter">: </span><span class="description">replace the substring after the first occurrence of a specified search string.</span>
-   <span class="signature">[`replaceBeforeLast( str, search, replacement, fromIndex )`][@stdlib/string/base/replace-before-last]</span><span class="delimiter">: </span><span class="description">replace the substring before the last occurrence of a specified search string.</span>
-   <span class="signature">[`replaceBefore( str, search, replacement, fromIndex )`][@stdlib/string/base/replace-before]</span><span class="delimiter">: </span><span class="description">replace the substring before the first occurrence of a specified search string.</span>
-   <span class="signature">[`replace( str, search, newval )`][@stdlib/string/base/replace]</span><span class="delimiter">: </span><span class="description">replace search occurrences with a replacement string.</span>
-   <span class="signature">[`reverseCodePoints( str )`][@stdlib/string/base/reverse-code-points]</span><span class="delimiter">: </span><span class="description">reverse the Unicode code points of a string.</span>
-   <span class="signature">[`reverseGraphemeClusters( str )`][@stdlib/string/base/reverse-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">reverse the grapheme clusters (i.e., user-perceived characters) of a string.</span>
-   <span class="signature">[`reverse( str )`][@stdlib/string/base/reverse]</span><span class="delimiter">: </span><span class="description">reverse the UTF-16 code units of a string.</span>
-   <span class="signature">[`rpad( str, len, pad )`][@stdlib/string/base/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>
-   <span class="signature">[`rtrim( str )`][@stdlib/string/base/right-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the end of a string.</span>
-   <span class="signature">[`snakecase( str )`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="signature">[`startcase( str )`][@stdlib/string/base/startcase]</span><span class="delimiter">: </span><span class="description">capitalize the first letter of each word in a string.</span>
-   <span class="signature">[`startsWith( str, search, position )`][@stdlib/string/base/starts-with]</span><span class="delimiter">: </span><span class="description">test if a string starts with the characters of another string.</span>
-   <span class="signature">[`trim( str )`][@stdlib/string/base/trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning and end of a string.</span>
-   <span class="signature">[`truncateMiddle( str, len, seq )`][@stdlib/string/base/truncate-middle]</span><span class="delimiter">: </span><span class="description">truncate the middle UTF-16 code units of a string to return a string having a specified length.</span>
-   <span class="signature">[`uncapitalize( str )`][@stdlib/string/base/uncapitalize]</span><span class="delimiter">: </span><span class="description">uncapitalize the first character of a string.</span>
-   <span class="signature">[`uppercase( str )`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var ns = require( '@stdlib/string-base' );

// Generate a Pascal case string...
var str = ns.pascalcase( 'beep boop' );
// returns 'BeepBoop'

// Tokenize a string into an array of string parts and format identifier objects...
str = 'The %d %s foxes jumped over the %d %s dogs.';
var tokens = ns.formatTokenize( str );
// returns [ 'The ', {...}, ' ', {...}, ' foxes jumped over the ', {...}, ' ', {...}, ' dogs.' ]

// Generate a string from a token array by interpolating values...
str = ns.formatInterpolate( tokens, 3, 'quick', 4, 'lazy' );
// returns 'The 3 quick foxes jumped over the 4 lazy dogs.'

// Test whether a string starts with the characters of another string...
str = 'Lorem ipsum dolor sit amet';
var bool = ns.startsWith( str, 'Lorem' );
// returns true

// Test whether a string ends with the characters of another string...
bool = ns.endsWith( str, 'amet' );
// returns true

// Trim whitespace characters from the beginning and end of a string...
str = '   \t\n Lorem ipsum dolor sit amet   \n\t  ';
str = ns.trim( str );
// returns 'Lorem ipsum dolor sit amet'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base

[test-image]: https://github.com/stdlib-js/string-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base/blob/main/branches.md

<!-- <toc-links> -->

[@stdlib/string/base/altcase]: https://github.com/stdlib-js/string-base-altcase

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string-base-camelcase

[@stdlib/string/base/capitalize]: https://github.com/stdlib-js/string-base-capitalize

[@stdlib/string/base/code-point-at]: https://github.com/stdlib-js/string-base-code-point-at

[@stdlib/string/base/constantcase]: https://github.com/stdlib-js/string-base-constantcase

[@stdlib/string/base/distances]: https://github.com/stdlib-js/string-base-distances

[@stdlib/string/base/dotcase]: https://github.com/stdlib-js/string-base-dotcase

[@stdlib/string/base/ends-with]: https://github.com/stdlib-js/string-base-ends-with

[@stdlib/string/base/first-code-point]: https://github.com/stdlib-js/string-base-first-code-point

[@stdlib/string/base/first-grapheme-cluster]: https://github.com/stdlib-js/string-base-first-grapheme-cluster

[@stdlib/string/base/first]: https://github.com/stdlib-js/string-base-first

[@stdlib/string/base/for-each-code-point]: https://github.com/stdlib-js/string-base-for-each-code-point

[@stdlib/string/base/for-each-grapheme-cluster]: https://github.com/stdlib-js/string-base-for-each-grapheme-cluster

[@stdlib/string/base/for-each-right]: https://github.com/stdlib-js/string-base-for-each-right

[@stdlib/string/base/for-each]: https://github.com/stdlib-js/string-base-for-each

[@stdlib/string/base/format-interpolate]: https://github.com/stdlib-js/string-base-format-interpolate

[@stdlib/string/base/format-tokenize]: https://github.com/stdlib-js/string-base-format-tokenize

[@stdlib/string/base/headercase]: https://github.com/stdlib-js/string-base-headercase

[@stdlib/string/base/invcase]: https://github.com/stdlib-js/string-base-invcase

[@stdlib/string/base/kebabcase]: https://github.com/stdlib-js/string-base-kebabcase

[@stdlib/string/base/left-pad]: https://github.com/stdlib-js/string-base-left-pad

[@stdlib/string/base/left-trim]: https://github.com/stdlib-js/string-base-left-trim

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string-base-lowercase

[@stdlib/string/base/pascalcase]: https://github.com/stdlib-js/string-base-pascalcase

[@stdlib/string/base/percent-encode]: https://github.com/stdlib-js/string-base-percent-encode

[@stdlib/string/base/remove-first-code-point]: https://github.com/stdlib-js/string-base-remove-first-code-point

[@stdlib/string/base/remove-first-grapheme-cluster]: https://github.com/stdlib-js/string-base-remove-first-grapheme-cluster

[@stdlib/string/base/remove-first]: https://github.com/stdlib-js/string-base-remove-first

[@stdlib/string/base/remove-last-code-point]: https://github.com/stdlib-js/string-base-remove-last-code-point

[@stdlib/string/base/remove-last-grapheme-cluster]: https://github.com/stdlib-js/string-base-remove-last-grapheme-cluster

[@stdlib/string/base/remove-last]: https://github.com/stdlib-js/string-base-remove-last

[@stdlib/string/base/repeat]: https://github.com/stdlib-js/string-base-repeat

[@stdlib/string/base/replace-after-last]: https://github.com/stdlib-js/string-base-replace-after-last

[@stdlib/string/base/replace-after]: https://github.com/stdlib-js/string-base-replace-after

[@stdlib/string/base/replace-before-last]: https://github.com/stdlib-js/string-base-replace-before-last

[@stdlib/string/base/replace-before]: https://github.com/stdlib-js/string-base-replace-before

[@stdlib/string/base/replace]: https://github.com/stdlib-js/string-base-replace

[@stdlib/string/base/reverse-code-points]: https://github.com/stdlib-js/string-base-reverse-code-points

[@stdlib/string/base/reverse-grapheme-clusters]: https://github.com/stdlib-js/string-base-reverse-grapheme-clusters

[@stdlib/string/base/reverse]: https://github.com/stdlib-js/string-base-reverse

[@stdlib/string/base/right-pad]: https://github.com/stdlib-js/string-base-right-pad

[@stdlib/string/base/right-trim]: https://github.com/stdlib-js/string-base-right-trim

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string-base-snakecase

[@stdlib/string/base/startcase]: https://github.com/stdlib-js/string-base-startcase

[@stdlib/string/base/starts-with]: https://github.com/stdlib-js/string-base-starts-with

[@stdlib/string/base/trim]: https://github.com/stdlib-js/string-base-trim

[@stdlib/string/base/truncate-middle]: https://github.com/stdlib-js/string-base-truncate-middle

[@stdlib/string/base/uncapitalize]: https://github.com/stdlib-js/string-base-uncapitalize

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string-base-uppercase

<!-- </toc-links> -->

</section>

<!-- /.links -->
