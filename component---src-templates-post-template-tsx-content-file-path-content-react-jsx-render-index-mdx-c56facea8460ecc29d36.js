"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[9660],{6238:function(n,a,s){s.r(a),s.d(a,{Head:function(){return c.Ss},default:function(){return r}});var t=s(8876),p=s(4424);function e(n){const a=Object.assign({p:"p",span:"span",strong:"strong"},(0,t.MN)(),n.components);return p.createElement(p.Fragment,null,p.createElement(a.p,null,"В React есть несколько способов вывести список элементов. Наиболее популярный знаком, пожалуй, всем: использовать ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">map</code>'}}),"."),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> week <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">renderWeekDays</span> <span class="token operator">=</span> <span class="token parameter">locale</span> <span class="token operator">=></span>\n  week<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">day<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> weekDay <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">weekday</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'dd\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>li\n        key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">weekday-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weekDay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>weekDay<span class="token punctuation">,</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">5</span> <span class="token operator">||</span> i <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">.</span>weekDayWeekend<span class="token punctuation">]</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token punctuation">{</span>weekDay<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">CalendarStrip</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> locale <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">renderWeekDays</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> CalendarStrip <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.p,null,"Если принять во внимание, что при рендеринге вызывается функция, понимаем: можно изменять её как угодно,\nлишь бы она возвращала валидные JSX-элементы. Вот как выглядит обычный ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">for</code>'}})," вместо ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">map</code>'}}),":"),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">renderWeekDays</span> <span class="token operator">=</span> <span class="token parameter">locale</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> week <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> weekDay <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">weekday</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'dd\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    week<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>li\n        key<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">weekday-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>weekDay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>\n        style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>styles<span class="token punctuation">.</span>weekDay<span class="token punctuation">,</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">5</span> <span class="token operator">||</span> i <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">.</span>weekDayWeekend<span class="token punctuation">]</span><span class="token punctuation">}</span>\n      <span class="token operator">></span>\n        <span class="token punctuation">{</span>weekDay<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">,</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> week<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.p,null,p.createElement(a.strong,null,"Условный рендеринг")," тоже может быть разным. Когда надо показывать в зависимости от состояния то один, то другой элемент,\nцелесообразно взять тернарный оператор."),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> dynamicComponent <span class="token operator">=</span> isCorrect <span class="token operator">?</span> <span class="token operator">&lt;</span>ComponentOne <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>ComponentTwo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.p,null,"В противном случае более читаемым код будет с оператором ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">&amp;&amp;</code>'}}),". Это доказывает пример со стилизацией\nкомпонента в зависимости от переданных ему ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">props</code>'}}),"."),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> StyleSheet<span class="token punctuation">,</span> TouchableOpacity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// какие-нибудь стили</span>\n  <span class="token literal-property property">wrapper</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">round</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">shadow</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>\n  color<span class="token punctuation">,</span>\n  round<span class="token punctuation">,</span>\n  shadowed<span class="token punctuation">,</span>\n  children<span class="token punctuation">,</span>\n  onPress\n<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>TouchableOpacity\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n      styles<span class="token punctuation">.</span>wrapper<span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> color <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token operator">!</span><span class="token operator">!</span>round <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">.</span>round<span class="token punctuation">,</span>\n      <span class="token operator">!</span><span class="token operator">!</span>shadowed <span class="token operator">&amp;&amp;</span> styles<span class="token punctuation">.</span>shadow<span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">}</span>\n    onPress<span class="token operator">=</span><span class="token punctuation">{</span>onPress<span class="token punctuation">}</span>\n  <span class="token operator">></span>\n    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>TouchableOpacity<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// в дальнейшем используется как:</span>\n<span class="token comment">// &lt;Button round color="#D3474B"></span>\n<span class="token comment">//   &lt;Text>Hello&lt;/Text></span>\n<span class="token comment">// &lt;/Button></span></code></pre></div>'}}),"\n",p.createElement(a.p,null,"Да, здесь есть страшный и нечитаемый для многих оператор двойного отрицания ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">!!</code>'}}),".\nИсключительно для примера, чтобы показать его полезность в некоторых случаях и вообще напомнить о его существовании.\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">!!</code>'}})," принудительно приводит то, к чему его применили, к логическому типу — вот его польза.\nПо сути это тоже самое, что ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Boolean(value)</code>'}}),", только короче. Страшен и нечитаем он лишь по незнанию.\nПрименять или нет — вопрос стайлгайда конкретной компании, но в чужом коде встретиться такое может."))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.MN)(),n.components);return a?p.createElement(a,n,p.createElement(e,n)):e(n)},c=s(7792),l=s(7619);function u(n){var a,s;let{data:{mdx:t},children:e,pageContext:{prev:o,next:u}}=n;const{h1:r,title:k,description:i,image:m,table_of_contents:d}=t.frontmatter;return(0,p.useEffect)((()=>{(0,l.K)()}),[]),p.createElement(p.Fragment,null,p.createElement(c._W,{h1:r,title:k,description:i,image:null===(a=t.frontmatter.image)||void 0===a?void 0:a.publicURL},p.createElement(c.MV,{post:t.frontmatter,imageData:null==m||null===(s=m.childImageSharp)||void 0===s?void 0:s.gatsbyImageData},d?p.createElement(c.G8,{headings:t.tableOfContents}):null,p.createElement("div",{className:"page__content"},e,p.createElement(c.Mf,{prev:o,next:u})),p.createElement(c.QZ,null))))}function r(n){return p.createElement(u,n,p.createElement(o,n))}},8876:function(n,a,s){s.d(a,{MN:function(){return e}});var t=s(4424);const p=t.createContext({});function e(n){const a=t.useContext(p);return t.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}}}]);