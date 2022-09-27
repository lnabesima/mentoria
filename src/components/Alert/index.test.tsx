import React from 'react';
import customRender from  '../../test/theme';

import Alert, { AlertStatus } from './index';

describe('[ALERT]',  () => {
  it('should render with default props', () => {
    const wrapper = customRender(<Alert status={AlertStatus.Ok} />)

    expect(wrapper.baseElement).toMatchSnapshot();
  })

  it('should render with custom props', () => {
    const wrapper = customRender(<Alert status={AlertStatus.Warning} size="medium" />)

    expect(wrapper.baseElement).toMatchSnapshot();
  })
});
