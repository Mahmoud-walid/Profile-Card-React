function Name(props) {
    console.log(props);
  return (
    <div>
      <h2
        style={{
          fontWeight: "700",
        }}
      >
        {props.name}
      </h2>
    </div>
  );
}

export default Name;
