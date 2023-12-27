<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-tokenizer](./css-tokenizer.md)

## css-tokenizer package

Tokenize CSS following the CSS Syntax Level 3 specification.

## Remarks

The tokenizing and parsing tools provided by CSSTools are designed to be low level and generic with strong ties to their respective specifications.

Any analysis or mutation of CSS source code should be done with the least powerful tool that can accomplish the task. For many applications it is sufficient to work with tokens. For others you might need to use [\`@csstools/css-parser-algorithms\`](https://github.com/csstools/postcss-plugins/tree/main/packages/css-parser-algorithms) or even a specific parser.

## Example

Tokenize a string of CSS into an array of tokens:

```js
import { tokenize } from '@csstools/css-tokenizer';

const myCSS = `@media only screen and (min-width: 768rem) {
	.foo {
		content: 'Some content!' !important;
	}
}
`;

const tokens = tokenize({
	css: myCSS,
});

console.log(tokens);
```

## Classes

|  Class | Description |
|  --- | --- |
|  [ParseError](./css-tokenizer.parseerror.md) |  |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [HashType](./css-tokenizer.hashtype.md) |  |
|  [NumberType](./css-tokenizer.numbertype.md) |  |
|  [TokenType](./css-tokenizer.tokentype.md) |  |

## Functions

|  Function | Description |
|  --- | --- |
|  [cloneTokens(tokens)](./css-tokenizer.clonetokens.md) |  |
|  [isToken(x)](./css-tokenizer.istoken.md) |  |
|  [mirrorVariant(token)](./css-tokenizer.mirrorvariant.md) |  |
|  [mirrorVariantType(type)](./css-tokenizer.mirrorvarianttype.md) |  |
|  [mutateIdent(ident, newValue)](./css-tokenizer.mutateident.md) |  |
|  [stringify(tokens)](./css-tokenizer.stringify.md) |  |
|  [tokenize(input, options)](./css-tokenizer.tokenize.md) |  |
|  [tokenizer(input, options)](./css-tokenizer.tokenizer.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [CodePointReader](./css-tokenizer.codepointreader.md) |  |
|  [CSSToken](./css-tokenizer.csstoken.md) | The union of all possible CSS tokens |
|  [Token](./css-tokenizer.token.md) | The CSS Token interface |
|  [TokenAtKeyword](./css-tokenizer.tokenatkeyword.md) |  |
|  [TokenBadString](./css-tokenizer.tokenbadstring.md) |  |
|  [TokenBadURL](./css-tokenizer.tokenbadurl.md) |  |
|  [TokenCDC](./css-tokenizer.tokencdc.md) |  |
|  [TokenCDO](./css-tokenizer.tokencdo.md) |  |
|  [TokenCloseCurly](./css-tokenizer.tokenclosecurly.md) |  |
|  [TokenCloseParen](./css-tokenizer.tokencloseparen.md) |  |
|  [TokenCloseSquare](./css-tokenizer.tokenclosesquare.md) |  |
|  [TokenColon](./css-tokenizer.tokencolon.md) |  |
|  [TokenComma](./css-tokenizer.tokencomma.md) |  |
|  [TokenComment](./css-tokenizer.tokencomment.md) |  |
|  [TokenDelim](./css-tokenizer.tokendelim.md) |  |
|  [TokenDimension](./css-tokenizer.tokendimension.md) |  |
|  [TokenEOF](./css-tokenizer.tokeneof.md) |  |
|  [TokenFunction](./css-tokenizer.tokenfunction.md) |  |
|  [TokenHash](./css-tokenizer.tokenhash.md) |  |
|  [TokenIdent](./css-tokenizer.tokenident.md) |  |
|  [TokenNumber](./css-tokenizer.tokennumber.md) |  |
|  [TokenOpenCurly](./css-tokenizer.tokenopencurly.md) |  |
|  [TokenOpenParen](./css-tokenizer.tokenopenparen.md) |  |
|  [TokenOpenSquare](./css-tokenizer.tokenopensquare.md) |  |
|  [TokenPercentage](./css-tokenizer.tokenpercentage.md) |  |
|  [TokenSemicolon](./css-tokenizer.tokensemicolon.md) |  |
|  [TokenString](./css-tokenizer.tokenstring.md) |  |
|  [TokenUnicodeRange](./css-tokenizer.tokenunicoderange.md) |  |
|  [TokenURL](./css-tokenizer.tokenurl.md) |  |
|  [TokenWhitespace](./css-tokenizer.tokenwhitespace.md) |  |
