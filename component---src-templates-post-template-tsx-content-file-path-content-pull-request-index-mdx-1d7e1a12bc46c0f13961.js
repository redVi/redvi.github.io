"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[716],{3408:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.Ss},default:function(){return u}});var a=t(8876),l=t(4424),c=t(8860);function r(e){const n=Object.assign({p:"p",strong:"strong",h2:"h2",a:"a",span:"span",code:"code",em:"em",pre:"pre"},(0,a.MN)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"В кругу моих знакомых имеются товарищи весьма и весьма далёкие от\nмира железок, интернета и open source (в общем, они пропустили всё самое интересное).\nНе далее как на прошлой неделе угораздило таки употребить при них непотребное\nсловосочетание «pull request», после чего, ловя недоумённые взгляды,\nпришлось мяться и придумывать как сие получше перевести на великий и могучий.\nУвы, к взаимопониманию это не привело: попробую ответить здесь."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Pull Request")," — запрос на включение. На включение написанного\nвами кода в чужой репозиторий."),"\n",l.createElement(n.h2,{id:"с-чего-начать",style:{position:"relative"}},l.createElement(n.a,{href:"#%D1%81-%D1%87%D0%B5%D0%B3%D0%BE-%D0%BD%D0%B0%D1%87%D0%B0%D1%82%D1%8C","aria-label":"с чего начать permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"С чего начать?"),"\n",l.createElement(n.p,null,"А для начала этот самый репозиторий нужно форкнуть (fork — вилка, ответвление).\nРазберём это нехитрое действо на примере веб-сервиса для хостинга IT-проектов,\nназвание которому GitHub. Разумеется, кроме GitHub есть и другие: BitBucket,\nнапример. Выбирать по вкусу."),"\n",l.createElement(c.y,{heading:"Примечание"},l.createElement(n.p,null,"Для успешного проведения нижеизложенных операций у вас\n(что естественно) должен быть установлен git")),"\n",l.createElement(n.p,null,"Заходим на страницу интересующего проекта, жмём кнопку ",l.createElement(n.code,null,"Fork"),", ищем\n",l.createElement(n.em,null,"на своей")," странице URL для клонирования."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 460px; flex:3;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 34%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/3216e68792c40cf439d76e3049df22d2/e93cc/fork.webp 300w,\n/static/3216e68792c40cf439d76e3049df22d2/767a7/fork.webp 460w"\n              sizes="(max-width: 460px) 100vw, 460px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/3216e68792c40cf439d76e3049df22d2/eed55/fork.png 300w,\n/static/3216e68792c40cf439d76e3049df22d2/b0e63/fork.png 460w"\n            sizes="(max-width: 460px) 100vw, 460px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/3216e68792c40cf439d76e3049df22d2/b0e63/fork.png"\n            alt="fork"\n            title="форк репозитория на гитхаб"\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",l.createElement(n.p,null,"В консоли в зависимости от входных данных набираем нечто подобное:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git clone git@github.com/username/django_documentation.git\n")),"\n",l.createElement(n.p,null,"Отлично. Уже можно вносить свои изменения в код проекта."),"\n",l.createElement(n.p,null,"Тот репозиторий, что теперь лежит на вашем жёстком диске, независим от\nосновного. В нём отслеживаются только ваши наработки. Но как следить за\nизменениями, происходящими в первоисточнике, откуда вы «стянули»\nрепозиторий? Добавить удаленный репозиторий в отслеживаемые. Например, так:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git remote -v\norigin  git@github.com:username/django_documentation.git (fetch)\norigin  git@github.com:username/django_documentation.git (push)\n\n$ git remote add upstream git@github.com:Alerion/django_documentation.git\n")),"\n",l.createElement(n.p,null,"После добавления ",l.createElement(n.code,null,"upstream")," в отслеживаемые, наберите команду ",l.createElement(n.code,null,"git remote -v"),"\nещё раз, вы должны увидеть произошедшие изменения."),"\n",l.createElement(n.p,null,"Давайте посмотрим как сливать изменения из оригинального репозитория к себе\nв случае, если разработка в нём ушла вперёд пока вы сосредоточенно писали коммиты:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git pull upstream master\nFrom github.com:Alerion/django_documentation\n* branch            master     -> FETCH_HEAD\nUpdating 66f032e..062b294\nFast-forward\ndjbook/commands/authors.py                    | 65 ++--\ndjbook/deps.txt                               |  6 ++--\ndjbook/templates/authors.html                 | 14 ++--\ndjbook/templates/base.html                    |  7 ++--\nlocale/ru/LC_MESSAGES/faq/install.po          | 94 +++-\nlocale/ru/LC_MESSAGES/faq/usage.po            | 49 +---\nlocale/ru/LC_MESSAGES/howto/outputting-csv.po | 61 ++--\nlocale/ru/LC_MESSAGES/topics/cache.po         | 77 ++--\nlocale/ru/LC_MESSAGES/topics/db/multi-db.po   | 80 +++-\n9 files changed, 290 insertions(+), 163 deletions(-)\n")),"\n",l.createElement(n.p,null,"У нас есть основной репозиторий с веткой ",l.createElement(n.code,null,"master")," и недавно добавленный нами\n— с ",l.createElement(n.code,null,"upstream"),". Команда, данная выше, забирает всё новое из ветки ",l.createElement(n.code,null,"upstream"),"\nи сливает изменения в ",l.createElement(n.code,null,"master"),". Так, мы всегда можем получить последние наработки."),"\n",l.createElement(n.p,null,"Вы можете также воспользоваться другой командой — ",l.createElement(n.code,null,"fetch"),"\nвместо указанной ",l.createElement(n.code,null,"pull"),". В таком случае git заберет изменения с\nудаленного репозитория, но не будет пытаться слить их с вашей текущей веткой\nавтоматически."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git fetch upstream\n$ git merge upstream/master\n")),"\n",l.createElement(n.p,null,"Допустим, мы написали, что хотели и сделали коммит. Забираем изменения (но не сливаем их, fetch) из ",l.createElement(n.code,null,"upstream"),".\nЗатем вручную сливаем изменения из удалённой ветки ",l.createElement(n.code,null,"upstream/master")," к себе (merge),\nразрешаем конфликты (если есть) и снова делаем коммит."),"\n",l.createElement(n.p,null,"Если репозиторий огромен, а забирать его весь не хочется, клонируем только нужную ветку:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"# клонировать только ветку real_branch:\n$ git clone -b real_branch --single-branch git@github.com/username/django_documentation.git\n")),"\n",l.createElement(n.h2,{id:"что-такое-ветки",style:{position:"relative"}},l.createElement(n.a,{href:"#%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D0%B2%D0%B5%D1%82%D0%BA%D0%B8","aria-label":"что такое ветки permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Что такое ветки?"),"\n",l.createElement(n.p,null,"Чаще всего ветки (branch — ответвление, ветвь, филиал) бывают\nтематическими. Например, при общей разработке, когда у всех участников\nесть право записи в репозиторий. В этом случае ветки используются для\nотделения изменений, сделанных одним из разработчиков, от общего репозитория.\nВетки могут пригодиться и в случае с созданием pull-request'а."),"\n",l.createElement(n.p,null,"Создание ветки происходит довольно просто. Находясь в каталоге с проектом,\nнаберите следующие команды:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"# отобразить все ветки\n$ git branch -a\n* master\nremotes/origin/1.4\nremotes/origin/HEAD -> origin/master\nremotes/origin/master\nremotes/upstream/1.4\nremotes/upstream/master\n\n# создать новую ветку из master, переключиться на неё\n$ git checkout -b new_branch\n")),"\n",l.createElement(n.p,null,"Новые ветки создаются не только из master, берите любую!"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"# создать новую ветку из удалённой origin/1.4\n$ git checkout -b new_branch origin/1.4\n\n# если ветки нет в отслеживаемых, а отслеживать надо, поможет флаг t (track)\n$ git checkout -t origin/1.4\n")),"\n",l.createElement(n.p,null,"Находясь в только что созданной ветке, вы можете приступить к работе.\nВносите в код свои изменения, а когда закончите просто переключитесь\nобратно к своей основной ветке. Вы можете отправить pull request,\nвыбрав ветку ",l.createElement(n.code,null,"new_branch")," или же прежде слить изменения из неё в\nосновную ветку разработки. Рассмотрим это подробнее:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git checkout master  # вернуться к основной ветке\n$ git merge new_branch # слить изменения из new_branch\n")),"\n",l.createElement(n.p,null,"Если нужно отправить в свой удалённый репозиторий вновь созданную\nветку (не сливать её с master), делаем следующее:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git push master new_branch\n")),"\n",l.createElement(n.p,null,"Не торопитесь сливать изменения. Если что-то не заладилось, созданную\nветку можно удалить:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git branch -d new_branch            # удалить локально\n$ git push master :new_branch         # в удалённом репозитории\n\n# ещё один способ удалить ветку в удалённом репозитории\n$ git push origin --delete new_branch\n")),"\n",l.createElement(n.p,null,"Удалить все локальные ветки, которые были смержены (то есть код которых теперь есть)\nв ветках develop или master:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},'$ git branch --merged | egrep -v "(master|develop)" | xargs git branch -d\n')),"\n",l.createElement(n.h2,{id:"отправляем-изменения",style:{position:"relative"}},l.createElement(n.a,{href:"#%D0%BE%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F","aria-label":"отправляем изменения permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Отправляем изменения"),"\n",l.createElement(n.p,null,"Добрались таки до ответа на поставленный вопрос: что такое pull request,\nзачем оно нужно и как его достичь. Как предложить владельцу репозитория свои изменения?"),"\n",l.createElement(n.p,null,"Для этого зайдите в свой аккаунт, выбирайте репозиторий владельца и ищите\nнебольшую зелёную кнопку (на момент написания поста она была таковой,\nесли даже что-то изменится, думаю, найти её будет несложно)."),"\n",l.createElement(n.p,null,"Перед тем как сделать запрос вы имеете возможность добавить комментарий,\nпросмотреть то, какие файлы будут изменены, какие коммиты добавлены.\nВ верхнем углу окна добавления запроса обратите внимание откуда куда и что\nвы сливаете. Если необходимо слить основные ветки выбор падёт на репозиторий\n",l.createElement(n.code,null,"username:master"),", если отдельную ветку (вспоминаем branch) — так и указывайте её."),"\n",l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 956px; flex:2;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 45.33333333333333%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/f34a7ad2f6b494dcc4830e2b14d1498a/e93cc/change-and-comment.webp 300w,\n/static/f34a7ad2f6b494dcc4830e2b14d1498a/b0544/change-and-comment.webp 600w,\n/static/f34a7ad2f6b494dcc4830e2b14d1498a/dbaa2/change-and-comment.webp 956w"\n              sizes="(max-width: 956px) 100vw, 956px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/f34a7ad2f6b494dcc4830e2b14d1498a/73b64/change-and-comment.jpg 300w,\n/static/f34a7ad2f6b494dcc4830e2b14d1498a/3ad8d/change-and-comment.jpg 600w,\n/static/f34a7ad2f6b494dcc4830e2b14d1498a/609ad/change-and-comment.jpg 956w"\n            sizes="(max-width: 956px) 100vw, 956px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/f34a7ad2f6b494dcc4830e2b14d1498a/609ad/change-and-comment.jpg"\n            alt="request"\n            title="отправка MR"\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",l.createElement(n.p,null,"А дальше... ждать. Пока придёт владелец оригинального репозитория и\nпримет/отклонит ваши изменения."),"\n",l.createElement(n.p,null,"Ну вот, мы его достигли. Просветления то есть :)"),"\n",l.createElement(n.h2,{id:"как-отменить-изменения",style:{position:"relative"}},l.createElement(n.a,{href:"#%D0%BA%D0%B0%D0%BA-%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F","aria-label":"как отменить изменения permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Как отменить изменения"),"\n",l.createElement(n.p,null,"Если что-то пошло совсем не так как хотелось, изменения можно «откатить».\nКогда изменённый файл ещё не проиндексирован, сделать это просто:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git checkout -- myfile\n")),"\n",l.createElement(n.p,null,"Когда нужно вернуть более старое состояние уже проиндексированных файлов и забыть\nо них совсем (помните, что упомянутая здесь операция отменит всю вашу работу\nдо определённого коммита!):"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git log\n$ git reset --hard HEAD~1\n")),"\n",l.createElement(n.p,null,"Cмотрим на какой коммит откатиться. В примере откатываемся назад на 1 коммит.\nДля изменения состояния в этой же ветке удалённого репозитория тоже придётся\nиспользовать грубую силу — флаг ",l.createElement(n.code,null,"force"),":"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git push origin new_branch:new_branch --force\n")),"\n",l.createElement(n.p,null,"Охватить все варианты невозможно, поэтому рекомендуется обратиться к\nдокументации и найти команду ",l.createElement(n.code,null,"git revert")," и ключ ",l.createElement(n.code,null,"--soft"),". Отдельно хочется отметить:\nв git ничего не пропадает бесследно. Если файлы были удалены, их можно восстановить опять."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git checkout 4b9df4bbd -- files\n")),"\n",l.createElement(n.p,null,"Дословно можно понимать эту команду как «из коммита 4b9df4bbd вернуть files».\nЗатем останется только зафиксировать изменения (сделать коммит)."),"\n",l.createElement(n.p,null,"Кстати, git log очень полезная команда, её изучению определённо стоит уделить время.\nНапример, полезно знать, что при помощи флага ",l.createElement(n.code,null,"-S")," мы можем получить список всех\nкоммитов, в которых менялась строка, а соответственно и имя автора коммита."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},'$ git log -S "mystring"\n')),"\n",l.createElement(n.p,null,"Или посмотреть все изменения, которые происходили с отдельным файлом:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git log --follow -p путь_к_файлу\n")),"\n",l.createElement(n.p,null,"Последний пример покажет как стереть историю коммитов (фактически удалить ",l.createElement(n.code,null,".git")," и запушить с флагом ",l.createElement(n.code,null,"--force"),"):"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"$ git clone https://github.com/user/user-repo.git\n$ cd user-repo\n$ rm -rf .git/\n$ git init\n$ git add .\n$ git commit -m 'первый коммит'\n\n$ git remote add origin https://github.com/user/user-repo.git\n$ git push --force origin master\n")),"\n",l.createElement(n.h2,{id:"а-подробнее",style:{position:"relative"}},l.createElement(n.a,{href:"#%D0%B0-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5","aria-label":"а подробнее permalink",className:"anchor before"},l.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"А подробнее?"),"\n",l.createElement(n.p,null,"Ну, что ещё? Применительно к github'у можно отметить факт наличия\nу них ",l.createElement(n.strong,null,"Issues"),". Это такая «примочка», благодаря которой\nможно ставить задачи для проекта, давать им описание и метку, определяющую\nк какому разряду данная задача относится (закрытие бага или написание фичи),\nа ещё назначать ответственного за выполнение определённого ",l.createElement(n.strong,null,"issue"),": всё как у больших."),"\n",l.createElement(n.p,null,"Итогов подводить не стану. Для заинтересованных лиц ссылочка на неофициальную документацию: ",l.createElement(n.a,{href:"http://uleming.github.io/gitbook/index.html",target:"_blank",rel:"nofollow"},"The Git Community Book")))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.MN)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},i=t(7792),m=t(7619);function o(e){var n,t;let{data:{mdx:a},children:c,pageContext:{prev:r,next:s}}=e;const{h1:o,title:u,description:g,image:d,table_of_contents:p}=a.frontmatter;return(0,l.useEffect)((()=>{(0,m.K)()}),[]),l.createElement(l.Fragment,null,l.createElement(i._W,{h1:o,title:u,description:g,image:null===(n=a.frontmatter.image)||void 0===n?void 0:n.publicURL},l.createElement(i.MV,{post:a.frontmatter,imageData:null==d||null===(t=d.childImageSharp)||void 0===t?void 0:t.gatsbyImageData},p?l.createElement(i.G8,{headings:a.tableOfContents}):null,l.createElement("div",{className:"page__content"},c,l.createElement(i.Mf,{prev:r,next:s})),l.createElement(i.QZ,null))))}function u(e){return l.createElement(o,e,l.createElement(s,e))}},8860:function(e,n,t){t.d(n,{y:function(){return a.y}});var a=t(3836)},8876:function(e,n,t){t.d(n,{MN:function(){return c}});var a=t(4424);const l=a.createContext({});function c(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);