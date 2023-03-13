import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 32,
    paddingTop: 24,
  },
  header: {
    fontSize: 28,
    marginBottom: 16,
  },
  idChoiceContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center',
  },
  inputError: {
    fontSize: 14,
    color: 'red',
  },
  requestButton: {
    marginVertical: 24,
  },
  requestErrMsg: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  requestErrCode: {
    fontSize: 16,
    textAlign: 'center',
  },
});
