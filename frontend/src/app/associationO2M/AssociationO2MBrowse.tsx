import * as React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { observable, makeObservable } from "mobx";
import { Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import {
  collection,
  injectMainStore,
  MainStoreInjected,
  EntityPermAccessControl
} from "@haulmont/jmix-react-core";
import { DataTable, Spinner } from "@haulmont/jmix-react-ui";

import { AssociationO2MTestEntity } from "../../jmix/entities/scr_AssociationO2MTestEntity";
import { SerializedEntity, getStringId } from "@haulmont/jmix-rest";
import { AssociationO2MManagementPaths } from "./AssociationO2MManagement";
import {
  FormattedMessage,
  injectIntl,
  WrappedComponentProps
} from "react-intl";

class AssociationO2MBrowseComponent extends React.Component<
  MainStoreInjected & WrappedComponentProps
> {
  dataCollection = collection<AssociationO2MTestEntity>(
    AssociationO2MTestEntity.NAME,
    {
      view: "associationO2MTestEntity-view"
    }
  );
  selectedRowKey: string | null = null;

  fields = ["name", "datatypesTestEntity"];

  showDeletionDialog = (e: SerializedEntity<AssociationO2MTestEntity>) => {
    Modal.confirm({
      title: this.props.intl.formatMessage(
        { id: "management.browser.delete.areYouSure" },
        { instanceName: e._instanceName }
      ),
      okText: this.props.intl.formatMessage({
        id: "management.browser.delete.ok"
      }),
      cancelText: this.props.intl.formatMessage({ id: "common.cancel" }),
      onOk: () => {
        this.selectedRowKey = null;
        return this.dataCollection.delete(e);
      }
    });
  };

  constructor(props: MainStoreInjected & WrappedComponentProps) {
    super(props);

    makeObservable(this, {
      selectedRowKey: observable
    });
  }

  render() {
    if (this.props.mainStore?.isEntityDataLoaded() !== true) return <Spinner />;

    const buttons = [
      <EntityPermAccessControl
        entityName={AssociationO2MTestEntity.NAME}
        operation="create"
        key="create"
      >
        <Link
          to={
            AssociationO2MManagementPaths.PATH +
            "/" +
            AssociationO2MManagementPaths.NEW_SUBPATH
          }
        >
          <Button
            htmlType="button"
            style={{ margin: "0 12px 12px 0" }}
            type="primary"
            icon={<PlusOutlined />}
          >
            <span>
              <FormattedMessage id="common.create" />
            </span>
          </Button>
        </Link>
      </EntityPermAccessControl>,
      <EntityPermAccessControl
        entityName={AssociationO2MTestEntity.NAME}
        operation="update"
        key="update"
      >
        <Link
          to={AssociationO2MManagementPaths.PATH + "/" + this.selectedRowKey}
        >
          <Button
            htmlType="button"
            style={{ margin: "0 12px 12px 0" }}
            disabled={!this.selectedRowKey}
            type="default"
          >
            <FormattedMessage id="common.edit" />
          </Button>
        </Link>
      </EntityPermAccessControl>,
      <EntityPermAccessControl
        entityName={AssociationO2MTestEntity.NAME}
        operation="delete"
        key="delete"
      >
        <Button
          htmlType="button"
          style={{ margin: "0 12px 12px 0" }}
          disabled={!this.selectedRowKey}
          onClick={this.deleteSelectedRow}
          type="default"
        >
          <FormattedMessage id="common.remove" />
        </Button>
      </EntityPermAccessControl>
    ];

    return (
      <DataTable
        dataCollection={this.dataCollection}
        fields={this.fields}
        onRowSelectionChange={this.handleRowSelectionChange}
        hideSelectionColumn={true}
        buttons={buttons}
      />
    );
  }

  getRecordById(id: string): SerializedEntity<AssociationO2MTestEntity> {
    const record:
      | SerializedEntity<AssociationO2MTestEntity>
      | undefined = this.dataCollection.items.find(
      record => getStringId(record.id!) === id
    );

    if (!record) {
      throw new Error("Cannot find entity with id " + id);
    }

    return record;
  }

  handleRowSelectionChange = (selectedRowKeys: string[]) => {
    this.selectedRowKey = selectedRowKeys[0];
  };

  deleteSelectedRow = () => {
    this.showDeletionDialog(this.getRecordById(this.selectedRowKey!));
  };
}

const AssociationO2MBrowse = injectIntl(
  injectMainStore(observer(AssociationO2MBrowseComponent))
);

export default AssociationO2MBrowse;