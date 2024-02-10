import Avatar from "./Components/Avatar";
import Bio from "./Components/Bio";
// import Name from "./Components/Name";
import SkillsList from "./Components/SkillsList";
import details from "./details";

function App() {
  return (
    <div
      style={{
        border: "4px solid black",
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <Avatar imgProfile={details.imgProfile} />
      <Bio name={details.name} bio={details.bio} />
      <SkillsList skills={details.skills} />
    </div>
  );
}

export default App;
