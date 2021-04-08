import * as React from "react";
import { observer } from "mobx-react";

import { DatatypesTestEntity } from "../../jmix/entities/scr_DatatypesTestEntity";
import { Card } from "antd";
import {
  collection,
  MainStoreInjected,
  injectMainStore
} from "@haulmont/jmix-react-core";
import {
  addPagingParams,
  createPagingConfig,
  defaultPagingConfig,
  EntityProperty,
  Paging,
  setPagination,
  Spinner
} from "@haulmont/jmix-react-ui";
import { getStringId } from "@haulmont/jmix-rest";
import {
  action,
  IReactionDisposer,
  observable,
  reaction,
  makeObservable
} from "mobx";
import { PaginationConfig } from "antd/es/pagination";
import { RouteComponentProps, withRouter } from "react-router";

type Props = MainStoreInjected & RouteComponentProps;

export class DatatypesCardsComponent extends React.Component<Props> {
  dataCollection = collection<DatatypesTestEntity>(DatatypesTestEntity.NAME, {
    view: "datatypesTestEntity-view",
    loadImmediately: false
  });

  paginationConfig: PaginationConfig = { ...defaultPagingConfig };
  reactionDisposer: IReactionDisposer;
  fields = [
    "bigDecimalAttr",
    "booleanAttr",
    "dateAttr",
    "dateTimeAttr",
    "doubleAttr",
    "integerAttr",
    "longAttr",
    "stringAttr",
    "timeAttr",
    "uuidAttr",
    "localDateTimeAttr",
    "offsetDateTimeAttr",
    "localDateAttr",
    "localTimeAttr",
    "offsetTimeAttr",
    "enumAttr",
    "name",
    "readOnlyStringAttr",
    "associationO2Oattr",
    "associationM2Oattr",
    "compositionO2Oattr",
    "intIdentityIdTestEntityAssociationO2OAttr",
    "stringIdTestEntityAssociationO2O",
    "stringIdTestEntityAssociationM2O"
  ];

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

    this.reactionDisposer = reaction(
      () => this.paginationConfig,
      paginationConfig =>
        setPagination(paginationConfig, this.dataCollection, true)
    );
    setPagination(this.paginationConfig, this.dataCollection, true);
  }

  componentWillUnmount() {
    this.reactionDisposer();
  }

  render() {
    const { status, items, count } = this.dataCollection;

    if (status === "LOADING") return <Spinner />;

    return (
      <div className="narrow-layout">
        {items.map(e => (
          <Card
            title={e._instanceName}
            key={e.id ? getStringId(e.id) : undefined}
            style={{ marginBottom: "12px" }}
          >
            {this.fields.map(p => (
              <EntityProperty
                entityName={DatatypesTestEntity.NAME}
                propertyName={p}
                value={e[p]}
                key={p}
              />
            ))}
          </Card>
        ))}

        {!this.paginationConfig.disabled && (
          <div style={{ margin: "12px 0 12px 0", float: "right" }}>
            <Paging
              paginationConfig={this.paginationConfig}
              onPagingChange={this.onPagingChange}
              total={count ?? undefined}
            />
          </div>
        )}
      </div>
    );
  }

  onPagingChange = (current: number, pageSize: number) => {
    this.props.history.push(
      addPagingParams("datatypesCards", current, pageSize)
    );
    this.paginationConfig = { ...this.paginationConfig, current, pageSize };
  };
}

export const DatatypesCards = injectMainStore(
  observer(withRouter(DatatypesCardsComponent))
);