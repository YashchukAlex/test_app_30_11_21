import { connect } from 'react-redux';
import { handleLoader, signIn } from '../../redux/actions/authActions';

const mapStateToProps = (state) => ({
  loader: state.authReducer.loader,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoader: () => dispatch(handleLoader()),
    signIn: (data) => dispatch(signIn(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
