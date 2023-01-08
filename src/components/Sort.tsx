import React from 'react';
import '../styles/Sort.css';
import { sortedProducts } from '../types/types';

interface SortProps extends React.PropsWithChildren {
    search: string;
    selected: string;
    setSortedProducts: (state: any) => void
};

const Sort: React.FC<SortProps> = ({search, selected, setSortedProducts}) => {

    function inputHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setSortedProducts((prev: sortedProducts) => ({...prev, search: e.target.value}))
    }

    function selectHandler (e: React.ChangeEvent<HTMLSelectElement>) {
        setSortedProducts((prev: sortedProducts) => ({...prev, selected: e.target.value}))
    }

    return (
        <div id="sort">
            <div id="search">
                <h4>Поиск по названию</h4>
                <input 
                type="text" 
                value={search} 
                onChange={inputHandler} />
            </div>
            <div id="filter">
                <select 
                value={selected} 
                onChange={selectHandler}>
                    <option value="" disabled>Выберите категорию</option>
                    <option value="computer">Компьютер</option>
                    <option value="clothes">Одежда</option>
                    <option value="toy">Игрушки</option>    
                </select>
            </div>
        </div>
    )
}

export default Sort;
