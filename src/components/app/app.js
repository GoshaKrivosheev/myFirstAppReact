import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John S.', salary: 800, id: 1},
        {name: 'Alex M.', salary: 3000, id: 2},
        {name: 'Carl W.', salary: 5000, id: 3},
      ]
    }
  }

  onDeleteItem = (id) => {
    this.setState(({data}) => ({
      // const index = dataOf.findIndex(elem => elem.id === id);
      data: data.filter(item => item.id !== id)
    }))
  }

  render () {
    return (
      <div className="app">
        <AppInfo/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList data={this.state.data} onDelete={this.onDeleteItem}/>
        <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
