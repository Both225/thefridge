import { Suspense } from "react";

import Title from "@/app/_components/ui/Title";

import SummaryContainer from "./SummaryContainer";
import Loading from "@/app/loading";

function OrderSummary() {
  return (
    <div className="space-y-4 bg-surface p-4 rounded-lg shadow-raised">
      <Title text={"Order summary"} />

      <Suspense fallback={<Loading />}>
        <SummaryContainer />
      </Suspense>
    </div>
  );
}

export default OrderSummary;
