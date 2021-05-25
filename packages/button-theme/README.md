# Button Theme

This is a theme following the [BCGov Design Guide](https://developer.gov.bc.ca/Design-System/About-the-Design-System) for the component-library.

## Getting Started

1) Install the package using your preferred package manager:

  - `npm i @button-inc/bcgov-theme`
  OR
  - `yarn add @button-inc/bcgov-theme`

2) Import the components you need using the following syntax:

  - `import { Button } from @button-inc/bcgov-theme`
  OR
  - `import Button from @button-inc/bcgov-theme/Button`

**Note**: _If you are only importing a few components and are concerned about bundle size, the second syntax will only import code for the individual components
you are using and should be preferred. As of version 1.0.0-alpha.4, the difference between the methods for importing a single button is ~63kB._

3) Include the component in your code
  - `<Button>Click Me!</Button>`


## Components

### Accordion

**Note**: _The accordion component works like a toggleable panel currently, and an interactive multi-panel accordion is on the roadmap._

The accordion component is used to display toggleable content, and will display a single accordion panel.

```JSX
  <Accordion title="My Title">
    Content to display when toggled open.
  </Accordion>
```

To display multiple panels, they can be stacked

```JSX
  <Accordion title="My Title">
    Content to display when toggled open.
  </Accordion>
  <Accordion title="My Title" defaultToggled>
    Content to display when toggled open.
  </Accordion>
```


<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Title</td>
    <td>String</td>
    <td>The title displayed in the main header.</td>
  </tr>
  <tr>
    <td>onToggle</td>
    <td>Function</td>
    <td>Callback function to fire when the toggle is clicked.</td>
  </tr>
  <tr>
    <td>defaultToggled</td>
    <td>Boolean</td>
    <td>Whether to have the accordion panel open by default</td>
  </tr>
</table>



### Alert

**Note**: _The accordion component works like a toggleable panel currently, and an interactive multi-panel accordion is on the roadmap._

The accordion component is used to display toggleable content, and will display a single accordion panel.

```JSX
  <Accordion title="My Title">
    Content to display when toggled open.
  </Accordion>
```

To display multiple panels, they can be stacked

```JSX
  <Accordion title="My Title">
    Content to display when toggled open.
  </Accordion>
  <Accordion title="My Title" defaultToggled>
    Content to display when toggled open.
  </Accordion>
```


<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Title</td>
    <td>String</td>
    <td>The title displayed in the main header.</td>
  </tr>
  <tr>
    <td>onToggle</td>
    <td>Function</td>
    <td>Callback function to fire when the toggle is clicked.</td>
  </tr>
  <tr>
    <td>defaultToggled</td>
    <td>Boolean</td>
    <td>Whether to have the accordion panel open by default</td>
  </tr>
</table>
