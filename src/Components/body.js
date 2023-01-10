// eslint-disable-next-line
import logo from "../Images/logoTwo.jpeg";
import "./body.css"
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

let link = "https://www.google.com/setprefs?sig=0_K1QrKovZRzvKo3C1PG5F7U26QoQ%3D&hl=fr&source=homepage&sa=X&ved=0ahUKEwie1bv1g7v8AhWzD0QIHSXvCCcQ2ZgBCBU";
let topFilms = ["The Shawshank Redemption", "Frosty the snowman", "Peter Pan", "Sharkboy and larva girl"];
//let searchQuery = { query:"https://www.bing.com/search?q="};

function BodyM() {
  return (
    <main>
      <div className="container">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={logo} alt="logo" />
        </a>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={topFilms}
          sx={{ width: 650 }}
          renderInput={(params) => <TextField {...params} />}
        />

        <form className="luckySearch">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </form>

        <div className="Language">
          <p>
            Google offered in:{" "}
            <a href={link}>Français</a>
          </p>
        </div>
      </div>
    </main>
  );
}




/**function Link(props){
    return(
        <a href={searchQuery+props}>{props}</a>
    )
}*/

export default BodyM;