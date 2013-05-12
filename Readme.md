
# size-component

A component for storing the width and height properties of an object in the whirlibulf game engine.

## Installation

    $ component install whirlibulf/size-component

## Usage

The component ID is `size`.

Register the component:

    var component = require('size-component');
    game.addComponent(new component());

The options object for this component:

    {
      width: 0,
      height: 0,
      radius: 0
    }

All values should be numbers.

## License

  MIT
