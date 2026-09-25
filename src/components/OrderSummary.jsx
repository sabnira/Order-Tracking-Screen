import { MdOutlineChevronRight } from "react-icons/md";


const OrderSummary = ({ product }) => {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold">Your Order</h2>

        <button className="btn btn-ghost btn-xs text-primary">
          View details
          <MdOutlineChevronRight />
        </button>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-base-200 bg-base-100 p-4">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-base-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">{product.name}</h3>

          <p className="mt-1 text-sm text-base-content/50">
            Quantity: {product.quantity}
          </p>

          <p className="mt-2 font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;