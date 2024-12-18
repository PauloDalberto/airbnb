import api from "../api";

export const listHouses = async (status: boolean) => {
  try {
    console.log('Enviando requisição para /houses com status:', status);
    const response = await api.get('/houses', {
      params: { status },
    });
    console.log('Resposta da API:', response.data);
    return response.data;
  } catch (error: unknown) {
    console.error('Erro ao buscar casas:', error);
    throw error; // Repassa o erro para ser tratado no componente
  }
};
