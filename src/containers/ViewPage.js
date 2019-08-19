import React, { Component } from 'react';
import { fetchToDos } from '../actions/todoAction';
import { connect } from 'react-redux';
import _ from 'lodash';
import Loader from 'react-loader-spinner';

class ViewPage extends Component {
    componentWillMount() {
        const { todos } = this.props;
        if (_.size(todos) === 0) {
            this.props.fetchToDos();
        }
    };

    renderEachView = () => {
        const { match: { params : { itemId } } } = this.props;
        if (!_.isNil(itemId) && _.size(this.props.todos) > 0) {
            const viewItem =  this.props.todos.filter((todo) => todo.id === itemId);
            return (<div><div>ID : {viewItem[0].id}</div><div>Title : {viewItem[0].title}</div></div>)
        }
    };

    render() {
        if (this.props.isFetching === true) {
            return (<div className="loading">
                <Loader type="TailSpin" color="#00BFFF" height="30" width="30"/>
            </div>);
        }

        return (
        <div>
            <h1>View Page</h1>
            <div>{this.renderEachView()}</div>
        </div>);
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
    return {
        todos: mappedData(state.todos.data),
        isFetching: state.todos.isFetching,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchToDos: () => dispatch(fetchToDos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
