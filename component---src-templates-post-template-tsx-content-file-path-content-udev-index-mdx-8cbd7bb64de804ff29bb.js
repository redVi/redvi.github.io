"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[3860],{6744:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.Ss},default:function(){return o}});var l=n(8876),a=n(4424);function r(e){const t=Object.assign({p:"p",pre:"pre",code:"code",h2:"h2",a:"a",span:"span",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em",blockquote:"blockquote"},(0,l.MN)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"На кону тема монтирования файловых систем: локальных и сетевых. В процессе\nрассуждения будут затронуты общие положения, вспомогательные программы (21 век\nна дворе, не ручками же монтировать), ну и, собственно, настройки оных. Сразу\nнадо оговориться, что пост вряд ли будет интересен с практической точки зрения\nлинуксоидам, сидящим под Ubuntu или Fedora. В user-friendly дистрибутивах это\nработает «из коробки». Пользователи gentoo или arch linux вполне могут потратить\nнесколько минут на чтение, чтобы настроить то, что ещё не настроено или\nпоправить то, что работает не так, как хочется."),"\n",a.createElement(t.p,null,"Перво-наперво, хотелось бы, чтобы читатель убедился в наличии dbus (с флагом X\nдля домашнего пользования) и в том, что демон этот запускается при старте\nсистемы. Если это условие не выполняется, установите dbus и добавьте его в\nавтозапуск:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# emerge -apv dbus\n# rc-update add dbus default\n")),"\n",a.createElement(t.h2,{id:"конфигурация-ядра",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D1%8F%D0%B4%D1%80%D0%B0","aria-label":"конфигурация ядра permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Конфигурация ядра"),"\n",a.createElement(t.p,null,"Некоторые из утилит, которые будут настраиваться, потребуют включения в\nядре особенных опций. В частности udisks2 желает, чтобы был включен\nswap-раздел, активирована ",a.createElement(t.code,null,"FUSE")," и ",a.createElement(t.code,null,"USB autosuspend"),"."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"General setup  ---\x3e\n    [*]Support for paging of anonymous memory (swap)\nFile systems\n    <*>FUSE (Filesystem in Userspace) support\n\nDevice Drivers  ---\x3e\n    [*] USB support  ---\x3e\n    <*>Support for Host-side USB\n    [*]USB runtime power management (autosuspend) and wakeup\n\nFile Systems --\x3e\n    Pseudo filesystems  ---\x3e\n        -*- Tmpfs virtual memory file system support (former shm fs)\n        [*]Tmpfs POSIX Access Control Lists\n    Native Language Support --\x3e\n        <*> NLS UTF8\n")),"\n",a.createElement(t.p,null,"Проверить наличие или отсутствие опций можно при помощи команды ",a.createElement(t.code,null,"zcat"),", вот так:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"$ zcat /proc/config.gz | grep что_изволите\n")),"\n",a.createElement(t.p,null,"Убедившись, что нужные опции присутствуют или же собрав ядро с ними, можно приступать к следующему пункту: установке приложений."),"\n",a.createElement(t.h2,{id:"установка-приложений",style:{position:"relative"}},a.createElement(t.a,{href:"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9","aria-label":"установка приложений permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Установка приложений"),"\n",a.createElement(t.p,null,"Прежде всего стоило бы установить ",a.createElement(t.code,null,"udev")," или его аналог ",a.createElement(t.code,null,"eudev")," (только для gentoo). Udev — менеджер устройств для новых версий ядра Linux, являющийся преемником devfs, hotplug и HAL. Его основная задача — обслуживание файлов устройств  в каталоге ",a.createElement(t.code,null,"/dev")," и обработка всех действий, выполняемых в пространстве пользователя при добавлении/отключении внешних устройств, включая загрузку firmware;"),"\n",a.createElement(t.p,null,"Далее ",a.createElement(t.code,null,"fuse"),"  —   позволяет пользователям без привилегий создавать их собственные файловые системы без необходимости переписывать код ядра;"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"udisks2"),"  — D-Bus-интерфейс и соответствующий демон для управления накопителями, как съемными, так и, например, жесткими дисками;"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"curlftpfs"),"  —  позволяет монтировать каталоги с ftp-серверов;"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"sshfs-fuse"),"  —  позволяет управлять файлами с SFTP;"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"util-linux")," — просто в обязательном порядке, утилиты, отвечающие за возможность монтирования в принципе;"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"udevil")," — позволит монтировать каталоги с ftp-серверов при помощи графических приложений. Иными словами: открыли файловый менеджер, вписали адрес сервера, получили список каталогов, которые он содержит."),"\n"),"\n",a.createElement(t.p,null,"Такая возможность поддерживается не всеми файловыми менеджерами."),"\n",a.createElement(t.p,null,"Теперь неплохо было бы сразу рассмотреть возможные опции  монтирования, дабы знать, когда и что именно нам может пригодиться."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"-t"),"  —  указание на тип файловой системы"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"-o"),"  —  указание на специальную опцию монтирования"),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"-a"),"  —  смонтировать все файловые системы, прописанные в ",a.createElement(t.code,null,"/etc/fstab")),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Опция"),a.createElement(t.th,{align:"right"},"Значение"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"defaults"),a.createElement(t.td,{align:"right"},"использование опций монтирования по-умолчанию:rw, suid, dev, exec, auto, nouser, async")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"auto"),a.createElement(t.td,{align:"right"},"автоматически монтировать файловую систему при загрузке")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"noauto"),a.createElement(t.td,{align:"right"},"не монтировать файловую систему автоматически")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"ro"),a.createElement(t.td,{align:"right"},"монтировать только для чтения")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"rw"),a.createElement(t.td,{align:"right"},"монтировать для чтения и записи")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"sw"),a.createElement(t.td,{align:"right"},"монтировать раздел подкачки")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"atime"),a.createElement(t.td,{align:"right"},"изменять параметр «время доступа при обращении к файлам (по умолчанию)»")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"relatime"),a.createElement(t.td,{align:"right"},"изменять параметр «время доступа» только для записи для улучшения производительности")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"noatime"),a.createElement(t.td,{align:"right"},"никогда не изменять «время доступа» для наилучшей производительности")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"sync"),a.createElement(t.td,{align:"right"},"весь ввод-вывод осуществляется синхронно")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"async"),a.createElement(t.td,{align:"right"},"весь ввод-вывод осуществляется асинхронно")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"exec"),a.createElement(t.td,{align:"right"},"система может содержать исполняемые файлы")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"noexec"),a.createElement(t.td,{align:"right"},"запретить исполняемые файлы")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"suid"),a.createElement(t.td,{align:"right"},"разрешить интерпритацию битов SUID и SGID")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"nosuid"),a.createElement(t.td,{align:"right"},"не разрешать интерпретацию битов SUID и SGID")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"user"),a.createElement(t.td,{align:"right"},"разрешить обычному пользователь (не обладающему правами root) монтировать и размонтировать данную файловую систему")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"users"),a.createElement(t.td,{align:"right"},"разрешить каждому пользователю монтировать данную ФС")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"nouser"),a.createElement(t.td,{align:"right"},"монтирование разрешено только пользователю root")))),"\n",a.createElement(t.h2,{id:"немного-примеров",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BD%D0%B5%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D0%BE%D0%B2","aria-label":"немного примеров permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Немного примеров"),"\n",a.createElement(t.p,null,"Монтирование iso-образа (образ диска):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# mkdir /mnt/iso\n# mount -t iso9660 image.iso /mnt/iso\n")),"\n",a.createElement(t.p,null,"В примере сначала был создан каталог для монтирования, затем подмонтирован образ диска с указанием его файловой системы (",a.createElement(t.code,null,"iso9660"),"), именем (",a.createElement(t.code,null,"image.iso"),"), точкой монирования (",a.createElement(t.code,null,"/mnt/iso"),"). Впрочем, сейчас в большинстве случаев файловая система устройства распознаётся автоматически."),"\n",a.createElement(t.p,null,"Если один и тот же накопитель должен быть смонтирован и доступен всегда, можно внести соответствующую запись в ",a.createElement(t.code,null,"/etc/fstab"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'# /etc/fstab\nUUID="339df6e7-91a8-4cf9-a43f-7f7b3db533c6"   /   ext4   defaults   0   1\n/dev/sda1  /mnt/ntfs  ntfs  ro,auto,utf8  0 0\n')),"\n",a.createElement(t.p,null,"Монтировать можно как по UUID, так и с обычным указанием раздела, или даже назначить разделу метку и монтировать по ней.  В первом примере — с UUID — файловая система подмонтирована в корневой раздел, тип файловой системы etx4. Во втором примере подмонтирован раздел с ntfs в режиме только для чтения, с монтированием в каталог ",a.createElement(t.code,null,"/mnt/ntfs")," при загрузке системы, указанием кодировки для корректного отображения имён файлов и каталогов. Но к ntfs мы ещё вернёмся чуть позже."),"\n",a.createElement(t.p,null,"Чтобы узнать UUID раздела используйте команду ",a.createElement(t.code,null,"blkid"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},'# blkid\n/dev/sda1: UUID="C474B30B74B2FEEC" TYPE="ntfs"\n/dev/sda2: UUID="723c0ce1-d6f2-4272-a6fb-0c83b307d5b3" TYPE="ext2"\n/dev/sda3: UUID="1cd73487-d108-46d5-85a1-9e1be4731d08" TYPE="ext4"\n/dev/sda5: UUID="665079e7-1e34-41b5-b66b-93c480bb8c93" TYPE="ext4"\n')),"\n",a.createElement(t.h2,{id:"добавление-пользователя-в-нужную-группу",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B2-%D0%BD%D1%83%D0%B6%D0%BD%D1%83%D1%8E-%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%83","aria-label":"добавление пользователя в нужную группу permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Добавление пользователя в нужную группу"),"\n",a.createElement(t.p,null,"Группы в различных дистрибутивах linux могут отличаться своим наименованием. Если вы не нашли указанную здесь группу, ищите подобную ей. Список всех групп можно увидеть, открыв файл ",a.createElement(t.code,null,"/etc/group"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# cat /etc/group\ndisk:x:6:root,adm\nlp:x:7:lp\nmem:x:8:\nwheel:x:10:root,newbie\nfloppy:x:11:root\naudio:x:18:newbie\ncdrom:x:19:newbie\nvideo:x:27:root,newbie\n")),"\n",a.createElement(t.p,null,"Чтобы добавить пользователя в нужную группу, скомандуйте:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# gpasswd -a <username> <group>\n")),"\n",a.createElement(t.p,null,"где username  —  имя вашего пользователя"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"group"),"  —  наименование группы, в которой должен состоять пользователь"),"\n",a.createElement(t.p,null,"Например:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# gpasswd -a newbie wheel,storage,users\n")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"wheel"),"  —  группа администраторов (ей мы будем давать права на монтирование)"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"storage")," — доступ к съёмным накопителям. Эта группа есть в archlinux, в gentoo таковой не имеется, зато есть группа plugdev."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"users"),"  —  обычный пользователь"),"\n",a.createElement(t.p,null,"Таким образом, можно разрешить монтирование либо пользователям с административными привилегиями, либо только пользователям, входящим в группу storage (директору и бухгалтеру можно, остальным как всегда), либо всем пользователям со стандартным набором прав."),"\n",a.createElement(t.h2,{id:"монтирование-локальных-дисков",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BC%D0%BE%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B4%D0%B8%D1%81%D0%BA%D0%BE%D0%B2","aria-label":"монтирование локальных дисков permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Монтирование локальных дисков"),"\n",a.createElement(t.p,null,"Предположим, что мы не с гор спустились и используем для повседневных задач графический интерфейс — GUI. Открываем файловый менеджер, подключаем съёмное устройство, будь то флешка, внешний жёсткий диск или телефон. Кликаем мышью на указанное устройство, долго-долго томимся в ожидании чуда и — наконец! — получаем ответ: ",a.createElement(t.code,null,"Not authorized"),". После чего приходит понимание, что комфорт нам только снится. Что делать? У нас есть несколько путей."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"/etc/fstab")),"\n",a.createElement(t.p,null,"Классика жанра: монтирование разделов посредством правки ",a.createElement(t.code,null,"/etc/fstab"),". Пример:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"/dev/cdrom    /mnt/cdrom      iso9660  noauto,user,mode=0444   0 0\n/dev/sdb1     /mnt/usbflash   vfat     fmask=113,noauto,user,utf8=1\n")),"\n",a.createElement(t.p,null,"В данном примере предполагается использование файловой системы ",a.createElement(t.code,null,"iso9669")," для дисковода, ",a.createElement(t.code,null,"vfat")," (FAT32) для съёмного накопителя. Команду и опции монтирования в случае с файловым менеджером spacefm можно легко настроить."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Правила монтирования")),"\n",a.createElement(t.p,null,"Ниже приводится два независимых правила, использование которых по прямому назначению должно быть разграничено. То есть либо первое правило, либо второе. Первый пример отлично работает у вашей покорной слуги: монтирует внешние накопители, логические диски и корректно опознает когда к нему подключен телефон (что само собой разумеется, ибо подключение также производится в режиме внешнего накопителя).\nИтак, раз и навсегда настроим права для монтирования, написав правило для ",a.createElement(t.code,null,"polkit"),"."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},'# /etc/polkit-1/rules.d/10-udisks2.rules\n\npolkit.addRule(function(action, subject) {\n    if ((action.id == "org.freedesktop.udisks2.filesystem-mount-system" ||\n        action.id == "org.freedesktop.udisks2.filesystem-mount") && subject.isInGroup("wheel")) {\n        return polkit.Result.YES;\n    }\n});\n\npolkit.addRule(function(action, subject) {\n    if ((action.id == "org.freedesktop.udisks.filesystem-mount" ||\n\n    action.id == "org.freedesktop.udisks.filesystem-mount-system-internal")\n    && subject.isInGroup("wheel")) {\n        return polkit.Result.YES;\n    }\n});\n')),"\n",a.createElement(t.p,null,"Данное выше, вполне себе рабочее правило, по утверждению линуксоида-старожила ",a.createElement(t.code,null,"@zagrei")," должно быть заменено на иное. За работу последнего не ручаюсь, но, доверяя товарищу по ОС, который дурного не посоветует, привожу здесь. Выглядит оно куда более изящно (надо полагать ввиду отсутствия xml):"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"# /etc/polkit-1/localauthority/50-local.d/10-local-udisks.pkla\n\n[Mount Permissions for users]\nIdentity=unix-group:users\nAction=org.freedesktop.udisks.filesystem-mount\nResultAny=auth_self\n\n[Eject Permissions for users]\nIdentity=unix-group:users\nAction=org.freedesktop.udisks.drive-eject\nResultAny=auth_self\n")),"\n",a.createElement(t.p,null,"Если вопреки ожиданиям не всё пошло гладко и монтирование требует прав рута,\nможно пойти на изменение политики udisks. Для этого нужно внести некоторые\nизменения в указанном ниже файле:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-xml"},'# /usr/share/polkit-1/actions/org.freedesktop.udisks2.policy\n# заменить строку auth_admin на yes в <allow_any>\n<action id="org.freedesktop.udisks2.filesystem-mount">\n...\n<allow_any>yes</allow_any>\n...\n</action>\n')),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"UAM+PMOUNT")),"\n",a.createElement(t.p,null,"Другой способ заключается в использовании ",a.createElement(t.code,null,"uam")," + ",a.createElement(t.code,null,"pmount"),". Желающие пойти по этому пути должны установить указанные пакеты и добавить пользователя в соответствующую группу:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# emerge -av uam\n# gpasswd -a newbie plugdev\n# emerge -av pmount\n")),"\n",a.createElement(t.p,null,"Дабы корректно отображалась кириллица при монтировании NTFS-разделов, нужно немного видоизменить настройки в файле ",a.createElement(t.code,null,"/etc/udev/uam.conf"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"MOUNT_OPTS='noatime,utf8'\n")),"\n",a.createElement(t.h2,{id:"монтирование-сетевых-дисков",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BC%D0%BE%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B5%D1%82%D0%B5%D0%B2%D1%8B%D1%85-%D0%B4%D0%B8%D1%81%D0%BA%D0%BE%D0%B2","aria-label":"монтирование сетевых дисков permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Монтирование сетевых дисков"),"\n",a.createElement(t.p,null,"Для монтирования каталогов с ftp-сервера потребуется установить уже упомянутую curlftpfs, после чего монтирование в консоли сводится к нехитрым телодвижениям:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"$ curlftpfs ftp://mirror.yandex.ru/gentoo-distfiles/ public_html\n")),"\n",a.createElement(t.p,null,"где public_html — каталог в домашней директории пользователя, а по совместительству точка монтирования"),"\n",a.createElement(t.p,null,"Отмонтировать:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"$ fusermount -u public_html\n")),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1060px; flex:3;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 34%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/64c031e36ce318a5894f300147e9f746/e93cc/curlftp.webp 300w,\n/static/64c031e36ce318a5894f300147e9f746/b0544/curlftp.webp 600w,\n/static/64c031e36ce318a5894f300147e9f746/3c9b2/curlftp.webp 1060w"\n              sizes="(max-width: 1060px) 100vw, 1060px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/64c031e36ce318a5894f300147e9f746/eed55/curlftp.png 300w,\n/static/64c031e36ce318a5894f300147e9f746/7491f/curlftp.png 600w,\n/static/64c031e36ce318a5894f300147e9f746/a48d4/curlftp.png 1060w"\n            sizes="(max-width: 1060px) 100vw, 1060px"\n            type="image/png"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/64c031e36ce318a5894f300147e9f746/a48d4/curlftp.png"\n            alt="curlftp"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",a.createElement(t.p,null,"Для монтирования каталогов удалённого хоста через SSH:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# sshfs [user@]host:[dir] mountpoint\n")),"\n",a.createElement(t.p,null,"Чтобы смонтировать от непривилегированного пользователя:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# sshfs [user@]host:[dir] mountpoint -o allow_other\n")),"\n",a.createElement(t.p,null,"Разумеется, мы и файловый менеджер можем научить монтировать удалённые каталоги. Хотя по сравнению с консолью быстротой своих действий он похвастаться не сможет. Напоминается, что для этого нужен установленный ",a.createElement(t.code,null,"udevil"),", настройки которого мы и пойдём править в ",a.createElement(t.code,null,"/etc/udevil/udevil.conf"),". Перед правкой рекомендуется сохранить данный файл с другим именем на случай, если что-то пойдёт не так, как нами запланировано. Сделаем это:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# cp /etc/udevil/udevil.conf /etc/udevil/udevil-newbie.conf\n# vim /etc/udev/udevil.conf:\nallowed_types = curlftpfs, ftpfs  # разрешённые файловые системы\nallowed_media_dirs = /media, /run/media/$USER # куда монтировать\nallowed_users = *                 # разрешение для отдельных пользователей - нет\nallowed_groups = *                # разрешение на монтирование для отдельных групп — нет\n")),"\n",a.createElement(t.p,null,"В такой конфигурации пользователь должен быть добавлен в группу ",a.createElement(t.code,null,"storage")," или ",a.createElement(t.code,null,"plugdev"),". При необходимости можно указать любую из возможных файловых систем: cifs, smbfs, nfs, curlftpfs, ftpfs, sshfs, tmpfs, ramfs."),"\n",a.createElement(t.h2,{id:"что-делать-с-ntfs",style:{position:"relative"}},a.createElement(t.a,{href:"#%D1%87%D1%82%D0%BE-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81-ntfs","aria-label":"что делать с ntfs permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Что делать с NTFS?"),"\n",a.createElement(t.p,null,"Здесь есть два варианта: включить поддержку ntfs в ядре или поставить пакет ",a.createElement(t.code,null,"ntfs3g"),". Для первого случая конфигурация будет такой:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"File Systems ---\x3e\n    DOS/FAT/NT Filesystems  ---\x3e\n    <M> MSDOS fs support\n    <M> VFAT (Windows-95) fs support\n    <M> NTFS file system support\n")),"\n",a.createElement(t.p,null,"Во втором (рекомендуемом) случае достаточно поставить указанный выше пакет и дать пользователю права на монтирование. Если есть надобность, смонтировать вручную:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# mkdir /mnt/hdd\n# mount -t ntfs /dev/sda1 /mnt/hdd\n")),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Примечание:")," flash-накопители, используемые для хранения данных, можно отформатировать в exFAT. Windows, начиная с Win Seven, будет понимать и радостно принимать проприетарную файловую систему от разработчиков из Редмонда. Для корректной работы в UNIX-системах следует установить пакет ",a.createElement(t.code,null,"fuse-exfat"),". ФС будет доступна как для чтения, так и для записи."),"\n",a.createElement(t.p,null,"Для разделов, отформатированных в FAT32 указать тип ",a.createElement(t.code,null,"vfat"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# mount -t vfat /dev/sda1 /mnt/hdd\n")),"\n",a.createElement(t.p,null,"Для MS-DOS аналогично:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# mount -t msdos /dev/sda1 /mnt/hdd\n")),"\n",a.createElement(t.p,null,"Если в ",a.createElement(t.code,null,"rules.d")," заданы права на монтирование, можно будет открывать и диски с\nntfs в файловом менеджере."),"\n",a.createElement(t.h2,{id:"монтирование-android-устройств",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BC%D0%BE%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-android-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2","aria-label":"монтирование android устройств permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Монтирование android-устройств"),"\n",a.createElement(t.p,null,"А здесь нам умудрились, как бы это помягче выразиться, подпортить\nпогоду. Цитирую причину:"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"Начиная с третьей ветки в платформе Android изменился метод организации\nвнешнего доступа к накопителю мобильного устройства. Если раньше устройство\nмаскировалось под USB-накопитель, который воспринимался внешними системами\nкак обычный USB Flash, то начиная с выпуска Android 3 для доступа к данным\nпредлагается использовать разработанный компанией Microsoft протокол MTP."),"\n"),"\n",a.createElement(t.p,null,"Бинарный блоб, да ещё от Microsoft, есть безусловное зло. Но сегодня не об\nэтом. Давайте решим проблему установкой ",a.createElement(t.strong,null,"jmtpfs"),"."),"\n",a.createElement(t.p,null,a.createElement(t.em,null,"Коротко об установке.")," В случае с gentoo нужная утилита на момент написания поста\nрасполагается в стороннем оверлее ",a.createElement(t.code,null,"poly-c"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"# layman --add poly-c\n# eix-update\n# emerge -av jmtpfs\n")),"\n",a.createElement(t.p,null,"После инсталляции оной следует удостовериться, что пользователь добавлен в группу\n",a.createElement(t.code,null,"plugdev")," и расскомментировать одну строку в ",a.createElement(t.code,null,"/etc/fuse.conf"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"# /etc/fuse.conf\nuser_allow_other\n")),"\n",a.createElement(t.p,null,"Отлично. Теперь приступим к монтированию. Создадим каталог для монтирования,\nсмонтируем и размонтируем устройство, введя соответствующие команды:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"$ mkdir ~/android\n$ jmtpfs -o allow_other ~/android\n$ fusermount -u ~/android\n")),"\n",a.createElement(t.p,null,"Что же, теперь брат меньший (android-устройство) может взаимодействовать с\nбратом большим (linux)."),"\n",a.createElement(t.h2,{id:"литература-для-любопытных",style:{position:"relative"}},a.createElement(t.a,{href:"#%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BB%D1%8E%D0%B1%D0%BE%D0%BF%D1%8B%D1%82%D0%BD%D1%8B%D1%85","aria-label":"литература для любопытных permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Литература для любопытных"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"http://www.freedesktop.org/software/polkit/docs/latest/index.html",target:"_blank",rel:"nofollow"},"polkit Reference Manual")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"http://udisks.freedesktop.org/docs/latest/",target:"_blank",rel:"nofollow"},"UDisks Reference Manual")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"http://igurublog.wordpress.com/downloads/script-devmon/",target:"_blank",rel:"nofollow"},"devmon")),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.MN)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},s=n(7792),m=n(7619);function u(e){var t,n;let{data:{mdx:l},children:r,pageContext:{prev:c,next:u}}=e;const{h1:o,title:i,description:d,image:E,table_of_contents:p}=l.frontmatter;return(0,a.useEffect)((()=>{(0,m.K)()}),[]),a.createElement(a.Fragment,null,a.createElement(s._W,{h1:o,title:i,description:d,image:null===(t=l.frontmatter.image)||void 0===t?void 0:t.publicURL},a.createElement(s.MV,{post:l.frontmatter,imageData:null==E||null===(n=E.childImageSharp)||void 0===n?void 0:n.gatsbyImageData},p?a.createElement(s.G8,{headings:l.tableOfContents}):null,a.createElement("div",{className:"page__content"},r,a.createElement(s.Mf,{prev:c,next:u})),a.createElement(s.QZ,null))))}function o(e){return a.createElement(u,e,a.createElement(c,e))}},8876:function(e,t,n){n.d(t,{MN:function(){return r}});var l=n(4424);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);