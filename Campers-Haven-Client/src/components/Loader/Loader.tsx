import React from "react";

import { Flex, Spin } from "antd";

const Loader: React.FC = () => {
  const [percent, setPercent] = React.useState(-50);
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [percent]);

  return (
    <Flex align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  );
};

export default Loader;
