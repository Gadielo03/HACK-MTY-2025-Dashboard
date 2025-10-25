import { useState, useCallback } from 'react';
import { UserService } from '../services/userService';

const userService = new UserService();

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    const data = await userService.getAllUsers();
    setLoading(false);
    return data;
  }, []);

  const getUserById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    const data = await userService.getSingleUserById(id);
    setLoading(false);
    return data;
  }, []);

  const getUserRules = useCallback(async (client_id: string) => {
    setLoading(true);
    setError(null);
    const data = await userService.getAllUserRules(client_id);
    setLoading(false);
    return data;
  }, []);

  return {
    loading,
    error,
    getAllUsers,
    getUserById,
    getUserRules,
  };
};
