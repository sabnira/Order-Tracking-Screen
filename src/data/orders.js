export const orders = {
  "in-transit": {
    status: "in-transit",
    orderNumber: "ORD-2026-001",
    statusTitle: "Out for Delivery",
    statusDescription: "Your order is on its way to you.",
    estimatedDelivery: "Today, by 8:00 PM",
    product: {
      name: "Wireless Headphones",
      quantity: 1,
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    },
  },

  delayed: {
    status: "delayed",
    orderNumber: "ORD-2026-001",
    statusTitle: "Delivery Delayed",
    statusDescription:
      "We're sorry. Your order is taking longer than expected.",
    estimatedDelivery: "September 27, 2026",
    originalDelivery: "September 25, 2026",
    product: {
      name: "Wireless Headphones",
      quantity: 1,
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    },
  },

  "delivered-not-received": {
    status: "delivered-not-received",
    orderNumber: "ORD-2026-001",
    statusTitle: "Marked as Delivered",
    statusDescription:
      "Our system says your order was delivered, but you haven't received it.",
    estimatedDelivery: "September 25, 2026 at 3:42 PM",
    product: {
      name: "Wireless Headphones",
      quantity: 1,
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    },
  },

  "tracking-unavailable": {
    status: "tracking-unavailable",
    orderNumber: "ORD-2026-001",
    statusTitle: "Tracking Not Available Yet",
    statusDescription:
      "Your order has been placed, but tracking information isn't available yet.",
    estimatedDelivery: "Estimated September 28, 2026",
    product: {
      name: "Wireless Headphones",
      quantity: 1,
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    },
  },
};