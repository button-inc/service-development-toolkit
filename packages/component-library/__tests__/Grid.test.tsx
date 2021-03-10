import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Grid from '../src/Grid';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Grid', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(
      <Grid>
        <Grid.Row collapse="500">
          <Grid.Col span={5}>Column 1</Grid.Col>
          <Grid.Col span={15}>Column 2</Grid.Col>
        </Grid.Row>
      </Grid>
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
