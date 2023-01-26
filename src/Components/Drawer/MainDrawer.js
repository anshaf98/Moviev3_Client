import Drawer from "rc-drawer";
import React from "react";

const MainDrawer = ({ children, drawerOpen, closeDrawer }) => {
  return (
    <Drawer
      open={drawerOpen}
      onClose={closeDrawer}
      level={null}
      handler={false}
      placement="right"
    >
      {children}
    </Drawer>
  );
};

export default MainDrawer;
