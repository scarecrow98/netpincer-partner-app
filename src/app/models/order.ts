export class OrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    unit_price: number;
    subtotal: number;
    product_name: string;
}

export class Order {
    id: number;
    partner_id: number;
    order_date: string;
    payment_type: string;
    description: string;
    status: string;
    needs_delivery: boolean;
    courier_share_percent: number;
    user_name: string;
    user_email: string;
    user_phone_number: string;
    user_address: string;
    total: number;
    items: OrderItem[];
}
