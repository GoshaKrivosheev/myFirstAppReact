import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onChangeValue = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input type="text"
            className="form-control new-post-label"
            onChange={this.onChangeValue}
            name="name"
            value={name}
            placeholder="Как его зовут?" />
          <input type="number"
            className="form-control new-post-label"
            onChange={this.onChangeValue}
            name="salary"
            value={salary}
            placeholder="З/П в $"/>
          <button type="submit"
            className="btn btn-outline-light">Добавить</button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
