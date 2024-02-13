"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[8928],{4612:function(e,n,t){t.r(n),t.d(n,{Head:function(){return d.Ss},default:function(){return o}});var a=t(8876),c=t(4424);function l(e){const n=Object.assign({p:"p",span:"span",pre:"pre",code:"code",ul:"ul",li:"li"},(0,a.MN)(),e.components);return c.createElement(c.Fragment,null,c.createElement(n.p,null,"Как насчёт отладки приложений Android на реальном устройстве по WI-FI? Для настройки таки понадобится\nподключиться по usb-шнуру — сделайте это. Дальше в настройках, вкладка «Парамерты разработчика»\nвключите возможность отладки по WI-FI."),"\n",c.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 720px; flex:1;"\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 116.66666666666667%; position: relative; bottom: 0; left: 0; display: block;"\n  ></span>\n  <picture>\n          <source\n              srcset="/static/4d3cf3d279e5c91541229ab5f114493b/e93cc/android_wifi_debug.webp 300w,\n/static/4d3cf3d279e5c91541229ab5f114493b/b0544/android_wifi_debug.webp 600w,\n/static/4d3cf3d279e5c91541229ab5f114493b/fb07f/android_wifi_debug.webp 720w"\n              sizes="(max-width: 720px) 100vw, 720px"\n              type="image/webp"\n            />\n          <source\n            srcset="/static/4d3cf3d279e5c91541229ab5f114493b/73b64/android_wifi_debug.jpg 300w,\n/static/4d3cf3d279e5c91541229ab5f114493b/3ad8d/android_wifi_debug.jpg 600w,\n/static/4d3cf3d279e5c91541229ab5f114493b/c0c3d/android_wifi_debug.jpg 720w"\n            sizes="(max-width: 720px) 100vw, 720px"\n            type="image/jpeg"\n          />\n          <img\n            class="gatsby-resp-image-image"\n            src="/static/4d3cf3d279e5c91541229ab5f114493b/c0c3d/android_wifi_debug.jpg"\n            alt="&quot;Android Debug&quot;"\n            title=""\n            loading="lazy"\n            decoding="async"\n            style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n          />\n        </picture>\n    </span>'}}),"\n",c.createElement(n.p,null,"Добавьте в командной строке немного магии."),"\n",c.createElement(n.pre,null,c.createElement(n.code,{className:"language-shell"},"$ adb devices # список устройств при подключении по usb-кабелю\nList of devices attached\nRZ8R60Z006X\tdevice\n\n$ adb tcpip 5555\nrestarting in TCP mode port: 5555\n\n$ adb shell ip -f inet addr show wlan0\nwlan0: <BROADCAST,MULTICAST,UP,LOWER_UP>\n    inet 192.168.0.102/24 brd 192.168.0.255\n\n$ adb connect 192.168.0.102:5555\nconnected to 192.168.0.102:5555\n\n$ adb devices # теперь видны два устройства\nList of devices attached\nRZ8R60Z006X\tdevice\n192.168.0.102:5555\tdevice\n\n$ adb disconnect\n")),"\n",c.createElement(n.p,null,"Значение команд:"),"\n",c.createElement(n.ul,null,"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb devices"),": просмотреть подключенные устройства"),"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb tcpip 5555"),": перейти из режима usb в tcp"),"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb shell ip"),": посмотреть адрес сети"),"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb connect"),": установить соединение"),"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb disconnect"),": прервать соединение"),"\n",c.createElement(n.li,null,c.createElement(n.code,null,"adb usb"),": вернуться в режим подключения по usb"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.MN)(),e.components);return n?c.createElement(n,e,c.createElement(l,e)):l(e)},d=t(7792),r=t(7619);function s(e){var n,t;let{data:{mdx:a},children:l,pageContext:{prev:i,next:s}}=e;const{h1:o,title:u,description:p,image:b,table_of_contents:m}=a.frontmatter;return(0,c.useEffect)((()=>{(0,r.K)()}),[]),c.createElement(c.Fragment,null,c.createElement(d._W,{h1:o,title:u,description:p,image:null===(n=a.frontmatter.image)||void 0===n?void 0:n.publicURL},c.createElement(d.MV,{post:a.frontmatter,imageData:null==b||null===(t=b.childImageSharp)||void 0===t?void 0:t.gatsbyImageData},m?c.createElement(d.G8,{headings:a.tableOfContents}):null,c.createElement("div",{className:"page__content"},l,c.createElement(d.Mf,{prev:i,next:s})),c.createElement(d.QZ,null))))}function o(e){return c.createElement(s,e,c.createElement(i,e))}},8876:function(e,n,t){t.d(n,{MN:function(){return l}});var a=t(4424);const c=a.createContext({});function l(e){const n=a.useContext(c);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);