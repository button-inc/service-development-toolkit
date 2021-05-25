# BCGov Theme

This is a theme following the [BCGov Design Guide](https://developer.gov.bc.ca/Design-System/About-the-Design-System) for the component-library.

## Getting Started

1. Install the package using your preferred package manager:

- `npm i @button-inc/bcgov-theme`
  OR
- `yarn add @button-inc/bcgov-theme`

2. Import the components you need using the following syntax:

- `import { Button } from @button-inc/bcgov-theme`
  OR
- `import Button from @button-inc/bcgov-theme/Button`

**Note**: _If you are only importing a few components and are concerned about bundle size, the second syntax will only import code for the individual components
you are using and should be preferred. As of version 1.0.0-alpha.4, the difference between the methods for importing a single button is ~63kB._

3. Include the component in your code

- `<Button>Click Me!</Button>`

## Components

**Note**: React props (e.g onClick, onChange) are passed through to the topmost component unless otherwise specified. This list covers our custom props.

## Accordion

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

## Alert

Alert banners notify users of important information or changes on a page. Typically, they appear at the top of a page.

```JSX
  <Alert content="My Title" closable />
```

Content can also be passed as children.

```JSX
  <Alert size="small" variant="info">
    <strong>Child Content.</strong>
  </Alert>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Variant</td>
    <td>String</td>
    <td>The style variant to use. Use one of ['success', 'info', 'warning', 'danger'].</td>
  </tr>
  <tr>
    <td>Content</td>
    <td>String or jsx</td>
    <td>The content to include inside the alert. Note that contents passed as children will also render.</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Flex</td>
    <td>Boolean</td>
    <td>Whether to to display the contents using CSS flexbox. Setting to true will align content horizontally.</td>
  </tr>
  <tr>
    <td>Closable</td>
    <td>Boolean</td>
    <td>Whether to have the accordion panel open by default</td>
  </tr>
</table>

## Button

A button.

```JSX
  <Button>Click Me!</Button>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Variant</td>
    <td>String</td>
    <td>The style variant to use. Use one of ['primary', 'primary-inverse', 'primary-disabled', 'secondary', 'secondary-inverse', 'secondary-disabled'].</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicate whether or not the button component is disabled.</td>
  </tr>
</table>

## Callout

Callouts are an excerpt of text that has been pulled out and used as a visual clue to draw the eye to the text. They are used to help direct a user's attention to important pieces of information.

```JSX
  <Callout>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus.</Callout>
```

Content can also be passed through props:

```JSX
  <Callout content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tincidunt risus." />
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Variant</td>
    <td>String</td>
    <td>The style variant to use. Currently only 'primary' is supported.</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
</table>

## Card

A BCGov themed card for containing a styled header and content.

```JSX
  <Card title="Online Registration">
    Register to our program.
    <Button>Click here to register</Button>
  </Card>
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
    <td>The title of the card.</td>
  </tr>
</table>

## Checkbox

Checkboxes are a type of input that allow users to select one or more options from a list.

```JSX
  <Checkbox size="small" label="Lorem ipsum dolor sit amet" />
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the checkbox</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
    <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
</table>

## DatePicker

Datepickers are a type of input that allow users to select a date.

```JSX
  <Datepicker label="Birthday" size="small" required />
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the datepicker</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>Boolean</td>
    <td>Whether or not to apply a rounded border radius style.</td>
  </tr>
</table>

## Dropdown

Dropdowns allow users to select one option from a list.

```JSX
  <Dropdown label="Label" size="small">
    <option value="option1">Option 1</option>
    <option value="option1">Option 2</option>
  </Dropdown>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the dropdown</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
    <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>Boolean</td>
    <td>Whether or not to apply a rounded border radius style.</td>
  </tr>
</table>


## Fieldset

Fieldsets are used to group logically related inputs, e.g. a group of address fields.

```JSX
  <Fieldset title="Address" required>
    <Input label="Street Address" />
    <Input label="City" />
    <Input label="Province" />
  </Fieldset>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Title</td>
    <td>String</td>
    <td>Title of the fieldset.</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Pass through to the fieldset to require all child inputs.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Pass through to the fieldset to disable all child inputs.</td>
  </tr>
</table>

## FilePicker

FilePickers allow users to select a local file to upload.

```JSX
  <FilePicker label="Upload a file" size="small">
    Choose File
  </FilePicker>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the filepicker.</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
</table>

## Footer

Footers help people find what they need after scrolling to the bottom of a web page. They provide supplementary information such as copyright, contact information, social media links, and links to other pages within a website.

To add links to a footer, include anchor tags in an unordered list.

```JSX
  <Footer>
    <ul>
      <li>
        <a href=".">Link 1</a>
      </li>
      <li>
        <a href=".">Link 2</a>
      </li>
      <li>
        <a href=".">Link 3</a>
      </li>
      <li>
    </ul>
  </Footer>
```

## Grid

The grid component helps layout content on the page, and can be used with two child components, Grid.Row and Grid.Col.


```JSX
  <Grid cols={5}>
    <Grid.Row>
      <Grid.Col span={2}>
        content spanning two fifths of parent
      <Grid.Col>
      <Grid.Col span={3}>
        content spanning three fifths of parent
      <Grid.Col>
    </Grid.Row>
  </Grid>
```
<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Cols</td>
    <td>Number</td>
    <td>The total number of columns for the grid to use. Pass to the base Grid component.</td>
  </tr>
  <tr>
    <td>Span</td>
    <td>Number</td>
    <td>The number of total columns a specific Grid.Col section should cover. Pass to the Grid.Col component.</td>
  </tr>
</table>

## Header

Headers help people understand what the product or service is about while providing a consistent look, feel, and functionality across government sites.

```JSX
  <Header title="Hello British Columbia" onBannerClick={handleBannerClick} />
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
    <td>The title to display on the header.</td>
  </tr>
  <tr>
    <td>onBannerClick</td>
    <td>Function</td>
    <td>Callback that will fire when the logo is clicked.</td>
  </tr>
  <tr>
    <td>header</td>
    <td>string, one of ['main', 'sub']</td>
    <td>Different styling options, see storybook for examples.</td>
  </tr>
</table>

# HeroImage

An image with an overlay to write content on top of it.

```JSX
  <HeroImage url="my-image.png">
    <h2>Header Text</h2>
    <p>This is a subtitle with some extra information</p>
  </HeroImage>
```
<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>url</td>
    <td>String</td>
    <td>The url for the image in the background.</td>
  </tr>
</table>

# Input

A text input. Text inputs allow users to enter a single line of text.
**Note**: Default React props such as onClick, onChange are passed on to the input element.

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the input.</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>String, one of ['email', 'number', 'password', 'tel', 'text', 'url']</td>
    <td>Add an html5 input type. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>Object</td>
    <td>Additional styles. Styles will be passed to the container of the input.</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>Boolean</td>
    <td>Whether or not to apply a rounded border radius style.</td>
  </tr>
</table>

# Link

Links lead people to a different page.

```JSX
  <Link href="#link1" content="Lorem ipsum dolor sit amet" size="small" external />
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>href</td>
    <td>String</td>
    <td>The url you want to link to.</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>The text to display for the link.</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>The text to display for the link.</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>External</td>
    <td>Boolean</td>
    <td>Include an external link icon to indicate to users they will be leaving the website. Will open the external link in a new tab.</td>
  </tr>
</table>

# Modal

A modal window to display important content to the user. Note that modals should be used sparingly, and other methods of conveying information should be preferred for best accessibility practices. The modal can include a Modal.Header, Modal.Content, Modal.Footer, and Modal.Close sub component. The Header, Footer and Content components help to layout the modal, and the Close component will be the area to click to escape the modal.

To allow users to open the modal, include a link to the modals id, e.g. `href="modal-id"`. See below for an example.

```JSX
<Modal id="modal-id">
  <Modal.Header>
    Need Help? <Modal.Close>Close</Modal.Close>
  </Modal.Header>
  <Modal.Content>
    If you have specific questions, contact the Ministry of Children and Family Development.
  </Modal.Content>
  <Modal.Footer>
    <Link href="#link3">info@gov.ca</Link>
  </Modal.Footer>
</Modal>

<Link href="#modal-id">Open Modal</Link>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>id</td>
    <td>String</td>
    <td>The id of the modal.</td>
  </tr>
</table>

# Navigation

A responsive site header with links.

```JSX
  <Navigation title="Hello British Columbia" onBannerClick={handleClick}>
    <Menu />
  </Navigation>
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>title</td>
    <td>String</td>
    <td>The title for the navigation.</td>
  </tr>
  <tr>
    <td>onBannerClick</td>
    <td>Function</td>
    <td>Callback function for when the logo is clicked.</td>
  </tr>
  <tr>
    <td>mobileMenu</td>
    <td>Function</td>
    <td>A function that returns a JSX element. By default, the mobile menu will match the menu passed as a child. This can be used to override the links displayed on mobile.</td>
  </tr>
  <tr>
    <td>mobileBreakPoint</td>
    <td>String</td>
    <td>The number of pixels at which to collapse to a hamburger menu. Enter just the number as a string, e.g "900".</td>
  </tr>
</table>

# RadioButton

Radio buttons are a type of input that allow users to select only one option from a list.

```JSX
  <RadioButton size="small" label="Lorem ipsum dolor sit amet" />
```

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the input.</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>Object</td>
    <td>Additional styles. Styles will be passed to the container of the input.</td>
  </tr>
</table>


# TextArea

A textarea allows users to input multiple lines of text.

<table>
  <tr>
  <th>Prop</th>
  <th>Value Type</th>
  <th>Description</th>
  </tr>
  <tr>
    <td>Size</td>
    <td>String</td>
    <td>The size variant to use. See <a href="#Sizes">sizes</a> for more information on types.</td>
  </tr>
  <tr>
    <td>Label</td>
    <td>String</td>
    <td>Pass through a label to connect to the input.</td>
  </tr>
  <tr>
    <td>Required</td>
    <td>Boolean</td>
    <td>Indicates whether the field is required.</td>
  </tr>
  <tr>
    <td>Disabled</td>
    <td>Boolean</td>
    <td>Indicates whether the field is disabled.</td>
  </tr>
  <tr>
    <td>Value</td>
    <td>String</td>
    <td>The value of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Name</td>
    <td>String</td>
    <td>The name of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Id</td>
    <td>String</td>
    <td>The id of the input. Will be passed to the input itself.</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>Object</td>
    <td>Additional styles. Styles will be passed to the container of the input.</td>
  </tr>
  <tr>
    <td>Resize</td>
    <td>String, one of ["none", "both", "horizontal", "vertical"]</td>
    <td>The resize settings for the text area, see [here](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) for more information.</td>
  </tr>
  <tr>
    <td>rounded</td>
    <td>Boolean</td>
    <td>Whether or not to apply a rounded border radius style.</td>
  </tr>
</table>

# Typography

A set of typography rules to apply bcgov font styling. The typography is designed to be used with the [typography.js](https://github.com/KyleAMathews/typography.js) library. For more details of setting up as a react component, see [here](https://github.com/KyleAMathews/typography.js#user-content-reactjs-helper-components).

To use the typography definitions in an importable component, create a Typography.js component:

```JSX
import { TypographyStyle } from 'react-typography';
import typography from '@button-inc/bcgov-theme/typography';
import '@bcgov/bc-sans/css/BCSans.css';

export default function BCGovTypography() {
  return <TypographyStyle typography={typography} />;
}
```

Then this component can be included in any component where you want to apply the bcgov font style.


# Sizes

Set the size of an element with this prop. The supported options are:

- small
- medium
- large
