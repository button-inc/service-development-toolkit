## Building a Theme

**Contents**
  - [Styles](#styles)
    - [Boolean Valued Props](#using-boolean-valued-props)
    - [String Valued Props](#using-string-valued-props)
    - [Subsections](#subsections)
    - [Shared Styles](#shared-styles)
    - [SCSS](#scss)
    - [Common API](#common-api)
  - [Config](#config)
    - [Default Props](#default-props)
    - [Changing html tags](#changing-html-tags)
    - [Break Props](#break-props)
    - [Static Props](#static-props)
    - [Other Options](#other-options)
  - [Components](#components)

To create your own theme on top of the `component-library`, you can add custom styles to the components through an `applyTheme` function. For any component in the library, this function can be imported as a named import, e.g:

``` javascript
import { applyTheme } from '@button-inc/component-library/Button';
```

This function can be called with a [styles](#styles) object and a [config](#config) object to theme the base component:

``` javascript
const ThemedButton = applyTheme(styles, config);
```

### **Styles**

The styles argument defines the props that end-users can use to style their component. In creating the library, we recognized that different users may
be accustomed to different syntaxes for including props. For example, to add a primary variant to a button, you may want to use either
[boolean valued props](#using-boolean-valued-props), e.g `<Button primary>`,  or [string valued props](#using-string-valued-props), e.g `<Button variant='primary' />` .
The structure of your styles object will determine this syntax. Note that you can include a mix of the two syntaxes in your design.

#### **Using Boolean Valued Props**

For any prop you want to use to style your component, add a key with that prop's name to your styles object.
For example, to create a `button` element that supports a `primary` variant, include `primary` as a key,
with a string of css values:

```javascript
const styles = {
  primary: `
    cursor: not-allowed;
    background: grey;
  `
}
```
These styles will then be included on any primary button, e.g `<Button primary>`.

#### **Using String Valued Props**

To support props with string values, e.g `<Button variant='primary' />`, add a key with the props name, in this case `variant`. Make the value of `variant` an object whose
keys are the different variants you support. For example, to support `primary` and `danger` variants, we would write:

``` javascript
const styles = {
  variant: {
    primary:  `
        background: green;
        border: 2px solid black;
      `
    },
    danger: 'background: red;'
}
```

The end user would then include the button using the syntax `<Button variant="primary">` or `<Button variant="danger">`.

#### Subsections

Larger components may include multiple html elements that you will want to add styles to individually. For example, the `input` element
includes a containing div, with a label and input inside. See below for the html structure:

```html
<div>
  <label for="example-input">
    Enter your name.
  </label>
  <input id="example-input" />
</div>
```

These components can be given styles for each element. To provide the styles for each element, replace the css string with an object
whose keys are the names of the sections, and whose values are the css strings. For example, to create a themed input that can have
a size prop with string values of `large` or `small`, and adds styling to the boolean `required` prop, we can write:

``` javascript
const styles = {
  size: {
    large: {
      container: 'padding: 10px;',
      input: 'font-size: 2rem;',
      label: 'font-size: 1.5rem;'
    },
    small: {
      container: 'padding: 5px;',
      input: 'font-size: 1.5rem;',
      label: 'font-size: 1rem;'
    }
  },
  required: {
    label: `color: red;`
  }
}
```

Note that you can include just the sections you need to style. To see the names of the subsections you can style for each component,
refer to the [components](#components) section.

#### Shared Styles

It will often be the case that you have a core set of styles that will apply to all variants of your component. In the example below, only the input's `font-size` property is changing:

```javascript
const styles = {
  size: {
    large: {
      container: 'padding: 10px;',
      input: 'font-size: 2rem;',
      label: 'font-size: 1.5rem;'
    },
    small: {
      container: 'padding: 10px;',
      input: 'font-size: 1.5rem;',
      label: 'font-size: 1.5rem;'
    }
  }
}
```

To reduce re-writing these styles, you can include them in the `shared` property:

```javascript
const styles = {
  shared: {
    container: 'padding: 10px;',
    label: 'font-size: 1.5rem;'
  },
  size: {
    large: {
      input: 'font-size: 2rem;',
    },
    small: {
      input: 'font-size: 1.5rem;',
    }
  }
}
```

#### SCSS

This library is built on top of [styled-components](https://styled-components.com/), and supports any scss style syntax they do. See [pseudoelements pseudoselectors and nesting](https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting) for more information.

#### Common API

While the library gives the freedom to set up your props definitions as you like, in order to maintain consistency across our internal themes we have
chosen to use the same API interface. Following this convention will allow themes to be easily swapped out without needing to change the
syntax of the react component props.

If you would like to follow this convention when defining your theme, it will be compatible with themes from Button Inc and allow users
to easily change between them. To follow this convention, refer to the props tables in our [storybook instance](https://button-inc.github.io/service-development-toolkit/@button-inc/button-theme/index.html?path=/story/accordion--default) for the syntax we use.

_**Note**: While in beta, the bc-gov theme does not currently match the button theme API. This will be fixed to a more stable and
consistent approach in a future release._

### Config

The config argument can be used to set default properties and static properties on an element. Default properties will be applied to a component that has no definition for that prop. For example:

#### Default Props

``` javascript
const config = {
  defaultProps: {
    variant: 'primary'
  }
};
```

Will give the component a `variant=primary` style if the variant isn't set.
Additionally the config object can set static props, which currently support `fullHeight` and `fullWidth`. Use these if you want the component to take up 100% of it's parent by default:

``` javascript
const config = {
  staticProps: ['fullHeight']
};
```

#### Changing html tags

The `as` key can be used within the config argument to adjust the html structure of your component. For example, the
card component allows you to configure the outer container as a custom html tag. To render cards outer containers as articles instead,
include the followign in your config:

```js
const config = {
  as: {
    container: 'article'
  }
}
```

For a list of all changeable sections for a component, see the [Components](#Components) table.

#### Break Props

It may be the case that you want one prop to override all other applied styles. For example,
you may want a disabled button to apply only the disabled styles, and override any variant styling that may exist.
To do this, add a breakProps section to your config, as an array of the props that should override other styles. e.g:

```js
const config = {
  breakProps: ['disabled']
}
```

#### Static Props

For common props that will be added to multiple components, there are some defaults you can include in your configuration.
Currently we support:
- fullWidth
- fullHeight

Which apply a css style of `width: 100%;` and `height: 100%` respectively. This is used to avoid redefining that prop across
many components. To add these to a component in your system, include them in the static props section of your config:

```js
const config = {
  staticProps: ['fullWidth', 'fullHeight']
}
```
Then an end-user of the component can use `<Component fullHeight />` to apply a 100$ height style.

#### Other Options

Some components contain specific configuration options. See the [Components](#Components) table for what these are. A description is provided below:

- `toggleable`: Include a toggle on the component to allow it to be openend and closed.
- `includeWrapper`: Add an additional wrapper componenent, usually around an input, for additional control over the css.
- `forwardProps`: Pass props down to child components (e.g name)
- `cols`: the default number of columns in a grid.
- `gutter`: The padding around grid items. Pass a number, and it will use `px` as the default unit.
- `gutterUnit`: Pass a custom unit to use with the gutter option.
- `justify`: The default justification for a grid.
- `align`: the default alignment for a grid.
