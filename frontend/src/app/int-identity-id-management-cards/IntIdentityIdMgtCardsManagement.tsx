import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { observer } from "mobx-react";
import IntIdentityIdMgtCardsEdit from "./IntIdentityIdMgtCardsEdit";
import IntIdentityIdMgtCardsBrowse from "./IntIdentityIdMgtCardsBrowse";
import { PaginationConfig } from "antd/es/pagination";
import { action, observable, makeObservable } from "mobx";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig
} from "@haulmont/jmix-react-ui";

type Props = RouteComponentProps<{ entityId?: string }>;

class IntIdentityIdMgtCardsManagementComponent extends React.Component<Props> {
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
      <IntIdentityIdMgtCardsEdit entityId={entityId} />
    ) : (
      <IntIdentityIdMgtCardsBrowse
        onPagingChange={this.onPagingChange}
        paginationConfig={this.paginationConfig}
      />
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("intIdentityIdMgtCardsManagement", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export enum IntIdentityIdMgtCardsManagementPaths {
  PATH = "/intIdentityIdMgtCardsManagement",
  NEW_SUBPATH = "new"
}

export const IntIdentityIdMgtCardsManagement = observer(
  withRouter(IntIdentityIdMgtCardsManagementComponent)
);