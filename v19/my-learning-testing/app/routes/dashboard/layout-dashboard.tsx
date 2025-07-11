import { Outlet } from 'react-router';

import { AppSidebar } from '~/components/app-sidebar';

import { SiteHeader } from '~/components/site-header';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';

const LayoutDashboard = () => {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <Outlet></Outlet>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default LayoutDashboard;
