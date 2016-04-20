bb
==

Simple clock to play Blood Bowl

Download `.apk`
---------------

https://build.phonegap.com/apps/2030026/download/android

Application Structure
---------------------

<https://github.com/phonegap-build/docs-en/blob/master/introduction/getting_started.md#how-do-i-structure-my-application>

  > PhoneGap Build's only requirement for your application structure is that the
  `config.xml` and `index.html` is in the top level of your application. Other
  than that you can structure your application as dictated by your workflows.

  > As your application may contain files or directories not required in your
  application (unused splash screens, bower packages, grunt artifacts,
  un-compiled less files etc.) we support a special file called `.pgbomit.`

### Testing

To be able to test the app in the browser 2 root files are needed

  * `/index.html` (required by Phohegap Build)
  * `/test.html`  (used in the browser)

To test the application launch the development server

    npm start

Then open `test.html` from the browser

    localhost:3000/test.html

### 3rd party Dependencies

Dependencies are managed with `bower`. Again, use `npm` to upgrade the project

    npm run setup    # first time install
    npm run upgrade  # further updates

This will install development dependencies from **npm** and client dependencies
from **bower**

`bower_components/` and `node_modules/` are ignored by **git**, so
**Phonegap Build** cannot access to its contents

`npm run upgrade` downloads newer versions and inmediately runs a command to
copy required dependencies to `/vendor` directory which is tracked by **git**
