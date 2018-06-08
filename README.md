# Hazy

> tools(vue + electron)

## Install

* @vue/cli

```bash
# yarn global add @vue/cli
# or
npm i -g @vue/cli

vue create hazy

cd hazy

# install all pack
yarn
# yarn serve [--open]
yarn dev
```

* template

```bash
yarn add pug pug-plain-loader --dev
```

* Production dependencies

```bash
yarn add axios vue-axios vue-class-component vue-property-decorator
```

* UI

```bash
yarn add vuetify material-design-icons-iconfont
```

* Electron

```bash
npm i electron --save-dev
yarn add electron-builder --dev
```

* Helper package

```bash
yarn add concurrently cross-env shx --dev
```

## pack

```bash
builder -mwl
builder --platform=all
electron-builder -mwl
electron-builder --platform=all
```

## TODO

* [ ] Google Translate
* [ ] LaTeX
* [ ] Calculator