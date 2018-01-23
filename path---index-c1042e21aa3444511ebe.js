webpackJsonp([0x81b8806e4260],{261:function(n,a){n.exports={data:{transitionReplace:{displayName:"TransitionReplace",composes:null,description:{childMarkdownRemark:{html:'<p>The <code>&#x3C;TransitionReplace></code> component manages a set of <code>&#x3C;Transition></code> components\nin a list. Like with the <code>&#x3C;Transition></code> component, <code>&#x3C;TransitionReplace></code>, is a\nstate machine for managing the mounting and unmounting of components over\ntime.</p>\n<p>Consider the example below using the <code>Fade</code> CSS transition.\nAs child item changes in the <code>BasicExample</code> the <code>in</code> prop is toggled\nautomatically by the <code>&#x3C;TransitionReplace></code>. You can use <em>any</em> <code>&#x3C;Transition></code>\ncomponent in a <code>&#x3C;TransitionReplace></code>, not just css.</p>\n<p>Note that <code>&#x3C;TransitionReplace></code>  does not define any animation behavior!\nExactly <em>how</em> a list item animates is up to the individual <code>&#x3C;Transition></code>\ncomponents. This means you can mix and match animations across different\nlist items.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CSSTransition <span class="token keyword">from</span> <span class="token string">\'react-transition-group\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SwitchTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-transaction-replace\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Fade</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>CSSTransition\n        <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span>\n        timeout<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token number">300</span> <span class="token punctuation">}</span>\n        className<span class="token operator">=</span><span class="token string">"fade"</span>\n    <span class="token operator">></span>\n        <span class="token punctuation">{</span> children <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nFade<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">in</span>      <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    timeout <span class="token punctuation">:</span> <span class="token number">300</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">BasicExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n    state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        key <span class="token punctuation">:</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key <span class="token punctuation">:</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Change<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TransitionReplace</span>\n                    <span class="token attr-name">transition</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> Fade <span class="token punctuation">}</span></span>\n                <span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Fade</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>key <span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Fade</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TransitionReplace</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The <code>&#x3C;TransitionReplace></code> takes the same props as\n<a href="https://reactcommunity.org/react-transition-group/#TransitionGroup"><code>&#x3C;TransitionGroup></code></a>\nand additionally accepts the following:</p>'}},props:[{name:"changeWidth",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>A prop that enables or disables width animations for the container.</p>"}},doclets:{type:null}},{name:"classNames",required:!1,type:{name:"string | {\n height?: string,\n heightActive?: string,\n width?: string,\n widthActive?: string\n}",value:[{name:"string"},{name:"object"}],raw:null},defaultValue:null,description:{childMarkdownRemark:{html:'<p>The animation classNames applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.</p>\n<p><code>classNames="fade"</code> applies <code>fade-height</code>, <code>fade-height-active</code>,\n<code>fade-width</code>, <code>fade-width-active</code>.\nEach individual classNames can also be specified independently like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>classNames<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n height<span class="token punctuation">:</span> <span class="token string">\'my-height\'</span><span class="token punctuation">,</span>\n heightActive<span class="token punctuation">:</span> <span class="token string">\'my-active-height\'</span><span class="token punctuation">,</span>\n width<span class="token punctuation">:</span> <span class="token string">\'my-width\'</span><span class="token punctuation">,</span>\n widthActive<span class="token punctuation">:</span> <span class="token string">\'my-active-width\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>'}},doclets:{type:"{string | {\n height?: string,\n heightActive?: string,\n width?: string,\n widthActive?: string\n}}"}},{name:"easing",required:!1,type:{name:"string",value:null,raw:null},defaultValue:{value:'"ease"',computed:!1},description:{childMarkdownRemark:{html:"<p>Defines transition timing function that will be applied to inline CSS styles.</p>"}},doclets:{type:null}},{name:"inlineTransitions",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"true",computed:!1},description:{childMarkdownRemark:{html:"<p>A prop that enables or disables applying inline CSS styles and transitions to elements.</p>"}},doclets:{type:null}},{name:"overflowHidden",required:!1,type:{name:"bool",value:null,raw:null},defaultValue:{value:"false",computed:!1},description:{childMarkdownRemark:{html:"<p>A prop that if set to <code>true</code> will add <code>overfolow: hidden</code> CSS style to the container.</p>"}},doclets:{type:null}},{name:"timeout",required:!1,type:{name:"number",value:null,raw:null},defaultValue:{value:"0",computed:!1},description:{childMarkdownRemark:{html:"<p>The duration of the transition, in milliseconds.\nRequired to properly apply transition CSS classes and inline styles.</p>"}},doclets:{type:null}}]},switchTransition:{displayName:"SwitchTransition",composes:null,description:{childMarkdownRemark:{html:'<p>The <code>&#x3C;SwitchTransition></code> component allows easy integration with <code>react-router</code>.</p>\n<p>Consider the example below using the <code>Fade</code> CSS transition from before.\nAs user navigates between routes <code>SwitchTransition</code> will detect the first\nmatching route the same way as original <code>Switch</code> component does and perform\ntransition between previous and currently matched route using provided transition\ncomponent. You can use <em>any</em> <code>&#x3C;Transition></code> component in a <code>&#x3C;TransitionReplace></code>,\nnot just css.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CSSTransition <span class="token keyword">from</span> <span class="token string">\'react-transition-group\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SwitchTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-transaction-replace\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Fade</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>CSSTransition\n        <span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span>\n        timeout<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token number">300</span> <span class="token punctuation">}</span>\n        className<span class="token operator">=</span><span class="token string">"fade"</span>\n    <span class="token operator">></span>\n        <span class="token punctuation">{</span> children <span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nFade<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">in</span>      <span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    timeout <span class="token punctuation">:</span> <span class="token number">300</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">RouterExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SwitchTransition</span>\n                <span class="token attr-name">transition</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> Fade <span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/foo<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> Foo <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/bar<span class="token punctuation">"</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span> Bar <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SwitchTransition</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The <code>&#x3C;SwitchTransition></code> takes the same props as\n<a href="https://reacttraining.com/react-router/core/api/Switch"><code>&#x3C;Switch></code></a>\nor <a href="https://reactcommunity.org/react-transition-group/#CSSTransition"><code>&#x3C;CSSTransition></code></a>\nor <a href="#TransitionReplace"><code>&#x3C;TransitionReplace></code></a>\nand additionally accepts the following:</p>'}},props:[{name:"transition",required:!0,type:{name:"elementType",value:null,raw:null},defaultValue:null,description:{childMarkdownRemark:{html:"<p>The transition component used to perform animation.\nThis can be <em>any</em> <code>&#x3C;Transition></code> component or component that extends it.</p>"}},doclets:{type:"elementType"}}]}},pathContext:{}}}});
//# sourceMappingURL=path---index-c1042e21aa3444511ebe.js.map