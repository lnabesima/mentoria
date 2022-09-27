import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert, { AlertStatus } from '../components/Alert';


export default {
  title: 'Example/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  status: AlertStatus.Ok,
};
