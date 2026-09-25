import { FaTruckFast } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { LuPackageCheck } from "react-icons/lu";

const StatusBanner = ({ order }) => {
    const statusConfig = {
        "in-transit": {
            icon: FaTruckFast,
            iconClass: "text-primary",
            bgClass: "bg-primary/5 border-primary/10",
            titleClass: "text-primary",
        },

        delayed: {
            icon: IoAlertCircleOutline,
            iconClass: "text-warning",
            bgClass: "bg-warning/10 border-warning/20",
            titleClass: "text-warning",
        },

        "delivered-not-received": {
            icon: FiAlertCircle,
            iconClass: "text-error",
            bgClass: "bg-error/5 border-error/10",
            titleClass: "text-error",
        },

        "tracking-unavailable": {
            icon: LuPackageCheck,
            iconClass: "text-base-content/60",
            bgClass: "bg-base-200 border-base-300",
            titleClass: "text-base-content",
        },
    };


    const config = statusConfig[order?.status] || statusConfig["tracking-unavailable"];
    const Icon = config.icon;

    return (
        <section className={`rounded-2xl border p-5 ${config.bgClass}`}>
            <div className="flex items-start gap-4">
                <div className="rounded-xl bg-base-100 p-3 shadow-sm">
                    <Icon size={24} className={config.iconClass} />
                </div>

                <div className="flex-1">
                    <h1 className={`text-lg font-bold ${config.titleClass}`}>
                        {order?.statusTitle}
                    </h1>

                    <p className="mt-1 text-sm leading-5 text-base-content/65">
                        {order?.statusDescription}
                    </p>

                    <div className="mt-4">
                        <p className="text-xs text-base-content/50">
                            {order?.status === "delayed"
                                ? "New estimated delivery"
                                : order?.status === "delivered-not-received"
                                    ? "Delivery recorded"
                                    : "Estimated delivery"}
                        </p>

                        <p className="mt-1 font-semibold">
                            {order?.estimatedDelivery}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatusBanner;