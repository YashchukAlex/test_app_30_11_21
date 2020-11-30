import { connect } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
