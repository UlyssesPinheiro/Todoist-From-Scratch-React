import React, { useContext, useState } from "react";

const SidebarCtx = React.createContext();
const SidebarUpdateCtx = React.createContext();

export function useSidebar() {
  return useContext(SidebarCtx);
}
export function useSidebarUpdate() {
  return useContext(SidebarUpdateCtx);
}

export function SidebarProvider({ children }) {
  const [sidebar, setSidebar] = useState(true);

  function toggleSidebar() {
    setSidebar((e) => !e);
  }

  return (
    <SidebarCtx.Provider value={sidebar}>
      <SidebarUpdateCtx.Provider value={toggleSidebar}>
        {children}
      </SidebarUpdateCtx.Provider>
    </SidebarCtx.Provider>
  );
}
