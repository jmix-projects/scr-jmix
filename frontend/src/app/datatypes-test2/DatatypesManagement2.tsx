import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import DatatypesEdit2 from "./DatatypesEdit2";
import DatatypesBrowse2 from "./DatatypesBrowse2";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class DatatypesManagement2Component extends React.Component<Props> {
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
      <DatatypesEdit2 entityId={entityId} />
    ) : (
      <DatatypesBrowse2
        onPagingChange={this.onPagingChange}
        paginationConfig={this.paginationConfig}
      />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("datatypesManagement2", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum DatatypesManagement2Paths {
  PATH = "/datatypesManagement2",
  NEW_SUBPATH = "new"
}

export const DatatypesManagement2 = observer(
  withRouter(DatatypesManagement2Component)
);