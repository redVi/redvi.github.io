"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[6236],{1484:function(n,s,a){a.r(s),a.d(s,{Head:function(){return l.Ss},default:function(){return u}});var e=a(8876),t=a(4424);function p(n){const s=Object.assign({p:"p",span:"span",a:"a"},(0,e.MN)(),n.components);return t.createElement(t.Fragment,null,t.createElement(s.p,null,"При написании статей уже давно не принято использовать простую HTML-разметку.\nНабирать каждый раз HTML-теги вручную — не самое приятное времяпрепровождение. Зачастую для этих целей используются user-friendly редакторы а-ля TinyMCE. И выглядят неплохо, и справиться с ними в силах любой необременённый излишками знания пользователь. Минус один: html-разметка, получаемая на выходе, может совсем не радовать глаз автора и мохнатые лапки поисковых «пауков»."),"\n",t.createElement(s.p,null,"По другую сторону сто́ят облегчённые языки разметки, самым популярным из которых является markdown. Вот его-то мы и будем подключать к Rails-проекту."),"\n",t.createElement(s.p,null,"Для начала установим необходимые гемы. Для этого их следует прописать в Gemfile:"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ruby"><pre class="language-ruby"><code class="language-ruby"><span class="token comment"># Gemfile</span>\ngem <span class="token string-literal"><span class="token string">\'redcarpet\'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">\'~> 3.0.0\'</span></span>\ngem <span class="token string-literal"><span class="token string">\'pygments.rb\'</span></span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"И дать команду:"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ bundle <span class="token function">install</span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"После чего обратимся к созданию helper'а, призванного сгенерировать html из\nфайла с разметкой markdown. За генерацию страниц в html из markdown в\nответе ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">redcarpet</code>'}}),". К тому же благодаря ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">pygments.rb</code>'}})," у нас появляется\nвозможность подсветки синтаксиса в коде."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ruby"><pre class="language-ruby"><code class="language-ruby"><span class="token comment"># helpers/application_helper.rb</span>\n\n<span class="token keyword">module</span> <span class="token class-name">ApplicationHelper</span>\n\n  <span class="token keyword">class</span> <span class="token class-name">HTMLwithPygments</span> <span class="token operator">&lt;</span> Redcarpet<span class="token double-colon punctuation">::</span>Render<span class="token double-colon punctuation">::</span><span class="token constant">HTML</span>\n    <span class="token keyword">require</span> <span class="token string-literal"><span class="token string">\'pygments.rb\'</span></span>\n\n    <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">block_code</span></span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> language<span class="token punctuation">)</span>\n      Pygments<span class="token punctuation">.</span>highlight<span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token symbol">:lexer</span> <span class="token operator">=></span> language<span class="token punctuation">)</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">markdown</span></span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    renderer <span class="token operator">=</span> <span class="token class-name">HTMLwithPygments</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span><span class="token symbol">hard_wrap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>\n    options<span class="token operator">=</span><span class="token punctuation">{</span>\n      <span class="token symbol">autolink</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">no_intra_emphasis</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">fenced_code_blocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">lax_html_blocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">strikethrough</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">superscript</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">space_after_headers</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">underline</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">highlight</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token symbol">quote</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n\n    Redcarpet<span class="token double-colon punctuation">::</span><span class="token class-name">Markdown</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>renderer<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span>render<span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>html_safe\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"Для подсветки синтаксиса нужно написать блок кода и указать необходимый ЯП, вот так:"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">~~~ruby\nputs "Hello!"\n~~~</code></pre></div>'}}),"\n",t.createElement(s.p,null,"Функция ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">markdown</code>'}})," принимает на вход текст с указанными опциями и генерирует html-страницу. Подробно об имеющихся опциях и их значении можно прочесть на ",t.createElement(s.a,{href:"https://github.com/vmg/redcarpet",target:"_blank",rel:"nofollow"},"странице проекта"),"."),"\n",t.createElement(s.p,null,"Осталось лишь вывести наш текст на обозрение массам:"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="erb"><pre class="language-erb"><code class="language-erb"><span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%</span><span class="token ruby language-ruby"><span class="token comment"># posts/show.html.erb </span></span><span class="token delimiter punctuation">%></span></span>\n\n<span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%=</span><span class="token ruby language-ruby"> link_to <span class="token variable">@post</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span> post_path<span class="token punctuation">(</span><span class="token variable">@post</span><span class="token punctuation">)</span> </span><span class="token delimiter punctuation">%></span></span>\n  <span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%=</span><span class="token ruby language-ruby"> markdown <span class="token variable">@post</span><span class="token punctuation">.</span>content </span><span class="token delimiter punctuation">%></span></span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"С этим способом в базе данных текст хранится в формате markdown, а перед тем,\nкак страница будет отображена, ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">redcarpet</code>'}})," переводит её в html-формат.\nС точки зрения производительности не самый лучший вариант."),"\n",t.createElement(s.p,null,"Но есть и другой способ: сгенерировать html перед тем, как сохранять файл\nв базу данных при помощи ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">before_save</code>'}}),"."),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ruby"><pre class="language-ruby"><code class="language-ruby"><span class="token comment"># post.rb</span>\n<span class="token comment">#</span>\n<span class="token comment"># Table name: posts</span>\n<span class="token comment">#</span>\n<span class="token comment">#  id         :integer     not null, primary key</span>\n<span class="token comment">#  title      :string(255)</span>\n<span class="token comment">#  content    :text</span>\n<span class="token comment">#  slug       :string(255)</span>\n<span class="token comment">#  summary    :string(255)</span>\n<span class="token comment">#  created_at :datetime</span>\n<span class="token comment">#  updated_at :datetime</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Post</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Base\n  before_save <span class="token symbol">:render_content</span>\n\n  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">render_content</span></span>\n    <span class="token keyword">require</span> <span class="token string-literal"><span class="token string">\'redcarpet\'</span></span>\n    renderer <span class="token operator">=</span> HTMLwithPygments\n    extensions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token symbol">fenced_code_blocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n    redcarpet <span class="token operator">=</span> Redcarpet<span class="token double-colon punctuation">::</span><span class="token class-name">Markdown</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>renderer<span class="token punctuation">,</span> extensions<span class="token punctuation">)</span>\n    <span class="token keyword">self</span><span class="token punctuation">.</span>content <span class="token operator">=</span> redcarpet<span class="token punctuation">.</span>render <span class="token keyword">self</span><span class="token punctuation">.</span>content\n  <span class="token keyword">end</span>\n\n  <span class="token keyword">class</span> <span class="token class-name">HTMLwithPygments</span> <span class="token operator">&lt;</span> Redcarpet<span class="token double-colon punctuation">::</span>Render<span class="token double-colon punctuation">::</span><span class="token constant">HTML</span>\n    <span class="token keyword">require</span> <span class="token string-literal"><span class="token string">\'pygments.rb\'</span></span>\n    <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">block_code</span></span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> language<span class="token punctuation">)</span>\n      Pygments<span class="token punctuation">.</span>highlight<span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token symbol">:lexer</span> <span class="token operator">=></span> language<span class="token punctuation">)</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"Если ресурс не относится к техническим и статья не предназначена для\nвывода блоков кода можно обойтись без ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">pygments</code>'}}),":"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ruby"><pre class="language-ruby"><code class="language-ruby"><span class="token comment"># post.rb</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Post</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Base\n  before_save <span class="token symbol">:render_content</span>\n\n  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">render_content</span></span>\n    <span class="token keyword">require</span> <span class="token string-literal"><span class="token string">\'redcarpet\'</span></span>\n    renderer <span class="token operator">=</span> Redcarpet<span class="token double-colon punctuation">::</span>Render<span class="token double-colon punctuation">::</span><span class="token class-name">HTML</span><span class="token punctuation">.</span><span class="token keyword">new</span>\n    extensions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token symbol">fenced_code_blocks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span>\n    redcarpet <span class="token operator">=</span> Redcarpet<span class="token double-colon punctuation">::</span><span class="token class-name">Markdown</span><span class="token punctuation">.</span><span class="token keyword">new</span><span class="token punctuation">(</span>renderer<span class="token punctuation">,</span> extensions<span class="token punctuation">)</span>\n    <span class="token keyword">self</span><span class="token punctuation">.</span>content <span class="token operator">=</span> redcarpet<span class="token punctuation">.</span>render <span class="token keyword">self</span><span class="token punctuation">.</span>content\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"Теперь в базе будет лежать готовая html-страница."),"\n",t.createElement(s.p,null,"Для корректного вывода такой странички нам нужно использовать\nстандартный фильтр ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">html_safe</code>'}}),":"),"\n",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="erb"><pre class="language-erb"><code class="language-erb"><span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%</span><span class="token ruby language-ruby"><span class="token comment"># posts/show.html.erb </span></span><span class="token delimiter punctuation">%></span></span>\n\n<span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%=</span><span class="token ruby language-ruby"> link_to <span class="token variable">@post</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span> post_path<span class="token punctuation">(</span><span class="token variable">@post</span><span class="token punctuation">)</span> </span><span class="token delimiter punctuation">%></span></span>\n  <span class="token erb language-erb"><span class="token delimiter punctuation">&lt;%=</span><span class="token ruby language-ruby"> <span class="token variable">@post</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>html_safe </span><span class="token delimiter punctuation">%></span></span></code></pre></div>'}}),"\n",t.createElement(s.p,null,"Ещё раз: в первом примере (при генерации «на лету») страница\nсохраняется в формате markdown, каждый раз перед тем как вывести её\nсодержимое ",t.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">redcarpet</code>'}})," генерирует текст из markdown в html."),"\n",t.createElement(s.p,null,"Во втором примере отображается предварительно сгенерированный html-код.\nТак что вы вольны выбирать, какой из вариантов удобнее в каждом конкретном случае."))}var o=function(n){void 0===n&&(n={});const{wrapper:s}=Object.assign({},(0,e.MN)(),n.components);return s?t.createElement(s,n,t.createElement(p,n)):p(n)},l=a(7792),c=a(7619);function r(n){var s,a;let{data:{mdx:e},children:p,pageContext:{prev:o,next:r}}=n;const{h1:u,title:k,description:i,image:d,table_of_contents:m}=e.frontmatter;return(0,t.useEffect)((()=>{(0,c.K)()}),[]),t.createElement(t.Fragment,null,t.createElement(l._W,{h1:u,title:k,description:i,image:null===(s=e.frontmatter.image)||void 0===s?void 0:s.publicURL},t.createElement(l.MV,{post:e.frontmatter,imageData:null==d||null===(a=d.childImageSharp)||void 0===a?void 0:a.gatsbyImageData},m?t.createElement(l.G8,{headings:e.tableOfContents}):null,t.createElement("div",{className:"page__content"},p,t.createElement(l.Mf,{prev:o,next:r})),t.createElement(l.QZ,null))))}function u(n){return t.createElement(r,n,t.createElement(o,n))}},8876:function(n,s,a){a.d(s,{MN:function(){return p}});var e=a(4424);const t=e.createContext({});function p(n){const s=e.useContext(t);return e.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}}}]);