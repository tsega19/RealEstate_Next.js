import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': 'eabf368e55mshd260cde53097926p1637e4jsne3c9a7de2424',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
  });
    
  return data;
}