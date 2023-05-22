"use strict";var e=require("@csstools/postcss-progressive-custom-properties"),s=require("@csstools/css-tokenizer"),r=require("@csstools/css-color-parser"),t=require("@csstools/css-parser-algorithms");function hasFallback(e){const s=e.parent;if(!s)return!1;const r=e.prop.toLowerCase(),t=s.index(e);for(let e=0;e<t;e++){const t=s.nodes[e];if("decl"===t.type&&t.prop.toLowerCase()===r)return!0}return!1}const o=/(rgb|hsl|hwb|lab|lch|oklch|oklab|color)\(\s*?from/i;function hasSupportsAtRuleAncestor(e){let s=e.parent;for(;s;)if("atrule"===s.type){if("supports"===s.name.toLowerCase()&&o.test(s.params))return!0;s=s.parent}else s=s.parent;return!1}const a=/(rgb|hsl|hwb|lab|lch|oklch|oklab|color)\(/i,l=/^(rgb|hsl|hwb|lab|lch|oklch|oklab|color)$/i,n=/from/i,basePlugin=e=>({postcssPlugin:"postcss-relative-color-syntax",Declaration:o=>{const i=o.value;if(!a.test(i))return;if(!n.test(i))return;if(hasFallback(o))return;if(hasSupportsAtRuleAncestor(o))return;const u=s.tokenize({css:i}),c=t.replaceComponentValues(t.parseCommaSeparatedListOfComponentValues(u),(e=>{if(t.isFunctionNode(e)&&l.test(e.getName())){const s=r.color(e);if(!s)return;if(s.syntaxFlags.has(r.SyntaxFlag.HasNoneKeywords))return;if(!s.syntaxFlags.has(r.SyntaxFlag.RelativeColorSyntax))return;return r.serializeRGB(s)}})),p=t.stringify(c);if(p===i)return;let f=p;null!=e&&e.subFeatures.displayP3&&(f=t.stringify(t.replaceComponentValues(t.parseCommaSeparatedListOfComponentValues(s.cloneTokens(u)),(e=>{if(t.isFunctionNode(e)&&l.test(e.getName())){const s=r.color(e);if(!s)return;if(s.syntaxFlags.has(r.SyntaxFlag.HasNoneKeywords))return;if(!s.syntaxFlags.has(r.SyntaxFlag.RelativeColorSyntax))return;return r.colorDataFitsRGB_Gamut(s)?r.serializeRGB(s):r.serializeP3(s)}})))),o.cloneBefore({value:p}),null!=e&&e.subFeatures.displayP3&&f!==p&&o.cloneBefore({value:f}),null!=e&&e.preserve||o.remove()}});basePlugin.postcss=!0;const postcssPlugin=s=>{const r=Object.assign({enableProgressiveCustomProperties:!0,preserve:!1,subFeatures:{displayP3:!0}},s);return r.subFeatures=Object.assign({displayP3:!0},r.subFeatures),r.enableProgressiveCustomProperties&&(r.preserve||r.subFeatures.displayP3)?{postcssPlugin:"postcss-relative-color-syntax",plugins:[e(),basePlugin(r)]}:basePlugin(r)};postcssPlugin.postcss=!0,module.exports=postcssPlugin;