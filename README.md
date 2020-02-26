# angular-material-badge

This a fork of [jmouriz's original version](https://github.com/jmouriz/angular-material-badge) of this library with the aim of converting it to an ES6 module and removing the attribute style of using the directive as it makes use of deprecated Mutation Events.

The package now only has one version of the directive, which works in element style and makes use of jmouriz's style files.

## Install

Download the package:

```
npm install ctrlaltcrt/angular-material-badge
```

## Usage

**Note:** *The following section assumes you are using webpack or some other bundler.*

Include the module in your application:

```javascript
import ngMdBadge from 'angular-material-badge';
import ngMdBadgeCss from 'angular-material-badge/angular-material.css';

const application = angular.module('Application', ['ngMdBadge']);
```

Use the md-badge where you wish:

```html
<md-badge>12</md-badge>
```
