import type { User, UserRule } from '../types/user';

export class UserService {
  private API_URL = import.meta.env.VITE_API_URL || 'http://18.216.25.43:8080';

  public async getAllUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${this.API_URL}/users`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  }

  public async getSingleUserById(id: string): Promise<User | null> {
    try {
      const response = await fetch(`${this.API_URL}/users/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.success ? data.data : null;
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      throw error;
    }
  }

  public async getAllUserRules(client_id: string): Promise<UserRule[]> {
    try {
      const response = await fetch(`${this.API_URL}/users/${client_id}/rules`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.success ? data.data : [];
    } catch (error) {
      console.error(`Error fetching rules for client_id ${client_id}:`, error);
      throw error;
    }
  }
}
