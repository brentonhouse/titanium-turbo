
<p align="center">
	<h1>Titanium Turbo <sup><sup><sub><a name="brenton-house" href="#brenton-house">🚀</a></sub></sup></sup></h1>  
  <img src="https://cdn.secure-api.org/images/rocket-launch.gif" width="50%" />
</p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20Titanium%20Turbo%20on%20GitHub!!%20%20Seriously%20fast%20cross-platform%20native%20mobile%20app%20development!&url=https://github.com/brentonhouse/turbo&via=🚀%20Titanium%20Turbo&hashtags=axwaydev)
![GitHub stars](https://img.shields.io/github/stars/brentonhouse/titanium-turbo?style=social)
![GitHub forks](https://img.shields.io/github/forks/brentonhouse/titanium-turbo?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/brentonhouse/titanium-turbo?style=social)
[![@titanium/turbo](https://img.shields.io/npm/v/@titanium/turbo.png)](https://www.npmjs.com/package/@titanium/turbo)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=brentonhouse/titanium-turbo)](https://dependabot.com)
![GitHub PRs](https://img.shields.io/badge/PRs-welcome-blue.svg)
![GitHub license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/brentonhouse/titanium-turbo.svg)](https://github.com/brentonhouse/titanium-turbo/graphs/contributors/)
[![npm](https://img.shields.io/npm/dm/@titanium/turbo.svg)]()


> _**Turbo is not an official Axway product.**  
> `Turbo` is a project managed by [Brenton House](https://brenton.house) using open-source modules, libraries, and tools.  Try it out and [let us know what you think](https://github.com/brentonhouse/titanium-turbo/issues)!_

-----------

* [📓  &nbsp; Description](#--description)
* [🚀  &nbsp; Getting Started](#--getting-started)
	* [Simple Method](#simple-method)
	* [Manual Method](#manual-method)
* [✨  &nbsp; Features](#--features)
* [🎓  Learn More](#-learn-more)
	* [📚  &nbsp;  Related projects](#--related-projects)
		* [🎟️  &nbsp; Modules for Titanium Mobile](#️--modules-for-titanium-mobile)
		* [🎟️  &nbsp; Modules for Node.js and Titanium Mobile](#️--modules-for-nodejs-and-titanium-mobile)
		* [📦  &nbsp; Project Starter Kits](#--project-starter-kits)
* [📣  &nbsp; Feedback](#--feedback)
* [Follow Brenton House](#follow-brenton-house)
* [©️  &nbsp; Legal](#️--legal)

-----------

## 📓  &nbsp; Description

Titanium Turbo is a fork of **`Titanium Alloy`** that adds a lot of enhancements and customizations for rapid development.

> **Starting with `Turbo v2`, version number of Turbo will no longer be tied to versions of Titanium Alloy.**

This version of Titanium Turbo is based on **`Titanium Alloy 1.15.1`**

## 🚀  &nbsp; Getting Started

### Simple Method


<image align="left" src="https://cdn.secure-api.org/images/01_circled_100.png" height="30" width="30" />

Create new Titanium Turbo project

```
npx @geek/mobile app:create my-new-app
```

<image align="left" src="https://cdn.secure-api.org/images/02_circled_100.png" height="30" width="30" />

Build or Run app as you would normally.

-----------

### Manual Method

<image align="left" src="https://cdn.secure-api.org/images/01_circled_100.png" height="30" width="30" />

Create new Titanium Alloy project

<image align="left" src="https://cdn.secure-api.org/images/02_circled_100.png" height="30" width="30" />


Install `Titanium Turbo` in root of project

```
npm install --save-dev @titanium/turbo
```

<image align="left" src="https://cdn.secure-api.org/images/03_circled_100.png" height="30" width="30" />


Install `Titanium Turbo Plugin` in root of project

```
npm install --save-dev @titanium/plugin-turbo
```

<image align="left" src="https://cdn.secure-api.org/images/04_circled_100.png" height="30" width="30" />


Build or Run app as you would normally.

-----------

## ✨  &nbsp; Features

> See `changelog.md` for history of changes

* [x] Supports installing npm packages in root of project for use in mobile  [[TIMOB-26352]](https://jira.appcelerator.org/browse/TIMOB-26352)  [[Alloy PR]](https://github.com/appcelerator/alloy/pull/950) ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Support for the following XML attributes in `textField`, `label`, and `textArea`: [[ALOY-1547]](https://jira.appcelerator.org/browse/ALOY-1547)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
  - fontSize
  - fontFamily
  - fontStyle
  - fontWeight
  - textStyle
* [x] Replaced Underscore.js with Lodash 4.17.12  [[ALOY-1168]](https://jira.appcelerator.org/browse/ALOY-1168)
* [x] Updated babel.js to 7.x  [[ALOY-1629]](https://jira.appcelerator.org/browse/ALOY-1629) ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Enhanced support for babel config files:  `.babelrc`, `.babelrc.js` and `babel.config.js`  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `camelCase`, `snake_case`, and `kabab-case` in XML views.  [[ALOY-1647]](https://jira.appcelerator.org/browse/ALOY-1647)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added plugin property `compileConfig.dir.resourcesAlloy`  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Updated moment to 2.24.0  [[ALOY-1682]](https://jira.appcelerator.org/browse/ALOY-1682)  ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Added backbone 1.4.0  [[ALOY-1648]](https://jira.appcelerator.org/browse/ALOY-1648)  ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Made default backbone version: 1.4.0
* [x] Added support for xml namespaced attributes per platform (e.g. `ios:text` or `android:text`) [[ALOY-1646]](https://jira.appcelerator.org/browse/ALOY-1646)  ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Added support for xml attributes with dotted notation (e.g. `font.fontSize`)  [[ALOY-1363]](https://jira.appcelerator.org/browse/ALOY-1363) ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Added support for using `$.args` in XML views.  [[ALOY-1316]](https://jira.appcelerator.org/browse/ALOY-1316)   ![Has been merged into Alloy](https://img.shields.io/badge/alloy-merged-green.png)
* [x] Added support for using `$.*` in XML views. -- Anything that starts with "$." in an Alloy XML View will be used literally and not treated as a string.  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for using `turbo.*` in XML views. -- Anything that starts with "turbo." in an Alloy XML View will be used literally and not treated as a string.  **[Required workaround for `node_modules` support to LiveView]**  [[TIMOB-27206]](https://jira.appcelerator.org/browse/TIMOB-27206)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `__init()` function in controller that will be called before view is built. -- Allows `$.*` variables to be created and used in XML views.  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `visibility` property in XML Views with possible values of:  `collapse`, `expand`, and `visible`,  `hidden`  -- Allows collapsing of view in XML.  [[TIMOB-27307]](https://jira.appcelerator.org/browse/TIMOB-27307)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added constants: `Ti.UI.VISIBILITY_COLLAPSE`, `Ti.UI.VISIBILITY_EXPAND`, `Ti.UI.VISIBILITY_HIDDEN`, and `Ti.UI.VISIBILITY_VISIBLE`  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `modelName` XML attribute to be used with with `dataCollection` to assign variable name to current model [Defaults to `__currentModel`]  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `dataName` XML attribute to be used with with `dataCollection` to assign variable name to `model.__transform` [Defaults to `$model`] -- Allows developer to reference current model properties like `$model.myproperty` ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for adding code to XML View attributes when surrounded by '~'  [[ALOY-1699]](https://jira.appcelerator.org/browse/ALOY-1699)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `script` element in XML View.  Add code by body or `src` attribute. [[ALOY-1700]](https://jira.appcelerator.org/browse/ALOY-1700)  [[Alloy PR]](https://github.com/appcelerator/alloy/pull/937)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added value alias `center` for `Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER` when used with `verticalAlign` XML attribute [[ALOY-1703]](https://jira.appcelerator.org/browse/ALOY-1703)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added property alias `text` for `Ti.UI.Button.title` when used as XML attribute  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added property alias `src` for `Ti.UI.ImageView.image` when used as XML attribute  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for using underscore (instead of lodash) with this tiapp.xml property:  `<property name="use-underscore"type="bool">true</property>`  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for installing widgets via npm (without naming restrictions) [[ALOY-1704]](https://jira.appcelerator.org/browse/ALOY-1704) ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for using `WPATH()` in xml view attributes: [[ALOY-1253]](https://jira.appcelerator.org/browse/ALOY-1253)  [[Alloy PR]](https://github.com/appcelerator/alloy/pull/948)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for using `~/` as a shortcut for WPATH() in xml view attributes: [[ALOY-1714]](https://jira.appcelerator.org/browse/ALOY-1714) [[Alloy PR]](https://github.com/appcelerator/alloy/pull/951)   ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for using widget as primary control in xml view [[ALOY-1256]](https://jira.appcelerator.org/browse/ALOY-1256) [[Alloy PR]](https://github.com/appcelerator/alloy/pull/949)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for StackLayout control (with shortcut alias of `stack` and orientation property that defaults to `vertical`) in JavaScript and xml views  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for VerticalLayout control (with shortcut alias of `vertical`) in JavaScript and xml views  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for HorizontalLayout control (with shortcut alias of `horizontal`) in JavaScript and xml views  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for AbsoluteLayout control (with shortcut alias of `absolute`) in JavaScript and xml views  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for defining the primary entry point for the application (defaults to `index`).  Currently search order: `Alloy.main` → `Alloy.CFG.main` → Titanium Property: `app.main`. [[ALOY-1549]](https://jira.appcelerator.org/browse/ALOY-1549)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for `<style>` tag in XML views.  Also supports the `src` attribute (like the `<script>` tag) which allows users to reference a widget-wide `app.tss` file! [[ALOY-1729]](https://jira.appcelerator.org/browse/ALOY-1729)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Partial workaround for Titanium and Alloy issue where relative path require statements are broken.  This only fixes static paths.  Fix for dynamic paths will be coming in upcoming release of `Turbo`.  [[TIMOB-28037]](https://jira.appcelerator.org/browse/TIMOB-28037)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 
* [x] Added support for static script blocks in Alloy `<script static="true" />`  [[ALOY-1742]](https://jira.appcelerator.org/browse/ALOY-1742)  ![Exclusive Turbo Feature](https://img.shields.io/badge/turbo-exclusive-blue.png) 



## 🎓  Learn More

⭐  &nbsp; [Axway Developer Blog](https://devblog.axway.com)   
⭐  &nbsp; [Axway Developer YouTube Channel](https://youtube.com/axwaydev)   
⭐  &nbsp; [Axway Developer Portal](https://developer.axway.com)   
⭐  &nbsp; [AMPLIFY Titanium GitHub Repo](https://github.com/appcelerator/titanium_mobile)   
⭐  &nbsp; [Titanium Alloy GitHub Repo](https://github.com/appcelerator/alloy)   
⭐  &nbsp; [Titanium Turbo GitHub Repo](https://github.com/brentonhouse/titanium-turbo)   


### 📚  &nbsp;  Related projects

⭐  &nbsp; [Geek Mobile Toolkit](https://www.npmjs.com/package/@geek/mobile) - Toolkit for creating, building, and managing mobile app projects.   
⭐  &nbsp; [Titanium Mobile](https://www.npmjs.com/package/titanium) - Open-source tool for building powerful, cross-platform native apps with JavaScript.   
⭐  &nbsp; [Titanium Alloy](https://www.npmjs.com/package/alloy) - MVC framework built on top of Titanium Mobile.   
⭐  &nbsp; [Appcelerator](https://www.npmjs.com/package/appcelerator) - Installer for the Appcelerator Platform tool   

#### 🎟️  &nbsp; Modules for Titanium Mobile

⭐  &nbsp; [@titanium/applesignin](https://www.npmjs.com/package/@titanium/applesignin) -Native modules that allows you to use the iOS 13+ Apple Sign In API with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/authentication](https://www.npmjs.com/package/@titanium/authentication) - Titanium native mobile authentication manager   

⭐  &nbsp; [@titanium/authentication-oauth](https://www.npmjs.com/package/@titanium/authentication-oauth) - Titanium native mobile OAuth plugin for authentication manager   

⭐  &nbsp; [@titanium/calendar-picker](https://www.npmjs.com/package/@titanium/calendar-picker) - Turbo widget that allows you to pick dates from a calendar with Axway Titanium.   

⭐  &nbsp; [@titanium/coremotion](https://www.npmjs.com/package/@titanium/coremotion) - Native modules that allows you to use iOS CoreMotion framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/deeply](https://www.npmjs.com/package/@titanium/deeply) - Native modules that allows you to capture Android deep links with Axway Titanium.   

⭐  &nbsp; [@titanium/essentials](https://www.npmjs.com/package/@titanium/essentials) - Essential Toolkit for Titanium Turbo Native Mobile Apps   

⭐  &nbsp; [@titanium/icloud](https://www.npmjs.com/package/@titanium/icloud) - Native module that allows you to use the Apple iCloud framework with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/identity](https://www.npmjs.com/package/@titanium/identity) - Native modules to add Fingerprint/FaceId/keychain access to Titanium native mobile apps   

⭐  &nbsp; [@titanium/facebook](https://www.npmjs.com/package/@titanium/facebook) - Native modules that allows you to use Facebook SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/googlesignin](https://www.npmjs.com/package/@titanium/googlesignin) - Native modules that allows you to use the Google Sign-in SDK with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/lottie](https://www.npmjs.com/package/@titanium/lottie) - Native modules that allows you to use Airbnb Lottie animations with Axway Titanium native mobile apps.   

⭐  &nbsp; [@titanium/observer](https://www.npmjs.com/package/@titanium/observer) - Repackaging of nx-js/observer-util for Titanium Native Mobile   

⭐  &nbsp; [@titanium/permissions](https://www.npmjs.com/package/@titanium/permissions) - Titanium native mobile widget for permission requests   [![@titanium/permissions](https://img.shields.io/npm/v/@titanium/permissions.png)](https://www.npmjs.com/package/@titanium/permissions)    

⭐  &nbsp; [@titanium/please](https://www.npmjs.com/package/@titanium/please) - Titanium native mobile module for politely requesting data  [![@titanium/please](https://img.shields.io/npm/v/@titanium/please.png)](https://www.npmjs.com/package/@titanium/please)     

⭐  &nbsp; [@titanium/polyfill](https://www.npmjs.com/package/@titanium/polyfill) - Titanium native mobile polyfills necessary to use packages that depend on Node.js modules   [![@titanium/polyfill](https://img.shields.io/npm/v/@titanium/polyfill.png)](https://www.npmjs.com/package/@titanium/polyfill)    

⭐  &nbsp; [@titanium/turbo](https://www.npmjs.com/package/@titanium/turbo) - 🚀 Turbo is a version of Titanium Alloy that adds some enhancements and customizations for rapid development. [![@titanium/turbo](https://img.shields.io/npm/v/@titanium/turbo.png)](https://www.npmjs.com/package/@titanium/turbo)    

⭐  &nbsp; [@titanium/updater](https://www.npmjs.com/package/@titanium/updater) - Titanium native mobile widget to check for app updates  [![@titanium/updater](https://img.shields.io/npm/v/@titanium/updater.png)](https://www.npmjs.com/package/@titanium/updater)     

⭐  &nbsp; [@titanium/webdialog](https://www.npmjs.com/package/@titanium/webdialog) - Native modules that allows you to use native SFSafariViewController (iOS) and Chrome Pages (Android) with Axway Titanium native mobile apps.   [![@titanium/webdialog](https://img.shields.io/npm/v/@titanium/webdialog.png)](https://www.npmjs.com/package/@titanium/webdialog) 


#### 🎟️  &nbsp; Modules for Node.js and Titanium Mobile

| project  	|  description 	|  npm	|
|---	|---  |---	|
| [@geek/cache](https://www.npmjs.com/package/@geek/cache)  	| Caching module for Node.js and Axway Titanium  	| [![@geek/cache](https://img.shields.io/npm/v/@geek/cache.png)](https://www.npmjs.com/package/@geek/cache)      |
| [@geek/jsonc](https://www.npmjs.com/package/@geek/cache)  	| JSONC and JSON utilities for JavaScript with Node.js and Axway Titanium.  	| [![@geek/jsonc](https://img.shields.io/npm/v/@geek/jsonc.png)](https://www.npmjs.com/package/@geek/jsonc)      |
|  [@geek/jwt](https://www.npmjs.com/package/@geek/jwt) 	| JWT parser for JavaScript Node.js and Titanium native mobile  |  [![@geek/jwt](https://img.shields.io/npm/v/@geek/jwt.png)](https://www.npmjs.com/package/@geek/jwt)     |
|  [@geek/logger](https://www.npmjs.com/package/@geek/logger) 	| Logging module for Node.js and Axway Titanium  |   [![@geek/logger](https://img.shields.io/npm/v/@geek/logger.png)](https://www.npmjs.com/package/@geek/logger)        |
| [@geek/mobile](https://www.npmjs.com/package/@geek/mobile)  	| Toolkit for creating, building, and managing mobile app projects.  	| [![@geek/mobile](https://img.shields.io/npm/v/@geek/mobile.png)](https://www.npmjs.com/package/@geek/mobile)    	|
|  [@geek/retry](https://www.npmjs.com/package/@geek/retry) 	| Retry JavaScript functions and promises in Node.js and Axway Titanium  |   [![@geek/retry](https://img.shields.io/npm/v/@geek/retry.png)](https://www.npmjs.com/package/@geek/retry)        |


#### 📦  &nbsp; Project Starter Kits

| project  	|  description 	|  npm	|
|---	|---  |---	|
| [Titanium Turbo Template (Default)](https://www.npmjs.com/package/@titanium/template-turbo-default)  	| Template for default Turbo app.  Based on the basic Alloy Template + some extra goodies.  	| [![@titanium/template-turbo-default](https://img.shields.io/npm/v/@titanium/template-turbo-default.png)](https://www.npmjs.com/package/@titanium/template-turbo-default)      |
| [Titanium Turbo Template (Next)](https://www.npmjs.com/package/@titanium/template-turbo-next)  	| Template for Titanium Turbo app (with extras).  Based on the default Turbo Template + some extras.   	| [![@titanium/template-turbo-next](https://img.shields.io/npm/v/@titanium/template-turbo-next.png)](https://www.npmjs.com/package/@titanium/template-turbo-next)      |
| [Titanium Turbo Template (Fully Loaded)](https://www.npmjs.com/package/@titanium/template-turbo-fully-loaded)  	| Template for Titanium Turbo app with all the bells and whistles!  	| [![@titanium/template-turbo-fully-loaded](https://img.shields.io/npm/v/@titanium/template-turbo-fully-loaded.png)](https://www.npmjs.com/package/@titanium/template-turbo-fully-loaded)      |



## 📣  &nbsp; Feedback

Have an idea or a comment?  [Join in the conversation here](https://github.com/brentonhouse/titanium-turbo/issues)! 

-----

## Follow Brenton House 

> Follow [`Brenton House`](https://brenton.house) for the latest on great modules and libraries!

[![Twitter Follow](https://img.shields.io/twitter/follow/brentonhouse?label=Follow%20%40brentonhouse%20on%20twitter&style=social)](https://twitter.com/brentonhouse)
[![LinkedIn Follow](https://img.shields.io/badge/LinkedIn-_Connect_with_%40brentonhouse_-blue?logo=linkedin&style=flat-square)](https://www.linkedin.com/in/brentonhouse/)
![Github Followers](https://img.shields.io/github/followers/brentonhouse?label=Follow%20%40brentonhouse%20on%20GitHub&style=social)

-----

## ©️  &nbsp; Legal

Alloy is developed by Appcelerator and the community and is Copyright © 2012-Present by Appcelerator, Inc. All Rights Reserved.

Alloy is made available under the Apache Public License, version 2. See their license file for more information.

Appcelerator is a registered trademark of Appcelerator, Inc. Titanium is a registered trademark of Appcelerator, Inc. Please see the LEGAL information about using trademarks, privacy policy, terms of usage and other legal information at http://www.appcelerator.com/legal.