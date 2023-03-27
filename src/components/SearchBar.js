import React from 'react'
import { useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search news" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
            <button className="btn btn-outline-info mx-3" type="submit">Search</button>
        </form>
    )
}
