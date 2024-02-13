"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[4276],{8300:function(e,a,n){n.r(a),n.d(a,{Head:function(){return c.Ss},default:function(){return i}});var l=n(8876),s=n(4424);function t(e){const a=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ul:"ul",li:"li"},(0,l.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.p,null,"В этом посте затронем тему записи скринкастов под linux.\nБудет рассмотрено несколько наиболее популярных утилит для захвата\nвидео с монитора компьютера, также обратим внимание на их функционал, для одних детально, для других — поверхностно."),"\n",s.createElement(a.p,null,"Вообще, в linux не так много кандидатов, которые могут устроить нас по всем показателям. Как оказалось, найти адекватную программу для указанных целей достаточно проблематично. Выбраны несколько: старый добрый ffmpeg, небезызвестные XVidCap и recordMyDesktop, а также подающий надежды новичок — eidete."),"\n",s.createElement(a.h2,{id:"ffmpeg",style:{position:"relative"}},s.createElement(a.a,{href:"#ffmpeg","aria-label":"ffmpeg permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"ffmpeg"),"\n",s.createElement(a.p,null,"Что он умеет и как это использовать в посведневной жизни:"),"\n",s.createElement(a.p,null,'"Склеивание" музыки и видео:'),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> son.wav <span class="token parameter variable">-i</span> video_origine.avi video_finale.avi</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Замена одной звуковой дорожки на другую (например, более качественную):"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> new.wav <span class="token parameter variable">-i</span> video.avi out.avi</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Запись скринкаста (запись с монитора компьютера):"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-f</span> x11grab <span class="token parameter variable">-s</span> 1366x768 <span class="token parameter variable">-r</span> <span class="token number">25</span> <span class="token parameter variable">-b</span> <span class="token number">1500</span> <span class="token parameter variable">-bt</span> <span class="token number">500</span> <span class="token parameter variable">-aspect</span> <span class="token number">1,3333</span> <span class="token parameter variable">-sameq</span> <span class="token parameter variable">-i</span> :0.0+0,0 <span class="token parameter variable">-f</span> alsa <span class="token parameter variable">-async</span> <span class="token number">1</span> <span class="token parameter variable">-ac</span> <span class="token number">2</span> <span class="token parameter variable">-i</span> hw:0,0 <span class="token parameter variable">-acodec</span> libmp3lame ~/MyVideo.avi</code></pre></div>'}}),"\n",s.createElement(a.p,null,"В этом примере будет записан также звук."),"\n",s.createElement(a.p,null,"Перекодирование из одного формата в другой:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> video.avi <span class="token parameter variable">-f</span> webm video.webm</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Извлечение аудиодорожки из видеозаписи:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> video.avi <span class="token parameter variable">-f</span> mp3 audio.mp3</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Запись звука с микрофона:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-f</span> alsa <span class="token parameter variable">-async</span> <span class="token number">1</span> <span class="token parameter variable">-ac</span> <span class="token number">2</span> <span class="token parameter variable">-i</span> hw:0,0 <span class="token parameter variable">-acodec</span> libmp3lame sound.mp3</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Создание gif-анимации из видео:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> video.avi animation.gif</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Получить сведения о видео:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-i</span> video.avi</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Основные ключи:"),"\n",s.createElement(a.ul,null,"\n",s.createElement(a.li,null,"i - входной файл"),"\n",s.createElement(a.li,null,"s - разрешение экрана для нашей записи"),"\n",s.createElement(a.li,null,"r - количество кадров в секунду"),"\n",s.createElement(a.li,null,"ac - количество каналов (для аудио)"),"\n",s.createElement(a.li,null,"qscale - регулировка уровня сжатия"),"\n",s.createElement(a.li,null,"bt - битрейт"),"\n"),"\n",s.createElement(a.p,null,"Проверить поддерживаемые форматы файлов можно командой ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ffmpeg -formats</code>'}}),".\nОстальное можно найти в мануале - ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">man ffmpeg</code>'}}),". Там до вас даже постараются донести, как всё это работает."),"\n",s.createElement(a.h2,{id:"следующий-кандидат---xvidcap",style:{position:"relative"}},s.createElement(a.a,{href:"#%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B8%D0%B9-%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%B4%D0%B0%D1%82---xvidcap","aria-label":"следующий кандидат   xvidcap permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Следующий кандидат - XVidCap"),"\n",s.createElement(a.p,null,"Кодирует на лету и имеет множество разных форматов. Автору не подошёл. Это тот редкий случай, когда всё вроде нормально, но субъективно что-то не нравится."),"\n",s.createElement(a.h2,{id:"recordmydesktop",style:{position:"relative"}},s.createElement(a.a,{href:"#recordmydesktop","aria-label":"recordmydesktop permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"recordMyDesktop"),"\n",s.createElement(a.p,null,"Используют многие. Автору он не подошёл по причине непонятных фризов при записи ролика. Возможно, так отвратно он работает на отнюдь не топовом ноутбуке - нужно больше мощности?"),"\n",s.createElement(a.p,null,"Кроме того, recodrMyDesktop записывает файл в непотребном формате, который всё равно придётся перекодировать."),"\n",s.createElement(a.p,null,"Имеет и консольный вариант:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ recordmydesktop <span class="token parameter variable">--height</span> <span class="token number">400</span> <span class="token parameter variable">--width</span> <span class="token number">600</span> <span class="token parameter variable">--channels</span> <span class="token number">1</span> --no-sound <span class="token parameter variable">--overwrite</span> <span class="token parameter variable">-o</span> video.ogv</code></pre></div>'}}),"\n",s.createElement(a.p,null,"В приведённом примере несложно разобраться: мы запишем файл ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">video.ogv</code>'}})," с\nразмерами 600x400 и без звука."),"\n",s.createElement(a.h2,{id:"как-создать-анимированный-gif",style:{position:"relative"}},s.createElement(a.a,{href:"#%D0%BA%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-gif","aria-label":"как создать анимированный gif permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Как создать анимированный gif"),"\n",s.createElement(a.p,null,"Для этого отлично подходит программка ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">byzanz</code>'}}),". В официальных репозиториях её может и не быть. Пользователи Archlinux могут найти обсуждаемую деву в AUR."),"\n",s.createElement(a.p,null,"Сам процесс записи выглядит примерно так:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ byzanz-record <span class="token parameter variable">--duration</span><span class="token operator">=</span><span class="token number">5</span> <span class="token parameter variable">--delay</span><span class="token operator">=</span><span class="token number">5</span> <span class="token parameter variable">--x</span><span class="token operator">=</span><span class="token number">500</span> <span class="token parameter variable">--y</span><span class="token operator">=</span><span class="token number">500</span> <span class="token parameter variable">--width</span><span class="token operator">=</span><span class="token number">800</span> <span class="token parameter variable">--height</span><span class="token operator">=</span><span class="token number">600</span> myGifFile.gif</code></pre></div>'}}),"\n",s.createElement(a.p,null,"где"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">--x/--y - точки координат\n--width/ --height - ширина и высота экрана соответственно\n--duration - продолжительность\n--delay - задержка перед началом записи</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Помимо этого можно скомбинировать возможности ffmpeg и imagemagick:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ ffmpeg <span class="token parameter variable">-t</span> <span class="token number">5</span> <span class="token parameter variable">-ss</span> 00:00:10 <span class="token parameter variable">-i</span> MyVideo.mp4 out%04d.gif\n$ convert <span class="token parameter variable">-delay</span> 1x20 <span class="token parameter variable">-loop</span> <span class="token number">0</span> out*gif my.gif</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Сначала разбиваем видео файл на множество гифок. Затем конвертируем все эти\nгифки в одну."),"\n",s.createElement(a.p,null,"Здесь параметр ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-t</code>'}})," указывает продолжительность, ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">-ss</code>'}})," начать с\nначала или после прошествия некоторого времени. При конвертации ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">delay</code>'}}),"\nопределяет задержку (насколько быстрой будет анимация)."),"\n",s.createElement(a.p,null,"Пример с множеством png-изображений:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ convert <span class="token parameter variable">-delay</span> <span class="token number">120</span> <span class="token parameter variable">-loop</span> <span class="token number">0</span> *.png animated.gif</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Изменить размер гифки:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">$ convert old.gif <span class="token parameter variable">-resize</span> 600x600<span class="token punctuation">\\</span><span class="token operator">!</span> new.gif</code></pre></div>'}}),"\n",s.createElement(a.p,null,"Или обойтись одним только ffmpeg:"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text"># -s - размер\n# -r 10 - скорость анимации\n$ ffmpeg -i file.mov -s 900x495 -pix_fmt rgb24 -r 10 file.gif</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"итог",style:{position:"relative"}},s.createElement(a.a,{href:"#%D0%B8%D1%82%D0%BE%D0%B3","aria-label":"итог permalink",className:"anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Итог"),"\n",s.createElement(a.p,null,"Ну, что сказать, ffmpeg пока был и остаётся лучшим, хотя если вам\nнужно добавить звук в записанный ролик, лучше записать звуковую дорожку отдельно - в Audacity, а затем склеить с видео в другой программке - Avidemux. Не забывайте, Avidemux может многое."),"\n",s.createElement(a.p,null,"Замечу, что один и тот же ролик в ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.avi</code>'}})," и ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.webm</code>'}})," имеет абсолютно разный вес. Рекорд автора: ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.avi</code>'}})," - 70 MB, ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.webm</code>'}})," - 12 MB. Впечатляет, не правда ли?"))}var r=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,l.MN)(),e.components);return a?s.createElement(a,e,s.createElement(t,e)):t(e)},c=n(7792),p=n(7619);function o(e){var a,n;let{data:{mdx:l},children:t,pageContext:{prev:r,next:o}}=e;const{h1:i,title:m,description:g,image:d,table_of_contents:u}=l.frontmatter;return(0,s.useEffect)((()=>{(0,p.K)()}),[]),s.createElement(s.Fragment,null,s.createElement(c._W,{h1:i,title:m,description:g,image:null===(a=l.frontmatter.image)||void 0===a?void 0:a.publicURL},s.createElement(c.MV,{post:l.frontmatter,imageData:null==d||null===(n=d.childImageSharp)||void 0===n?void 0:n.gatsbyImageData},u?s.createElement(c.G8,{headings:l.tableOfContents}):null,s.createElement("div",{className:"page__content"},t,s.createElement(c.Mf,{prev:r,next:o})),s.createElement(c.QZ,null))))}function i(e){return s.createElement(o,e,s.createElement(r,e))}},8876:function(e,a,n){n.d(a,{MN:function(){return t}});var l=n(4424);const s=l.createContext({});function t(e){const a=l.useContext(s);return l.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}}}]);