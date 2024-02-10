import Name from "./Name";

function Bio(props) {
  console.log(props);
  return (
    <div
      style={{
        marginLeft: "30px",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Name name={props.name} />
      <p
        style={{
          fontSize: "80%",
          color: "#808080",
          fontWeight: "700",
        }}
      >
        {props.bio}
      </p>
    </div>
  );
}

export default Bio;
