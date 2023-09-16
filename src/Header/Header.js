import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  //
  routes = [
    {
      path: "/quanlysinhvien",
      name: "QuanLySinhVien",
    },
  ];

  render() {
    return this.routes.map(({ path, name }, index) => {
      return (
        <NavLink className="btn btn-info mx-3 p-3" to={path} key={index}>
          {name}
        </NavLink>
      );
    });
  }
}
