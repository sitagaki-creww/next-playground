"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import * as React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
