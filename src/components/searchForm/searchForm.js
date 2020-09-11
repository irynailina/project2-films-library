import './searchForm.css';
import searchForm from '../../templates/searchForm.hbs';
import apiServicesFetch from '../../services/services';
import { renderSearchResultGalleryList } from '../mainFilmsList/mainFilmsList';

const refs = {
  input: document.querySelector('.search-form_input'),
  searchInput: document.querySelector('.search-form_wrapper'),
  formSearch: document.querySelector('#js-form'),
  galleryList: document.querySelector('.js-gallery_list'),
};

const markup = searchForm();
refs.searchInput.insertAdjacentHTML('beforeend', markup);
refs.formSearch = document.querySelector('#js-form');

refs.formSearch.addEventListener('submit', hundleSubmit);

export function hundleSubmit(e) {
  e.preventDefault();

  apiServicesFetch.page = 1;
  const inputQuery = e.currentTarget.elements.query.value;

  apiServicesFetch.searchQuery = inputQuery;

  renderSearchResultGalleryList();
}
