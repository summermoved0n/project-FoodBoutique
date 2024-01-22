export default class FoodBoutiqueApi {
  async getFetchProduct() {
    const url =
      'https://food-boutique.b.goit.study/api/products?page=1&limit=18';
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    return data;
  }

  async getFetchPopular() {
    const url =
      'https://food-boutique.b.goit.study/api/products/popular?limit=5';
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    return data;
  }

  async getFetchDiscount() {
    const url = 'https://food-boutique.b.goit.study/api/products/discount';
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    return data;
  }

  async getFetchCategories() {
    const url = 'https://food-boutique.b.goit.study/api/products/categories';
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    return data;
  }

  async getFetchById(id) {
    const url = `https://food-boutique.b.goit.study/api/products/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error('Oops, something went wrong! 😥'));
    }
    const data = await response.json();
    return data;
  }
}
