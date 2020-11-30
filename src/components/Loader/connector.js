import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  loader: state.authReducer.loader,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps);
