# docs.newcreator.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/18e92cfa-51b7-4013-ad59-65461e7c6762/deploy-status)](https://app.netlify.com/sites/docs-newcreator-org/deploys)
![textlint](https://github.com/newcreator-org/docs.newcreator.org/workflows/textlint/badge.svg)

学習可能なテキストを管理するためのレポジトリです。

Vuepress + Netlify でホスティングされており、Markdownで文章を記述していきます。
文章の校正には textlint + prh を使用しています。


---

## run

```
$ yarn
```

### Vuepress dev

```
$ yarn dev
```

### Vuepress build

```
$ yarn build
```

### textlint

```
$ yarn textlint
```

### textlint & fix

```
$ yarn textlint:fix
```
