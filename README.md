# DryKISS: IndustryUI

This is [DryKISS's](https://drykiss.com) react design system. It contains all of our components used
throughout our NextJS projects.

It enables us to rapidly prototype any type of site at any scale.

![](https://github.com/DryKISS/industryui.com/workflows/Lint%20IndustryUI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Setup

```bash
$ yarn install
$ yarn start
```

To develop locally we run yarn link at the root of industryUI, and the second command in the project
where we wish to use it.

```bash
$ yarn link
$ yarn link industry-ui
```

Currently we have to remove the node_modules directory from IndustryUI when running the parent
project to avoid double React loading and hooks issues.

## Creators

DryKISS

> <https://drykiss.com> > <https://github.com/drykiss>

## Copyright and license

Code and documentation copyright 2013-2019 the [IndustryUI Authors](https://github.com/DryKISS/industryui.com/graphs/contributors) and [DryKISS, Ltd.](https://industryui.com) Code released under the [MIT License](https://github.com/DryKISS/industryui.com/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
