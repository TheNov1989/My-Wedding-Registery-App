import React, { Component } from "react";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class PantoneGallery extends Component {
  render() {
    console.log("Gallery props", this.props);
    const { pantones } = this.props;
    return (
      <div>
        <br />
        <br />
        <Table>
          <TableHead>
            <TableCell align="left">Item</TableCell>
            <TableCell align="center">Link</TableCell>
            <TableCell align="center">Purchased</TableCell>
          </TableHead>
          <TableBody>
            {pantones.map((pantone, k) => {
              return (
                <TableRow key={k}>
                  <TableCell className="pantone-title text-left">
                    {pantone.item}
                  </TableCell>
                  <TableCell align="center" className="pantone-title">
                    <a
                      href={pantone.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      link
                    </a>
                  </TableCell>
                  <TableCell align="center" className="pantone-title">
                    <Checkbox />
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
