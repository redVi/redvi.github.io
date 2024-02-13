"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[1624],{704:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m.Ss},default:function(){return d}});var a=t(8876),c=t(4424),r=t(8652),l=t(3616),o=t(8860);function s(e){const n=Object.assign({p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},(0,a.MN)(),e.components);return c.createElement(c.Fragment,null,c.createElement(n.p,null,"React хорош тем, что позволяет делать композицию чего угодно. И есть не один способ\nдобиться желаемого. Рассмотрим мой любимый: паттерн render-props. Он похож на hoc, но\nдля меня субъективно удобнее и читаемее. Хотя всё, конечно, зависит от конкретной задачи.\nИтак..."),"\n",c.createElement(n.p,null,c.createElement(n.strong,null,"Задача"),": реализовать группы чекбоксов, каждая со своим изолированным состоянием. Стилизация одного чекбокса зависит от состояния другого. Если выделены несколько элементов\nподряд, между ними нужно отрисовать линию, их соединяющую."),"\n",c.createElement(n.p,null,c.createElement(n.strong,null,"Решение"),": создать два компонента. Первым из которых будет сам чекбокс. Вторым — группа чекбоксов. Группа будет знать всё обо всех чекбоксах внутри себя и ничего о чекбоксах соседней группы."),"\n",c.createElement(n.p,null,"Выглядит наша задумка следующим образом:"),"\n",c.createElement(r.E,{src:"/videos/react-render-props-checkboxes.mp4",type:"video/mp4"}),"\n",c.createElement(n.p,null,"Приступим. Возьмём ",c.createElement(n.code,null,"create-react-app")," в качестве каркаса приложения\nи ",c.createElement(n.code,null,"classnames")," для стилизации."),"\n",c.createElement(n.pre,null,c.createElement(n.code,{className:"language-shell"},"$ npx create-react-app form-app\n$ cd form-app\n$ yarn add classnames\n")),"\n",c.createElement(n.p,null,"Структура приложения:"),"\n",c.createElement(n.pre,null,c.createElement(n.code,{className:"language-shell"},"$ tree -L 3\n.\n├── package.json\n├── public\n├── src\n│   ├── App.js\n│   ├── components\n│   │   ├── checkbox\n│   │   │   ├── checkbox.css\n│   │   │   └── checkbox.js\n│   │   ├── checkbox-group\n│   │   │   ├── checkbox-group.css\n│   │   │   └── checkbox-group.js\n│   │   └── index.js\n│   └── index.js\n└── yarn.lock\n")),"\n",c.createElement(n.p,null,"Для удобства импорт всех компонентов можно организовать из одного файла."),"\n",c.createElement(n.pre,null,c.createElement(n.code,{className:"language-jsx"},"// components/index.js\nimport CheckBox from './checkbox/checkbox';\nimport CheckboxGroup from './checkbox-group/checkbox-group';\n\nexport {\n  CheckBox,\n  CheckboxGroup,\n}\n")),"\n",c.createElement(l.k,{headings:["checkbox.js","checkbox-group.js","App.js"]},c.createElement(l.s,null,c.createElement(n.p,null,"Идём от малого к большому. Сначала сам чекбокс."),c.createElement(n.pre,null,c.createElement(n.code,{className:"language-jsx"},"import React, { useState, memo } from 'react';\nimport './checkbox.css';\nconst classNames = require('classnames');\n\nconst CheckBox = props => {\n  const { name, label, isInGroup, isDisabled, handleChange } = props;\n\n  // состояние чекбокса: отмечен или нет\n  // сделаем так, чтобы начальное значение можно было передать извне\n  const [isChecked, setIsChecked] = useState(props.isChecked);\n\n  // изменение состояния\n  // и вызов внешней функции handleChange при необходимости\n  const toggleCheckbox = () => {\n    if (isDisabled) return;\n\n    handleChange({ isChecked: !isChecked, label, name });\n    setIsChecked(!isChecked);\n  };\n\n  // динамическая стилизация\n  // если isInGroup, то добавить класс-модификатор\n  const checkboxClass = classNames({\n    'checkbox': true,\n    'checkbox_inGroup': isInGroup,\n  });\n\n  return (\n    <label className=\"label\">\n      <input\n        type=\"checkbox\"\n        className={checkboxClass}\n        name={name}\n        label={label}\n        checked={!!isChecked}\n        onChange={toggleCheckbox} />\n      {name}\n    </label>\n  );\n};\n\nCheckBox.displayName = 'CheckBox';\n\nexport default memo(CheckBox);\n"))),c.createElement(l.s,null,c.createElement(n.p,null,"Группа чекбоксов. Отдаёт дочерние компоненты через render-props."),c.createElement(n.pre,null,c.createElement(n.code,{className:"language-jsx"},"import React, { useState, memo } from 'react';\nimport './checkbox-group.css';\n\nconst CheckboxGroup = props => {\n  // копируем данные и начинаем их менять как захочется\n  const [data, setData] = useState([...props.data]);\n\n  // отдать всё, что приходит из props\n  // и добавить флаг isChecked, который получим когда сработает метод onChange у чекбокса\n  const toggleCheckboxes = checkbox => {\n    setData([\n      ...data.map(i =>\n        i[props.name] === checkbox.name ? { ...i, isChecked: checkbox.isChecked } : i,\n      ),\n    ]);\n  };\n\n  // render-props!\n  // передать данные и метод toggleCheckboxes чекбоксу\n  return <div className=\"checkbox-group\">{props.render(data, toggleCheckboxes)}</div>;\n};\n\nCheckboxGroup.displayName = 'CheckboxGroup';\n\nexport default memo(CheckboxGroup);\n")),c.createElement(n.p,null,"В примере приведены «плоские» данные. Но будьте осторожны при\nпередаче структур с глубокой вложенностью. Копирование поверхностное (shallow comparison).\nЕсли нужно сделать глубокое — обратитесь к библиотекам, таким как ",c.createElement(n.a,{href:"https://ramdajs.com/docs/#clone",target:"_blank",rel:"nofollow"},"ramda"),"\nи ",c.createElement(n.strong,null,"не используйте")," ",c.createElement(n.code,null,"JSON.parse(JSON.stringify(data)))"),".")),c.createElement(l.s,null,c.createElement(n.p,null,"Осталось импортировать компоненты и передать данные."),c.createElement(n.pre,null,c.createElement(n.code,{className:"language-jsx"},"import React from 'react';\nimport { CheckboxGroup, CheckBox } from './components';\n\nconst apartments = [\n  { id: 'apartment-0', label: 'Гостевые дома' },\n  { id: 'apartment-1', label: 'Отели' },\n  { id: 'apartment-2', label: 'Базы отдыха и турбазы' },\n];\n\nfunction App() {\n  return (\n    <CheckboxGroup\n      data={apartments} // данные\n      // поле, по которому ищем чекбокс в группе (в данном случае по id)\n      name=\"id\"\n      // получаем изолированное состояние и метод из группы чекбоксов\n      render={(data, toggleCheckboxes) => (\n        <React.Fragment>\n          {data.map(({ id, label, isDisabled, isChecked }, index) => (\n            <CheckBox\n              key={id}\n              name={id}\n              label={label}\n              isChecked={isChecked}\n              isInGroup={isChecked && data[index - 1]?.isChecked}\n              isDisabled={isDisabled}\n              handleChange={toggleCheckboxes}\n            />\n          ))}\n        </React.Fragment>\n      )} />\n  );\n}\n\nexport default App;\n")))),"\n",c.createElement(o.y,{heading:"Осторожно",type:"warning"},c.createElement(n.p,null,"Нужно быть аккуратным с render-props:\n ",c.createElement("a",{href:"https://reactjs.org/docs/render-props.html#caveats",rel:"nofollow noopener noreferrer",target:"_blank"},"предостережение"),".")),"\n",c.createElement(n.p,null,"Стилизация не относится к теме render-props'ов и для сокращения кода пропускается."))}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.MN)(),e.components);return n?c.createElement(n,e,c.createElement(s,e)):s(e)},m=t(7792),u=t(7619);function i(e){var n,t;let{data:{mdx:a},children:r,pageContext:{prev:l,next:o}}=e;const{h1:s,title:p,description:i,image:d,table_of_contents:h}=a.frontmatter;return(0,c.useEffect)((()=>{(0,u.K)()}),[]),c.createElement(c.Fragment,null,c.createElement(m._W,{h1:s,title:p,description:i,image:null===(n=a.frontmatter.image)||void 0===n?void 0:n.publicURL},c.createElement(m.MV,{post:a.frontmatter,imageData:null==d||null===(t=d.childImageSharp)||void 0===t?void 0:t.gatsbyImageData},h?c.createElement(m.G8,{headings:a.tableOfContents}):null,c.createElement("div",{className:"page__content"},r,c.createElement(m.Mf,{prev:l,next:o})),c.createElement(m.QZ,null))))}function d(e){return c.createElement(i,e,c.createElement(p,e))}},8860:function(e,n,t){t.d(n,{y:function(){return a.y}});var a=t(3836)},8876:function(e,n,t){t.d(n,{MN:function(){return r}});var a=t(4424);const c=a.createContext({});function r(e){const n=a.useContext(c);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);