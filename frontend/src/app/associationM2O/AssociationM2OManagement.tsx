import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import AssociationM2OEdit from "./AssociationM2OEdit";
import AssociationM2OBrowse from "./AssociationM2OBrowse";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class AssociationM2OManagementComponent extends React.Component<Props> {
  paginationConfig: PaginationConfig = { ...defaultPagingConfig };

  constructor(props: Props) {
    super(props);

    makeObservable(this, {
      paginationConfig: observable,
      onPagingChange: action
    });
  }

  componentDidMount(): void {
    // to disable paging config pass 'true' as disabled param in function below
    this.paginationConfig = createPagingConfig(this.props.location.search);
  }

  render() {
    const { entityId } = this.props.match.params;
    return entityId ? (
      <AssociationM2OEdit entityId={entityId} />
    ) : (
      <AssociationM2OBrowse />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("associationM2OManagement", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum AssociationM2OManagementPaths {
  PATH = "/associationM2OManagement",
  NEW_SUBPATH = "new"
}

export const AssociationM2OManagement = observer(
  withRouter(AssociationM2OManagementComponent)
);
