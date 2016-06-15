# Ionic 2 Conference Application

This is purely a demo of Ionic 2 with TypeScript. It is still in development.


## Important!
**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic 2 components in a real-world application. Please go through the steps in [CONTRIBUTING.md](https://github.com/driftyco/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
 - [Getting Started](#getting-started)
 - [Contributing](#contributing)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
  - [iPhone 6](#iphone-6)
  - [Nexus 5](#nexus-5)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* Clone this repository.
* Want to use TypeScript? Both the `master` branch and the `typescript` branch now use TypeScript.
* Run `npm install` from the project root.
* Install the ionic CLI (`npm install -g ionic@beta`)
* Run `ionic serve` in a terminal from the project root.
* Profit

**Note:** Is your build slow? Update `npm` to 3.x: `npm install -g npm`.


## Contributing
See [CONTRIBUTING.md](https://github.com/driftyco/ionic-conference-app/blob/master/CONTRIBUTING.md) :tada::+1:


## Use Cases

* Action Sheet - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.ts) ]
* Cards - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/speaker-list/speaker-list.html) ]
* Grid - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/login/login.html) ]
* Menu - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.html) |
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/app.ts) ]
* Modals - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Search bar - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Segments - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Slides - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.html) |
* Sliding Items - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]
* Sticky headers - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.html) ]
* Tabs - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.html) | [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tabs/tabs.ts) ]
* Toggle / switches - [ [template](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule-filter/schedule-filter.html) ]
[code](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/tutorial/tutorial.ts) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/driftyco/ionic-conference-app/blob/master/app/providers/conference-data.ts) | [usage](https://github.com/driftyco/ionic-conference-app/blob/master/app/pages/schedule/schedule.ts) ]


## App Preview

### iPhone 6

<!-- images of iOS app -->
<img src="resources/screenshots/iphone/1.png" alt="Sessions" width="425">
<img src="resources/screenshots/iphone/2.png" alt="Filter Sessions" width="425">
<img src="resources/screenshots/iphone/3.png" alt="Speakers" width="425">
<img src="resources/screenshots/iphone/4.png" alt="Speaker Detail" width="425">
<img src="resources/screenshots/iphone/5.png" alt="Map" width="425">
<img src="resources/screenshots/iphone/6.png" alt="About" width="425">


### Nexus 5

<!-- GIF of MD app -->
<img src="resources/screenshots/nexus/1.png" alt="Sessions" width="425">
<img src="resources/screenshots/nexus/2.png" alt="Filter Sessions" width="425">
<img src="resources/screenshots/nexus/3.png" alt="Speakers" width="425">
<img src="resources/screenshots/nexus/4.png" alt="Speaker Detail" width="425">
<img src="resources/screenshots/nexus/5.png" alt="Map" width="425">
<img src="resources/screenshots/nexus/6.png" alt="About" width="425">


## File Structure of App

```
ionic-conference-app/
├── .github/                           * GitHub files
│   ├── CONTRIBUTING.md                * Documentation on contributing to this repo
│   └── ISSUE_TEMPLATE.md              * Template used to populate issues in this repo
|
├── app/                               * Working directory
│   ├── pages/                         * Contains all of our pages
│   │   ├── about/                     * About tab page
│   │   │    ├── about.html            * AboutPage template
│   │   │    └── about.ts              * AboutPage code
│   │   │    └── about.scss            * AboutPage stylesheet
│   │   │
│   │   ├── account/                   * Account page
│   │   │    ├── account.html          * AccountPage template
│   │   │    └── account.ts            * AccountPage code
│   │   │    └── account.scss          * AccountPage stylesheet
│   │   │
│   │   │── login/                     * Login page
│   │   │    ├── login.html            * LoginPage template
│   │   │    └── login.ts              * LoginPage code
│   │   │    └── login.scss            * LoginPage stylesheet
│   │   │
│   │   │── map/                       * Map tab page
│   │   │    ├── map.html              * MapPage template
│   │   │    └── map.ts                * MapPage code
│   │   │    └── map.scss              * MapPage stylesheet
│   │   │
│   │   │── schedule/                  * Schedule tab page
│   │   │    ├── schedule.html         * SchedulePage template
│   │   │    └── schedule.ts           * SchedulePage code
│   │   │    └── schedule.scss         * SchedulePage stylesheet
│   │   │
│   │   │── schedule-filter/           * Schedule Filter page
│   │   │    ├── schedule-filter.html  * ScheduleFilterPage template
│   │   │    └── schedule-filter.ts    * ScheduleFilterPage code
│   │   │    └── schedule-filter.scss  * ScheduleFilterPage stylesheet
│   │   │
│   │   │── session-detail/            * Session Detail page
│   │   │    ├── session-detail.html   * SessionDetailPage template
│   │   │    └── session-detail.ts     * SessionDetailPage code
│   │   │
│   │   │── signup/                    * Signup page
│   │   │    ├── signup.html           * SignupPage template
│   │   │    └── signup.ts             * SignupPage code
│   │   │
│   │   │── speaker-detail/            * Speaker Detail page
│   │   │    ├── speaker-detail.html   * SpeakerDetailPage template
│   │   │    └── speaker-detail.ts     * SpeakerDetailPage code
│   │   │    └── speaker-detail.scss   * SpeakerDetailPage stylesheet
│   │   │
│   │   │── speaker-list/              * Speakers tab page
│   │   │    ├── speaker-list.html     * SpeakerListPage template
│   │   │    └── speaker-list.ts       * SpeakerListPage code
│   │   │    └── speaker-list.scss     * SpeakerListPage stylesheet
│   │   │
│   │   │── tabs/                      * Tabs page
│   │   │    ├── tabs.html             * TabsPage template
│   │   │    └── tabs.ts               * TabsPage code
│   │   │
│   │   └── tutorial/                  * Tutorial Intro page
│   │        ├── tutorial.html         * TutorialPage template
│   │        └── tutorial.ts           * TutorialPage code
│   │        └── tutorial.scss         * TutorialPage stylesheet
│   │
│   ├── providers/                     * Contains all Injectables
│   │   ├── conference-data.ts         * ConferenceData code
│   │   └── user-data.ts               * UserData code
│   │
│   ├── theme/                         * App theme files
│   │   ├── app.core.scss              * App Shared Sass Imports
│   │   ├── app.ios.scss               * iOS Sass Imports & Variables
│   │   ├── app.md.scss                * Material Design Sass Imports & Variables
│   │   ├── app.variables.scss         * App Shared Sass Variables
│   │   └── app.wp.scss                * Windows Sass Imports & Variables
│   │
│   ├── app.html                       * Application template
│   └── app.ts                         * Main Application configuration
│
├── node_modules/                      * Node dependencies
|
├── platforms/                         * Cordova generated native platform code
|
├── plugins/                           * Cordova native plugins
|
├── resources/                         * Images for splash screens and icons
|
├── typings/                           * Contains type definitions
|
├── www/                               * Folder that is copied over to the platform's www directory
│   │   
│   ├── build/                         * Contains auto-generated compiled content
│   │     ├── css/                     * Compiled CSS
│   │     ├── fonts/                   * Copied Fonts
│   │     ├── js/                      * ES5 compiled JavaScript
│   │     ├── pages/                   * Copied html pages
│   │     └── app.html                 * Copied app entry point
│   │
│   ├── data/                          * Contains data used for the app
│   │     └── data.json                * App data
│   │
│   ├── img/                           * App images
│   │
│   └── index.html                     * Main entry point
|
├── .editorconfig                      * Defines coding styles between editors
├── .gitignore                         * Example git ignore file
├── LICENSE                            * Apache License
├── README.md                          * This file
├── config.xml                         * Cordova configuration file
├── gulpfile.js                        * Contains the build tasks for our app
├── ionic.config.json                  * Ionic configuration file
├── package.json                       * Defines our JavaScript dependencies
├── tsconfig.json                      * Defines the root files and the compiler options
├── tslint.json                        * Defines the rules for the TypeScript linter
└── typings.json                       * Defines the external type definitions
```
