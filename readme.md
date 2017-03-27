# retext-wordusage

Word usage advice pertinent to technical writing with Retext

## Installation

npm:

```bash
npm install retext-wordusage
```

## Usage

```js
var retext = require('retext');
var wordusage = require('retext-wordusage');
var report = require('vfile-reporter');

retext()
    .use(wordusage)
    .process([
        'Read the sentence above.',
        'Addressees are requested to be on time.',
        'A number of reasons are there.',
        'this is about it. active word usage.'
    ].join('\n'), function (err, file) {
        console.log(report(file));
    });
```

Yields:

```txt
  1:19-1:24  warning  “Do not use to indicate a relative location in a document, as in -the above restrictions.” Replace with “previous”, “preceding”.  above                     retext-wordusage
   2:1-2:25  warning  Replace Addressees are requested with “please”.                                                                                   addressees-are-requested  retext-wordusage
   3:1-3:12  warning  “custom text you want to show” Replace with “many”, “some”.                                                                       a-number-of               retext-wordusage
   4:9-4:14  warning  “Do not use to mean - approximately”                                                                                              about                     retext-wordusage
  4:19-4:25  warning  “Do not use to describe an interface control that is available. Use available. ”                                                  active                    retext-wordusage

⚠ 5 warnings

```

## API

### `retext().use(wordusage[, options])`

Word usage advice pertinent to technical writing.

###### `options`

*   `ignore` (`Array.<string>`) — phrases _not_ to warn about.

