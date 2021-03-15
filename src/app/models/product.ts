export class Product {
    id: number = null;
    partner_id: number = null;
    product_category_id: number = null;
    name: string = null;
    description: string = null;
    unit_price: number = null;
    product_allergen_ids: number[] = [];
    discount: number = null;
    image: string = null;
}