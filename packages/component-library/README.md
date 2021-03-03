# Component Library

**Contents**
  - [Overview](#overview)
  - [Usage](#usage)
    - [End User](#end-user)
    - [Theme Builder](#building-a-theme)
  - [Components](#components)

# Overview

This package is a library of react components focused on accessibility and progressive enhancement. When used with a server-side-rendered react application, these components remain functional for users who may not have javascript or css available.

# Usage

The components in this library are designed to have custom themes applied on top of them easily. This creates two use cases, either [building a theme](#building-a-theme) to apply custom styles to the components, and [end users](#end-users) plugging components into their application.

## Building a Theme

As a theme builder, you can add custom styles to the components through an `applyTheme` function. For any component in the library, this function can be imported as a named import, e.g:

``` javascript
import { applyTheme } from 'component-library/Button';
```

This function can be called with a [styles](#styles) object and a [config](#config) object to theme the base component:

``` javascript
const ThemedButton = applyTheme(styles, config);
```

### **Styles**

The styles argument defines the props that end-users can use to style their component. For any prop you want to support, create a key with that name. For example, to support a `primary` style and `secondary` style:

```javascript
const styles = {
  primary: {
    ...
  },
  secondary: {
    ...
  }
}
```
_Note: We support syntax `<Button primary>` and `<Button variant='primary' />`. See [prop values](#prop-values) for how to implement each style._

The value of the key is an object that will set the css for the component. Each component has subsections which can be styled independently. For example, an `<input>` component is comprised of a container, a label, and the actual input. Apply the css for each section with the section's name as a key:

```javascript
const styles = {
  primary: {
    container: `
      background-color: blue;
    `,
    input: `
      color: green;
    `,
    label: `
      font-size: 10px;
    `
  },
  secondary: {
    container: `
      background-color: blue;
    `,
    input: `
      color: yellow;
    `,
    label: `
      font-size: 10px;
    `
  }
}
```

See [components](#components) for the list of sections that can be styled for each component. It will often be the case that you have a core set of styles that will apply to all variants of your component. In the example above, only the input's color property is changing. To reduce re-writing these styles, you can include them in the `shared` property:

```javascript
const styles = {
  shared: {
    container: `
      background-color: blue;
    `,
    label: `
      font-size: 10px;
    `
  },
  primary: {
    input: `
      color: green;
    `
  },
  secondary: {
    input: `
      color: yellow;
    `
  }
}
```

### **Prop Values**

Props can have either boolean values, string values, or a mix of both. If the key's value is an object styling the components subsections, it will be treated as a boolean value. E.g:

``` javascript
const styles = {
  primary: {
    container: `
      ...
    `
  }
}
```
Will support the end user syntax `<Component primary>`. If you want a prop to have a string value, e.g `<Component variant='primary'>`, add the different options as keys of the prop with their own css definitions:

``` javascript
const styles = {
  variant: {
    primary: {
      container: `
        ...
      `
    },
    secondary: {
      container: `
        ...
      `
    }
  }
}
```

### SCSS

This library is built on top of [styled-components](https://styled-components.com/), and supports any scss style syntax they do. See [pseudoelements pseudoselectors and nesting](https://styled-components.com/docs/basics#pseudoelements-pseudoselectors-and-nesting) for more information.

### Config

The config argument can be used to set default properties and static properties on an element. Default properties will be applied to a component that has no definition for that prop. For example:

``` javascript
const config = {
  defaultProps: {
    variant: 'primary'
  }
};
```

Will give the component a `variant=primary` style if the variant isn't set. Additionally the config object can set static props, which currently support `fullHeight` and `fullWidth`. Use these if you want the component to take up 100% of it's parent by default:

``` javascript
const config = {
  staticProps: ['fullHeight']
};
```

## End user

For end users, components can be individually imported:

``` javascript
import Button from 'bcgov-theme/Button';
```

The component can then be custom styled depending on the theme used.


# Components

<table>

  <tr>
    <th>Component</th>
    <th>Stylable Sections</th>
    <th>Takes Children</th>
  </tr>

  <tr>
    <td>Button</td>
    <td>button</td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Checkbox</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          input
        </li>
        <li>
          label
        </li>
        <li>
          checkmark
        </li>
      </ul>
    </td>
    <td>No</td>
  </tr>

  <tr>
    <td>DatePicker</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          input
        </li>
        <li>
          label
        </li>
      </ul>
    </td>
    <td>No</td>
  </tr>

  <tr>
    <td>Fieldset</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          legend
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Footer</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          footer
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Input</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          label
        </li>
        <li>
          input
        </li>
      </ul>
    </td>
    <td>No</td>
  </tr>

  <tr>
    <td>Menu</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          group
        </li>
        <li>
          item
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Navigation</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          toggle
        </li>
        <li>
          sidebar
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Notification</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          header
        </li>
        <li>
          content
        </li>
        <li>
          group
        </li>
        <li>
          close
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>RadioButton</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          input
        </li>
        <li>
          label
        </li>
        <li>
          dot
        </li>
      </ul>
    </td>
    <td>No</td>
  </tr>

  <tr>
    <td>Select</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          input
        </li>
        <li>
          label
        </li>
        <li>
          wrapper
        </li>
      </ul>
    </td>
    <td>Yes</td>
  </tr>

  <tr>
    <td>Textarea</td>
    <td>
      <ul>
        <li>
          container
        </li>
        <li>
          input
        </li>
        <li>
          label
        </li>
      </ul>
    </td>
    <td>No</td>
  </tr>

</table>
