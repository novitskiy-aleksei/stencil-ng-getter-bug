import { h } from '@stencil/core';

abstract class ListFilterItem {
  fieldName: string;
  label: string;
  value: any;

  abstract render();

  abstract getValue(): { [name: string]: any };

  onChange(e) {
    this.value = e.detail.value;
  }

  static formatNumberValue(value) {
    if (value >= 1000000) {
      return parseFloat((value / 1000000).toFixed(1)) + 'M';
    }

    if (value >= 3000) {
      return parseFloat((value / 1000).toFixed(1)) + 'K';
    }

    return value;
  }

  constructor(props) {
    Object.assign(this, props);
  }

}

class ListFilterItemInput extends ListFilterItem {
  render() {
    return <ion-input onIonChange={(e) => this.onChange(e)} value={this.value}/>;
  }

  getValue() {
    const result = {};
    result[this.fieldName] = this.value;
    return result;
  }

}

class ListFilterItemSelect extends ListFilterItem {
  values: { value: any, label: string }[];
  multiple: boolean;

  constructor(props) {
    super(props);
  }

  render() {
    return <ion-select placeholder="Select One" multiple={this.multiple} onIonChange={(e) => this.onChange(e)}>
      {this.values.map(i => {
        return <ion-select-option value={i.value} selected={i.value === this.value}>{i.label}</ion-select-option>;
      })}
    </ion-select>;
  }

  getValue() {
    const result = {};
    if (this.multiple) {
      result[this.fieldName + '_in'] = this.value;
    } else {
      result[this.fieldName] = this.value;
    }

    return result;
  }
}

class ListFilterItemRange extends ListFilterItem {
  min: number;
  max: number;
  step: number;
  dualKnobs: boolean = true;
  pin: boolean = true;
  value: number | { lower: number; upper: number; };

  render() {
    return <ion-range dual-knobs={this.dualKnobs}
                      onIonChange={(e) => this.onChange(e)}
                      color={'dark'}
                      min={this.min}
                      max={this.max}
                      step={this.step}
                      pin={this.pin}
                      value={this.value}>
      <ion-label slot="start">{ListFilterItem.formatNumberValue(this.min)}</ion-label>
      <ion-label slot="end">{ListFilterItem.formatNumberValue(this.max)}</ion-label>
    </ion-range>;
  }

  constructor(props) {
    super(props);
  }

  getValue() {
    const result = {};
    if (typeof this.value === 'object') {
      result[this.fieldName + '_gt'] = this.value.lower;
      result[this.fieldName + '_lt'] = this.value.upper;
    } else {
      result[this.fieldName] = this.value;
    }
    return result;
  }

}

class ListFilterItemCheckbox extends ListFilterItem {
  render() {
    return <ion-checkbox checked={!!this.value} onIonChange={(e) => this.onChange(e)} color="dark"/>;
  }

  getValue() {
    const result = {};
    result[this.fieldName] = this.value;
    return result;
  }
}

export {
  ListFilterItem,
  ListFilterItemInput,
  ListFilterItemSelect,
  ListFilterItemRange,
  ListFilterItemCheckbox
};
