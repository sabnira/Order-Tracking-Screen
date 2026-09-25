
import { FaCheckCircle } from "react-icons/fa";

const OrderTimeline = ({ status }) => {
    const steps = [
        {
            key: "placed",
            label: "Order Placed",
            date: "Sep 23",
        },
        {
            key: "processing",
            label: "Processing",
            date: "Sep 23",
        },
        {
            key: "shipped",
            label: "Shipped",
            date: "Sep 24",
        },
        {
            key: "out-for-delivery",
            label: "Out for Delivery",
            date: "Sep 25",
        },
        {
            key: "delivered",
            label: "Delivered",
            date: "",
        },
    ];

    const getCurrentStep = () => {
        if (status === "tracking-unavailable") return 1;
        if (status === "in-transit") return 4;
        if (status === "delayed") return 3;
        if (status === "delivered-not-received") return 5;

        return 1;
    };

    const currentStep = getCurrentStep();

    return (
        <section>
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-bold">Delivery Progress</h2>

                <span className="text-xs font-medium text-base-content/50">
                    {status === "tracking-unavailable"
                        ? "Tracking pending"
                        : "Live tracking"}
                </span>
            </div>

            <div>
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const completed = stepNumber < currentStep;
                    const current = stepNumber === currentStep;

                    const isDelayed =
                        status === "delayed" && step.key === "out-for-delivery";

                    const isProblem =
                        status === "delivered-not-received" &&
                        step.key === "delivered";

                    return (
                        <div key={step.key} className="flex min-h-16">
                            <div className="mr-4 flex flex-col items-center">
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 ${completed
                                            ? "border-primary bg-primary text-primary-content"
                                            : isDelayed
                                                ? "border-warning bg-warning/10 text-warning"
                                                : isProblem
                                                    ? "border-error bg-error/10 text-error"
                                                    : current
                                                        ? "border-primary bg-primary/10 text-primary"
                                                        : "border-base-300 bg-base-100 text-base-content/30"
                                        }`}
                                >
                                    {completed ? (
                                        <FaCheckCircle />
                                    ) : (
                                        <span className="h-2 w-2 rounded-full bg-current" />
                                    )}
                                </div>

                                {index !== steps.length - 1 && (
                                    <div
                                        className={`w-0.5 flex-1 ${completed ? "bg-primary" : "bg-base-300"
                                            }`}
                                    />
                                )}
                            </div>

                            <div className="pb-5">
                                <p
                                    className={`text-sm font-semibold ${current || completed
                                            ? "text-base-content"
                                            : "text-base-content/40"
                                        }`}
                                >
                                    {isDelayed ? "Delivery Delayed" : step.label}
                                </p>

                                {step.date && (
                                    <p className="mt-1 text-xs text-base-content/45">
                                        {step.date}
                                    </p>
                                )}

                                {isDelayed && (
                                    <p className="mt-1 text-xs text-warning">
                                        We're working to get your order to you.
                                    </p>
                                )}

                                {isProblem && (
                                    <p className="mt-1 text-xs text-error">
                                        Delivery reported, but package not received.
                                    </p>
                                )}

                                {status === "tracking-unavailable" &&
                                    step.key === "processing" && (
                                        <p className="mt-1 text-xs text-base-content/50">
                                            Tracking will appear once your order ships.
                                        </p>
                                    )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default OrderTimeline;