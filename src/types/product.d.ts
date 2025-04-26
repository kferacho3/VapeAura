export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  buyUrl?: string;
  soldOut?: boolean;
  priceMatch?: boolean;

  /** Primary storefront category */
  category:
    | "Bongs"
    | "Nails & Bangers"
    | "E-Vapes"
    | "Glass Pipes"
    | "Dab Rigs"
    | "Grinders"
    | "Bubblers"
    | "Ash Catchers"
    | "Torches"
    | "MYSTERY BOX"
    | "Rolling Paper / Trays / Tips"
    | "Nectar Collector"
    | "Tobacco"            // ← newly allowed
    | "CBD / Hemp"         // ← newly allowed
    | "Misc.";
}
