export const argTypes = {
  justify: {
    control: {
      type: 'select',
      options: ['start', 'end', 'center', 'space-around', 'space-between'],
    },
    description: 'Justify the content along the horizontal axis.',
  },
  align: {
    control: {
      type: 'select',
      options: ['start', 'bottom', 'center'],
    },
    description: 'Align content along the vertical axis.',
  },
  cols: {
    description: 'The number of columns. Pass to the base Grid component.',
  },
  gutter: {
    description:
      'The padding to apply to a row. Pass to a Grid.Row component. Pass an array of integers representing pixels.',
  },
  span: {
    description:
      'The number of grid columns to occupy. Pass to a Grid.Col component to have it span more than 1 column.',
  },
};
