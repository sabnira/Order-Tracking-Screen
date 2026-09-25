
import { LuMessageCircle } from "react-icons/lu";
import { TbAlertTriangle } from "react-icons/tb";

const SupportCard = ({ status }) => {
  const issue =
    status === "delayed" ||
    status === "delivered-not-received";

  return (
    <section className="rounded-2xl border border-base-200 bg-base-100 p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-base-200 p-3">
          {issue ? (
            <TbAlertTriangle />
          ) : (
            <LuMessageCircle />
          )}
        </div>

        <div>
          <h2 className="font-bold">
            {issue ? "Need help with your delivery?" : "Need help?"}
          </h2>

          <p className="mt-1 text-sm leading-5 text-base-content/55">
            {status === "delivered-not-received"
              ? "Report the issue and our support team can help investigate your delivery."
              : "Our support team is available to help with your order."}
          </p>
        </div>
      </div>

      <button className="btn btn-outline mt-4 w-full gap-2">
        <LuMessageCircle />
        Contact Support
      </button>
    </section>
  );
};

export default SupportCard;