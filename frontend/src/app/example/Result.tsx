import React from "react";
import {Avatar, Button, Card, Collapse, Divider, Result,} from "antd";
import {SettingOutlined} from "@ant-design/icons";
const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

export class ResultComponent extends React.Component<any, any> {

  render() {
    return (
      <div>
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console2
            </Button>,
            <Button key="buy">
              Buy Again
            </Button>,
          ]}
        />
        <Collapse
          defaultActiveKey={['1']}
          expandIconPosition={'right'}
        >
          <Collapse.Panel header="This is panel header 1" key="1" extra={genExtra()}>
            <div>
              A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.
            </div>
          </Collapse.Panel>
          <Collapse.Panel header="This is panel header 2" key="2" extra={genExtra()}>
            <div> A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.
            </div>
          </Collapse.Panel>
          <Collapse.Panel header="This is panel header 3" key="3" extra={genExtra()}>
            <div>
              A dog is a type of domesticated animal.
              Known for its loyalty and faithfulness,
              it can be found as a welcome guest in many households across the world.
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }

}