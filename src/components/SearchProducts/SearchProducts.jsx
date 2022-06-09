import React, { useState } from "react";
import SearchProduct from "./presentational/SearchProduct";
import "./SearchProducts.scss";

const SearchProducts = () => {
  let categories = ["Cloth", "Technology", "Art", "Services"];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilter = (e) => {
    let value = e.currentTarget.name != "rating" ?  e.currentTarget.value : Number(e.currentTarget.value)
    setFilter({
      ...filter,
      [e.currentTarget.name]: value,
    });
  };

  return (
    <section className="search">
      <aside className="search-filter">
        <div className="search-filter__container">
          <ul className="search-filter__container__list">
            <button
              name="categories"
              onClick={() => setFilter({})}
              className="search-filter__container__list__tag"
            >
              All
            </button>
            {categories.map((cat, i) => (
              <button
                name="categories"
                onClick={(e) => handleFilter(e)}
                className="search-filter__container__list__tag"
                key={i}
                value={cat}
              >
                {cat}
              </button>
            ))}
          </ul>
        </div>
        <div className="search-filter__stars">
          {[1, 2, 3, 4, 5].map((rat, i) => (
            <button
              name="rating"
              onClick={(e) => handleFilter(e)}
              className="search-filter__stars__star"
              key={i}
              value={rat}
            >
              {[...Array(rat).keys()].map((el, i) => (
                <span key={i}>
                  ⭐
                </span>
              ))}
            </button>
          ))}
        </div>
        <div className="search-filter__container time">
          {["newest", "oldest"].map((elem) => (
            <button
              className="search-filter__container__list__tag"
              value={elem}
              onClick={() => setSort(elem)}
            >
              {elem}
            </button>
          ))}
        </div>
      </aside>
      <main className="search-products">
        <SearchProduct filters={filter} time={sort} />
      </main>
    </section>
  );
};

export default SearchProducts;
