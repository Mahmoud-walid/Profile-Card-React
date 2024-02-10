function Avatar(props) {
  console.log(props);
  return (
    <div>
      <img
        src={props.imgProfile}
        alt="myPhoto"
        style={{
          width: "400px",
          filter:
            "contrast(88%) invert(10%) sepia(10%) saturate(10000%) hue-rotate(10deg)",
        }}
      />
    </div>
  );
}

export default Avatar;
