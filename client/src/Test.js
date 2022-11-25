import React from "react";
import { Timeline } from "antd";

const Test = ({ nodes = [] }) => {
  return (
    <Timeline>
      {nodes.map((node) => (
        <Timeline.Item key={node.id}>{node.name}</Timeline.Item>
      ))}
    </Timeline>
  );
};

export default Test;
