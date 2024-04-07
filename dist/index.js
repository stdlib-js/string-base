/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


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
setReadOnly( ns, 'altcase', require( '@stdlib/string-base-altcase/dist' ) );

/**
* @name camelcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/camelcase}
*/
setReadOnly( ns, 'camelcase', require( '@stdlib/string-base-camelcase/dist' ) );

/**
* @name capitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/capitalize}
*/
setReadOnly( ns, 'capitalize', require( '@stdlib/string-base-capitalize/dist' ) );

/**
* @name codePointAt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/code-point-at}
*/
setReadOnly( ns, 'codePointAt', require( '@stdlib/string-base-code-point-at/dist' ) );

/**
* @name constantcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/constantcase}
*/
setReadOnly( ns, 'constantcase', require( '@stdlib/string-base-constantcase/dist' ) );

/**
* @name distances
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/string/base/distances}
*/
setReadOnly( ns, 'distances', require( '@stdlib/string-base-distances/dist' ) );

/**
* @name dotcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/dotcase}
*/
setReadOnly( ns, 'dotcase', require( '@stdlib/string-base-dotcase/dist' ) );

/**
* @name endsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/ends-with}
*/
setReadOnly( ns, 'endsWith', require( '@stdlib/string-base-ends-with/dist' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first}
*/
setReadOnly( ns, 'first', require( '@stdlib/string-base-first/dist' ) );

/**
* @name firstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-code-point}
*/
setReadOnly( ns, 'firstCodePoint', require( '@stdlib/string-base-first-code-point/dist' ) );

/**
* @name firstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-grapheme-cluster}
*/
setReadOnly( ns, 'firstGraphemeCluster', require( '@stdlib/string-base-first-grapheme-cluster/dist' ) );

/**
* @name forEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each}
*/
setReadOnly( ns, 'forEach', require( '@stdlib/string-base-for-each/dist' ) );

/**
* @name forEachCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-code-point}
*/
setReadOnly( ns, 'forEachCodePoint', require( '@stdlib/string-base-for-each-code-point/dist' ) );

/**
* @name forEachGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-grapheme-cluster}
*/
setReadOnly( ns, 'forEachGraphemeCluster', require( '@stdlib/string-base-for-each-grapheme-cluster/dist' ) );

/**
* @name forEachRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-right}
*/
setReadOnly( ns, 'forEachRight', require( '@stdlib/string-base-for-each-right/dist' ) );

/**
* @name formatInterpolate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-interpolate}
*/
setReadOnly( ns, 'formatInterpolate', require( '@stdlib/string-base-format-interpolate/dist' ) );

/**
* @name formatTokenize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-tokenize}
*/
setReadOnly( ns, 'formatTokenize', require( '@stdlib/string-base-format-tokenize/dist' ) );

/**
* @name headercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/headercase}
*/
setReadOnly( ns, 'headercase', require( '@stdlib/string-base-headercase/dist' ) );

/**
* @name invcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/invcase}
*/
setReadOnly( ns, 'invcase', require( '@stdlib/string-base-invcase/dist' ) );

/**
* @name kebabcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/kebabcase}
*/
setReadOnly( ns, 'kebabcase', require( '@stdlib/string-base-kebabcase/dist' ) );

/**
* @name lpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-pad}
*/
setReadOnly( ns, 'lpad', require( '@stdlib/string-base-left-pad/dist' ) );

/**
* @name ltrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-trim}
*/
setReadOnly( ns, 'ltrim', require( '@stdlib/string-base-left-trim/dist' ) );

/**
* @name lowercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/lowercase}
*/
setReadOnly( ns, 'lowercase', require( '@stdlib/string-base-lowercase/dist' ) );

/**
* @name pascalcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/pascalcase}
*/
setReadOnly( ns, 'pascalcase', require( '@stdlib/string-base-pascalcase/dist' ) );

/**
* @name percentEncode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/percent-encode}
*/
setReadOnly( ns, 'percentEncode', require( '@stdlib/string-base-percent-encode/dist' ) );

/**
* @name removeFirst
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first}
*/
setReadOnly( ns, 'removeFirst', require( '@stdlib/string-base-remove-first/dist' ) );

/**
* @name removeFirstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-code-point}
*/
setReadOnly( ns, 'removeFirstCodePoint', require( '@stdlib/string-base-remove-first-code-point/dist' ) );

/**
* @name removeFirstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-grapheme-cluster}
*/
setReadOnly( ns, 'removeFirstGraphemeCluster', require( '@stdlib/string-base-remove-first-grapheme-cluster/dist' ) );

/**
* @name removeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last}
*/
setReadOnly( ns, 'removeLast', require( '@stdlib/string-base-remove-last/dist' ) );

/**
* @name removeLastCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-code-point}
*/
setReadOnly( ns, 'removeLastCodePoint', require( '@stdlib/string-base-remove-last-code-point/dist' ) );

/**
* @name removeLastGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-grapheme-cluster}
*/
setReadOnly( ns, 'removeLastGraphemeCluster', require( '@stdlib/string-base-remove-last-grapheme-cluster/dist' ) );

/**
* @name repeat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/repeat}
*/
setReadOnly( ns, 'repeat', require( '@stdlib/string-base-repeat/dist' ) );

/**
* @name replace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace}
*/
setReadOnly( ns, 'replace', require( '@stdlib/string-base-replace/dist' ) );

/**
* @name replaceAfter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after}
*/
setReadOnly( ns, 'replaceAfter', require( '@stdlib/string-base-replace-after/dist' ) );

/**
* @name replaceAfterLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after-last}
*/
setReadOnly( ns, 'replaceAfterLast', require( '@stdlib/string-base-replace-after-last/dist' ) );

/**
* @name replaceBefore
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before}
*/
setReadOnly( ns, 'replaceBefore', require( '@stdlib/string-base-replace-before/dist' ) );

/**
* @name replaceBeforeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before-last}
*/
setReadOnly( ns, 'replaceBeforeLast', require( '@stdlib/string-base-replace-before-last/dist' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse}
*/
setReadOnly( ns, 'reverse', require( '@stdlib/string-base-reverse/dist' ) );

/**
* @name reverseCodePoints
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-code-points}
*/
setReadOnly( ns, 'reverseCodePoints', require( '@stdlib/string-base-reverse-code-points/dist' ) );

/**
* @name reverseGraphemeClusters
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-grapheme-clusters}
*/
setReadOnly( ns, 'reverseGraphemeClusters', require( '@stdlib/string-base-reverse-grapheme-clusters/dist' ) );

/**
* @name rpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-pad}
*/
setReadOnly( ns, 'rpad', require( '@stdlib/string-base-right-pad/dist' ) );

/**
* @name rtrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-trim}
*/
setReadOnly( ns, 'rtrim', require( '@stdlib/string-base-right-trim/dist' ) );

/**
* @name snakecase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/snakecase}
*/
setReadOnly( ns, 'snakecase', require( '@stdlib/string-base-snakecase/dist' ) );

/**
* @name startcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/startcase}
*/
setReadOnly( ns, 'startcase', require( '@stdlib/string-base-startcase/dist' ) );

/**
* @name startsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/starts-with}
*/
setReadOnly( ns, 'startsWith', require( '@stdlib/string-base-starts-with/dist' ) );

/**
* @name trim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/trim}
*/
setReadOnly( ns, 'trim', require( '@stdlib/string-base-trim/dist' ) );

/**
* @name truncateMiddle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/truncate-middle}
*/
setReadOnly( ns, 'truncateMiddle', require( '@stdlib/string-base-truncate-middle/dist' ) );

/**
* @name uncapitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uncapitalize}
*/
setReadOnly( ns, 'uncapitalize', require( '@stdlib/string-base-uncapitalize/dist' ) );

/**
* @name uppercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uppercase}
*/
setReadOnly( ns, 'uppercase', require( '@stdlib/string-base-uppercase/dist' ) );


// EXPORTS //

module.exports = ns;
