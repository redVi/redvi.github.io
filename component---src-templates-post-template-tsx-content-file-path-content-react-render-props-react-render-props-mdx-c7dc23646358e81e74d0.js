"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[1624],{704:function(n,a,s){s.r(a),s.d(a,{Head:function(){return k.Ss},default:function(){return m}});var t=s(8876),p=s(4424),e=s(8652),o=s(3616),c=s(8860);function l(n){const a=Object.assign({p:"p",strong:"strong",span:"span",a:"a"},(0,t.MN)(),n.components);return p.createElement(p.Fragment,null,p.createElement(a.p,null,"React хорош тем, что позволяет делать композицию чего угодно. И есть не один способ\nдобиться желаемого. Рассмотрим мой любимый: паттерн render-props. Он похож на hoc, но\nдля меня субъективно удобнее и читаемее. Хотя всё, конечно, зависит от конкретной задачи.\nИтак..."),"\n",p.createElement(a.p,null,p.createElement(a.strong,null,"Задача"),": реализовать группы чекбоксов, каждая со своим изолированным состоянием. Стилизация одного чекбокса зависит от состояния другого. Если выделены несколько элементов\nподряд, между ними нужно отрисовать линию, их соединяющую."),"\n",p.createElement(a.p,null,p.createElement(a.strong,null,"Решение"),": создать два компонента. Первым из которых будет сам чекбокс. Вторым — группа чекбоксов. Группа будет знать всё обо всех чекбоксах внутри себя и ничего о чекбоксах соседней группы."),"\n",p.createElement(a.p,null,"Выглядит наша задумка следующим образом:"),"\n",p.createElement(e.E,{src:"/videos/react-render-props-checkboxes.mp4",type:"video/mp4"}),"\n",p.createElement(a.p,null,"Приступим. Возьмём ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">create-react-app</code>'}})," в качестве каркаса приложения\nи ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">classnames</code>'}})," для стилизации."),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ npx create-react-app form-app\n$ <span class="token builtin class-name">cd</span> form-app\n$ <span class="token function">yarn</span> <span class="token function">add</span> classnames</code></pre></div>'}}),"\n",p.createElement(a.p,null,"Структура приложения:"),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ tree <span class="token parameter variable">-L</span> <span class="token number">3</span>\n<span class="token builtin class-name">.</span>\n├── package.json\n├── public\n├── src\n│   ├── App.js\n│   ├── components\n│   │   ├── checkbox\n│   │   │   ├── checkbox.css\n│   │   │   └── checkbox.js\n│   │   ├── checkbox-group\n│   │   │   ├── checkbox-group.css\n│   │   │   └── checkbox-group.js\n│   │   └── index.js\n│   └── index.js\n└── yarn.lock</code></pre></div>'}}),"\n",p.createElement(a.p,null,"Для удобства импорт всех компонентов можно организовать из одного файла."),"\n",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token comment">// components/index.js</span>\n<span class="token keyword">import</span> CheckBox <span class="token keyword">from</span> <span class="token string">\'./checkbox/checkbox\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> CheckboxGroup <span class="token keyword">from</span> <span class="token string">\'./checkbox-group/checkbox-group\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span>\n  CheckBox<span class="token punctuation">,</span>\n  CheckboxGroup<span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",p.createElement(o.k,{headings:["checkbox.js","checkbox-group.js","App.js"]},p.createElement(o.s,null,p.createElement(a.p,null,"Идём от малого к большому. Сначала сам чекбокс."),p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./checkbox.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> classNames <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'classnames\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">CheckBox</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> label<span class="token punctuation">,</span> isInGroup<span class="token punctuation">,</span> isDisabled<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>\n\n  <span class="token comment">// состояние чекбокса: отмечен или нет</span>\n  <span class="token comment">// сделаем так, чтобы начальное значение можно было передать извне</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>isChecked<span class="token punctuation">,</span> setIsChecked<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>isChecked<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// изменение состояния</span>\n  <span class="token comment">// и вызов внешней функции handleChange при необходимости</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">toggleCheckbox</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>isDisabled<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">isChecked</span><span class="token operator">:</span> <span class="token operator">!</span>isChecked<span class="token punctuation">,</span> label<span class="token punctuation">,</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setIsChecked</span><span class="token punctuation">(</span><span class="token operator">!</span>isChecked<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// динамическая стилизация</span>\n  <span class="token comment">// если isInGroup, то добавить класс-модификатор</span>\n  <span class="token keyword">const</span> checkboxClass <span class="token operator">=</span> <span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string-property property">\'checkbox\'</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token string-property property">\'checkbox_inGroup\'</span><span class="token operator">:</span> isInGroup<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>label<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span>\n        <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkboxClass<span class="token punctuation">}</span></span>\n        <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span>\n        <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span></span>\n        <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>isChecked<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>toggleCheckbox<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nCheckBox<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">\'CheckBox\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span>CheckBox<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),p.createElement(o.s,null,p.createElement(a.p,null,"Группа чекбоксов. Отдаёт дочерние компоненты через render-props."),p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> memo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./checkbox-group.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">CheckboxGroup</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// копируем данные и начинаем их менять как захочется</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>props<span class="token punctuation">.</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// отдать всё, что приходит из props</span>\n  <span class="token comment">// и добавить флаг isChecked, который получим когда сработает метод onChange у чекбокса</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">toggleCheckboxes</span> <span class="token operator">=</span> <span class="token parameter">checkbox</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n      <span class="token operator">...</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=></span>\n        i<span class="token punctuation">[</span>props<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">===</span> checkbox<span class="token punctuation">.</span>name <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token operator">...</span>i<span class="token punctuation">,</span> <span class="token literal-property property">isChecked</span><span class="token operator">:</span> checkbox<span class="token punctuation">.</span>isChecked <span class="token punctuation">}</span> <span class="token operator">:</span> i<span class="token punctuation">,</span>\n      <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// render-props!</span>\n  <span class="token comment">// передать данные и метод toggleCheckboxes чекбоксу</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> toggleCheckboxes<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nCheckboxGroup<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">\'CheckboxGroup\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">memo</span><span class="token punctuation">(</span>CheckboxGroup<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),p.createElement(a.p,null,"В примере приведены «плоские» данные. Но будьте осторожны при\nпередаче структур с глубокой вложенностью. Копирование поверхностное (shallow comparison).\nЕсли нужно сделать глубокое — обратитесь к библиотекам, таким как ",p.createElement(a.a,{href:"https://ramdajs.com/docs/#clone",target:"_blank",rel:"nofollow"},"ramda"),"\nи ",p.createElement(a.strong,null,"не используйте")," ",p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">JSON.parse(JSON.stringify(data)))</code>'}}),".")),p.createElement(o.s,null,p.createElement(a.p,null,"Осталось импортировать компоненты и передать данные."),p.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CheckboxGroup<span class="token punctuation">,</span> CheckBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./components\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> apartments <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">\'apartment-0\'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Гостевые дома\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">\'apartment-1\'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Отели\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">\'apartment-2\'</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">\'Базы отдыха и турбазы\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CheckboxGroup</span></span>\n      <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>apartments<span class="token punctuation">}</span></span> <span class="token comment">// данные</span>\n      <span class="token comment">// поле, по которому ищем чекбокс в группе (в данном случае по id)</span>\n      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span>\n      <span class="token comment">// получаем изолированное состояние и метод из группы чекбоксов</span>\n      <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> toggleCheckboxes</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> label<span class="token punctuation">,</span> isDisabled<span class="token punctuation">,</span> isChecked <span class="token punctuation">}</span><span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CheckBox</span></span>\n              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>\n              <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span>\n              <span class="token attr-name">label</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>label<span class="token punctuation">}</span></span>\n              <span class="token attr-name">isChecked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isChecked<span class="token punctuation">}</span></span>\n              <span class="token attr-name">isInGroup</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isChecked <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">?.</span>isChecked<span class="token punctuation">}</span></span>\n              <span class="token attr-name">isDisabled</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isDisabled<span class="token punctuation">}</span></span>\n              <span class="token attr-name">handleChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>toggleCheckboxes<span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></code></pre></div>'}}))),"\n",p.createElement(c.y,{heading:"Осторожно",type:"warning"},p.createElement(a.p,null,"Нужно быть аккуратным с render-props:\n ",p.createElement("a",{href:"https://reactjs.org/docs/render-props.html#caveats",rel:"nofollow noopener noreferrer",target:"_blank"},"предостережение"),".")),"\n",p.createElement(a.p,null,"Стилизация не относится к теме render-props'ов и для сокращения кода пропускается."))}var u=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.MN)(),n.components);return a?p.createElement(a,n,p.createElement(l,n)):l(n)},k=s(7792),r=s(7619);function i(n){var a,s;let{data:{mdx:t},children:e,pageContext:{prev:o,next:c}}=n;const{h1:l,title:u,description:i,image:m,table_of_contents:g}=t.frontmatter;return(0,p.useEffect)((()=>{(0,r.K)()}),[]),p.createElement(p.Fragment,null,p.createElement(k._W,{h1:l,title:u,description:i,image:null===(a=t.frontmatter.image)||void 0===a?void 0:a.publicURL},p.createElement(k.MV,{post:t.frontmatter,imageData:null==m||null===(s=m.childImageSharp)||void 0===s?void 0:s.gatsbyImageData},g?p.createElement(k.G8,{headings:t.tableOfContents}):null,p.createElement("div",{className:"page__content"},e,p.createElement(k.Mf,{prev:o,next:c})),p.createElement(k.QZ,null))))}function m(n){return p.createElement(i,n,p.createElement(u,n))}},8860:function(n,a,s){s.d(a,{y:function(){return t.y}});var t=s(3836)},8876:function(n,a,s){s.d(a,{MN:function(){return e}});var t=s(4424);const p=t.createContext({});function e(n){const a=t.useContext(p);return t.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}}}]);