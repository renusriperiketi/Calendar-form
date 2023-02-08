import * as React from 'react';
import { SchedulerForm } from '@progress/kendo-react-scheduler';
import { CustomFormDialog } from './custom-form-dialog';
export class FormWithCustomDialog extends React.Component {
  render() {
    return <SchedulerForm {...this.props} dialog={CustomFormDialog} />;
  }
}