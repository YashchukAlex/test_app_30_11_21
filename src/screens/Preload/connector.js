import { connect } from 'react-redux';
import { handleLoader } from '../../redux/actions/authActions';

const mapStateToProps = (state) => ({
  loader: state.authReducer.loader,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoader: () => dispatch(handleLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
