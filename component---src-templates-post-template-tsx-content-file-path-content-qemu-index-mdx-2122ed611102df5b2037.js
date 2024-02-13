"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[2012],{4224:function(e,a,n){n.r(a),n.d(a,{Head:function(){return o.Ss},default:function(){return p}});var t=n(8876),s=n(4424);function l(e){const a=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ul:"ul",li:"li"},(0,t.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"Согласно премудрой википедии, QEMU — свободная программа с открытым исходным кодом для эмуляции аппаратного обеспечения различных платформ. Что это значит? Прежде всего это говорит нам о том, что с помощью QEMU мы запросто сможем проводить эксперименты с различными операционными системами, не выходя из своей основной системы. Допустим, вы решили перейти на другой дистрибутив linux, но по каким-то причинам боитесь ставить его на реальное железо. Что ж, в таком случае QEMU будет вам отличным подспорьем."),"\n",s.createElement(a.h2,{id:"установка-qemu",style:{position:"relative"}},s.createElement(a.a,{href:"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-qemu","aria-label":"установка qemu permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Установка qemu"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> pacman <span class="token parameter variable">-S</span> qemu-kvm <span class="token punctuation">(</span> или qemu <span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"Добавим своего пользователя в группу kvm:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-G</span> kvm your_user</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Создание диска для qemu:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">mkdir</span> qemu\n$ qemu-img create <span class="token parameter variable">-f</span> qcow2 qemu/gentoo.img 10G`</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Возможные форматы:"),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- cow</code>'}})," (User Mode Linux)"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- vmdk</code>'}})," (VMware)"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- qcow</code>'}})," (родной формат QEMU)"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- raw</code>'}})," (в linux можно работать с подобным форматом как с обычным разделом)"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- 6G</code>'}})," - указание размера диска, в примере 6 GB"),"\n"),"\n",s.createElement(a.p,null,"Просмотрим директорию, чтобы убедиться. что диск успешно создан:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token function">ls</span> qemu/\ngentoo.img</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Перейдём в директорию с диском, скачаем туда же образ системы, которую хотим установить:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ <span class="token builtin class-name">cd</span> qemu/\n$ <span class="token function">wget</span> http://distfiles.gentoo.org/releases/amd64/autobuilds/current-iso/install-amd64-minimal-*.iso`\n\n--2012-11-25 <span class="token number">16</span>:35:01--\nhttp://distfiles.gentoo.org/releases/amd64/autobuilds/current-iso/install-amd64-minimal-20121107.iso\nРаспознаётся distfiles.gentoo.org <span class="token punctuation">(</span>distfiles.gentoo.org<span class="token punctuation">)</span>\n    <span class="token number">64.50</span>.236.52, <span class="token number">216.165</span>.129.135, <span class="token number">64.50</span>.233.100,\nПодключение к distfiles.gentoo.org <span class="token punctuation">(</span>distfiles.gentoo.org<span class="token punctuation">)</span><span class="token operator">|</span><span class="token number">64.50</span>.236.52<span class="token operator">|</span>:80<span class="token punctuation">..</span>. соединение установлено.\nHTTP-запрос отправлен. Ожидание ответа<span class="token punctuation">..</span>. <span class="token number">200</span> OK\nДлина: <span class="token number">156352512</span> <span class="token punctuation">(</span>149M<span class="token punctuation">)</span> <span class="token punctuation">[</span>application/octet-stream<span class="token punctuation">]</span>\nСохранение в: «install-amd64-minimal-20121107.iso» <span class="token number">100</span>%<span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">]</span> <span class="token number">156</span> <span class="token number">352</span> <span class="token number">512</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"На некоторых машинах при использовании технологии виртуализации нужно включить в BIOS соответствующую опцию:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">* System Configuration\n    * Virtualization Technology\n        * Enabled</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Также не следует забывать подгрузить модуль KVM, соответствующий вашему процессору:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token comment"># modprobe kvm_intel</span></code></pre></div>'}}),"\n",s.createElement(a.p,null,"или"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token comment"># modprobe kvm_amd</span></code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"запуск-гостевой-операционной-системы",style:{position:"relative"}},s.createElement(a.a,{href:"#%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%B3%D0%BE%D1%81%D1%82%D0%B5%D0%B2%D0%BE%D0%B9-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B","aria-label":"запуск гостевой операционной системы permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Запуск гостевой операционной системы"),"\n",s.createElement(a.p,null,"Установка из iso-образа:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ qemu-system-x86_64  <span class="token parameter variable">-hda</span> gentoo.img <span class="token parameter variable">-cdrom</span> install-amd64-minimal-20121107.iso <span class="token parameter variable">-boot</span> d</code></pre></div>'}}),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; flex:2;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.333333333333336%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/904acca3ac76397db12b6657c8f1fc50/e93cc/qemu1.webp 300w,\n/static/904acca3ac76397db12b6657c8f1fc50/b0544/qemu1.webp 600w,\n/static/904acca3ac76397db12b6657c8f1fc50/90807/qemu1.webp 900w"\n              sizes="(max-width: 900px) 100vw, 900px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/904acca3ac76397db12b6657c8f1fc50/73b64/qemu1.jpg 300w,\n/static/904acca3ac76397db12b6657c8f1fc50/3ad8d/qemu1.jpg 600w,\n/static/904acca3ac76397db12b6657c8f1fc50/2ee6c/qemu1.jpg 900w"\n            sizes="(max-width: 900px) 100vw, 900px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/904acca3ac76397db12b6657c8f1fc50/2ee6c/qemu1.jpg"\n            alt="qemu gentoo"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",s.createElement(a.p,null,"Или запуск live-cd системы. В случае запуска с cdrom, следует указать его - ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/dev/cdrom/</code>'}})," - вместо образа диска"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ qemu-system-i386 <span class="token parameter variable">-cdrom</span> xubuntu-12.04.1.iso</code></pre></div>'}}),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 639px; flex:1;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.33333333333333%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/a3c4a96262f722ced4db4992c9578c5e/e93cc/qemu2.webp 300w,\n/static/a3c4a96262f722ced4db4992c9578c5e/b0544/qemu2.webp 600w,\n/static/a3c4a96262f722ced4db4992c9578c5e/2135a/qemu2.webp 639w"\n              sizes="(max-width: 639px) 100vw, 639px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/a3c4a96262f722ced4db4992c9578c5e/73b64/qemu2.jpg 300w,\n/static/a3c4a96262f722ced4db4992c9578c5e/3ad8d/qemu2.jpg 600w,\n/static/a3c4a96262f722ced4db4992c9578c5e/ff458/qemu2.jpg 639w"\n            sizes="(max-width: 639px) 100vw, 639px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/a3c4a96262f722ced4db4992c9578c5e/ff458/qemu2.jpg"\n            alt="qemu boot"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-boot</code>'}})," - позволяет изменить устройство, с которого производится загрузка"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- c</code>'}})," - указание на жёсткий диск"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- d</code>'}})," - указание на загрузку с cdrom"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- a, b</code>'}})," - floppy 1 и 2"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">- cdrom</code>'}})," - указание на устройство/место, где находится устанавливаемая операционная система"),"\n",s.createElement(a.li,null,s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-m</code>'}})," - выделить количество оперативной памяти для гостевой ОС. Например ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-m 512</code>'}})),"\n"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; flex:2;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.333333333333336%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/e95193655013ad78297a710d8159d18a/e93cc/qemu3.webp 300w,\n/static/e95193655013ad78297a710d8159d18a/b0544/qemu3.webp 600w,\n/static/e95193655013ad78297a710d8159d18a/90807/qemu3.webp 900w"\n              sizes="(max-width: 900px) 100vw, 900px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/e95193655013ad78297a710d8159d18a/73b64/qemu3.jpg 300w,\n/static/e95193655013ad78297a710d8159d18a/3ad8d/qemu3.jpg 600w,\n/static/e95193655013ad78297a710d8159d18a/2ee6c/qemu3.jpg 900w"\n            sizes="(max-width: 900px) 100vw, 900px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/e95193655013ad78297a710d8159d18a/2ee6c/qemu3.jpg"\n            alt="qemu"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",s.createElement(a.p,null,"После первичной установки, мы всегда делаем одну важную вещь — перезагружаем систему. Естественно, теперь нужно будет запускать установленную ОС не с привода или из iso-файла, а с созданного на первоначальном этапе жёсткого диска.\nВыглядит это так:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ qemu /home/user/qemu/gentoo.img</code></pre></div>'}}),"\n",s.createElement(a.p,null,"где ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/home/user/qemu/gentoo.img</code>'}})," - путь к диску qemu с установленной гостевой ОС"))}var c=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.MN)(),e.components);return a?s.createElement(a,e,s.createElement(l,e)):l(e)},o=n(7792),r=n(7619);function i(e){var a,n;let{data:{mdx:t},children:l,pageContext:{prev:c,next:i}}=e;const{h1:p,title:g,description:m,image:u,table_of_contents:d}=t.frontmatter;return(0,s.useEffect)((()=>{(0,r.K)()}),[]),s.createElement(s.Fragment,null,s.createElement(o._W,{h1:p,title:g,description:m,image:null===(a=t.frontmatter.image)||void 0===a?void 0:a.publicURL},s.createElement(o.MV,{post:t.frontmatter,imageData:null==u||null===(n=u.childImageSharp)||void 0===n?void 0:n.gatsbyImageData},d?s.createElement(o.G8,{headings:t.tableOfContents}):null,s.createElement("div",{className:"page__content"},l,s.createElement(o.Mf,{prev:c,next:i})),s.createElement(o.QZ,null))))}function p(e){return s.createElement(i,e,s.createElement(c,e))}},8876:function(e,a,n){n.d(a,{MN:function(){return l}});var t=n(4424);const s=t.createContext({});function l(e){const a=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}}}]);