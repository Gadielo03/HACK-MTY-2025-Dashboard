import { useState, useCallback } from 'react';
import { PurchaseService } from '../services/purchaseService';

const purchaseService = new PurchaseService();

export const usePurchases = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getPurchasesByAccount = useCallback(async (accountId: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await purchaseService.getPurchasesByAccount(accountId);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      throw err;
    }
  }, []);

  return {
    loading,
    error,
    getPurchasesByAccount,
  };
};
