import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { simpleAction } from '../actions/simpleAction';
import {fetchToDos, addToDo} from "../actions/todoAction";

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
        // this.props.fetchTodos();
       this.props.fetchToDos();
        console.log('this.props');
        console.log(this.props);
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

    renderToDo() {
        const {data} = this.props;
        const toDos = _.map(data, (value, key) => {
            return (<div>
                <div>key : {key}</div>
                <div>value : {value}</div>
            </div>);

        });
        if (!_.isEmpty(toDos)) {
            return toDos;
        }
        return (
            <div>
                <h4>You have no more things ToDo!</h4>
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

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    fetchToDos: () => dispatch(fetchToDos()),
    addToDo: (item) => dispatch(addToDo(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);


