/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name altcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/altcase}
*/
setReadOnly( ns, 'altcase', require( '@stdlib/string-base-altcase' ) );

/**
* @name atob
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/atob}
*/
setReadOnly( ns, 'atob', require( '@stdlib/string-base-atob' ) );

/**
* @name base64ToUint8Array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/base64-to-uint8array}
*/
setReadOnly( ns, 'base64ToUint8Array', require( '@stdlib/string-base-base64-to-uint8array' ) );

/**
* @name camelcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/camelcase}
*/
setReadOnly( ns, 'camelcase', require( '@stdlib/string-base-camelcase' ) );

/**
* @name capitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/capitalize}
*/
setReadOnly( ns, 'capitalize', require( '@stdlib/string-base-capitalize' ) );

/**
* @name codePointAt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/code-point-at}
*/
setReadOnly( ns, 'codePointAt', require( '@stdlib/string-base-code-point-at' ) );

/**
* @name constantcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/constantcase}
*/
setReadOnly( ns, 'constantcase', require( '@stdlib/string-base-constantcase' ) );

/**
* @name distances
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/string/base/distances}
*/
setReadOnly( ns, 'distances', require( '@stdlib/string-base-distances' ) );

/**
* @name dotcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/dotcase}
*/
setReadOnly( ns, 'dotcase', require( '@stdlib/string-base-dotcase' ) );

/**
* @name endsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/ends-with}
*/
setReadOnly( ns, 'endsWith', require( '@stdlib/string-base-ends-with' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first}
*/
setReadOnly( ns, 'first', require( '@stdlib/string-base-first' ) );

/**
* @name firstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-code-point}
*/
setReadOnly( ns, 'firstCodePoint', require( '@stdlib/string-base-first-code-point' ) );

/**
* @name firstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-grapheme-cluster}
*/
setReadOnly( ns, 'firstGraphemeCluster', require( '@stdlib/string-base-first-grapheme-cluster' ) );

/**
* @name forEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each}
*/
setReadOnly( ns, 'forEach', require( '@stdlib/string-base-for-each' ) );

/**
* @name forEachCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-code-point}
*/
setReadOnly( ns, 'forEachCodePoint', require( '@stdlib/string-base-for-each-code-point' ) );

/**
* @name forEachCodePointRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-code-point-right}
*/
setReadOnly( ns, 'forEachCodePointRight', require( '@stdlib/string-base-for-each-code-point-right' ) );

/**
* @name forEachGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-grapheme-cluster}
*/
setReadOnly( ns, 'forEachGraphemeCluster', require( '@stdlib/string-base-for-each-grapheme-cluster' ) );

/**
* @name forEachRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-right}
*/
setReadOnly( ns, 'forEachRight', require( '@stdlib/string-base-for-each-right' ) );

/**
* @name formatInterpolate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-interpolate}
*/
setReadOnly( ns, 'formatInterpolate', require( '@stdlib/string-base-format-interpolate' ) );

/**
* @name formatTokenize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-tokenize}
*/
setReadOnly( ns, 'formatTokenize', require( '@stdlib/string-base-format-tokenize' ) );

/**
* @name headercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/headercase}
*/
setReadOnly( ns, 'headercase', require( '@stdlib/string-base-headercase' ) );

/**
* @name invcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/invcase}
*/
setReadOnly( ns, 'invcase', require( '@stdlib/string-base-invcase' ) );

/**
* @name kebabcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/kebabcase}
*/
setReadOnly( ns, 'kebabcase', require( '@stdlib/string-base-kebabcase' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last}
*/
setReadOnly( ns, 'last', require( '@stdlib/string-base-last' ) );

/**
* @name lastCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last-code-point}
*/
setReadOnly( ns, 'lastCodePoint', require( '@stdlib/string-base-last-code-point' ) );

/**
* @name lastGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last-grapheme-cluster}
*/
setReadOnly( ns, 'lastGraphemeCluster', require( '@stdlib/string-base-last-grapheme-cluster' ) );

/**
* @name lpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-pad}
*/
setReadOnly( ns, 'lpad', require( '@stdlib/string-base-left-pad' ) );

/**
* @name ltrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-trim}
*/
setReadOnly( ns, 'ltrim', require( '@stdlib/string-base-left-trim' ) );

/**
* @name lowercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/lowercase}
*/
setReadOnly( ns, 'lowercase', require( '@stdlib/string-base-lowercase' ) );

/**
* @name pascalcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/pascalcase}
*/
setReadOnly( ns, 'pascalcase', require( '@stdlib/string-base-pascalcase' ) );

/**
* @name percentEncode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/percent-encode}
*/
setReadOnly( ns, 'percentEncode', require( '@stdlib/string-base-percent-encode' ) );

/**
* @name removeFirst
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first}
*/
setReadOnly( ns, 'removeFirst', require( '@stdlib/string-base-remove-first' ) );

/**
* @name removeFirstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-code-point}
*/
setReadOnly( ns, 'removeFirstCodePoint', require( '@stdlib/string-base-remove-first-code-point' ) );

/**
* @name removeFirstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-grapheme-cluster}
*/
setReadOnly( ns, 'removeFirstGraphemeCluster', require( '@stdlib/string-base-remove-first-grapheme-cluster' ) );

/**
* @name removeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last}
*/
setReadOnly( ns, 'removeLast', require( '@stdlib/string-base-remove-last' ) );

/**
* @name removeLastCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-code-point}
*/
setReadOnly( ns, 'removeLastCodePoint', require( '@stdlib/string-base-remove-last-code-point' ) );

/**
* @name removeLastGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-grapheme-cluster}
*/
setReadOnly( ns, 'removeLastGraphemeCluster', require( '@stdlib/string-base-remove-last-grapheme-cluster' ) );

/**
* @name repeat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/repeat}
*/
setReadOnly( ns, 'repeat', require( '@stdlib/string-base-repeat' ) );

/**
* @name replace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace}
*/
setReadOnly( ns, 'replace', require( '@stdlib/string-base-replace' ) );

/**
* @name replaceAfter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after}
*/
setReadOnly( ns, 'replaceAfter', require( '@stdlib/string-base-replace-after' ) );

/**
* @name replaceAfterLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after-last}
*/
setReadOnly( ns, 'replaceAfterLast', require( '@stdlib/string-base-replace-after-last' ) );

/**
* @name replaceBefore
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before}
*/
setReadOnly( ns, 'replaceBefore', require( '@stdlib/string-base-replace-before' ) );

/**
* @name replaceBeforeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before-last}
*/
setReadOnly( ns, 'replaceBeforeLast', require( '@stdlib/string-base-replace-before-last' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse}
*/
setReadOnly( ns, 'reverse', require( '@stdlib/string-base-reverse' ) );

/**
* @name reverseCodePoints
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-code-points}
*/
setReadOnly( ns, 'reverseCodePoints', require( '@stdlib/string-base-reverse-code-points' ) );

/**
* @name reverseGraphemeClusters
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-grapheme-clusters}
*/
setReadOnly( ns, 'reverseGraphemeClusters', require( '@stdlib/string-base-reverse-grapheme-clusters' ) );

/**
* @name rpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-pad}
*/
setReadOnly( ns, 'rpad', require( '@stdlib/string-base-right-pad' ) );

/**
* @name rtrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-trim}
*/
setReadOnly( ns, 'rtrim', require( '@stdlib/string-base-right-trim' ) );

/**
* @name snakecase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/snakecase}
*/
setReadOnly( ns, 'snakecase', require( '@stdlib/string-base-snakecase' ) );

/**
* @name startcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/startcase}
*/
setReadOnly( ns, 'startcase', require( '@stdlib/string-base-startcase' ) );

/**
* @name startsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/starts-with}
*/
setReadOnly( ns, 'startsWith', require( '@stdlib/string-base-starts-with' ) );

/**
* @name stickycase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/stickycase}
*/
setReadOnly( ns, 'stickycase', require( '@stdlib/string-base-stickycase' ) );

/**
* @name trim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/trim}
*/
setReadOnly( ns, 'trim', require( '@stdlib/string-base-trim' ) );

/**
* @name truncateMiddle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/truncate-middle}
*/
setReadOnly( ns, 'truncateMiddle', require( '@stdlib/string-base-truncate-middle' ) );

/**
* @name uncapitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uncapitalize}
*/
setReadOnly( ns, 'uncapitalize', require( '@stdlib/string-base-uncapitalize' ) );

/**
* @name uppercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uppercase}
*/
setReadOnly( ns, 'uppercase', require( '@stdlib/string-base-uppercase' ) );


// EXPORTS //

module.exports = ns;
