import React, { Component } from "react";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";

class PantoneGallery extends Component {
  checkItem(id, state) {
    const baseUrl = `https://wedding-registery-api20190905101551.azurewebsites.net/home/UpdateRegistryItem/${id}?purchased=${state}`;

    fetch(baseUrl, {
      method: "GET"
    }).then(response => {
      console.log("Call complete");
    });
  }

  render() {
    console.log("Gallery props", this.props);
    const { pantones } = this.props;

    if (pantones.length === 0)
      return (
        <div>
          {" "}
          <br />
          <br />
          No items found
        </div>
      );

    return (
      <div>
        <br />
        <br />
        <Table>
          <TableHead>
            <TableCell align="left">Item</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Purchased</TableCell>
          </TableHead>
          <TableBody>
            {pantones.map((pantone, k) => {
              return (
                <TableRow key={k}>
                  <TableCell className="pantone-title text-left text-capitalize">
                    {pantone.Title +
                      (pantone.Color === "" ? "" : " (" + pantone.Color + ")")}
                  </TableCell>
                  <TableCell align="center" className="pantone-title">
                    {pantone.Url !== "" ? (
                      <div>
                        <Link
                          href={pantone.Url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          link
                        </Link>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </TableCell>
                  <TableCell align="center" className="pantone-title">
                    <Checkbox
                      key={pantone.itemID}
                      onChange={event => {
                        pantone.Purchased = event.target.checked;
                        this.checkItem(pantone.ItemID, event.target.checked);
                      }}
                      defaultChecked={pantone.Purchased}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default PantoneGallery;
