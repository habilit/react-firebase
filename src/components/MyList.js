import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import _ from 'lodash';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../actions/simpleAction';
import {fetchToDos, addToDo} from "../actions/todoAction";

import './index.css';

class MyList extends Component {
    state = {
        showForm: false,
        formValue: ""
    };

    inputChange = e => {
        this.setState({formValue: e.target.value});
    };

    formSubmit = e => {
        const {formValue} = this.state;
        const {addToDo} = this.props;
        e.preventDefault();
        addToDo({title: formValue});
        this.setState({formValue: ""});
    };

   componentWillMount() {
       this.props.fetchToDos();
    }

    renderForm = () => {
        const {formValue} = this.state;
            return (
                <div>
                    <form onSubmit={this.formSubmit}>
                        <div>
                            <i>add</i>
                            <input
                                value={formValue}
                                onChange={this.inputChange}
                                id="toDoNext"
                                type="text"
                            />
                            <label htmlFor="toDoNext">What Next?</label>
                        </div>
                    </form>
                </div>
            );
    };

    rowClassNameFormat = (row, rowIdx) => {
        return rowIdx % 1 === 0 ? 'row-even' : 'row-odd';
    };

    renderToDo() {
        const { todos } = this.props;
        return (
            <div className="todo-list">
                {
                    _.isNil(todos) ?
                    <div className="loading">
                        <Loader type="TailSpin" color="#00BFFF" height="30" width="30"/>
                    </div>:
                    <BootstrapTable className='table' data={ todos } trClassName={this.rowClassNameFormat} >
                        <TableHeaderColumn dataField='id' className='column key-column' isKey>ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='title' className='column title-column'>Title</TableHeaderColumn>
                    </BootstrapTable>
                }
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>{this.renderForm()}</div>
                <div>{this.renderToDo()}</div>
            </div>

        );
    }

}

const mappedData = (data) => {
    return _.map(data, (value, key) => {
            return {
                id: key,
                title: value.title
            }
    })
};

const mapStateToProps = state => {
    console.log('--state--');
    console.log(state);
    return {
        todos: mappedData(state.todos),
    };
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
    addToDo: (item) => dispatch(addToDo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);


