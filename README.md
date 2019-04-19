# React Avataaars

Inspired by [React component for Avataaars](https://github.com/fangpenlin/avataaars).

## Installation

First install the package with npm

```sh
$ npm install react-avataaars --save
```

Or Yarn

```sh
$ yarn add react-avataaars
```

## Usage

### Use it with Typescript

```ts
import React, { PureComponent } from 'react';
import { Avatar, Options } from 'react-avataaars';

class App extends PureComponent {
  render() {
    const hash: string = 'random-string';
    const options: Options = {
      clothes: 'sweater',
      eyebrow: 'angry',
      style: 'circle',
    };

    return (
      <div className="App">
        <Avatar options={options} hash={hash} />
      </div>
    );
  }
}

export default App;
```

### Or JavaScript

```ts
import React, { PureComponent } from 'react';
import { Avatar } from 'react-avataaars';

class App extends PureComponent {
  render() {
    const hash = 'random-string';
    const options = {
      clothes: 'sweater',
      eyebrow: 'angry',
      style: 'circle',
    };

    return (
      <div className="App">
        <Avatar options={options} hash={hash} />
      </div>
    );
  }
}

export default App;
```

## Contributing

1.  Fork it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Add your changes: `git add .`
1.  Commit your changes: `git commit -am 'Add some feature'`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a pull request :sunglasses:

## Credits

This library has been made possible by:

- https://github.com/fangpenlin/avataaars
- https://github.com/DiceBear/avatars

## Built With

* Typescript
* React
* Avataaars
* Love

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY