import * as React from 'react';
import * as _ from 'lodash';

import PropertyFieldHeader from '../../common/propertyFieldHeader/PropertyFieldHeader';

import { IPropertyFieldSliderWithCalloutHostProps } from './IPropertyFieldSliderWithCalloutHost';
import * as telemetry from '../../common/telemetry';
import { Slider } from 'office-ui-fabric-react/lib/components/Slider';

export default class PropertyFieldSliderWithCalloutHost extends React.Component<IPropertyFieldSliderWithCalloutHostProps, null> {
  constructor(props: IPropertyFieldSliderWithCalloutHostProps) {
    super(props);

    telemetry.track('PropertyFieldSliderWithCallout', {
      disabled: props.disabled
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <PropertyFieldHeader {...this.props} />
        <Slider {..._.omit(this.props, ['label'])} />
      </div>
    );
  }
}
