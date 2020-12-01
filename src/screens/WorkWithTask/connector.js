import { connect } from 'react-redux';
import { getTask } from '../../redux/actions/taskActions';

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  task: state.taskReducer.task,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearTask: () => dispatch(getTask(null)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
