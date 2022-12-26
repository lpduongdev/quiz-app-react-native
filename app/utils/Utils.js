import {BASE_URL} from '../constants/api';

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildURL(object) {
  let url = `${BASE_URL}?limit=${object.number.get}&tags=`;
  if (object.mcu.get) {
    url += 'mcu,';
  }
  if (object.business.get) {
    url += 'business,';
  }
  if (object.food.get) {
    url += 'food,';
  }
  if (object.games.get) {
    url += 'games,';
  }
  if (url.lastIndexOf(',') !== -1) {
    url = url.substring(0, url.lastIndexOf(','));
  } else {
    url = `${BASE_URL}?limit=${object.number.get}`;
  }
  return url;
}
