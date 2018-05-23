import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentWillMount() {
        // console.log('will mount');
        if(this.props.editTask && this.props.editTask.id !== null) {
            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status
            });
            //console.log(this.state);
        }

        else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.editTask) {
            this.setState({
                id: nextProps.editTask.id,
                name: nextProps.editTask.name,
                status: nextProps.editTask.status
            });
        }
        else {
            this.onClear();
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name ==='status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSave = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        console.log('onClear');
        this.setState({
            id: '',
            name: '',
            status: false
        });
    }
  render() {
    var {id} = this.state;
    if(!this.props.isDisplayForm) return null;
    
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    { id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                    <span
                        className="fa fa-times-circle text-right"
                        onClick = { this.onCloseForm }
                    >
                    </span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select
                        className="form-control"
                        name="status"
                        value={this.state.status}
                        onChange={this.onChange}
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            <span className="fa fa-plus mr-5"></span>
                            Lưu Lại
                        </button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={this.onClear}
                        >
                            <span className="fa fa-close mr-5"></span>
                            Hủy Bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
        isDisplayForm: state.isDisplayForm,
        editTask: state.editTask
    }
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSaveTask: (task) => {
			dispatch(actions.saveTask(task));
		},
		onCloseForm : () => {
			dispatch(actions.closeForm());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
