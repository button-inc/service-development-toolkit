import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Typography',
  parameters: {
    docs: {
      // NOTE: The multiline jsx code blocks below must start with zero indentation in order to display properly.
      description: {
        component: `The typography component is designed to be used with the [typography](https://www.npmjs.com/package/typography) npm package. First install this dependency:
        \`npm i react-typography\`
        The typefaces used are sourced from the Google fonts API, which can be used create this component:

\`\`\`jsx
import { TypographyStyle } from 'react-typography';
import typography from '@button-inc/button-theme/typography';

export default function ButtonTypography() {
  return
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <TypographyStyle typography={typography} />;
  </>
  }
\`\`\`

Adding this component to the top level of another page or the whole application will apply these fonts and styles to it. For example,

\`\`\`jsx
import Typography from "components/Typography";

export default function Page() {
  return (
    <>
      <Typography />
      <Header />
      <main>
        ...
      </main>
    </>
  );
}
\`\`\`
`,
      },
    },
  },
} as Meta;

const Template: Story = args => <pre>No visible component to show</pre>;

export const Default = Template.bind({});
