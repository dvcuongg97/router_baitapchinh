import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  // render table
  renderTable = () => {
    const { mangSinhVien } = this.props;
    console.log(
      "🚀 ~ file: TableSinhVien.js:8 ~ TableSinhVien ~ mangSinhVien:",
      mangSinhVien
    );
    return mangSinhVien.map((sinhvien, index) => {
      const { maSV, hoTen, soDienThoai, email } = sinhvien;
      return (
        <tr key={index}>
          <td>{maSV}</td>
          <td>{hoTen}</td>
          <td>{soDienThoai}</td>
          <td>{email}</td>
        </tr>
      );
    });
  };

  bt;
  render() {
    return (
      <table className="table">
        <thead>
          <tr className="bg-dark text-light">
            <th>Mã Sinh Viên</th>
            <th>Tên Sinh Viên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};
export default connect(mapStateToProps)(TableSinhVien);
