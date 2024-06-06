# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-06-06)

<section class="packages">

### Packages

<section class="package" id="string-base-unreleased">

#### [@stdlib/string/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base)

<details>

<section class="features">

##### Features

-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - update namespace TypeScript declarations
-   [`7f14562`](https://github.com/stdlib-js/stdlib/commit/7f145620d310738f2fd3bd15a3b97b803dff4e73) - add new packages to  namespaces
-   [`02c9e03`](https://github.com/stdlib-js/stdlib/commit/02c9e03dfacaa4edea3f59ab3caa6a86e640d280) - update namespace TypeScript declarations [(#2136)](https://github.com/stdlib-js/stdlib/pull/2136)
-   [`53c33cb`](https://github.com/stdlib-js/stdlib/commit/53c33cb04e6d897583ece98e24c4d98f5d87b471) - add `replaceAfterLast` to namespace
-   [`5a14851`](https://github.com/stdlib-js/stdlib/commit/5a14851f6eed952a9367c5b738678b4d21e66563) - add `replaceBeforeLast` to namespace
-   [`b57c6fc`](https://github.com/stdlib-js/stdlib/commit/b57c6fcdf70cbeeec0c8ffbe28e5d77db9a525de) - update namespace TypeScript declarations [(#2128)](https://github.com/stdlib-js/stdlib/pull/2128)
-   [`7593460`](https://github.com/stdlib-js/stdlib/commit/759346086243f5fb6d5cad19fbede4547d156818) - add `forEachRight` to namespace
-   [`3f1a75d`](https://github.com/stdlib-js/stdlib/commit/3f1a75d23e95f7e9fc2b3452413f4a6b57b6358e) - add `replaceAfter` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-for-each-code-point-right-unreleased">

#### [@stdlib/string/base/for-each-code-point-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/for-each-code-point-right)

<details>

<section class="features">

##### Features

-   [`91f84da`](https://github.com/stdlib-js/stdlib/commit/91f84dabd8218e66dde7e25c570904e790d5e8a3) - add `string/base/for-each-code-point-right` [(#2163)](https://github.com/stdlib-js/stdlib/pull/2163)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-for-each-right-unreleased">

#### [@stdlib/string/base/for-each-right](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/for-each-right)

<details>

<section class="features">

##### Features

-   [`0aa7b4a`](https://github.com/stdlib-js/stdlib/commit/0aa7b4ad8adfde545ba39a7a4d5ebf1afc502342) - add `string/base/for-each-right` [(##1369)](#1369)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##856 ](#856 )

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-last-unreleased">

#### [@stdlib/string/base/last](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/last)

<details>

<section class="features">

##### Features

-   [`3b6b680`](https://github.com/stdlib-js/stdlib/commit/3b6b680826a663ca6d22b4d5666ef84389143330) - add `string/base/last`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-last-code-point-unreleased">

#### [@stdlib/string/base/last-code-point](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/last-code-point)

<details>

<section class="features">

##### Features

-   [`7bce237`](https://github.com/stdlib-js/stdlib/commit/7bce23772744ae439e8fc4d86f1abf92ea8a8b05) - add `string/base/last-code-point`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-last-grapheme-cluster-unreleased">

#### [@stdlib/string/base/last-grapheme-cluster](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/last-grapheme-cluster)

<details>

<section class="features">

##### Features

-   [`bbc3cfc`](https://github.com/stdlib-js/stdlib/commit/bbc3cfc074d775ed34c495d451323e789baafb8b) - add `string/base/last-grapheme-cluster` [(#1810)](https://github.com/stdlib-js/stdlib/pull/1810)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1729](https://github.com/stdlib-js/stdlib/issues/1729)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-after-unreleased">

#### [@stdlib/string/base/replace-after](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace-after)

<details>

<section class="features">

##### Features

-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020) - resolve negative indices relative to the last string character
-   [`04ee89f`](https://github.com/stdlib-js/stdlib/commit/04ee89f626756ab9da99b864ccbb9897964a568d) - add `string/base/replace-after` [(#1363)](https://github.com/stdlib-js/stdlib/pull/1363)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020): resolve negative indices relative to the last string character
-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020): resolve negative indices relative to the last string character 

    -   Previously, a negative index would resolve to `0`. This commit changes
    that behavior to resolve relative to the last index. To preserve
    previous behavior, users should clamp `fromIndex` values to string
    bounds before calling into `replaceAfter`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#812](https://github.com/stdlib-js/stdlib/issues/812)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-after-last-unreleased">

#### [@stdlib/string/base/replace-after-last](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace-after-last)

<details>

<section class="features">

##### Features

-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849) - resolve negative index arguments relative to last index
-   [`58bdac8`](https://github.com/stdlib-js/stdlib/commit/58bdac8a8a5914b7b2598f873418f9edae4c8843) - add `string/base/replace-after-last` [(##1365)](#1365)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849): resolve negative index arguments relative to last index
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849): resolve negative index arguments relative to last index 

    -   Previously, a negative `fromIndex` argument would resolve to `0`.
    The current behavior resolves relative to the last character index.
    To preserve the previous behavior, users should clamp index arguments
    to index bounds before calling `replaceAfterLast`.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##814](#814)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-before-unreleased">

#### [@stdlib/string/base/replace-before](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace-before)

<details>

<section class="features">

##### Features

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - resolve negative indices relative to the last character index
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - add support for `fromIndex`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last character index
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last index 

    -   Previously, negative index arguments would resolve to zero and
    search would start from the beginning of the string. To preserve
    previous behavior, users should clamp `fromIndex` values to string
    index bounds before calling into `replaceBefore`.

-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): add support for `fromIndex`
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): require `fromIndex` argument 

    -   To migrate, users should provide an explicit `fromIndex` of `0` in
    order to retain previous behavior.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-before-last-unreleased">

#### [@stdlib/string/base/replace-before-last](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace-before-last)

<details>

<section class="features">

##### Features

-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6) - support negative `fromIndex` arguments
-   [`272f91b`](https://github.com/stdlib-js/stdlib/commit/272f91b30128d4536470605d01aeeb73d2684376) - add `string/base/replace-before-last` [(##1364)](#1364)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6): support negative `fromIndex` arguments
-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6): resolve negative indices relative to last index 

    -   In order to preserve prior behavior, users should insert a manual
    check before calling this API.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##813](#813)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-stickycase-unreleased">

#### [@stdlib/string/base/stickycase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/stickycase)

<details>

<section class="features">

##### Features

-   [`84a6f4b`](https://github.com/stdlib-js/stdlib/commit/84a6f4be753da2f694affc99d649b49f5e41e231) - add  `string/base/stickycase`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849): resolve negative index arguments relative to last index
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849): resolve negative index arguments relative to last index 

    -   Previously, a negative `fromIndex` argument would resolve to `0`.
    The current behavior resolves relative to the last character index.
    To preserve the previous behavior, users should clamp index arguments
    to index bounds before calling `replaceAfterLast`.

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last character index
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last index 

    -   Previously, negative index arguments would resolve to zero and
    search would start from the beginning of the string. To preserve
    previous behavior, users should clamp `fromIndex` values to string
    index bounds before calling into `replaceBefore`.

-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020): resolve negative indices relative to the last string character
-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020): resolve negative indices relative to the last string character 

    -   Previously, a negative index would resolve to `0`. This commit changes
    that behavior to resolve relative to the last index. To preserve
    previous behavior, users should clamp `fromIndex` values to string
    bounds before calling into `replaceAfter`.

-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6): support negative `fromIndex` arguments
-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6): resolve negative indices relative to last index 

    -   In order to preserve prior behavior, users should insert a manual
    check before calling this API.

-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): add support for `fromIndex`
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): require `fromIndex` argument 

    -   To migrate, users should provide an explicit `fromIndex` of `0` in
    order to retain previous behavior.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 5 issues were closed in this release:

[#1729](https://github.com/stdlib-js/stdlib/issues/1729), [##813](#813), [##814](#814), [##856 ](#856 ), [#812](https://github.com/stdlib-js/stdlib/issues/812)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 8 people contributed to this release. Thank you to the following contributors:

-   Aditya Sapra
-   Anudeep Sanapala
-   Athan Reines
-   Golden Kumar
-   Khaldon
-   Philipp Burckhardt
-   Pranav
-   stdlib-bot

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`c3ebfa8`](https://github.com/stdlib-js/stdlib/commit/c3ebfa80e311db338b171ebf8eb5f46bc66e9bf6) - **docs:** update namespace table of contents and address spelling errors _(by Philipp Burckhardt)_
-   [`547f610`](https://github.com/stdlib-js/stdlib/commit/547f6104226a8eb84c0473628733d859741ae661) - **fix:** perform explicit string casting when specifier is `%s` _(by Athan Reines)_
-   [`f8775e6`](https://github.com/stdlib-js/stdlib/commit/f8775e6bda51d0d2c72d8005e6e377bed1dcc499) - **refactor:** avoid use of global _(by Athan Reines)_
-   [`9ef09e2`](https://github.com/stdlib-js/stdlib/commit/9ef09e2cb6c9e777edcccaacd9d2ff681b0b4381) - **docs:** update related packages sections  [(##2248)](#2248) _(by stdlib-bot)_
-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - **feat:** update namespace TypeScript declarations _(by stdlib-bot, Philipp Burckhardt)_
-   [`fad5efb`](https://github.com/stdlib-js/stdlib/commit/fad5efbeba4c9a051dd8a99eb3501f71f7847892) - **docs:** update namespace table of contents [(##2244)](#2244) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ec98887`](https://github.com/stdlib-js/stdlib/commit/ec9888724c28aa7218d88ff62b91b71c0089c559) - **docs:** update related packages sections [(##2241)](#2241) _(by stdlib-bot)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(##2240)](#2240) _(by stdlib-bot)_
-   [`7f14562`](https://github.com/stdlib-js/stdlib/commit/7f145620d310738f2fd3bd15a3b97b803dff4e73) - **feat:** add new packages to  namespaces _(by Philipp Burckhardt)_
-   [`189c569`](https://github.com/stdlib-js/stdlib/commit/189c5691b88b36a2fd1ff53368e6d44b90e40535) - **docs:** update related packages sections [(##2194)](#2194) _(by stdlib-bot)_
-   [`91f84da`](https://github.com/stdlib-js/stdlib/commit/91f84dabd8218e66dde7e25c570904e790d5e8a3) - **feat:** add `string/base/for-each-code-point-right` [(#2163)](https://github.com/stdlib-js/stdlib/pull/2163) _(by Khaldon, Athan Reines)_
-   [`57e8762`](https://github.com/stdlib-js/stdlib/commit/57e87620ec449ad73b884e3b4850537df0c494fe) - **chore:** change to relative require paths and fix code style _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`4b7bda7`](https://github.com/stdlib-js/stdlib/commit/4b7bda7cf10fd6dfdd4246152a120da2860893c7) - **docs:** update namespace table of contents [(#2137)](https://github.com/stdlib-js/stdlib/pull/2137) _(by stdlib-bot, Athan Reines)_
-   [`02c9e03`](https://github.com/stdlib-js/stdlib/commit/02c9e03dfacaa4edea3f59ab3caa6a86e640d280) - **feat:** update namespace TypeScript declarations [(#2136)](https://github.com/stdlib-js/stdlib/pull/2136) _(by stdlib-bot, Athan Reines)_
-   [`53c33cb`](https://github.com/stdlib-js/stdlib/commit/53c33cb04e6d897583ece98e24c4d98f5d87b471) - **feat:** add `replaceAfterLast` to namespace _(by Athan Reines)_
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849) - **feat:** resolve negative index arguments relative to last index _(by Athan Reines)_
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - **feat:** resolve negative indices relative to the last character index _(by Athan Reines)_
-   [`b5c7e64`](https://github.com/stdlib-js/stdlib/commit/b5c7e647156eaf0ca5234210b2f98b0c22bd7ed7) - **docs:** update examples _(by Athan Reines)_
-   [`2512e10`](https://github.com/stdlib-js/stdlib/commit/2512e109d8d9928b006daac2ecdde8a51e272966) - **docs:** update examples _(by Athan Reines)_
-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020) - **feat:** resolve negative indices relative to the last string character _(by Athan Reines)_
-   [`522a048`](https://github.com/stdlib-js/stdlib/commit/522a048a7f63c2349d966b799e5b63d9842b5d13) - **docs:** fix typos _(by Athan Reines)_
-   [`5a14851`](https://github.com/stdlib-js/stdlib/commit/5a14851f6eed952a9367c5b738678b4d21e66563) - **feat:** add `replaceBeforeLast` to namespace _(by Athan Reines)_
-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6) - **feat:** support negative `fromIndex` arguments _(by Athan Reines)_
-   [`728a1cf`](https://github.com/stdlib-js/stdlib/commit/728a1cf6e48d8ec71ebba5e09ddae2dd66a7b74c) - **docs:** update namespace table of contents [(#2129)](https://github.com/stdlib-js/stdlib/pull/2129) _(by stdlib-bot, Athan Reines)_
-   [`b57c6fc`](https://github.com/stdlib-js/stdlib/commit/b57c6fcdf70cbeeec0c8ffbe28e5d77db9a525de) - **feat:** update namespace TypeScript declarations [(#2128)](https://github.com/stdlib-js/stdlib/pull/2128) _(by stdlib-bot, Athan Reines)_
-   [`7593460`](https://github.com/stdlib-js/stdlib/commit/759346086243f5fb6d5cad19fbede4547d156818) - **feat:** add `forEachRight` to namespace _(by Athan Reines)_
-   [`bd6ee6f`](https://github.com/stdlib-js/stdlib/commit/bd6ee6f38d48df3f6a629b25636833266ac175bc) - **refactor:** improve type inference _(by Athan Reines)_
-   [`ae446ec`](https://github.com/stdlib-js/stdlib/commit/ae446ec18d3f87bba603f689ac8cbd3de5bca88c) - **refactor:** improve type inference _(by Athan Reines)_
-   [`da01a05`](https://github.com/stdlib-js/stdlib/commit/da01a057dd27c60f1774834836143dd818d2c690) - **refactor:** improve type inference _(by Athan Reines)_
-   [`fb8b73b`](https://github.com/stdlib-js/stdlib/commit/fb8b73b56151797a99a8ce4703f1cf5848109084) - **refactor:** improve type inference and update descriptions _(by Athan Reines)_
-   [`3f1a75d`](https://github.com/stdlib-js/stdlib/commit/3f1a75d23e95f7e9fc2b3452413f4a6b57b6358e) - **feat:** add `replaceAfter` to namespace _(by Athan Reines)_
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - **feat:** add support for `fromIndex` _(by Athan Reines)_
-   [`bbc3cfc`](https://github.com/stdlib-js/stdlib/commit/bbc3cfc074d775ed34c495d451323e789baafb8b) - **feat:** add `string/base/last-grapheme-cluster` [(#1810)](https://github.com/stdlib-js/stdlib/pull/1810) _(by Aditya Sapra, Athan Reines)_
-   [`0616f00`](https://github.com/stdlib-js/stdlib/commit/0616f00c08b92c0c40ac1a1cabee46994e8d6d63) - **docs:** update related packages sections _(by stdlib-bot)_
-   [`7bce237`](https://github.com/stdlib-js/stdlib/commit/7bce23772744ae439e8fc4d86f1abf92ea8a8b05) - **feat:** add `string/base/last-code-point` _(by Aditya Sapra, Pranav, Philipp Burckhardt)_
-   [`d40dbaf`](https://github.com/stdlib-js/stdlib/commit/d40dbafc25e3e10c8fa83f5b4203db97c289823c) - **chore:** update package meta data [(##1812)](#1812) _(by stdlib-bot)_
-   [`3b6b680`](https://github.com/stdlib-js/stdlib/commit/3b6b680826a663ca6d22b4d5666ef84389143330) - **feat:** add `string/base/last` _(by Aditya Sapra, Philipp Burckhardt)_
-   [`84a6f4b`](https://github.com/stdlib-js/stdlib/commit/84a6f4be753da2f694affc99d649b49f5e41e231) - **feat:** add  `string/base/stickycase` _(by Anudeep Sanapala, stdlib-bot, Philipp Burckhardt)_
-   [`272f91b`](https://github.com/stdlib-js/stdlib/commit/272f91b30128d4536470605d01aeeb73d2684376) - **feat:** add `string/base/replace-before-last` [(##1364)](#1364) _(by Golden Kumar, stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`58bdac8`](https://github.com/stdlib-js/stdlib/commit/58bdac8a8a5914b7b2598f873418f9edae4c8843) - **feat:** add `string/base/replace-after-last` [(##1365)](#1365) _(by Golden Kumar, Athan Reines, Philipp Burckhardt)_
-   [`0aa7b4a`](https://github.com/stdlib-js/stdlib/commit/0aa7b4ad8adfde545ba39a7a4d5ebf1afc502342) - **feat:** add `string/base/for-each-right` [(##1369)](#1369) _(by Khaldon, Philipp Burckhardt)_
-   [`04ee89f`](https://github.com/stdlib-js/stdlib/commit/04ee89f626756ab9da99b864ccbb9897964a568d) - **feat:** add `string/base/replace-after` [(#1363)](https://github.com/stdlib-js/stdlib/pull/1363) _(by Golden Kumar, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

## 0.2.1 (2024-02-24)

<section class="packages">

### Packages

<section class="package" id="string-base-v0.2.1">

#### [@stdlib/string/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base)

<details>

<section class="features">

##### Features

-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089)
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`d52e01c`](https://github.com/stdlib-js/stdlib/commit/d52e01c4a23d0a52ecacab0f16b663383dba96b7) - add `removeFirst*` packages to namespace
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068)
-   [`1389946`](https://github.com/stdlib-js/stdlib/commit/13899464bcfa46098af5ed215df3e3c05129c7a6) - add `forEach` to namespace
-   [`ed5abeb`](https://github.com/stdlib-js/stdlib/commit/ed5abeb8355e9798b95976f8e89120d022396e17) - add `forEachCodePoint` to namespace
-   [`1b8d401`](https://github.com/stdlib-js/stdlib/commit/1b8d401959a90b8dac6c0ebb139d009800f4c9d2) - add `forEachGraphemeCluster` to namespace
-   [`8758d21`](https://github.com/stdlib-js/stdlib/commit/8758d213498f06bd26e770991724c59b3485ffbb) - add `distances` to namespace
-   [`bc8f74c`](https://github.com/stdlib-js/stdlib/commit/bc8f74c639792f47f1af2d36831bcbafeb85054a) - add `first`, `firstCodePoint`, and `firstGraphemeCluster` to namespace
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)
-   [`0e987b6`](https://github.com/stdlib-js/stdlib/commit/0e987b6fde52d7ef3060f8a47ed25573644025a5) - update namespace
-   [`a7d8f42`](https://github.com/stdlib-js/stdlib/commit/a7d8f429e9058cebfb4931309d5712b05f8c7931) - add `invcase` to namespace
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`5eded94`](https://github.com/stdlib-js/stdlib/commit/5eded9427070a00c7e0eaaab81962a049b574b2a) - add `replaceBefore` to namespace

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-altcase-v0.2.1">

#### [@stdlib/string/base/altcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/altcase)

<details>

<section class="features">

##### Features

-   [`e4cf6a5`](https://github.com/stdlib-js/stdlib/commit/e4cf6a5254fbcc8ca5e858c2fc5a7fcb0a648164) - add `string/base/altcase` [(#1173)](https://github.com/stdlib-js/stdlib/pull/1173)

</section>

<!-- /.features -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#850](https://github.com/stdlib-js/stdlib/issues/850)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-camelcase-v0.2.1">

#### [@stdlib/string/base/camelcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/camelcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-capitalize-v0.2.1">

#### [@stdlib/string/base/capitalize](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/capitalize)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-code-point-at-v0.2.1">

#### [@stdlib/string/base/code-point-at](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/code-point-at)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-constantcase-v0.2.1">

#### [@stdlib/string/base/constantcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/constantcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`0db467b`](https://github.com/stdlib-js/stdlib/commit/0db467baee5053532d47ea4721870b0ebbaf7831) - correctly parse strings with hyphens in constantcase [(##1022)](#1022)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##1017](#1017)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-distances-v0.2.1">

#### [@stdlib/string/base/distances](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/distances)

<details>

<section class="features">

##### Features

-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047)
-   [`223eb98`](https://github.com/stdlib-js/stdlib/commit/223eb983e3ed03c4927fdd30aad6d1d52813c699) - update namespace TypeScript declarations
-   [`c40a139`](https://github.com/stdlib-js/stdlib/commit/c40a1396adb204bf1f9c6d550d99884a8004b424) - add `string/base/distances/levenshtein` [(##1030)](#1030 )

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##835 ](#835 )

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-distances-hamming-v0.2.1">

#### [@stdlib/string/base/distances/hamming](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/distances/hamming)

<details>

<section class="features">

##### Features

-   [`165ab63`](https://github.com/stdlib-js/stdlib/commit/165ab63d2f841d54753be8572f7db06be878dfbb) - add `string/base/distances/hamming` (#1166) [(#1166)](https://github.com/stdlib-js/stdlib/pull/1166)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-distances-levenshtein-v0.2.1">

#### [@stdlib/string/base/distances/levenshtein](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/distances/levenshtein)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`c40a139`](https://github.com/stdlib-js/stdlib/commit/c40a1396adb204bf1f9c6d550d99884a8004b424) - add `string/base/distances/levenshtein` [(##1030)](#1030 )

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##835 ](#835 )

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-dotcase-v0.2.1">

#### [@stdlib/string/base/dotcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/dotcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-ends-with-v0.2.1">

#### [@stdlib/string/base/ends-with](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/ends-with)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-first-v0.2.1">

#### [@stdlib/string/base/first](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/first)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`cfdd473`](https://github.com/stdlib-js/stdlib/commit/cfdd47366d9599c07ab27e3886de66ec76f7591c) - add `string/base/first`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-first-code-point-v0.2.1">

#### [@stdlib/string/base/first-code-point](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/first-code-point)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`c80f976`](https://github.com/stdlib-js/stdlib/commit/c80f97615bfc29e0fcc0b0cf1d70d0240b5191f5) - add `string/base/first-code-point`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-first-grapheme-cluster-v0.2.1">

#### [@stdlib/string/base/first-grapheme-cluster](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/first-grapheme-cluster)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`71e5de2`](https://github.com/stdlib-js/stdlib/commit/71e5de2d7187757ba15043cffac77385d9d6e0aa) - add `string/base/first-grapheme-cluster`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-for-each-v0.2.1">

#### [@stdlib/string/base/for-each](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/for-each)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`bc8bdba`](https://github.com/stdlib-js/stdlib/commit/bc8bdba5e90f81bed942f5f0114c6373d323f9b6) - add `string/base/for-each`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-for-each-code-point-v0.2.1">

#### [@stdlib/string/base/for-each-code-point](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/for-each-code-point)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`a145df2`](https://github.com/stdlib-js/stdlib/commit/a145df2c49fe0ba4872b0c8cac588a0033db355a) - add `string/base/for-each-code-point`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-for-each-grapheme-cluster-v0.2.1">

#### [@stdlib/string/base/for-each-grapheme-cluster](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/for-each-grapheme-cluster)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`b574ced`](https://github.com/stdlib-js/stdlib/commit/b574cede2f83be2615a5227ba57fea7fd603645a) - add `string/base/for-each-grapheme-cluster`

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-format-interpolate-v0.2.1">

#### [@stdlib/string/base/format-interpolate](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/format-interpolate)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-format-tokenize-v0.2.1">

#### [@stdlib/string/base/format-tokenize](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/format-tokenize)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-headercase-v0.2.1">

#### [@stdlib/string/base/headercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/headercase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`2dca659`](https://github.com/stdlib-js/stdlib/commit/2dca659781d39918edce23ee741fad6d01d91849) - add `@stdlib/string-base/headercase` [(##1039)](#1039)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[##849](#849)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-invcase-v0.2.1">

#### [@stdlib/string/base/invcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/invcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`93aca6c`](https://github.com/stdlib-js/stdlib/commit/93aca6cb37c64fdd4cc92fe0405968699bc5e520) - add `string/base/invcase` [(#974)](https://github.com/stdlib-js/stdlib/pull/974)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#851](https://github.com/stdlib-js/stdlib/issues/851)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-kebabcase-v0.2.1">

#### [@stdlib/string/base/kebabcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/kebabcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-left-pad-v0.2.1">

#### [@stdlib/string/base/left-pad](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/left-pad)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-left-trim-v0.2.1">

#### [@stdlib/string/base/left-trim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/left-trim)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-lowercase-v0.2.1">

#### [@stdlib/string/base/lowercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/lowercase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-pascalcase-v0.2.1">

#### [@stdlib/string/base/pascalcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/pascalcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-percent-encode-v0.2.1">

#### [@stdlib/string/base/percent-encode](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/percent-encode)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-first-v0.2.1">

#### [@stdlib/string/base/remove-first](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-first)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-first-code-point-v0.2.1">

#### [@stdlib/string/base/remove-first-code-point](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-first-code-point)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-first-grapheme-cluster-v0.2.1">

#### [@stdlib/string/base/remove-first-grapheme-cluster](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-first-grapheme-cluster)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-last-v0.2.1">

#### [@stdlib/string/base/remove-last](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-last)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-last-code-point-v0.2.1">

#### [@stdlib/string/base/remove-last-code-point](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-last-code-point)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-remove-last-grapheme-cluster-v0.2.1">

#### [@stdlib/string/base/remove-last-grapheme-cluster](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/remove-last-grapheme-cluster)

<details>

<section class="features">

##### Features

-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-repeat-v0.2.1">

#### [@stdlib/string/base/repeat](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/repeat)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-v0.2.1">

#### [@stdlib/string/base/replace](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-replace-before-v0.2.1">

#### [@stdlib/string/base/replace-before](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/replace-before)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - remove CLI
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI 

    -   This is a \"base\" package, and thus should not normally have a CLI.
    The CLI has moved to `@stdlib/string-replace-before`. Users relying
    on the CLI should migrate to using that package.

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#811](https://github.com/stdlib-js/stdlib/issues/811)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-reverse-v0.2.1">

#### [@stdlib/string/base/reverse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/reverse)

<details>

<section class="features">

##### Features

-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-reverse-code-points-v0.2.1">

#### [@stdlib/string/base/reverse-code-points](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/reverse-code-points)

<details>

<section class="features">

##### Features

-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-reverse-grapheme-clusters-v0.2.1">

#### [@stdlib/string/base/reverse-grapheme-clusters](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/reverse-grapheme-clusters)

<details>

<section class="features">

##### Features

-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-right-pad-v0.2.1">

#### [@stdlib/string/base/right-pad](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/right-pad)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`857646f`](https://github.com/stdlib-js/stdlib/commit/857646f2545aa881c816b8040621225a9b9e6a27) - add base package to right pad a string

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-right-trim-v0.2.1">

#### [@stdlib/string/base/right-trim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/right-trim)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-snakecase-v0.2.1">

#### [@stdlib/string/base/snakecase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/snakecase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-startcase-v0.2.1">

#### [@stdlib/string/base/startcase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/startcase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-starts-with-v0.2.1">

#### [@stdlib/string/base/starts-with](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/starts-with)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-trim-v0.2.1">

#### [@stdlib/string/base/trim](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/trim)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-truncate-middle-v0.2.1">

#### [@stdlib/string/base/truncate-middle](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/truncate-middle)

<details>

<section class="features">

##### Features

-   [`d859ee0`](https://github.com/stdlib-js/stdlib/commit/d859ee084ec4a90e53cd6914c8abd1633ade0b54) - add `string/base/truncate-middle` [(#1118)](https://github.com/stdlib-js/stdlib/pull/1118)

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-uncapitalize-v0.2.1">

#### [@stdlib/string/base/uncapitalize](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/uncapitalize)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="string-base-uppercase-v0.2.1">

#### [@stdlib/string/base/uppercase](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/string/base/uppercase)

<details>

<section class="features">

##### Features

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI 

    -   This is a \"base\" package, and thus should not normally have a CLI.
    The CLI has moved to `@stdlib/string-replace-before`. Users relying
    on the CLI should migrate to using that package.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 6 issues were closed in this release:

[#850](https://github.com/stdlib-js/stdlib/issues/850), [##849](#849), [##835 ](#835 ), [##1017](#1017), [#811](https://github.com/stdlib-js/stdlib/issues/811), [#851](https://github.com/stdlib-js/stdlib/issues/851)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 12 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Athan Reines
-   Harshita Kalani
-   Jaysukh Makvana
-   Naresh Jagadeesan
-   Philipp Burckhardt
-   Planeshifter
-   Pranav
-   Robert Gislason
-   Roman Stetsyk
-   Stephannie Jiménez Gacha
-   Yernar Yergaziyev

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`6bff34f`](https://github.com/stdlib-js/stdlib/commit/6bff34fcc4cbc7c17b7ff99beed20cdd0ea1b3c0) - **style:** add missing space _(by Athan Reines)_
-   [`0b15ebe`](https://github.com/stdlib-js/stdlib/commit/0b15ebe4d724b7aec7f27c47f4886bdac3adb7ae) - **docs:** update related packages sections  [(##1310)](#1310) _(by stdlib-bot)_
-   [`0c541d8`](https://github.com/stdlib-js/stdlib/commit/0c541d849099e8c4707fd5f4742849b5e998aefc) - **docs:** fix typo _(by Athan Reines)_
-   [`5132a24`](https://github.com/stdlib-js/stdlib/commit/5132a24b73a2525bb6ca8bea195ef901333311fd) - **docs:** fix typo _(by Athan Reines)_
-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(##1301)](#1301) _(by stdlib-bot)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`5184bd0`](https://github.com/stdlib-js/stdlib/commit/5184bd0461e8c78f983d4b619a863d93c52c6396) - **docs:** update namespace table of contents [(##1213)](#1213) _(by stdlib-bot, Athan Reines)_
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - **feat:** update namespace exports _(by Philipp Burckhardt)_
-   [`5e1216b`](https://github.com/stdlib-js/stdlib/commit/5e1216ba1318f0eb364b2fe7eae6056cb7a5e94f) - **docs:** update related packages sections [(##1192)](#1192) _(by stdlib-bot)_
-   [`165ab63`](https://github.com/stdlib-js/stdlib/commit/165ab63d2f841d54753be8572f7db06be878dfbb) - **feat:** add `string/base/distances/hamming` (#1166) [(#1166)](https://github.com/stdlib-js/stdlib/pull/1166) _(by Robert Gislason, Athan Reines)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(##1179)](#1179) _(by stdlib-bot)_
-   [`e4cf6a5`](https://github.com/stdlib-js/stdlib/commit/e4cf6a5254fbcc8ca5e858c2fc5a7fcb0a648164) - **feat:** add `string/base/altcase` [(#1173)](https://github.com/stdlib-js/stdlib/pull/1173) _(by Jaysukh Makvana, Athan Reines)_
-   [`4d6b104`](https://github.com/stdlib-js/stdlib/commit/4d6b104a0309b9a016700badd64b137ff384de52) - **docs:** update related packages sections [(#1172)](https://github.com/stdlib-js/stdlib/pull/1172) _(by stdlib-bot, Athan Reines)_
-   [`2f0cb7e`](https://github.com/stdlib-js/stdlib/commit/2f0cb7ed139b763e65205939511c7cc85b947e64) - **docs:** update related packages sections [(#1154)](https://github.com/stdlib-js/stdlib/pull/1154) _(by stdlib-bot)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(##1145)](#1145) _(by stdlib-bot)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d859ee0`](https://github.com/stdlib-js/stdlib/commit/d859ee084ec4a90e53cd6914c8abd1633ade0b54) - **feat:** add `string/base/truncate-middle` [(#1118)](https://github.com/stdlib-js/stdlib/pull/1118) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`f9c75ce`](https://github.com/stdlib-js/stdlib/commit/f9c75ce726ed4e5fade8622315bb98094dad8561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - **feat:** refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - **feat:** refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - **feat:** update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089) _(by stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`a92aae0`](https://github.com/stdlib-js/stdlib/commit/a92aae06191187aa30abc3213a14e997abda032c) - **docs:** update namespace table of contents [(#1091)](https://github.com/stdlib-js/stdlib/pull/1091) _(by stdlib-bot, Athan Reines)_
-   [`1b163e9`](https://github.com/stdlib-js/stdlib/commit/1b163e9c6c6d81533a9418206e349df3bfca3858) - **style:** resolve lint errors _(by Philipp Burckhardt)_
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d52e01c`](https://github.com/stdlib-js/stdlib/commit/d52e01c4a23d0a52ecacab0f16b663383dba96b7) - **feat:** add `removeFirst*` packages to namespace _(by Athan Reines)_
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - **feat:** add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - **fix:** set correct package names and descriptions _(by Philipp Burckhardt)_
-   [`6c7e770`](https://github.com/stdlib-js/stdlib/commit/6c7e770dab6e03561202af2861ae11c27af8a90c) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`6dcf3b0`](https://github.com/stdlib-js/stdlib/commit/6dcf3b00b8e5b807081c6539498f8d8303ff6cef) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - **feat:** update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068) _(by stdlib-bot, Athan Reines)_
-   [`3f6961f`](https://github.com/stdlib-js/stdlib/commit/3f6961f8c70f58b497eab2fa4326c1edb0ddf23f) - **docs:** update namespace table of contents [(#1064)](https://github.com/stdlib-js/stdlib/pull/1064) _(by stdlib-bot, Athan Reines)_
-   [`dd850de`](https://github.com/stdlib-js/stdlib/commit/dd850deb48f3960744f525907c98cce43cf3201a) - **docs:** update descriptions _(by Athan Reines)_
-   [`c840141`](https://github.com/stdlib-js/stdlib/commit/c84014167a723c21684b272b2829b31f5041d3d2) - **test:** update test descriptions _(by Athan Reines)_
-   [`5a3f1dc`](https://github.com/stdlib-js/stdlib/commit/5a3f1dce13c231f15976a3a0ccb93b83b47a99e6) - **docs:** update namespace table of contents [(#1058)](https://github.com/stdlib-js/stdlib/pull/1058) _(by stdlib-bot, Athan Reines)_
-   [`f3231b0`](https://github.com/stdlib-js/stdlib/commit/f3231b0e70d339f63e696b3a6033ea4680d887e5) - **docs:** update description _(by Athan Reines)_
-   [`7b40aec`](https://github.com/stdlib-js/stdlib/commit/7b40aec59bb7ccb9c78db6966520ee575fcd9763) - **docs:** fix grammar in description _(by Athan Reines)_
-   [`1389946`](https://github.com/stdlib-js/stdlib/commit/13899464bcfa46098af5ed215df3e3c05129c7a6) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`bc8bdba`](https://github.com/stdlib-js/stdlib/commit/bc8bdba5e90f81bed942f5f0114c6373d323f9b6) - **feat:** add `string/base/for-each` _(by Athan Reines)_
-   [`79a604d`](https://github.com/stdlib-js/stdlib/commit/79a604d904a41885af2e048912937bef89bdde55) - **docs:** fix descriptions _(by Athan Reines)_
-   [`e8bce95`](https://github.com/stdlib-js/stdlib/commit/e8bce95d60ff3e7b4b3ee7891526b3bdebbf2409) - **style:** add missing line _(by Athan Reines)_
-   [`fa11844`](https://github.com/stdlib-js/stdlib/commit/fa11844d487be4eee7698a754bc082461f40edeb) - **style:** add missing line _(by Athan Reines)_
-   [`40a968d`](https://github.com/stdlib-js/stdlib/commit/40a968d5120fd9f5511a8c719098910fe07175db) - **docs:** fix descriptions _(by Athan Reines)_
-   [`50bb3f1`](https://github.com/stdlib-js/stdlib/commit/50bb3f12bdba45c8fa4cf523592748757a80f69b) - **docs:** fix descriptions _(by Athan Reines)_
-   [`ed5abeb`](https://github.com/stdlib-js/stdlib/commit/ed5abeb8355e9798b95976f8e89120d022396e17) - **feat:** add `forEachCodePoint` to namespace _(by Athan Reines)_
-   [`a145df2`](https://github.com/stdlib-js/stdlib/commit/a145df2c49fe0ba4872b0c8cac588a0033db355a) - **feat:** add `string/base/for-each-code-point` _(by Athan Reines)_
-   [`124209c`](https://github.com/stdlib-js/stdlib/commit/124209c4735b689d1a75b4d79ad14666c7431f8a) - **docs:** fix comment _(by Athan Reines)_
-   [`89e9ca9`](https://github.com/stdlib-js/stdlib/commit/89e9ca9cf580d617fef90a4abf6c9bba45f0f40a) - **test:** inline expected value _(by Athan Reines)_
-   [`1b8d401`](https://github.com/stdlib-js/stdlib/commit/1b8d401959a90b8dac6c0ebb139d009800f4c9d2) - **feat:** add `forEachGraphemeCluster` to namespace _(by Athan Reines)_
-   [`b574ced`](https://github.com/stdlib-js/stdlib/commit/b574cede2f83be2615a5227ba57fea7fd603645a) - **feat:** add `string/base/for-each-grapheme-cluster` _(by Athan Reines)_
-   [`0b65262`](https://github.com/stdlib-js/stdlib/commit/0b652621e5ec7c1644b0c96d541bb8ea9f6f9fd3) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`5b937c7`](https://github.com/stdlib-js/stdlib/commit/5b937c7b02cdb1cf1fe05d69ea6e3833974341bc) - **docs:** update descriptions _(by Athan Reines)_
-   [`5a63be9`](https://github.com/stdlib-js/stdlib/commit/5a63be98ae693437705cf899e9b60d95e021c355) - **docs:** update namespace table of contents [(#1050)](https://github.com/stdlib-js/stdlib/pull/1050) _(by stdlib-bot, Athan Reines)_
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - **feat:** update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047) _(by stdlib-bot, Athan Reines)_
-   [`8758d21`](https://github.com/stdlib-js/stdlib/commit/8758d213498f06bd26e770991724c59b3485ffbb) - **feat:** add `distances` to namespace _(by Athan Reines)_
-   [`bc8f74c`](https://github.com/stdlib-js/stdlib/commit/bc8f74c639792f47f1af2d36831bcbafeb85054a) - **feat:** add `first`, `firstCodePoint`, and `firstGraphemeCluster` to namespace _(by Athan Reines)_
-   [`71e5de2`](https://github.com/stdlib-js/stdlib/commit/71e5de2d7187757ba15043cffac77385d9d6e0aa) - **feat:** add `string/base/first-grapheme-cluster` _(by Athan Reines)_
-   [`c80f976`](https://github.com/stdlib-js/stdlib/commit/c80f97615bfc29e0fcc0b0cf1d70d0240b5191f5) - **feat:** add `string/base/first-code-point` _(by Athan Reines)_
-   [`cfdd473`](https://github.com/stdlib-js/stdlib/commit/cfdd47366d9599c07ab27e3886de66ec76f7591c) - **feat:** add `string/base/first` _(by Athan Reines)_
-   [`b78482b`](https://github.com/stdlib-js/stdlib/commit/b78482bf2f133e63ec98faf62b436465ed153c25) - **refactor:** inline logic and use computed variable _(by Athan Reines)_
-   [`33d5a3b`](https://github.com/stdlib-js/stdlib/commit/33d5a3bc76e8e67cb34dabe93e6882e7a978899a) - **refactor:** fix error messages _(by Athan Reines)_
-   [`a6aa492`](https://github.com/stdlib-js/stdlib/commit/a6aa492c8ed73b06e4261ed8cc13a9d8254f79ed) - **docs:** update examples to match file and update copy _(by Athan Reines)_
-   [`b9d91dc`](https://github.com/stdlib-js/stdlib/commit/b9d91dc7165b9d4ef378ee6dbfec45085802be58) - **test:** update descriptions _(by Athan Reines)_
-   [`c1b5fa9`](https://github.com/stdlib-js/stdlib/commit/c1b5fa92b6c9cdd5a0b20aab427fea36548209f1) - **docs:** update test descriptions _(by Athan Reines)_
-   [`5aad242`](https://github.com/stdlib-js/stdlib/commit/5aad24250baf2efa14f33ebfde920140550c3e47) - **style:** remove extra line _(by Athan Reines)_
-   [`efef313`](https://github.com/stdlib-js/stdlib/commit/efef313d4ab609f887bdb93083e244fd32a45290) - **docs:** update namespace table of contents [(#1045)](https://github.com/stdlib-js/stdlib/pull/1045) _(by stdlib-bot, Athan Reines)_
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - **feat:** update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044) _(by stdlib-bot, Athan Reines)_
-   [`78506c7`](https://github.com/stdlib-js/stdlib/commit/78506c753f8dd3a5b9de371abb01f354ede317ad) - **docs:** fix imports _(by Athan Reines)_
-   [`0e987b6`](https://github.com/stdlib-js/stdlib/commit/0e987b6fde52d7ef3060f8a47ed25573644025a5) - **feat:** update namespace _(by Athan Reines)_
-   [`1da2118`](https://github.com/stdlib-js/stdlib/commit/1da2118d4b05a19e5c67bf34943004da43bc92ea) - **docs:** update examples to avoid `for` loop _(by Athan Reines)_
-   [`e2f0029`](https://github.com/stdlib-js/stdlib/commit/e2f00295734722639117d148b518ab9480dabb28) - **docs:** fix variable name in example _(by Athan Reines)_
-   [`52e7d18`](https://github.com/stdlib-js/stdlib/commit/52e7d18fbd15d5e902bb944a7486323aac19ada7) - **docs:** refactor example to avoid `for` loop _(by Athan Reines)_
-   [`2dca659`](https://github.com/stdlib-js/stdlib/commit/2dca659781d39918edce23ee741fad6d01d91849) - **feat:** add `@stdlib/string-base/headercase` [(##1039)](#1039) _(by Roman Stetsyk)_
-   [`55e5756`](https://github.com/stdlib-js/stdlib/commit/55e57561273881a0e5bb1b35489a4801f0d059b6) - **chore:** fix package meta data indentation [(#1033)](https://github.com/stdlib-js/stdlib/pull/1033) _(by stdlib-bot, Athan Reines)_
-   [`223eb98`](https://github.com/stdlib-js/stdlib/commit/223eb983e3ed03c4927fdd30aad6d1d52813c699) - **feat:** update namespace TypeScript declarations _(by stdlib-bot, Planeshifter)_
-   [`c40a139`](https://github.com/stdlib-js/stdlib/commit/c40a1396adb204bf1f9c6d550d99884a8004b424) - **feat:** add `string/base/distances/levenshtein` [(##1030)](#1030 ) _(by Naresh Jagadeesan)_
-   [`0db467b`](https://github.com/stdlib-js/stdlib/commit/0db467baee5053532d47ea4721870b0ebbaf7831) - **fix:** correctly parse strings with hyphens in constantcase [(##1022)](#1022) _(by Roman Stetsyk)_
-   [`857646f`](https://github.com/stdlib-js/stdlib/commit/857646f2545aa881c816b8040621225a9b9e6a27) - **feat:** add base package to right pad a string _(by Philipp Burckhardt)_
-   [`dace169`](https://github.com/stdlib-js/stdlib/commit/dace169a8a53022f0ffcabf4084f61a7f0f49a8f) - **docs:** update namespace table of contents [(#986)](https://github.com/stdlib-js/stdlib/pull/986) _(by stdlib-bot, Athan Reines)_
-   [`e34d9a0`](https://github.com/stdlib-js/stdlib/commit/e34d9a09e864d8f25460974f6e3e4eb3b03ea6a2) - **docs:** update namespace TypeScript declarations [(#984)](https://github.com/stdlib-js/stdlib/pull/984) _(by stdlib-bot, Athan Reines)_
-   [`a7d8f42`](https://github.com/stdlib-js/stdlib/commit/a7d8f429e9058cebfb4931309d5712b05f8c7931) - **feat:** add `invcase` to namespace _(by Athan Reines)_
-   [`93025bc`](https://github.com/stdlib-js/stdlib/commit/93025bc4fda5a8aec0a9661b8b6fc592464e791a) - **docs:** update copyright year _(by Athan Reines)_
-   [`93aca6c`](https://github.com/stdlib-js/stdlib/commit/93aca6cb37c64fdd4cc92fe0405968699bc5e520) - **feat:** add `string/base/invcase` [(#974)](https://github.com/stdlib-js/stdlib/pull/974) _(by Yernar Yergaziyev, Yernar Yergaziyev, Athan Reines)_
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - **feat:** update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951) _(by stdlib-bot, Athan Reines)_
-   [`d60f27b`](https://github.com/stdlib-js/stdlib/commit/d60f27bfaaf3d9d2ee406a8bea9436a00809f699) - **docs:** update namespace table of contents [(#930)](https://github.com/stdlib-js/stdlib/pull/930) _(by stdlib-bot, Athan Reines)_
-   [`440034d`](https://github.com/stdlib-js/stdlib/commit/440034de6d7d057f3afb7399b6a3951dc0749c70) - **chore:** fix indentation in package meta data [(#928)](https://github.com/stdlib-js/stdlib/pull/928) _(by stdlib-bot, Athan Reines)_
-   [`5eded94`](https://github.com/stdlib-js/stdlib/commit/5eded9427070a00c7e0eaaab81962a049b574b2a) - **feat:** add `replaceBefore` to namespace _(by Athan Reines)_
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - **feat:** remove CLI _(by Athan Reines)_
-   [`35622d7`](https://github.com/stdlib-js/stdlib/commit/35622d74bcfebc1cd92859618f5f3bf0dcd29003) - **refactor:** clean-up implementation, tests, and docs _(by Athan Reines)_
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - **feat:** add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843) _(by Harshita Kalani, Athan Reines, Pranav)_

</details>

</section>

<!-- /.commits -->

