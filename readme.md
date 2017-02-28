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
        'You can utilize a shorter word.',
        'Be advised, don’t do this.',
        'That’s the appropriate thing to do.'
    ].join('\n'), function (err, file) {
        console.log(report(file));
    });
```

Yields:

```txt
   1:9-1:16  warning  Replace “utilize” with “use”                                utilize
   2:1-2:11  warning  Remove “Be advised”                                         be-advised
  3:12-3:23  warning  Replace “appropriate” with “proper”, “right”, or remove it  appropriate

⚠ 3 warnings
```

## API

### `retext().use(wordusage[, options])`

Word usage advice pertinent to technical writing.

###### `options`

*   `ignore` (`Array.<string>`) — phrases _not_ to warn about.

## License

[MIT][license] © [Gaurav Nelson][author]

