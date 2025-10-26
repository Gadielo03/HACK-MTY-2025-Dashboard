export interface Purchase {
  purchase_id?: string;
  merchant_id: string;
  medium: string;
  purchase_date: string;
  amount: number;
  status: string;
  description: string;
  account_id?: string;
  created_at?: Date;
}
