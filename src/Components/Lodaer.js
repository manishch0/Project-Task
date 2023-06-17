import { Alert, Spin, Switch } from "antd";
import React, { useState } from "react";
const Loader = () => {
  const [loading, setLoading] = useState(false);
  const toggle = (checked) => {
    setLoading(checked);
  };
  const container = (
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
    />
  );
  return (
    <div>
      <Spin spinning={loading} delay={500}>
        {container}
      </Spin>
      <div
        style={{
          marginTop: 16,
        }}
      >
        Loading state：
        <Switch checked={loading} onChange={toggle} />
      </div>
    </div>
  );
};
export default Loader;
