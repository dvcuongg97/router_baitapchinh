import React, { Component } from "react";
import FormSinhVien from "./FormSinhVien";
import TableSinhVien from "./TableSinhVien";

export default class QuanLySinhVien extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center p-2 bg-info">Bài Tập From</h3>
        <FormSinhVien />
        <TableSinhVien />
      </div>
    );
  }
}
