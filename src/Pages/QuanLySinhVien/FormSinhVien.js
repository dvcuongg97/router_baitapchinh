import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  // state
  state = {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false,
  };
  //

  // onchange
  handleOnchange = (e) => {
    // get input
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;
    let errorMessage = "";
    // kiem tra rong
    if (value.trim() === "") {
      errorMessage = `${name} Không để trống!!`;
    }
    //  kiem tra email
    if (type === "email") {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(value)) {
        errorMessage = ` ${name} Không đúng định dạng email`;
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);

      if (!regex.test(value)) {
        errorMessage = ` ${name} Không đúng định dạng /(84|0[3|5|7|8|9])+([0-9]{8})\b/`;
      }
    }

    //  update cho state
    let valuesUpdate = { ...this.state.values, [name]: value };
    let errorsUpdate = { ...this.state.errors, [name]: errorMessage };
    // set state
    this.setState(
      {
        ...this.state,
        values: valuesUpdate,
        errors: errorsUpdate,
      },
      () => {
        this.checkValid();
      }
    );
  };
  //
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };
  //
  checkValid = () => {
    let validUpdate = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        validUpdate = false;
      }
    }
    this.setState({
      ...this.state,
      valid: validUpdate,
    });
  };

  //
  render() {
    return (
      <div className="container">
        <div class="card text-left">
          <div className="card-header bg-dark text-light">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <div class="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã Sinh Viên</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleOnchange}
                  ></input>
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleOnchange}
                  ></input>
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleOnchange}
                  ></input>
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số Điện Thoại</span>
                  <input
                    className="form-control"
                    pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleOnchange}
                  ></input>
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="col-md-12 text-right">
                {this.state.valid ? (
                  <button type="submit" className="btn btn-success">
                    Thêm Sinh Viên
                  </button>
                ) : (
                  <button disabled type="submit" className="btn btn-success">
                    Thêm Sinh Viên
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FormSinhVien);
