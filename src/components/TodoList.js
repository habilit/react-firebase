// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';
// import {fetchToDos, addToDo} from "../actions/todoAction";
// import {simpleAction} from "../actions/simpleAction";
//
// class TodoList extends Component {
//     state = {
//         showForm: false,
//         formValue: ""
//     };
//
//     inputChange = e => {
//         this.setState({formValue: e.target.value});
//     };
//
//     formSubmit = e => {
//         const {formValue} = this.state;
//         const {addTodo} = this.props;
//         e.preventDefault();
//         addTodo({title: formValue});
//         this.setState({formValue: ""});
//     };
//
//     renderForm = () => {
//         const {showForm, formValue} = this.state;
//         if (showForm) {
//             return (
//                 <div>
//                     <form onSubmit={this.formSubmit}>
//                         <div>
//                             <i>add</i>
//                             <input
//                                 value={formValue}
//                                 onChange={this.inputChange}
//                                 id="toDoNext"
//                                 type="text"
//                             />
//                             <label htmlFor="toDoNext">What Next?</label>
//                         </div>
//                     </form>
//                 </div>
//             );
//         }
//     };
//     renderToDo() {
//         const {data} = this.props;
//         const toDos = _.map(data, (value, key) => {
//             return (<div>
//                 <div>key : {key}</div>
//                 <div>value : {value}</div>
//             </div>);
//
//         });
//         if (!_.isEmpty(toDos)) {
//             return toDos;
//         }
//         return (
//             <div>
//                 <h4>You have no more things ToDo!</h4>
//             </div>
//         );
//     }
//     componentWillMount() {
//         // this.props.fetchTodos();
//         console.log('this.props');
//         console.log(this.props);
//     }
//     render() {
//         const {showForm} = this.state;
//         return (
//             <div>
//                 <div>
//                     {this.renderForm()}
//                     {this.renderToDo()}
//                 </div>
//                 <div>
//                     <button onClick={() => this.setState({showForm: !showForm})}>
//                         {showForm ? (
//                             <i>Close</i>
//                         ) : (
//                             <i>Add</i>
//                         )}
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = ({data}) => {
//     return {
//         data
//     }
// }
//
// const mapDispatchToProps = dispatch => ({
//     addTodo: () => dispatch(addTodo()),
//     fetchToDos: () => dispatch(fetchToDos()),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
