<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@csstools/css-parser-algorithms](./css-parser-algorithms.md) &gt; [SimpleBlockNode](./css-parser-algorithms.simpleblocknode.md)

## SimpleBlockNode class

**Signature:**

```typescript
export declare class SimpleBlockNode extends ContainerNodeBaseClass 
```
**Extends:** [ContainerNodeBaseClass](./css-parser-algorithms.containernodebaseclass.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(startToken, endToken, value)](./css-parser-algorithms.simpleblocknode._constructor_.md) |  | Constructs a new instance of the <code>SimpleBlockNode</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [endToken](./css-parser-algorithms.simpleblocknode.endtoken.md) |  | CSSToken |  |
|  [startToken](./css-parser-algorithms.simpleblocknode.starttoken.md) |  | CSSToken |  |
|  [type](./css-parser-algorithms.simpleblocknode.type.md) |  | [ComponentValueType](./css-parser-algorithms.componentvaluetype.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [at(index)](./css-parser-algorithms.simpleblocknode.at.md) |  |  |
|  [indexOf(item)](./css-parser-algorithms.simpleblocknode.indexof.md) |  |  |
|  [isSimpleBlockNode()](./css-parser-algorithms.simpleblocknode.issimpleblocknode.md) |  |  |
|  [isSimpleBlockNode(x)](./css-parser-algorithms.simpleblocknode.issimpleblocknode.md) | <code>static</code> |  |
|  [normalize()](./css-parser-algorithms.simpleblocknode.normalize.md) |  | Normalize the current Simple Block: - if the "endToken" is EOF, replace with the mirror token of the "startToken" |
|  [toJSON()](./css-parser-algorithms.simpleblocknode.tojson.md) |  |  |
|  [tokens()](./css-parser-algorithms.simpleblocknode.tokens.md) |  |  |
|  [toString()](./css-parser-algorithms.simpleblocknode.tostring.md) |  |  |
