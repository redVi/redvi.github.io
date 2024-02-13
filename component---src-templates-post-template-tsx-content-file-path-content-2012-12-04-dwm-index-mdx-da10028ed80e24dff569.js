"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[4720],{5128:function(n,a,s){s.r(a),s.d(a,{Head:function(){return c.Ss},default:function(){return u}});var e=s(8876),t=s(4424);function l(n){const a=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ul:"ul",li:"li"},(0,e.MN)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"Чем можно заняться линуксоиду, у которого в системе всё, решительно всё\nработает? Конечно же, довести до ума свой оконный менеджер. Или попробовать новый."),"\n",t.createElement(a.p,null,"К примеру, dwm — динамический фреймовый оконный менеджер. Написан на языке C.\nНастройка производится посредством правки заголовочного файла, для чего\nнеобходимо иметь исходники dwm. Если вас не пугает перспектива потратить\nчас-другой на настройку этой штуки под свои нужды, то давайте приступим."),"\n",t.createElement(a.h2,{id:"где-взять",style:{position:"relative"}},t.createElement(a.a,{href:"#%D0%B3%D0%B4%D0%B5-%D0%B2%D0%B7%D1%8F%D1%82%D1%8C","aria-label":"где взять permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Где взять?"),"\n",t.createElement(a.p,null,"Если ваш дистрибутив — ArchLinux, ставьте вместе с автором сего\nпоста ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">abs</code>'}})," — это наилучшее решение, так вы будете иметь возможность внести свои правки в конфигурационный файл dwm - сделать всё по-своему, а затем установить то, что получилось. Обладатели других дистрибутивов могут найти исходники dwm и загрузить их. Например, с сайта ",t.createElement(a.a,{href:"http://dwm.suckless.org/",target:"_blank",rel:"nofollow"},"dwm.suckless")," - вкладка ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">downloads</code>'}}),"."),"\n",t.createElement(a.p,null,"Метода арча:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> abs\n$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/abs.conf</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Здесь поменяем каталог ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/var/abs</code>'}})," на какой-нибудь другой. Можно оставить по-умолчанию, но тогда все исходники лягут в директорию ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/var</code>'}}),", что не есть хорошо, если под содержащий её раздел выделено мало места."),"\n",t.createElement(a.p,null,"Пример настройки:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token comment"># /etc/abs.conf</span>\n<span class="token comment"># the top-level directory of all your PKGBUILDs</span>\n\n<span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$ABSROOT</span>"</span> <span class="token operator">=</span> <span class="token string">""</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">ABSROOT</span><span class="token operator">=</span><span class="token string">"/home/user/abs/"</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Синхронизируем дерево abs:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> abs\n<span class="token operator">==</span><span class="token operator">></span> Starting ABS sync<span class="token punctuation">..</span>.\nreceiving <span class="token function">file</span> list <span class="token punctuation">..</span>. <span class="token keyword">done</span>\n./\ncommunity/python-memcached/PKGBUILD\ncore/\nmultilib/\nmultilib/binutils-multilib/\nmultilib/binutils-multilib/PKGBUILD\nmultilib/binutils-multilib/binutils.install</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Если вам не нужна вся коллекция ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">abs</code>'}}),", можно получить только dwm:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> abs community/dwm/</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Отлично. Теперь находим dwm и начинаем разбираться с его настройкой. Перейдите в нужную директорию"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token builtin class-name">cd</span> /home/user/abs/community/dwm</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Вносим нужные правки (об этом ниже) и собираем пакет для установки. Но постойте-ка! Мы ведь нарушим целостность файла, изменив его, соответственно, не пройдём проверку на контрольные суммы. Что ж, давайте отключим эту проверку. Итак, установка:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> makepkg <span class="token parameter variable">--skipchecksums</span> <span class="token parameter variable">--asroot</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Добавьте в ваш ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.xinitrc</code>'}})," запись"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token comment"># .xinitrc</span>\n\n<span class="token builtin class-name">exec</span> dwm</code></pre></div>'}}),"\n",t.createElement(a.p,null,"И входите по startx - добро пожаловать!"),"\n",t.createElement(a.p,null,'Можно приступать к настройке, но... прежде позвольте разжечь ваш аппетит. Давайте посмотрим, что мы можем получить в итоге. Прежде всего тайловые wm проповедуют принцип "ничего лишнего":'),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1024px; flex:2;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.333333333333336%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/48950f1f29d9baa7133b34f7f93c5027/e93cc/dwm1.webp 300w,\n/static/48950f1f29d9baa7133b34f7f93c5027/b0544/dwm1.webp 600w,\n/static/48950f1f29d9baa7133b34f7f93c5027/53334/dwm1.webp 1024w"\n              sizes="(max-width: 1024px) 100vw, 1024px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/48950f1f29d9baa7133b34f7f93c5027/73b64/dwm1.jpg 300w,\n/static/48950f1f29d9baa7133b34f7f93c5027/3ad8d/dwm1.jpg 600w,\n/static/48950f1f29d9baa7133b34f7f93c5027/c3413/dwm1.jpg 1024w"\n            sizes="(max-width: 1024px) 100vw, 1024px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/48950f1f29d9baa7133b34f7f93c5027/c3413/dwm1.jpg"\n            alt="dwm"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",t.createElement(a.h2,{id:"как-настроить-",style:{position:"relative"}},t.createElement(a.a,{href:"#%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-","aria-label":"как настроить  permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Как настроить ?"),"\n",t.createElement(a.p,null,"Посмотрим, что можно изменить в файле ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">config.h</code>'}})),"\n",t.createElement(a.p,null,'В первую очередь это шрифт. Здесь нужно чуть изменить настройки, поскольку в противном случае в статус-баре будут забавные "кракозябры" вместо кириллицы.'),"\n",t.createElement(a.p,null,"Для определения поддержки тем или иным шрифтом кириллицы, используйте утилиту ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">xfontsel</code>'}}),"."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> font<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">=</span> <span class="token string">"-*-dejavu sans-medium-r-*-*-8-*-*-*-*-*-*-ru"</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Вам может потребоваться явно указать пути к шрифтам в файле ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/etc/X11/xorg.conf</code>'}}),":"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c">Section <span class="token string">"Files"</span>\n    FontPath <span class="token string">"/usr/share/fonts/local"</span>\n    FontPath <span class="token string">"/usr/share/fonts/misc"</span>\n    FontPath <span class="token string">"/usr/share/fonts/cyrillic"</span>\nEndSection</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Далее идёт настройка цветов статус-бара:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> normbordercolor<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">"#8181ff"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> normbgcolor<span class="token punctuation">[</span><span class="token punctuation">]</span>     <span class="token operator">=</span> <span class="token string">"#222222"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> normfgcolor<span class="token punctuation">[</span><span class="token punctuation">]</span>     <span class="token operator">=</span> <span class="token string">"#bbbbbb"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> selbordercolor<span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token string">"#4e4eff"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> selbgcolor<span class="token punctuation">[</span><span class="token punctuation">]</span>      <span class="token operator">=</span> <span class="token string">"#606060"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> selfgcolor<span class="token punctuation">[</span><span class="token punctuation">]</span>      <span class="token operator">=</span> <span class="token string">"#eeeeee"</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span> borderpx  <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">unsigned</span> <span class="token keyword">int</span> snap      <span class="token operator">=</span> <span class="token number">32</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> Bool showbar           <span class="token operator">=</span> True<span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token keyword">const</span> Bool topbar            <span class="token operator">=</span> True<span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"normbordercolorp[] = цвет границ окна"),"\n",t.createElement(a.li,null,"normbgcolor[]      = цвет фона"),"\n",t.createElement(a.li,null,"normfgcolor[]      = цвет текста в статус-баре"),"\n",t.createElement(a.li,null,"selbordercolor[]   = цвет границ активного окна"),"\n",t.createElement(a.li,null,"selbgcolor[]       = цвет фона заголовка окна"),"\n",t.createElement(a.li,null,"selfgcolor[]       = цвет текста заголовка окна"),"\n",t.createElement(a.li,null,"borderpx           = ширина границ окна"),"\n"),"\n",t.createElement(a.p,null,"Настроим как нам нравится наши теги (это что-то вроде рабочих столов в других менеджерах окон)"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>tags<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"term"</span><span class="token punctuation">,</span> <span class="token string">"chat"</span><span class="token punctuation">,</span> <span class="token string">"www"</span><span class="token punctuation">,</span> <span class="token string">"media"</span><span class="token punctuation">,</span> <span class="token string">"work"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Теперь вместо цифр мы имеем человекопонятные обозначения для каждого тега."),"\n",t.createElement(a.p,null,"Как и во всех — мне известных — оконных менеджерах, dwm использует клавишу-модификатор. По умолчанию это ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Mod1Mask</code>'}})," — то есть клавиша ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Alt</code>'}}),". Чтобы изменить её на клавишу ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">super</code>'}})," (там, где лого windows) — изменим запись ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">#define MODKEY</code>'}}),":"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token comment">/* key definitions */</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MODKEY</span> <span class="token expression">Mod4Mask</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">TAGKEYS</span><span class="token expression"><span class="token punctuation">(</span>KEY<span class="token punctuation">,</span>TAG<span class="token punctuation">)</span></span></span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>                       KEY<span class="token punctuation">,</span>      view<span class="token punctuation">,</span>       <span class="token punctuation">{</span><span class="token punctuation">.</span>ui <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> TAG<span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> \\\n<span class="token punctuation">{</span> MODKEY<span class="token operator">|</span>ControlMask<span class="token punctuation">,</span>           KEY<span class="token punctuation">,</span>      toggleview<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">.</span>ui <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> TAG<span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> \\\n<span class="token punctuation">{</span> MODKEY<span class="token operator">|</span>ShiftMask<span class="token punctuation">,</span>             KEY<span class="token punctuation">,</span>      tag<span class="token punctuation">,</span>        <span class="token punctuation">{</span><span class="token punctuation">.</span>ui <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> TAG<span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> \\\n<span class="token punctuation">{</span> MODKEY<span class="token operator">|</span>ControlMask<span class="token operator">|</span>ShiftMask<span class="token punctuation">,</span> KEY<span class="token punctuation">,</span>      toggletag<span class="token punctuation">,</span>  <span class="token punctuation">{</span><span class="token punctuation">.</span>ui <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> TAG<span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Настройка горячих клавиш. Из приведённого ниже кода ясно, что нажатие ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">клавиши-модификатора + p</code>'}})," вызовет ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">dmenu</code>'}}),", нажатие ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">клавиши-модификатора + Return</code>'}})," (Enter) вызовет эмулятор терминала, ну и так далее. В принципе, стандартные обозначения вполне даже удобны и вряд ли вам захочется их менять. Мы вернёмся к этому чуть позже, далее будет приведён более полный перечень горячих клавиш."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> Key keys<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token comment">/* modifier           key       function        argument */</span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>             XK_p<span class="token punctuation">,</span>      spawn<span class="token punctuation">,</span>        <span class="token punctuation">{</span><span class="token punctuation">.</span>v <span class="token operator">=</span> dmenucmd <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>             XK_Return<span class="token punctuation">,</span> spawn<span class="token punctuation">,</span>        <span class="token punctuation">{</span><span class="token punctuation">.</span>v <span class="token operator">=</span> termcmd <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>             XK_b<span class="token punctuation">,</span>      togglebar<span class="token punctuation">,</span>    <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>             XK_j<span class="token punctuation">,</span>      focusstack<span class="token punctuation">,</span>   <span class="token punctuation">{</span><span class="token punctuation">.</span>i <span class="token operator">=</span> <span class="token operator">+</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> MODKEY<span class="token punctuation">,</span>             XK_k<span class="token punctuation">,</span>      focusstack<span class="token punctuation">,</span>   <span class="token punctuation">{</span><span class="token punctuation">.</span>i <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Настройка правил для приложений"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> <span class="token keyword">const</span> Rule rules<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token comment">/* class      instance    title   tags mask   isfloating   monitor */</span>\n<span class="token punctuation">{</span> <span class="token string">"Gimp"</span><span class="token punctuation">,</span>     <span class="token constant">NULL</span><span class="token punctuation">,</span>       <span class="token constant">NULL</span><span class="token punctuation">,</span>   <span class="token number">0</span><span class="token punctuation">,</span>          True<span class="token punctuation">,</span>        <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> <span class="token string">"Firefox"</span><span class="token punctuation">,</span>  <span class="token constant">NULL</span><span class="token punctuation">,</span>       <span class="token constant">NULL</span><span class="token punctuation">,</span>   <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">,</span>     False<span class="token punctuation">,</span>       <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">~0</code>'}})," - приложение будет запускаться сразу на всех тегах. Это может быть удобно для какого-нибудь док-бара, трея и прочих"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">1 &lt;&lt; 0</code>'}})," — запуск на первом теге"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">1 &lt;&lt; 2</code>'}})," — запуск на третьем теге"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">1 &lt;&lt; 3</code>'}})," — запуск на четвертом теге и так далее"),"\n"),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">isfloating</code>'}})," указывает на то, будут ли окна приложения плавающими"),"\n",t.createElement(a.h2,{id:"расположение-окон-горячие-клавиши",style:{position:"relative"}},t.createElement(a.a,{href:"#%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BA%D0%BE%D0%BD-%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D0%B5-%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D1%88%D0%B8","aria-label":"расположение окон горячие клавиши permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Расположение окон. Горячие клавиши"),"\n",t.createElement(a.p,null,"По умолчанию DWM поддерживает три режима расположения окон:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"плиточный ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[]=</code>'}}),","),"\n",t.createElement(a.li,null,"монокль ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">[M]</code>'}}),","),"\n",t.createElement(a.li,null,"плавающий ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">>&lt;></code>'}}),"."),"\n"),"\n",t.createElement(a.p,null,"Как правило, этого достаточно."),"\n",t.createElement(a.p,null,"По умолчанию при запуске dwm отображается плиточный режим окон. Чтобы поставить вместо него свой любимый режим, просто найдите нижеуказанные строки и поставьте нужный режим на первое место:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="c"><pre class="language-c"><code class="language-c"><span class="token keyword">static</span> <span class="token keyword">const</span> Layout layouts<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="token comment">/* symbol     arrange function */</span>\n<span class="token punctuation">{</span> <span class="token string">">&lt;>"</span><span class="token punctuation">,</span>      <span class="token constant">NULL</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> <span class="token string">"[]="</span><span class="token punctuation">,</span>      tile <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span> <span class="token string">"[M]"</span><span class="token punctuation">,</span>      monocle <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1024px; flex:2;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.333333333333336%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/e6b41b6dc81532cfbb5a0659dd01cc67/e93cc/dwm2.webp 300w,\n/static/e6b41b6dc81532cfbb5a0659dd01cc67/b0544/dwm2.webp 600w,\n/static/e6b41b6dc81532cfbb5a0659dd01cc67/53334/dwm2.webp 1024w"\n              sizes="(max-width: 1024px) 100vw, 1024px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/e6b41b6dc81532cfbb5a0659dd01cc67/eed55/dwm2.png 300w,\n/static/e6b41b6dc81532cfbb5a0659dd01cc67/7491f/dwm2.png 600w,\n/static/e6b41b6dc81532cfbb5a0659dd01cc67/658fc/dwm2.png 1024w"\n            sizes="(max-width: 1024px) 100vw, 1024px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/e6b41b6dc81532cfbb5a0659dd01cc67/658fc/dwm2.png"\n            alt="dwm tiling manager"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",t.createElement(a.p,null,"Сочетание горячих клавиш с модификацией MODKEY у нас получилось таким:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + M</code>'}})," - монокль"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + T</code>'}})," - плитка"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + F</code>'}})," - плавающие окна"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + N</code>'}})," - перейти на тег, N - номер тега"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + p</code>'}})," - dmenu, если установлено"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + Shift + q</code>'}})," - выход из dwm"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + Shift + N</code>'}})," - перенести окно на соответствующий тег"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + Shift + C</code>'}})," - закрыть окно"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + K</code>'}})," - переход на неактивное окно"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Super + J</code>'}})," - то же самое, в общем перемещение между окнами"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Alt + Tab</code>'}})," - переход на следующий/предыдущий тег"),"\n"),"\n",t.createElement(a.h2,{id:"дополнительные-плюшки-и-запуск",style:{position:"relative"}},t.createElement(a.a,{href:"#%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BB%D1%8E%D1%88%D0%BA%D0%B8-%D0%B8-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA","aria-label":"дополнительные плюшки и запуск permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Дополнительные плюшки и запуск"),"\n",t.createElement(a.p,null,"У dwm нет каких-либо специальных настроек для запуска приложений.\nВсё, что запускает openbox из файла ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">autostart</code>'}}),", прописывается просто в ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.xinitrc</code>'}})),"\n",t.createElement(a.p,null,"Например:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">nitrogen <span class="token parameter variable">--restore</span>\nxmodmap ~/.xmodmaprc\nconky <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> -r<span class="token punctuation">;</span> <span class="token keyword">do</span> xsetroot <span class="token parameter variable">-name</span> <span class="token string">"<span class="token environment constant">$REPLY</span>"</span><span class="token punctuation">;</span> <span class="token keyword">done</span> <span class="token operator">&amp;</span>\n<span class="token comment"># и прочее...</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Естественно, если вы пожелаете отображать информацию из conky, нужно будет сделать его покороче ;)\nТак, чтобы он вмещался в статус-бар dwm."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token comment"># .conkyrc</span>\n\nout_to_x no\nout_to_console <span class="token function">yes</span>\nbackground no\nupdate_interval <span class="token number">100</span>\ntotal_run_times <span class="token number">0</span>\nTEXT\nCPU <span class="token variable">${cpu cpu0}</span>% :: Mem <span class="token variable">$mem</span> :: HDD <span class="token variable">${fs_used}</span> :: <span class="token variable">${totaldown eth0}</span> / <span class="token variable">${totalup eth0}</span> :: <span class="token variable">${time <span class="token operator">%</span>d<span class="token operator">:</span><span class="token operator">%</span>m<span class="token operator">:</span><span class="token operator">%</span>H<span class="token operator">:</span><span class="token operator">%</span>M}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Вот, пожалуй, и всё. Пусть dwm принесёт вам немало радостных минут,\nпозволит забыть о мыши и в целом сделает вашу работу за компьютером удобнее.\nНастройки wdm автора можно найти на ",t.createElement(a.a,{href:"https://github.com/redVi/dotfiles/tree/master/dwm",target:"_blank",rel:"nofollow"},"github"),"\nвместе с инструкцией по применению ;)"))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.MN)(),n.components);return a?t.createElement(a,n,t.createElement(l,n)):l(n)},c=s(7792),o=s(7619);function r(n){var a,s;let{data:{mdx:e},children:l,pageContext:{prev:p,next:r}}=n;const{h1:u,title:i,description:d,image:k,table_of_contents:g}=e.frontmatter;return(0,t.useEffect)((()=>{(0,o.K)()}),[]),t.createElement(t.Fragment,null,t.createElement(c._W,{h1:u,title:i,description:d,image:null===(a=e.frontmatter.image)||void 0===a?void 0:a.publicURL},t.createElement(c.MV,{post:e.frontmatter,imageData:null==k||null===(s=k.childImageSharp)||void 0===s?void 0:s.gatsbyImageData},g?t.createElement(c.G8,{headings:e.tableOfContents}):null,t.createElement("div",{className:"page__content"},l,t.createElement(c.Mf,{prev:p,next:r})),t.createElement(c.QZ,null))))}function u(n){return t.createElement(r,n,t.createElement(p,n))}},8876:function(n,a,s){s.d(a,{MN:function(){return l}});var e=s(4424);const t=e.createContext({});function l(n){const a=e.useContext(t);return e.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}}}]);