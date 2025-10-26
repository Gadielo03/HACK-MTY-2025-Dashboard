import type { Purchase } from '../types/purchase';

export class PurchaseService {
  private API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

  public async getPurchasesByAccount(accountId: string): Promise<Purchase[]> {
    try {
      const url = `${this.API_BASE_URL}/purchases/${accountId}/purchases`;
      console.log('Fetching purchases from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.message || 'Failed to fetch purchases');
      }

      const data = await response.json();
      console.log('Raw response data:', data);

      // La API podría devolver los datos en diferentes formatos
      // Verifica si los datos están en una propiedad específica
      if (Array.isArray(data)) {
        return data;
      } else if (data && Array.isArray(data.purchases)) {
        return data.purchases;
      } else if (data && Array.isArray(data.data)) {
        return data.data;
      } else if (data && Array.isArray(data.results)) {
        return data.results;
      } else {
        console.error('Unexpected data format:', data);
        return [];
      }
    } catch (error) {
      console.error('Error getting purchases by account:', error);
      throw error;
    }
  }
}
