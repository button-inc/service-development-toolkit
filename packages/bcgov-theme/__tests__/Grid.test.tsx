import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import React from 'react';
import Grid from '../src/Grid';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

expect.extend(toHaveNoViolations);

describe('Grid', () => {
  it('Should have no accessibility violations', async () => {
    const { container } = render(<Grid />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('Should accept cols prop', async () => {
    render(
      <>
        <Grid cols={2}>
          <Grid.Row>
            <Grid.Col id="test-half" />
            <Grid.Col />
          </Grid.Row>
        </Grid>
        <Grid cols={4}>
          <Grid.Row>
            <Grid.Col id="test-quarter" />
            <Grid.Col />
          </Grid.Row>
        </Grid>
      </>
    );
    const columnHalf = document.querySelector('#test-half');
    const columnQuarter = document.querySelector('#test-quarter');
    expect(columnHalf).toHaveStyle('width: 50%;');
    expect(columnQuarter).toHaveStyle('width: 25%;');
  });

  it('Should accept span prop', async () => {
    render(
      <Grid cols={2}>
        <Grid.Row>
          <Grid.Col id="test" span={2} />
        </Grid.Row>
      </Grid>
    );
    const column = document.querySelector('#test');
    expect(column).toHaveStyle('width: 100%;');
  });
});
