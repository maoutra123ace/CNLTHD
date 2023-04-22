import React from "react";
import { Alert, Spin } from "antd";
function PageLoading() {
  return (
    <>
      <Spin tip="Loading..."></Spin>
      <Alert
        message="Vui lòng chờ đợi thông tin đang tải "
        type="info"
      />
    </>
  );
}

export default PageLoading;
