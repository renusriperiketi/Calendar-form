import * as React from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import {
  SchedulerEditItemPropsContext,
  SchedulerEditItemRemoveItemContext,
  SchedulerEditItemFormItemContext,
  SchedulerEditItemShowRemoveDialogContext
} from "@progress/kendo-react-scheduler";
export class CustomFormDialog extends React.Component {
  render() {
    const Title = (
      <SchedulerEditItemPropsContext.Consumer>
        {(editItemProps) => (
          <SchedulerEditItemRemoveItemContext.Consumer>
            {([, setRemoveItem]) => (
              <SchedulerEditItemFormItemContext.Consumer>
                {([, setFormItem]) => (
                  <SchedulerEditItemShowRemoveDialogContext.Consumer>
                    {([, setShowRemoveItemDialog]) => (
                      <React.Fragment>
                        {this.props.title}&nbsp;
                        <Button
                          onClick={() => {
                            // Sets the item to be removed
                            setRemoveItem(editItemProps.dataItem);
                            // Closes the form
                            setFormItem(null);
                            // Shows the remove confirmation dialog
                            setShowRemoveItemDialog(true);
                          }}
                          fillMode="flat"
                          icon="delete"
                        />
                      </React.Fragment>
                    )}
                  </SchedulerEditItemShowRemoveDialogContext.Consumer>
                )}
              </SchedulerEditItemFormItemContext.Consumer>
            )}
          </SchedulerEditItemRemoveItemContext.Consumer>
        )}
      </SchedulerEditItemPropsContext.Consumer>
    );
    return <Dialog {...this.props} title={Title} />;
  }
}
