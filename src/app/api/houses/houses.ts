import api from "../../services/api";

export const listHouses = async (status: boolean) => {
  try {
    const response = await api.get('/houses', {
      params: { status },
    });

    return response.data;
  } catch (error: unknown) {
    console.error('Erro ao buscar casas:', error);
    throw error; 
  }
};
