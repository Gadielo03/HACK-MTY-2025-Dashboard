export interface User {
  purchase_id: string;
  client_id: string;
  userRules: UserRule[];
}

export interface UserRule {
  id: string;
  client_id: string;
  description: string;
  min_threshold: number;
  max_threshold: number;
  percentage: number;
}
