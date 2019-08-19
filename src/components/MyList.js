import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import _ from 'lodash';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { simpleAction } from '../actions/simpleAction';
import {fetchToDos, addToDo} from "../actions/todoAction";

import './index.css';
import {Link} from "react-router-dom";

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

    renderTableOld = () => {
        const { todos } = this.props;
        return (<BootstrapTable className='table' data={ todos } trClassName={this.rowClassNameFormat} >
            <TableHeaderColumn dataField='id' className='column key-column' isKey>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='title' className='column title-column'>Title</TableHeaderColumn>
        </BootstrapTable>);
    };

    renderTable = () => {
        const { todos } = this.props;
        if (_.size(todos) === 0) {
            return null;
        }

        return (<div className="table">
            <div className="header">
                <div className="id-column">Id</div>
                <div className="title-column">Title</div>
            </div>
            {
                todos.map(function (item, i) {
                    return (<div className="content-row">
                        <div>{item.id}</div>
                        <div>{item.title}</div>
                    </div>)
                })
            }
        </div>);
    };

    renderToDo() {
        const { todos, isFetching } = this.props;
        return (
            <div className="todo-list">
                {
                    isFetching ?
                    <div className="loading">
                        <Loader type="TailSpin" color="#00BFFF" height="30" width="30"/>
                    </div>:
                    this.renderTable()
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

const displayTitleLink = (title, Id) => {
    return (<Link to={"/view/" + Id}>{title}</Link>)
};

const mappedData = (data) => {
    return _.map(data, (value, key) => {
            return {
                id: key,
                title: displayTitleLink(value.title, key),
            }
    })
};

const mapStateToProps = state => {
    return {
        todos: mappedData(state.todos.data),
        isFetching: state.todos.isFetching,
    };
};

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
    addToDo: (item) => dispatch(addToDo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);


