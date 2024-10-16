export default function slug(props) {
  console.log(props);
  return (
    <>
      <h1>pid: {props.searchParams.pid}</h1>
      <h1>foo: {props.searchParams.foo}</h1>
    </>
  );
}
