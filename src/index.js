import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/';
import SearchPanel from './components/search-panel/';
import TodoList from './components/todo-list/';
import ItemStatusFilter from './components/item-status-filter/';

const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make awesome app', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3}
];


const el = (
    <div className = "row">
        <div className="mx-auto">
            <AppHeader />
            <div className="top-panel d-flex mb-2"> 
                <div className="row">
                    <div className="col-6">
                        <SearchPanel />
                    </div>
                    <div className="col-4">
                        <ItemStatusFilter / >
                    </div>
                </div>
            </div>
            <TodoList todos={todoData} />
        </div>

    </div>
);

ReactDOM.render(el, document.getElementById('root'));