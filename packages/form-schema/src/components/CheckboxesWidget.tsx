import React from 'react';
import Checkbox from '@button-inc/bcgov-theme/Checkbox';

function selectValue(value, selected, all) {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
}

function deselectValue(value, selected) {
  return selected.filter(v => v !== value);
}

function CheckboxesWidget(props) {
  const { id, disabled, options, value, autofocus, readonly, onChange } = props;
  const { enumOptions, enumDisabled, inline } = options || {};

  return (
    <div className="checkboxes" id={id}>
      {enumOptions.map((option, index) => {
        const checked = value.indexOf(option.value) !== -1;
        const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
        const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
        const checkbox = (
          <Checkbox
            id={`${id}_${index}`}
            checked={checked}
            disabled={disabled || itemDisabled || readonly}
            autoFocus={autofocus && index === 0}
            label={option.label}
            onChange={event => {
              const all = enumOptions.map(({ value }) => value);
              if (event.target.checked) {
                onChange(selectValue(option.value, value, all));
              } else {
                onChange(deselectValue(option.value, value));
              }
            }}
          />
        );
        return (
          <div key={id} className={`checkbox ${disabledCls}`} style={{ margin: '20px' }}>
            {checkbox}
          </div>
        );
      })}
    </div>
  );
}

export default CheckboxesWidget;
