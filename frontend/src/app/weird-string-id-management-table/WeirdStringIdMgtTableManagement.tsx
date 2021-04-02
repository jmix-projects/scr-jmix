import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import WeirdStringIdMgtTableEdit from "./WeirdStringIdMgtTableEdit";
import WeirdStringIdMgtTableBrowse from "./WeirdStringIdMgtTableBrowse";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class WeirdStringIdMgtTableManagementComponent extends React.Component<Props> {
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
      <WeirdStringIdMgtTableEdit entityId={entityId} />
    ) : (
      <WeirdStringIdMgtTableBrowse />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("weirdStringIdMgtTableManagement", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum WeirdStringIdMgtTableManagementPaths {
  PATH = "/weirdStringIdMgtTableManagement",
  NEW_SUBPATH = "new"
}

export const WeirdStringIdMgtTableManagement = observer(
  withRouter(WeirdStringIdMgtTableManagementComponent)
);
