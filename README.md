# react-animate-scroll

> A scroll component that animates elements when user scrolls downwards.

[![NPM](https://img.shields.io/npm/v/react-animate-scroll.svg)](https://www.npmjs.com/package/react-animate-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-animate-scroll
```

## Usage

```tsx
import * as React from 'react'

import ReactAnimateScroll from 'react-animate-scroll'

class Example extends React.Component {
  render () {
    return (
      <ReactAnimateScroll direction="up" animateClasses="slideInUp">
        1233333333333331 Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugiat quasi voluptates ipsum. Eaque, sequi non, eum laudantium
        beatae quam dolorem dolore dicta natus modi soluta fugiat alias.
        Voluptate, aliquam quia!
      </ReactAnimateScroll>
    )
  }
}
```

## License

MIT © [noahjohn9259](https://github.com/noahjohn9259)
