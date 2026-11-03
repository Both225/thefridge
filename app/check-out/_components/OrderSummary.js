import Title from "@/app/_components/ui/Title";

import SummaryContainer from "./SummaryContainer";
import { Suspense } from "react";
import Loading from "@/app/loading";

function OrderSummary() {
  return (
    <div className="space-y-4">
      <Title text={"Order summary"} />

      <Suspense fallback={<Loading />}>
        <SummaryContainer />
      </Suspense>
    </div>
  );
}

export default OrderSummary;
