export interface Product {
    id: string
    name: string
    description: string
    image: string            // local in /public/images or absolute URL
    buyUrl?: string          // link to Woo / external cart
    priceMatch?: boolean     // true → button shows “PRICE MATCH”
    soldOut?: boolean        // true → button disabled, label “SOLD OUT”
  }
  