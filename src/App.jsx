import React, { Component } from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import PantoneGallery from "./PantoneGallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.gifts = [
      { item: "Voile Curtains", Qty: 4, Color: "White", Link: "" },
      { item: "Plates (Maxwell Williams)", Qty: 6, Color: "White", Link: "" },
      {
        item: "Toaster",
        Qty: 6,
        Color: "Silver",
        Link:
          "https://www.makro.co.za/appliances/small-appliances/toasters-sandwich-makers/toasters-snackwich-makers/defy-sense-toaster---ta520s/p/9aa4ba75-f786-484a-ab2c-6df16abd774b?gclid=CjwKCAjwnrjrBRAMEiwAXsCc46Sopav33ZQn0t9hl6nmSrO7vyaQuW_uyMxbGtJb3CcPq1fWBszGchoCPV0QAvD_BwE"
      }
    ];
    this.state = { query: "", mainPantone: null, pantoneSelection: null };
    this.search();
  }

  search() {
    const baseUrl = `https://wedding-registery-api20190905101551.azurewebsites.net/home/GetRegistryItems?q=${this.state.query}`;

    console.log(baseUrl);

    fetch(baseUrl, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        const pantone = json[0];
        this.setState({ mainPantone: pantone, pantoneSelection: json });
      });
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <ThemeProvider />
        <div className="app-title">Wedding Gift Registery</div>
        <div>
          <TextField
            placeholder="Search an item..."
            fullWidth
            query={this.state.query}
            onChange={event => {
              this.setState({ query: event.target.value });
            }}
            onKeyPress={event => {
              if (event.key === "Enter") this.search();
            }}
          />
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => this.search()}
          >
            Search &nbsp;
            <SearchIcon />
          </Button>
        </div>
        {this.state.pantoneSelection !== null ? (
          <div>
            <PantoneGallery pantones={this.state.pantoneSelection} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
