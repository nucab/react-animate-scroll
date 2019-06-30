# react-animate-scroll

> A scroll component that animates elements when user scrolls downwards.

[![NPM](https://img.shields.io/npm/v/react-animate-scroll.svg)](https://www.npmjs.com/package/react-animate-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-animate-scroll
```

## Usage

```tsx
import * as React from 'react'

import ReactAnimateScroll from 'react-animate-scroll'

class Example extends React.Component {
  render () {
    return (
      <ReactAnimateScroll direction="up" animateClasses="slideInUp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laborum! Iste eius tenetur unde voluptate illo asperiores. Accusamus delectus est molestias consequuntur, ducimus perferendis, officiis quas neque aperiam ab voluptatibus.
      </ReactAnimateScroll>
    )
  }
}
```

## License

MIT © [noahjohn9259](https://github.com/noahjohn9259)
