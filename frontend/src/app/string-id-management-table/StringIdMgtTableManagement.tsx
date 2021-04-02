import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import StringIdMgtTableEdit from "./StringIdMgtTableEdit";
import StringIdMgtTableBrowse from "./StringIdMgtTableBrowse";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class StringIdMgtTableManagementComponent extends React.Component<Props> {
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
      <StringIdMgtTableEdit entityId={entityId} />
    ) : (
      <StringIdMgtTableBrowse />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("stringIdMgtTableManagement", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum StringIdMgtTableManagementPaths {
  PATH = "/stringIdMgtTableManagement",
  NEW_SUBPATH = "new"
}

export const StringIdMgtTableManagement = observer(
  withRouter(StringIdMgtTableManagementComponent)
);
