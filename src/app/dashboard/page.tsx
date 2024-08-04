import React from "react";

import { Metadata } from "next";
import Documents from "@/components/Documents";

export const metadata: Metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

function DashboardPage() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 font-extralight text-indigo-600">
        My Documents
      </h1>

      <Documents />
    </div>
  );
}

export default DashboardPage;
