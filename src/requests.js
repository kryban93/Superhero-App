import axios from 'axios';

const ACCES_TOKEN = 1533153713527712;

export const getBasicHeroInfoById = async (id) => {
  const { data: powerstats } = await axios.get(`https://superheroapi.com/api/${ACCES_TOKEN}/${id}/powerstats`);
  const { data: image } = await axios.get(`https://superheroapi.com/api/${ACCES_TOKEN}/${id}/image`);

  return { name: powerstats.name, powerstats, imgUrl: image.url, id: powerstats.id };
};

export const searchHeroByName = (name) => {
  return axios.get(`https://superheroapi.com/api/${ACCES_TOKEN}/search/${name}`);
};
