import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import { FormWithCustomDialog } from './custom-form';
import { displayDate, sampleData } from './events-utc';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }
  handleDataChange = ({
    created,
    updated,
    deleted
  }) => {
    this.setState(old => ({
      data: old.data.filter(item => deleted.find(current => current.id === item.id) === undefined).map(item => updated.find(current => current.id === item.id) || item).concat(created.map(item => Object.assign({}, item, {
        id: guid()
      })))
    }));
  };
  render() {
    return <Scheduler editable={true} defaultDate={displayDate} data={this.state.data} onDataChange={this.handleDataChange} form={FormWithCustomDialog}>
        <DayView />
      </Scheduler>;
  }
}
ReactDOM.render(<App />, document.querySelector('my-app'));