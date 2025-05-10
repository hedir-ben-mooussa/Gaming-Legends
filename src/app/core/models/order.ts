import { Product } from './product';
// import { Status } from './status.enum';
// import { PaymentType } from './payment-type.enum';

export interface Order {
  id?: number;
  totalPrice: number;
//   status: Status;
//   paymentType: PaymentType;
  products: Product[];
}
