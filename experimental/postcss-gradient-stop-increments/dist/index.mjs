import{stringify as e,replaceComponentValues as n,parseCommaSeparatedListOfComponentValues as t,isFunctionNode as a,isTokenNode as r,isCommentNode as i,TokenNode as s,FunctionNode as o,WhitespaceNode as l}from"@csstools/css-parser-algorithms";import{calcFromComponentValues as u}from"@csstools/css-calc";import{tokenize as c,TokenType as v,NumberType as m}from"@csstools/css-tokenizer";const f=/(repeating-)?(linear|radial|conic)-gradient\(/i,g=/^(repeating-)?(linear|radial|conic)-gradient$/i,d=/^(abs|acos|asin|atan|atan2|calc|clamp|cos|exp|hypot|log|max|min|mod|pow|rem|round|sign|sin|sqrt|tan)$/i,creator=o=>{const l=Object.assign({preserve:!1},o);return{postcssPlugin:"postcss-gradient-stop-increments",Declaration(o){if(!f.test(o.value))return;const u=c({css:o.value});if(!u.find((e=>e[0]===v.Delim&&"+"===e[4].value)))return;const p=e(n(t(u),(e=>{if(!a(e))return;const n=e.getName();if(!g.test(n))return;let t=null;for(let n=0;n<e.value.length;n++){const o=e.value[n];if(r(o)&&o.value[0]===v.Delim&&"+"===o.value[4].value){const a=o,r=n;for(;i(e.value[n+1]);)n++;if(n++,isZeroOrNegative(e.value[n])){const t=new s([v.Number,"0",-1,-1,{value:0,type:m.Integer}]);e.value.splice(r,n-r+1,t),n=e.value.indexOf(t);continue}const l=incrementLengthNode(t,a,e.value[n]);e.value.splice(r,n-r+1,l),t=l,n=e.value.indexOf(l)}else(isNumericLargerThanZero(o)||a(o)&&d.test(o.getName()))&&(t=maxOfLastAndCurrentLengthNode(t,o))}})));p!==o.value&&(o.cloneBefore({value:p}),null!=l&&l.preserve||o.remove())}}};function isNumericLargerThanZero(e){return!(!r(e)||e.value[0]!==v.Percentage&&e.value[0]!==v.Dimension&&e.value[0]!==v.Number||!(e.value[4].value>0))}function isZeroOrNegative(e){return!(!r(e)||e.value[0]!==v.Percentage&&e.value[0]!==v.Dimension&&e.value[0]!==v.Number||!(e.value[4].value<=0))}function incrementLengthNode(e,n,t){if(!e)return t;const a=new o([v.Function,"calc(",-1,-1,{value:"calc"}],[v.CloseParen,")",-1,-1,void 0],[e,new l([[v.Whitespace," ",-1,-1,void 0]]),n,new l([[v.Whitespace," ",-1,-1,void 0]]),t]),[[r]]=u([[a]]);return r}function maxOfLastAndCurrentLengthNode(e,n){if(!e)return n;const t=new o([v.Function,"max(",-1,-1,{value:"max"}],[v.CloseParen,")",-1,-1,void 0],[e,new s([v.Comma,",",-1,-1,void 0]),new l([[v.Whitespace," ",-1,-1,void 0]]),n]),[[a]]=u([[t]]);return a}creator.postcss=!0;export{creator as default};