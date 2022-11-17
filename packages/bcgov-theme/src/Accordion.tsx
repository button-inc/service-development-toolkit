import React from 'react';
import styled from 'styled-components';
import noop from 'lodash/noop';
import { applyTheme, StyleConfig, Props } from '@button-inc/component-library/Card';
import { Plus, Minus, FaSVG } from './fontawesome';

export const styles = {
  shared: {
    container: `
      font-size: 1rem;
      border-top: 1px solid #000057;
      border-bottom: 1px solid #000057;
    `,
    header: `
      display: flex;
      padding: 1em 0;
    `,
    content: `
      min-height: 5em;
    `,
    toggle: `
      cursor: pointer !important;
    `,
  },
};

const ToggleRight = styled.div`
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 2em;
`;

const config: StyleConfig = {
  defaultProps: {},
  staticProps: [],
  toggleable: true,
};

export const BaseAccordion = applyTheme(styles, config);

interface ExtendedProps extends Props {
  title?: string;
  onToggle?: (event: React.SyntheticEvent) => void;
  defaultToggled?: boolean;
}

export default function Accordion(props: ExtendedProps) {
  const { title, children, onToggle, defaultToggled, ...rest } = props;

  return (
    <BaseAccordion {...rest} onToggle={onToggle || noop} defaultToggled={defaultToggled}>
      <BaseAccordion.Header>
        <h2>{title}</h2>
        <ToggleRight>
          <BaseAccordion.ToggleOff>
            <FaSVG>
              <path fill="currentColor" d={Plus} />
            </FaSVG>
          </BaseAccordion.ToggleOff>
          <BaseAccordion.ToggleOn>
            <FaSVG>
              <path fill="currentColor" d={Minus} />
            </FaSVG>
          </BaseAccordion.ToggleOn>
        </ToggleRight>
      </BaseAccordion.Header>
      <BaseAccordion.Content>{children}</BaseAccordion.Content>
    </BaseAccordion>
  );
}
