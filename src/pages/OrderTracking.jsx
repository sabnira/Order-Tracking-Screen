import { useState } from "react";
import OrderHeader from "../components/OrderHeader";
import StatusBanner from "../components/StatusBanner";
// import OrderTimeline from "../components/OrderTimeline";
// import OrderSummary from "../components/OrderSummary";
// import SupportCard from "../components/SupportCard";
import { orders } from "../data/orders";

const OrderTracking = () => {

    const [status, setStatus] = useState("in-transit");

    const order = orders[status];

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="mx-auto min-h-screen max-w-md bg-base-100 shadow-xl">
                <OrderHeader orderNumber={order.orderNumber} />

                {/* Development state switcher */}
                <div className="border-b border-base-200 bg-base-100 px-4 py-3">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                        Preview State
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setStatus("in-transit")}
                            className={`btn btn-xs ${status === "in-transit"
                                    ? "btn-primary"
                                    : "btn-outline"
                                }`}
                        >
                            In Transit
                        </button>

                        <button
                            onClick={() => setStatus("delayed")}
                            className={`btn btn-xs ${status === "delayed"
                                    ? "btn-primary"
                                    : "btn-outline"
                                }`}
                        >
                            Delayed
                        </button>

                        <button
                            onClick={() => setStatus("delivered-not-received")}
                            className={`btn btn-xs ${status === "delivered-not-received"
                                    ? "btn-primary"
                                    : "btn-outline"
                                }`}
                        >
                            Not Received
                        </button>

                        <button
                            onClick={() => setStatus("tracking-unavailable")}
                            className={`btn btn-xs ${status === "tracking-unavailable"
                                    ? "btn-primary"
                                    : "btn-outline"
                                }`}
                        >
                            Tracking Pending
                        </button>
                    </div>
                </div>

                <main className="space-y-7 px-5 py-6">
                    <StatusBanner order={order} />

                    {/* <OrderTimeline status={order.status} />

                    <OrderSummary product={order.product} />

                    <SupportCard status={order.status} /> */}
                </main>

                <footer className="px-5 pb-8 pt-2 text-center">
                    <p className="text-xs text-base-content/35">
                        Order #{order.orderNumber}
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default OrderTracking;