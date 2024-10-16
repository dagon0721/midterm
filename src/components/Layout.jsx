const Layout = (props) => {
  return (
    <div>
      {props}
      <a href="localhost:3000/About">About</a>
      <a href="localhost:3000/Contact">Contact</a>
      <a href="localhost:3000/slug">slug</a>
      <a href="localhost:3000">Home</a>
    </div>
  );
};

export default Layout;
