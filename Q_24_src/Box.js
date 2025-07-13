function Box({ children }) {
  return (
    <div style={{
      backgroundColor: 'lightgray',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {children}
    </div>
  );
}
export default Box;
