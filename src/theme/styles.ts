import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    width: '100%',
    elevation: 5
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#2196F3',
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#2196F3',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
 },
  burgerButton: {
    marginLeft: 15,
    padding: 5 },
    burgerIcon: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
