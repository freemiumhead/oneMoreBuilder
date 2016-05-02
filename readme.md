# OneMoreBuilder
##### Еще один сборщик.
_________________

## Что может этот сборщик?
1. Компилировать jade
2. Компилировать и минифицировать stylus
3. Собирать, проверять и сжимать js
4. Собирать svg спрайт
5. Поднимать сервер, запускать таски при изменении файлов, перезагружать страницу - как любой нормальный таск-ранер

## Особенности
Для него предусмотрена следующая БЭМ структура:

<pre>
src
	blocks
		block1
			block1.img
			block1.jade
			block1.jpg
			block1.js
			block1.styl
			block1.svg
			svg-block1.svg
		block2
			block2.img
			block2.jade
			block2.jpg
			block2.js
			block2.styl
			block2.svg
			svg-block2.svg
		template
			template.jade
			template.js
			template.styl
			...
		...
	fonts
		...
	layouts
		contacts.jade
		index.jade
		jsCustom.js
		jsVendor.js
		style.styl
		...
</pre>

## Таски

### Сборка картинок
сборщик следит за всеми файлами с разрешениями *.jpg, *.png, *.svg (кроме svg-*.svg, которые используюся для спрайтизации) в директории blocks на любой глубине. он их жмет и кладет в директорию build/img/

### Сборка jade
сборщик обрабатывает только *.jade файлы в директории layouts, но следит (watch) за всеми *.jade файлами. он их компилит и кладет в корень директории build.

#### Нюансы:
Для удобства использования svg спрайта предусмотрен миксин, находится в src/blocks/template/svg-sprite.jade (по умолчанию уже подключен в шаблоне).
стоит помнить, что после компиляции расположение директорий (относительно директорий до компиляции) изменится, так что пути к картинкам надо указывать с добавлением 'img/' в начале. в дальнейшем постараюсь что-нибудь с этим придумать, не хочется в каждом блоке еще дополнительно директории img делать.

### Сборка js
сборщик следит за всеми *.js файлами, но обрабатывает только jsCustom.js и jsVendor.js. их он пропускает через риггер (который инклюдит по указанным в файлах адресам, больше инфо в гугле по gulp-rigger), проверяет код на наличие ошибок (только custom), конкатенирует, именует как main.js, минифицирует если в файле путей isDev равна false, кладет в build/js.

### Сборка stylus
Сборщик следит за всеми *.styl файлами, но обрабатывает только style.styl в  src/layouts/ (то есть все надо в него импортить, можно даже *.css файлы). метамарфозы:
- если isDev, то инициализирует карты;
- импортит все и компилит;
дальше идут postCSS плагины
- пишет фонтфейсы для используемых шрифтов (подробнее postcss-font-magician);
- ищет сокращения и заменяет (подробнее postcss-short);
- если используются флексбоксы, то дописывает правила, исправляющие известные баги;
- автопрефиксерирует;
- расчесывает;
- проверяет, не используются ли неподдерживаемые свойства (согласно настройкам);
- если isDev, то записывает карты, если !isDev - минифицирует.
и кладет в build/css/

#### Нюансы:
Для удобного втыкания картинок предусмотрен миксин, который при использовании background-image добавляет в начало адреса 'img/'.
находится в src/blocks/template/mixins

### Сборка свг спрайта
сборщик следит за всеми svg-*.svg файлами в директории src/blocks на любой глубине, собирает в спрайт, именует svg-sprite.svg и кладет в build/img.
для подключения спрайта рекомендую использовать скрипт src/blocks/template/svgCash.js, но никто не заставляет, можешь подключать как хочешь :)

### Очиска
Таск для очистки удаляет все файлы в директории build не читая.

### build
таск на сборку
последовательно запускает:
- очистку;
- сборку свг спрайта;
- параллельно сборки картинок, jade, js, stylus, свг спрайта.

### watch
таск слежения
следит за файлами и при изменении запускает соответствующий таск.

### server
таск сервера
поднимает сервер, открывает в браузере сайт (то, что получается после компиляции), следит за изменениями файлов в директории build, если регистрирует изменения, то старается применить их без перезагрузки страницы. если не перезагружать не получается, то, соответственно, перезагружает.

### default
дефолтный таск
запускает таск сборки, после чего запускает параллельно сервер и вотчер.

### config.js
файл с настройками путей и переменной isDev. в дальнейшем перенесу сюда все настройки всех плагинов
