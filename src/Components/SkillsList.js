function SkillsList(props) {
  //   console.log(props);
  return (
    <div
      style={{ marginLeft: "30px", marginTop: "10px", marginBottom: "20px" }}
    >
      <ul
        style={{
          display: "flex",
          width: "250px",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {props.skills.map((ele, index) => {
          return <Skill key={index} ele={ele} />;
        })}
      </ul>
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <li
      style={{
        backgroundColor: props.ele.color,
        fontWeight: "700",
        fontSize: "80%",
        borderRadius: "4px",
        padding: "1px 5px",
      }}
    >
      {props.ele.skill}{" "}
      {props.ele.level === "advanced"
        ? "==> adva"
        : props.ele.level === "intermediate"
        ? "==> inter"
        : props.ele.level === "beginner"
        ? "==> begi"
        : ""}
    </li>
  );
}

export default SkillsList;
