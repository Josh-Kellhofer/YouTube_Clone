import React, { useState } from 'react';
import ".SearchBar.css";

const SearchBar = (props) => {

const [SearchRequest, SetSearchRequest] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  props.getSearchResults(searchRequest);
  SetSearchRequest('');
}
}