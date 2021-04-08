import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import BoringStringIdMgtTableEdit from "./BoringStringIdMgtTableEdit";
import BoringStringIdMgtTableBrowse from "./BoringStringIdMgtTableBrowse";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class BoringStringIdManagementTableComponent extends React.Component<Props> {
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
      <BoringStringIdMgtTableEdit entityId={entityId} />
    ) : (
      <BoringStringIdMgtTableBrowse />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("boringStringIdManagementTable", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum BoringStringIdManagementTablePaths {
  PATH = "/boringStringIdManagementTable",
  NEW_SUBPATH = "new"
}

export const BoringStringIdManagementTable = observer(
  withRouter(BoringStringIdManagementTableComponent)
);