(this["webpackJsonpreact-data-viz-example"]=this["webpackJsonpreact-data-viz-example"]||[]).push([[0],{64:function(e,a,t){e.exports=t(72)},65:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);t(65);var n=t(1),i=t.n(n),r=t(24),s=t.n(r),c=t(5),o=t(0),l=t.n(o),m=t(2);const d=Object(n.createContext)(),u=()=>Object(n.useContext)(d),b=({dimensions:e,children:a})=>i.a.createElement(d.Provider,{value:e},i.a.createElement("svg",{className:"Chart",width:e.width,height:e.height},i.a.createElement("g",{transform:"translate(".concat(e.margin.left,", ").concat(e.margin.top,")")},a))),f={width:l.a.number.isRequired,height:l.a.number.isRequired,margin:l.a.shape({top:l.a.number.isRequired,right:l.a.number.isRequired,bottom:l.a.number.isRequired,left:l.a.number.isRequired}).isRequired};b.propTypes={dimensions:l.a.shape(Object(c.a)({boundedWidth:l.a.number.isRequired,boundedHeight:l.a.number.isRequired},f)).isRequired,children:l.a.node.isRequired};const p=e=>Object(c.a)({},e,{boundedWidth:e.width-e.margin.left-e.margin.right,boundedHeight:e.height-e.margin.top-e.margin.bottom}),x=e=>{const a=typeof e,t="function"===a?e:"string"===a?a=>a[e]:null;if(!e)throw Error("Invalid accessor: ".concat(e));return t};var y=({label:e})=>{const a=u();return i.a.createElement("g",null,i.a.createElement("text",{"data-testid":"title",transform:"translate(".concat(a.boundedWidth/2,", -30)"),dominantBaseline:"baseline",textAnchor:"middle",fontSize:"150%"},e))};const T={TOP:"top",BOTTOM:"bottom",LEFT:"left",RIGHT:"right"},g=({dimension:e,label:a,scale:t,position:n,formatTick:r,numberOfTicks:s})=>{const c="x"===e?k:"y"===e?O:null;return c?i.a.createElement(c,{label:a,scale:t,position:n,formatTick:r,numberOfTicks:s}):null},h={label:l.a.string,scale:l.a.func.isRequired,position:l.a.oneOf(Object.values(T)),formatTick:l.a.func,numberOfTicks:l.a.number};g.propTypes=Object(c.a)({dimension:l.a.oneOf(["x","y"]).isRequired},h),g.defaultProps={formatTick:e=>e};const k=({label:e,scale:a,position:t,formatTick:n,numberOfTicks:r})=>{const s=u(),c=t===T.TOP?0:s.boundedHeight;return i.a.createElement("g",{"data-testid":"horizontal-axis",transform:"translate(0, ".concat(c,")")},i.a.createElement(E,{dimensions:s}),i.a.createElement(j,{label:e,position:t,dimensions:s,labelDistance:40}),i.a.createElement(q,{scale:a,position:t,formatTick:n,numberOfTicks:r}))};k.propTypes=h,k.defaultProps=Object(c.a)({position:T.BOTTOM},g.defaultProps);const O=({label:e,scale:a,position:t,formatTick:n,numberOfTicks:r})=>{const s=u(),c=t===T.RIGHT?s.boundedWidth:0;return i.a.createElement("g",{"data-testid":"vertical-axis",transform:"translate(".concat(c,", 0)")},i.a.createElement(v,{dimensions:s}),i.a.createElement(R,{label:e,position:t,dimensions:s,labelDistance:40}),i.a.createElement(H,{scale:a,position:t,formatTick:n,numberOfTicks:r}))};O.propTypes=h,O.defaultProps=Object(c.a)({position:T.LEFT},g.defaultProps);const E=({dimensions:e})=>i.a.createElement(A,{position:{x1:-5,y1:0,x2:e.boundedWidth+5,y2:0}}),v=({dimensions:e})=>i.a.createElement(A,{position:{x1:0,y1:-5,x2:0,y2:e.boundedHeight+5}}),A=({position:e})=>i.a.createElement("line",Object.assign({strokeWidth:2,fill:"none",stroke:"#000000"},e)),j=({label:e,position:a,dimensions:t,labelDistance:n})=>{const r=a===T.TOP?-n:n,s=a===T.TOP?"baseline":"hanging";return i.a.createElement("g",null,i.a.createElement("text",{"data-testid":"horizontal-axis-label",transform:"translate(".concat(t.boundedWidth/2,", ").concat(r,")"),dominantBaseline:s,textAnchor:"middle"},e))},R=({label:e,position:a,dimensions:t,labelDistance:n})=>{const r=a===T.RIGHT?{x:n,y:t.boundedHeight-n}:{x:-n,y:t.boundedHeight+n},s=a===T.RIGHT?t.boundedHeight-n:t.boundedHeight+n,c=a===T.RIGHT?"hanging":"baseline";return i.a.createElement("g",{transform:"rotate(-90,".concat(r.x,", ").concat(r.y,")")},i.a.createElement("text",{"data-testid":"vertical-axis-label",transform:"translate(".concat(t.boundedHeight/2,", ").concat(s,")"),dominantBaseline:c,textAnchor:"middle"},e))},q=({scale:e,position:a,formatTick:t,numberOfTicks:n})=>i.a.createElement(S,{dimension:"x",scale:e,position:a,formatTick:t,numberOfTicks:n}),H=({scale:e,position:a,formatTick:t,numberOfTicks:n})=>i.a.createElement(S,{dimension:"y",scale:e,position:a,formatTick:t,numberOfTicks:n}),S=({dimension:e,scale:a,position:t,formatTick:n,numberOfTicks:r})=>{const s=a.ticks(r);let c,o,l;if("x"===e){const e=t===T.TOP?"baseline":"hanging";c=e=>"translate(".concat(a(e),", 0)"),o={x1:0,y1:0,x2:0,y2:3},l={transform:"translate(0, ".concat(t===T.TOP?-7:7,")"),dominantBaseline:e,textAnchor:"middle"}}else{if("y"!==e)return null;{const e=t===T.RIGHT?"start":"end";c=e=>"translate(0, ".concat(a(e),")"),o={x1:-3,y1:0,x2:0,y2:0},l={transform:"translate(".concat(t===T.RIGHT?7:-7,", 0)"),dominantBaseline:"middle",textAnchor:e}}}return i.a.createElement("g",null,s.map((e,a)=>i.a.createElement("g",{key:a,transform:c(e)},i.a.createElement("line",Object.assign({strokeWidth:1,fill:"none",stroke:"#000000"},o)),i.a.createElement("text",Object.assign({fontSize:"75%"},l),n(e)))))},P=({data:e,dimensions:a,xAccessor:t,yAccessor:n,config:r})=>{var s,c,o,l;const d=p(a),u=x(t),f=x(n),T=Object(m.d)().domain(Object(m.a)(e,u)).range([0,d.boundedWidth]),h=Object(m.c)().domain(Object(m.a)(e,f)).range([d.boundedHeight,0]),k=r.main||{},O=(null===(s=r.peripherals)||void 0===s||null===(c=s.axis)||void 0===c?void 0:c.x)||{},E=(null===(o=r.peripherals)||void 0===o||null===(l=o.axis)||void 0===l?void 0:l.y)||{};return i.a.createElement(b,{dimensions:d},i.a.createElement(y,{label:k.title}),i.a.createElement(g,{dimension:"x",label:O.title,scale:T,formatTick:O.formatTick,numberOfTicks:O.numberOfTicks}),i.a.createElement(g,{dimension:"y",label:E.title,scale:h,formatTick:E.formatTick,numberOfTicks:E.numberOfTicks}),i.a.createElement(W,{data:e,xAccessor:u,yAccessor:f,xScale:T,yScale:h,config:k}))};P.propTypes={data:l.a.arrayOf(l.a.object).isRequired,dimensions:l.a.shape(f).isRequired,xAccessor:l.a.oneOfType([l.a.string,l.a.func]),yAccessor:l.a.oneOfType([l.a.string,l.a.func]),config:l.a.shape({main:l.a.shape({title:l.a.string,color:l.a.string}),peripherals:l.a.shape({x:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number}),y:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number})})})},P.defaultProps={xAccessor:"x",yAccessor:"y",config:{}};const W=({data:e,xAccessor:a,yAccessor:t,xScale:n,yScale:r,config:s})=>{const c=Object(m.b)().x(e=>n(a(e))).y(e=>r(t(e)));return i.a.createElement("g",null,i.a.createElement("path",{"data-testid":"content",d:c(e),fill:"none",stroke:s.color||"#000000",strokeWidth:2}))},I=({data:e,dimensions:a,xAccessor:t,y0Accessor:n,y1Accessor:r,config:s})=>{var c,o,l,d,u,f;const h=p(a),k=x(t),O=x(n),E=x(r),v=Object(m.d)().domain(Object(m.a)(e,k)).range([0,h.boundedWidth]),A=Object(m.c)().domain(Object(m.a)(e,O)).range([h.boundedHeight,0]),j=Object(m.c)().domain(Object(m.a)(e,E)).range([h.boundedHeight,0]),R=s.main||{},q=(null===(c=s.peripherals)||void 0===c||null===(o=c.axis)||void 0===o?void 0:o.x)||{},H=(null===(l=s.peripherals)||void 0===l||null===(d=l.axis)||void 0===d?void 0:d.y0)||{},S=(null===(u=s.peripherals)||void 0===u||null===(f=u.axis)||void 0===f?void 0:f.y1)||{};return i.a.createElement(b,{dimensions:h},i.a.createElement(y,{label:R.title}),i.a.createElement(g,{dimension:"x",label:q.title,scale:v,formatTick:q.formatTick,numberOfTicks:q.numberOfTicks}),i.a.createElement(g,{dimension:"y",label:H.title,scale:A,formatTick:H.formatTick,numberOfTicks:H.numberOfTicks}),i.a.createElement(g,{dimension:"y",label:S.title,scale:j,position:T.RIGHT,formatTick:S.formatTick,numberOfTicks:S.numberOfTicks}),i.a.createElement(V,{data:e,xAccessor:k,y0Accessor:O,y1Accessor:E,xScale:v,y0Scale:A,y1Scale:j,config:R}))};I.propTypes={data:l.a.arrayOf(l.a.object).isRequired,dimensions:l.a.shape(f).isRequired,xAccessor:l.a.oneOfType([l.a.string,l.a.func]),yAccessor:l.a.oneOfType([l.a.string,l.a.func]),config:l.a.shape({main:l.a.shape({title:l.a.string,color:l.a.oneOfType([l.a.string,l.a.shape({y0:l.a.string,y1:l.a.string})])}),peripherals:l.a.shape({x:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number}),y0:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number}),y1:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number})})})},I.defaultProps={xAccessor:"x",yAccessor:"y",config:{}};const V=({data:e,xAccessor:a,y0Accessor:t,y1Accessor:n,xScale:r,y0Scale:s,y1Scale:c,config:o})=>{const l=Object(m.b)().x(e=>r(a(e))).y(e=>s(t(e))),d=Object(m.b)().x(e=>r(a(e))).y(e=>c(n(e))),u={y0:"string"===typeof o.color?o.color:o.color.y0||"#000000",y1:"string"===typeof o.color?o.color:o.color.y1||"#000000"};return i.a.createElement("g",null,i.a.createElement("path",{"data-testid":"content",d:l(e),fill:"none",stroke:u.y0,strokeWidth:2}),i.a.createElement("path",{"data-testid":"content",d:d(e),fill:"none",stroke:u.y1,strokeWidth:2}))},w=({cx:e,cy:a,r:t,color:n})=>i.a.createElement("circle",{cx:e,cy:a,r:t,fill:n});w.propTypes={cx:l.a.number.isRequired,cy:l.a.number.isRequired,r:l.a.number,color:l.a.string},w.defaultProps={r:5,color:"#000000"};const G=({data:e,dimensions:a,xAccessor:t,yAccessor:n,config:r})=>{var s,c,o,l;const d=p(a),u=x(t),f=x(n),T=Object(m.c)().domain(Object(m.a)(e,u)).range([0,d.boundedWidth]),h=Object(m.c)().domain(Object(m.a)(e,f)).range([d.boundedHeight,0]),k=r.main||{},O=(null===(s=r.peripherals)||void 0===s||null===(c=s.axis)||void 0===c?void 0:c.x)||{},E=(null===(o=r.peripherals)||void 0===o||null===(l=o.axis)||void 0===l?void 0:l.y)||{};return i.a.createElement(b,{dimensions:d},i.a.createElement(y,{label:k.title}),i.a.createElement(g,{dimension:"x",label:O.title,scale:T,formatTick:O.formatTick,numberOfTicks:O.numberOfTicks}),i.a.createElement(g,{dimension:"y",label:E.title,scale:h,formatTick:E.formatTick,numberOfTicks:E.numberOfTicks}),i.a.createElement(z,{data:e,xAccessor:u,yAccessor:f,xScale:T,yScale:h,config:k}))};G.propTypes={data:l.a.arrayOf(l.a.object).isRequired,dimensions:l.a.shape(f).isRequired,xAccessor:l.a.oneOfType([l.a.string,l.a.func]),yAccessor:l.a.oneOfType([l.a.string,l.a.func]),config:l.a.shape({main:l.a.shape({title:l.a.string,color:l.a.string,size:l.a.number}),peripherals:l.a.shape({x:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number}),y:l.a.shape({title:l.a.string,formatTick:l.a.func,numberOfTicks:l.a.number})})})},G.defaultProps={xAccessor:"x",yAccessor:"y",config:{}};const z=({data:e,xAccessor:a,yAccessor:t,xScale:n,yScale:r,config:s})=>i.a.createElement("g",null,e.map((e,c)=>i.a.createElement(w,{key:c,cx:n(a(e)),cy:r(t(e)),r:s.size,color:s.color})));var B={timeseries:[{date:"2020-01-01",value:10,extraValue:-15},{date:"2020-01-02",value:20,extraValue:-35},{date:"2020-01-03",value:15,extraValue:12},{date:"2020-01-04",value:11,extraValue:21},{date:"2020-01-05",value:100,extraValue:66},{date:"2020-01-06",value:35,extraValue:-14},{date:"2020-01-07",value:21,extraValue:56},{date:"2020-01-08",value:83,extraValue:95},{date:"2020-01-09",value:53,extraValue:43},{date:"2020-01-10",value:23,extraValue:21}],scatter:[{x:12,y:53},{x:32,y:23},{x:132,y:12},{x:78,y:3},{x:6,y:98},{x:44,y:56},{x:91,y:26},{x:28,y:29},{x:101,y:37},{x:102,y:91}]};const D=({children:e})=>i.a.createElement("div",{style:{margin:"2% 5%",border:"solid 2px black",textAlign:"center"}},e),L=({dimensions:e})=>i.a.createElement(D,null,B&&i.a.createElement(P,{data:B.timeseries,dimensions:e,xAccessor:e=>Date.parse(e.date),yAccessor:"value",config:{main:{title:"Line Graph",color:"#3498db"},peripherals:{axis:{x:{title:"x-axis label",formatTick:e=>e.toISOString().split("T")[0],numberOfTicks:5},y:{title:"y-axis label",numberOfTicks:10}}}}})),C=({dimensions:e})=>i.a.createElement(D,null,B&&i.a.createElement(I,{data:B.timeseries,dimensions:e,xAccessor:e=>Date.parse(e.date),y0Accessor:"value",y1Accessor:"extraValue",config:{main:{title:"Line Graph Double y-Axis",color:{y0:"#2ecc71",y1:"#16a085"}},peripherals:{axis:{x:{title:"x-axis label",formatTick:e=>e.toISOString().split("T")[0],numberOfTicks:5},y0:{title:"y0-axis label",numberOfTicks:10},y1:{title:"y1-axis label",numberOfTicks:5}}}}})),F=({dimensions:e})=>i.a.createElement(D,null,B&&i.a.createElement(G,{data:B.scatter,dimensions:e,config:{main:{title:"Scatter Plot",color:"#e67e22",size:10},peripherals:{axis:{x:{title:"x-axis label",numberOfTicks:20},y:{title:"y-axis label",numberOfTicks:10}}}}}));var J=()=>{const e={width:.8*window.innerWidth,height:400,margin:{top:60,right:70,bottom:60,left:70}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,{dimensions:e}),i.a.createElement(C,{dimensions:e}),i.a.createElement(F,{dimensions:e}))};s.a.render(i.a.createElement(J,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.eaa7ab79.chunk.js.map