# retext-wordusage

Word usage advice pertinent to technical writing with [**retext**][retext].

## Installation

[npm][]:

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
        'A number of reasons are there.'
    ].join('\n'), function (err, file) {
        console.log(report(file));
    });
```

Yields:

```txt
  1:19-1:24  warning  “Do not use to indicate a relative location in a document, as in -the above restrictions.” Replace with “previous”, “preceding”  above                     retext-wordusage
   2:1-2:25  warning  Replace “Addressees are requested” with “please”, or remove it                                                                   addressees-are-requested  retext-wordusage
   3:1-3:12  warning  “custom text you want to show” Replace with “many”, “some”                                                                       a-number-of               retext-wordusage

⚠ 3 warnings
```

## API

### `retext().use(wordusage[, options])`

Word usage advice pertinent to technical writing.

###### `options`

*   `ignore` (`Array.<string>`) — phrases _not_ to warn about.

## License

[MIT][license] © [Gaurav Nelson][author]

