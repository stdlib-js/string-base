/*
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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import camelcase = require( '@stdlib/string-base-camelcase' );
import capitalize = require( '@stdlib/string-base-capitalize' );
import codePointAt = require( '@stdlib/string-base-code-point-at' );
import constantcase = require( '@stdlib/string-base-constantcase' );
import endsWith = require( '@stdlib/string-base-ends-with' );
import formatInterpolate = require( '@stdlib/string-base-format-interpolate' );
import formatTokenize = require( '@stdlib/string-base-format-tokenize' );
import kebabcase = require( '@stdlib/string-base-kebabcase' );
import lpad = require( '@stdlib/string-base-left-pad' );
import ltrim = require( '@stdlib/string-base-left-trim' );
import lowercase = require( '@stdlib/string-base-lowercase' );
import pascalcase = require( '@stdlib/string-base-pascalcase' );
import percentEncode = require( '@stdlib/string-base-percent-encode' );
import repeat = require( '@stdlib/string-base-repeat' );
import replace = require( '@stdlib/string-base-replace' );
import rtrim = require( '@stdlib/string-base-right-trim' );
import snakecase = require( '@stdlib/string-base-snakecase' );
import startcase = require( '@stdlib/string-base-startcase' );
import startsWith = require( '@stdlib/string-base-starts-with' );
import trim = require( '@stdlib/string-base-trim' );
import uncapitalize = require( '@stdlib/string-base-uncapitalize' );
import uppercase = require( '@stdlib/string-base-uppercase' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Converts a string to camel case.
	*
	* @param str - string to convert
	* @returns camel-cased string
	*
	* @example
	* var str = ns.camelcase( 'Hello World!' );
	* // returns 'helloWorld'
	*
	* @example
	* var str = ns.camelcase( 'foo_bar' );
	* // returns 'fooBar'
	*
	* @example
	* var str = ns.camelcase( 'foo-bar' );
	* // returns 'fooBar'
	*/
	camelcase: typeof camelcase;

	/**
	* Capitalizes the first character in a string.
	*
	* @param str - input string
	* @returns capitalized string
	*
	* @example
	* var out = ns.capitalize( 'last man standing' );
	* // returns 'Last man standing'
	*
	* @example
	* var out = ns.capitalize( 'presidential election' );
	* // returns 'Presidential election'
	*
	* @example
	* var out = ns.capitalize( 'javaScript' );
	* // returns 'JavaScript'
	*
	* @example
	* var out = ns.capitalize( 'Hidden Treasures' );
	* // returns 'Hidden Treasures'
	*/
	capitalize: typeof capitalize;

	/**
	* Returns a Unicode code point from a string at specified position.
	*
	* @param str - input string
	* @param idx - position
	* @param backward - backward iteration for low surrogates
	* @returns code point
	*
	* @example
	* var str = ns.codePointAt( 'अनुच्छेद', 2, false );
	* // returns 2369
	*
	* str = ns.codePointAt( '🌷', 1, true );
	* // returns 127799
	*/
	codePointAt: typeof codePointAt;

	/**
	* Converts a string to constant case.
	*
	* @param str - string to convert
	* @returns constant-cased string
	*
	* @example
	* var str = ns.constantcase( 'beep' );
	* // returns 'BEEP'
	*
	* @example
	* var str = ns.constantcase( 'beep boop' );
	* // returns 'BEEP_BOOP'
	*
	* @example
	* var str = ns.constantcase( 'Hello World!' );
	* // returns 'HELLO_WORLD'
	*/
	constantcase: typeof constantcase;

	/**
	* Tests if a string ends with the characters of another string.
	*
	* ## Notes
	*
	* -   The last parameter restricts the search to a substring within the input string beginning from the leftmost character. If provided a negative value, `len` indicates to ignore the last `len` characters, and is thus equivalent to `str.length + len`.
	*
	* @param str - input string
	* @param search - search string
	* @param len - substring length
	* @returns boolean indicating if the input string ends with the search string
	*
	* @example
	* var bool = ns.endsWith( 'To be, or not to be, that is the question.', 'to be', 19 );
	* // returns true
	*
	* @example
	* var bool = ns.endsWith( 'To be, or not to be, that is the question.', 'to be', -23 );
	* // returns true
	*/
	endsWith: typeof endsWith;

	/**
	* Generates string from a token array by interpolating values.
	*
	* @param tokens - string parts and format identifier objects
	* @param ...args - variable values
	* @throws invalid flags
	* @returns formatted string
	*
	* @example
	* var tokens = [ 'beep ', { 'specifier': 's' } ];
	* var out = ns.formatInterpolate( tokens, 'boop' );
	* // returns 'beep boop'
	*/
	formatInterpolate: typeof formatInterpolate;

	/**
	* Tokenizes a string into an array of string parts and format identifier objects.
	*
	* @param str - input string
	* @returns tokens
	*
	* @example
	* var tokens = ns.formatTokenize( 'Hello %s!' );
	* // returns [ 'Hello ', {...}, '!' ]
	*/
	formatTokenize: typeof formatTokenize;

	/**
	* Converts a string to kebab case.
	*
	* @param str - string to convert
	* @returns kebab-cased string
	*
	* @example
	* var str = ns.kebabcase( 'fooBar' );
	* // returns 'foo-bar'
	*
	* @example
	* var str = ns.kebabcase( 'foo_bar' );
	* // returns 'foo-bar'
	*
	* @example
	* var str = ns.kebabcase( 'foo-bar' );
	* // returns 'foo-bar'
	*/
	kebabcase: typeof kebabcase;

	/**
	* Left pads a string such that the padded string has a length of at least `len`.
	*
	* ## Notes
	*
	* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
	*
	* @param str - string to pad
	* @param len - minimum string length
	* @param pad - string used to pad
	* @returns padded string
	*
	* @example
	* var str = ns.lpad( 'a', 5, ' ' );
	* // returns '    a'
	*
	* @example
	* var str = ns.lpad( 'beep', 10, 'b' );
	* // returns 'bbbbbbbeep'
	*
	* @example
	* var str = ns.lpad( 'boop', 12, 'beep' );
	* // returns 'beepbeepboop'
	*/
	lpad: typeof lpad;

	/**
	* Trims whitespace characters from the beginning of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.ltrim( '   Whitespace   ' );
	* // returns 'Whitespace   '
	*
	* @example
	* var out = ns.ltrim( '\t\t\tTabs\t\t\t' );
	* // returns 'Tabs\t\t\t'
	*
	* @example
	* var out = ns.ltrim( '\n\n\nNew Lines\n\n\n' );
	* // returns 'New Lines\n\n\n'
	*/
	ltrim: typeof ltrim;

	/**
	* Converts a string to lowercase.
	*
	* @param str - string to convert
	* @returns lowercase string
	*
	* @example
	* var str = ns.lowercase( 'bEEp' );
	* // returns 'beep'
	*/
	lowercase: typeof lowercase;

	/**
	* Converts a string to Pascal case.
	*
	* @param str - string to convert
	* @returns Pascal-cased string
	*
	* @example
	* var str = ns.pascalcase( 'Hello World!' );
	* // returns 'HelloWorld'
	*
	* @example
	* var str = ns.pascalcase( 'foo_bar' );
	* // returns 'FooBar'
	*
	* @example
	* var str = ns.pascalcase( 'foo-bar' );
	* // returns 'FooBar'
	*/
	pascalcase: typeof pascalcase;

	/**
	* Percent-encodes a UTF-16 encoded string according to [RFC 3986][1].
	*
	* [1]: https://tools.ietf.org/html/rfc3986#section-2.1
	*
	* @param str - string to percent-encode
	* @returns percent-encoded string
	*
	* @example
	* var str1 = 'Ladies + Gentlemen';
	*
	* var str2 = ns.percentEncode( str1 );
	* // returns 'Ladies%20%2B%20Gentlemen'
	*/
	percentEncode: typeof percentEncode;

	/**
	* Repeats a string `n` times and returns the concatenated result.
	*
	* @param str - string to repeat
	* @param n - number of times to repeat the string
	* @returns repeated string
	*
	* @example
	* var str = ns.repeat( 'a', 5 );
	* // returns 'aaaaa'
	*
	* @example
	* var str = ns.repeat( '', 100 );
	* // returns ''
	*
	* @example
	* var str = ns.repeat( 'beep', 0 );
	* // returns ''
	*/
	repeat: typeof repeat;

	/**
	* Replaces search occurrences with a replacement string.
	*
	* @param str - input string
	* @param search - search expression
	* @param newval - replacement value or function
	* @returns new string containing replacement(s)
	*
	* @example
	* var str = 'Hello World';
	* var out = ns.replace( str, /world/i, 'Mr. President' );
	* // returns 'Hello Mr. President'
	*
	* @example
	* var capitalize = require( `@stdlib/string/base/capitalize` );
	*
	* var str = 'Oranges and lemons say the bells of St. Clement\'s';
	*
	* function ns.replacer( match, p1 ) {
	*     return capitalize( p1 );
	* }
	*
	* var out = ns.replace( str, /([^\s]*)/gi, ns.replacer);
	* // returns 'Oranges And Lemons Say The Bells Of St. Clement\'s'
	*/
	replace: typeof replace;

	/**
	* Trims whitespace from the end of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.rtrim( '   Whitespace   ' );
	* // returns '   Whitespace'
	*
	* @example
	* var out = ns.rtrim( '\t\t\tTabs\t\t\t' );
	* // returns '\t\t\tTabs'
	*
	* @example
	* var out = ns.rtrim( '\n\n\nNew Lines\n\n\n' );
	* // returns '\n\n\nNew Lines'
	*/
	rtrim: typeof rtrim;

	/**
	* Converts a string to snake case.
	*
	* @param str - string to convert
	* @returns snake-cased string
	*
	* @example
	* var str = ns.snakecase( 'fooBar' );
	* // returns 'foo_bar'
	*
	* @example
	* var str = ns.snakecase( 'foo-bar' );
	* // returns 'foo_bar'
	*
	* @example
	* var str = ns.snakecase( 'foo_bar' );
	* // returns 'foo_bar'
	*/
	snakecase: typeof snakecase;

	/**
	* Capitalizes the first letter of each word in an input string.
	*
	* @param str - string to convert
	* @returns start-cased string
	*
	* @example
	* var str = ns.startcase( 'beep boop foo bar' );
	* // returns 'Beep Boop Foo Bar'
	*/
	startcase: typeof startcase;

	/**
	* Tests if a string starts with the characters of another string.
	*
	* ## Notes
	*
	* -   If provided a negative `position`, the search starting position is resolved relative to the end of the string. For example, if provided the input string `'beep boop'` and a `position` equal to `-2`, the starting position resolves to `7`.
	*
	* @param str - input string
	* @param search - search string
	* @param position - position at which to start searching
	* @returns boolean indicating if the input string starts with the search string
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember', 0 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember, remember', 0 );
	* // returns false
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'To be', 0 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'to be', 0 );
	* // returns false
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'to be', 14 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'quest', -9 );
	* // returns true
	*/
	startsWith: typeof startsWith;

	/**
	* Trims whitespace characters from the beginning and end of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.trim( '   Whitespace   ' );
	* // returns 'Whitespace'
	*
	* @example
	* var out = ns.trim( '\t\t\tTabs\t\t\t' );
	* // returns 'Tabs'
	*
	* @example
	* var out = ns.trim( '\n\n\nNew Lines\n\n\n' );
	* // returns 'New Lines'
	*/
	trim: typeof trim;

	/**
	* Uncapitalizes the first character of a string.
	*
	* @param str - input string
	* @returns input string with first character converted to lowercase
	*
	* @example
	* var out = ns.uncapitalize( 'Last man standing' );
	* // returns 'last man standing'
	*
	* @example
	* var out = ns.uncapitalize( 'Presidential election' );
	* // returns 'presidential election'
	*
	* @example
	* var out = ns.uncapitalize( 'JavaScript' );
	* // returns 'javaScript'
	*
	* @example
	* var out = ns.uncapitalize( 'Hidden Treasures' );
	* // returns 'hidden Treasures'
	*/
	uncapitalize: typeof uncapitalize;

	/**
	* Converts a string to uppercase.
	*
	* @param str - string to convert
	* @returns uppercase string
	*
	* @example
	* var str = ns.uppercase( 'bEEp' );
	* // returns 'BEEP'
	*/
	uppercase: typeof uppercase;
}

/**
* Base (i.e., lower-level) string functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;