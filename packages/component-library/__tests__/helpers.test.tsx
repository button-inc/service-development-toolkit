import { render } from '@testing-library/react';
import { processStyle } from '../src/helpers';
import 'regenerator-runtime/runtime';

describe('processStyle', () => {
  it('Should result the same with array styles', async () => {
    const style1 = processStyle({
      shared: {
        button: 'border-radius: 0.222em;border-width: 0;padding: 0.66em 1.77em;text-align: center;',
      },
    });

    const style2 = processStyle({
      shared: {
        button: ['border-radius: 0.222em;', 'border-width: 0;', 'padding: 0.66em 1.77em;', 'text-align: center;'],
      },
    });

    expect(style1).toEqual(style2);
  });
});
