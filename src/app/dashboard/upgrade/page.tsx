import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

function PricingPage() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 font-extralight text-indigo-600">Pricing</h1>
      Pricing cards
    </div>
  );
}

export default PricingPage;
