# Add to Homescreen call out

Script for mobile devices, it automatically shows an overlaying message encouraging to add the web app to the homescreen. Compatible with iOS9 and Chrome for Android.

## Installation

```javascript
import addToHomescreen from 'add-to-homescreen';

addToHomescreen({
  skipFirstVisit: true,
  maxDisplayCount: 1,
  iosText: 'Hello ios user',
  androidText: 'Hey android user',
  lifespan: 15
});
```

```javascript
// Default config
{
    fontSize: 15, // base font size, used to properly resize the popup based on viewport scale factor
    modal: false, // prevent further actions until the message is closed
    mandatory: false, // you can't proceed if you don't add the app to the homescreen
    autostart: true, // show the message automatically
    skipFirstVisit: false, // show only to returning visitors (ie: skip the first time you visit)
    startDelay: 1, // display the message after that many seconds from page load
    lifespan: 15, // life of the message in seconds
    displayPace: 1440, // minutes before the message is shown again (0: display every time, default 24 hours)
    maxDisplayCount: 0, // absolute maximum number of times the message will be shown to the user (0: no limit)
    icon: true, // add touch icon to the message
    validLocation: [], // list of pages where the message will be shown (array of regexes)
    onInit: null, // executed on instance creation
    onShow: null, // executed when the message is shown
    onRemove: null, // executed when the message is removed
    onAdd: null, // when the application is launched the first time from the homescreen (guesstimate)
    onPrivate: null, // executed if user is in private mode
    privateModeOverride: false, // show the message even in private mode (very rude)
    detectHomescreen: false, // try to detect if the site has been added to the homescreen (false | true | 'hash' | 'queryString' | 'smartURL')
    iosText: '', // text displayed on ios
    androidText: '' // text displayed on android
};
```

## License

Copyright (c) 2014 Matteo Spinelli, http://cubiq.org/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
