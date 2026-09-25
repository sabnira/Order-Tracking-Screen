
import { FaArrowLeft } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

const OrderHeader = ({ orderNumber }) => {
  return (
    <header className="flex items-center justify-between border-b border-base-200 px-5 py-4">
      <button className="btn btn-ghost btn-sm -ml-2 gap-1">
        <FaArrowLeft className="text-sm"/>
        <span>Orders</span>
      </button>

      <span className="text-sm font-medium text-base-content/60">
        Order #{orderNumber}
      </span>

      <button className="btn btn-ghost btn-circle btn-sm">
        <FiMoreVertical className="text-lg"/>
      </button>
    </header>
  );
};

export default OrderHeader;