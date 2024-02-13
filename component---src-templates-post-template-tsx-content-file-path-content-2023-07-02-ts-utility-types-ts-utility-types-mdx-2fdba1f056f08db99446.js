"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[8328],{6192:function(a,s,n){n.r(s),n.d(s,{Head:function(){return l.Ss},default:function(){return i}});var e=n(8876),t=n(4424);function p(a){const s=Object.assign({p:"p",span:"span",h2:"h2",a:"a"},(0,e.MN)(),a.components);return t.createElement(t.Fragment,null,t.createElement(s.p,null,"Шпаргалка по основным типам Utility Types. Для наглядности возьмём интерфейс ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Todo</code>'}}),"\nи проделаем с ним некоторые манипуляции."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span>\n  author<span class="token operator">:</span> <span class="token builtin">string</span>\n  status<span class="token operator">:</span> <span class="token builtin">string</span>\n  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"partial",style:{position:"relative"}},t.createElement(s.a,{href:"#partial","aria-label":"partial permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Partial"),"\n",t.createElement(s.p,null,"Все свойства опциональны"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// все необязательные</span>\n<span class="token keyword">type</span> <span class="token class-name">PartialProps</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Todo<span class="token operator">></span>\n\n<span class="token punctuation">{</span>\n  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  author<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  status<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"required",style:{position:"relative"}},t.createElement(s.a,{href:"#required","aria-label":"required permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Required"),"\n",t.createElement(s.p,null,"Помечает все свойства обязательными, противоположность ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Partial</code>'}})),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// все обязательные</span>\n<span class="token keyword">type</span> <span class="token class-name">RequiredProps</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>Todo<span class="token operator">></span>\n\n<span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  author<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  status<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"pick",style:{position:"relative"}},t.createElement(s.a,{href:"#pick","aria-label":"pick permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Pick"),"\n",t.createElement(s.p,null,"Взять из указанного типа только перечисленные свойства"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// взять только указанные поля</span>\n<span class="token keyword">type</span> <span class="token class-name">PickProps</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">\'title\'</span> <span class="token operator">|</span> <span class="token string">\'status\'</span><span class="token operator">></span>\n\n<span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span>\n  status<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"omit",style:{position:"relative"}},t.createElement(s.a,{href:"#omit","aria-label":"omit permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Omit"),"\n",t.createElement(s.p,null,"Взять из указанного типа всё, кроме перечисленных свойств. Противоположность ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Pick</code>'}})),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// взять все кроме title и status</span>\n<span class="token keyword">type</span> <span class="token class-name">OmitProps</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">\'title\'</span> <span class="token operator">|</span> <span class="token string">\'status\'</span><span class="token operator">></span>\n\n<span class="token punctuation">{</span>\n  author<span class="token operator">:</span> <span class="token builtin">string</span>\n  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"record",style:{position:"relative"}},t.createElement(s.a,{href:"#record","aria-label":"record permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Record"),"\n",t.createElement(s.p,null,"Дженерик, ключи которого - свойства первого типа, а значения - свойства второго."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Guests</span> <span class="token operator">=</span> <span class="token string">\'jack\'</span> <span class="token operator">|</span> <span class="token string">\'john\'</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Personal</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> users<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Guests<span class="token punctuation">,</span> Personal<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  jack<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Jack\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  john<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'Jaohn\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"awaited",style:{position:"relative"}},t.createElement(s.a,{href:"#awaited","aria-label":"awaited permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Awaited"),"\n",t.createElement(s.p,null,"Указание на ожидание операции ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">async/await</code>'}})),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">AwaitTodo</span> <span class="token operator">=</span> Awaited<span class="token operator">&lt;</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Todo<span class="token operator">>></span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"exclude",style:{position:"relative"}},t.createElement(s.a,{href:"#exclude","aria-label":"exclude permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Exclude"),"\n",t.createElement(s.p,null,"Исключить из первого типа совпадения со вторым."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">symbols</span> <span class="token operator">=</span> <span class="token string">\'a\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span> <span class="token operator">|</span> <span class="token string">\'c\'</span> <span class="token operator">|</span> <span class="token string">\'d\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span>\n<span class="token keyword">type</span> <span class="token class-name">ExcludeProps</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>symbols<span class="token punctuation">,</span> <span class="token string">\'a\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span><span class="token operator">></span> <span class="token comment">// "c" | "d"</span></code></pre></div>'}}),"\n",t.createElement(s.h2,{id:"extract",style:{position:"relative"}},t.createElement(s.a,{href:"#extract","aria-label":"extract permalink",className:"anchor before"},t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Extract"),"\n",t.createElement(s.p,null,"Оставить только совпадения. Противоположность Exclude."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">symbols</span> <span class="token operator">=</span> <span class="token string">\'a\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span> <span class="token operator">|</span> <span class="token string">\'c\'</span> <span class="token operator">|</span> <span class="token string">\'d\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span>\n<span class="token keyword">type</span> <span class="token class-name">ExctractProps</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>symbols<span class="token punctuation">,</span> <span class="token string">\'a\'</span> <span class="token operator">|</span> <span class="token string">\'b\'</span><span class="token operator">></span> <span class="token comment">// "a" | "b"</span></code></pre></div>'}}))}var o=function(a){void 0===a&&(a={});const{wrapper:s}=Object.assign({},(0,e.MN)(),a.components);return s?t.createElement(s,a,t.createElement(p,a)):p(a)},l=n(7792),c=n(7619);function r(a){var s,n;let{data:{mdx:e},children:p,pageContext:{prev:o,next:r}}=a;const{h1:i,title:u,description:k,image:d,table_of_contents:g}=e.frontmatter;return(0,t.useEffect)((()=>{(0,c.K)()}),[]),t.createElement(t.Fragment,null,t.createElement(l._W,{h1:i,title:u,description:k,image:null===(s=e.frontmatter.image)||void 0===s?void 0:s.publicURL},t.createElement(l.MV,{post:e.frontmatter,imageData:null==d||null===(n=d.childImageSharp)||void 0===n?void 0:n.gatsbyImageData},g?t.createElement(l.G8,{headings:e.tableOfContents}):null,t.createElement("div",{className:"page__content"},p,t.createElement(l.Mf,{prev:o,next:r})),t.createElement(l.QZ,null))))}function i(a){return t.createElement(r,a,t.createElement(o,a))}},8876:function(a,s,n){n.d(s,{MN:function(){return p}});var e=n(4424);const t=e.createContext({});function p(a){const s=e.useContext(t);return e.useMemo((()=>"function"==typeof a?a(s):{...s,...a}),[s,a])}}}]);