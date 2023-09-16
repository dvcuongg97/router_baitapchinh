const initialState = {
  mangSinhVien: [
    {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  ],
  editSinhVien: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
};

const QuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      let mangSinhVienUpdate = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = mangSinhVienUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};
export default QuanLySinhVienReducer;
