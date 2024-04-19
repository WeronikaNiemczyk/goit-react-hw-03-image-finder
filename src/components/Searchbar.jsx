import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  }

    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              value={query}
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
              onChange={event => setQuery(event.target.value)}
            />
          </form>
        </header>
      </>
    );
  };

