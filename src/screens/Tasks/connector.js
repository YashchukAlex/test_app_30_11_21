import { connect } from 'react-redux';
import { clearAllTasks } from '../../redux/actions/taskActions';

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  loader: state.authReducer.loader,
  listTasks: state.taskReducer.listTasks,
});

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllTasks: () => dispatch(clearAllTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
