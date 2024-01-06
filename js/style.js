//------------------------------------QUẢN LÝ HỌC SINH------------------------------------------------

function xetDiemChuan(diemChuan) {
  if (diemChuan < 0 || diemChuan > 30) {
    alert("Điểm Chuẩn không hợp lệ !!! Vui lòng nhập lại");
  }
}

function xetDiemThi(diemThuNhat, diemThuHai, diemThuBa) {
  if (diemThuNhat < 0 || diemThuNhat > 10) {
    alert("Điểm Thứ Nhất không hợp lệ !!! Vui lòng nhập lại");
  } else if (diemThuHai < 0 || diemThuHai > 10) {
    alert("Điểm Thứ Hai không hợp lệ !!! Vui lòng nhập lại");
  } else if (diemThuBa < 0 || diemThuBa > 10) {
    alert("Điểm Thứ Ba không hợp lệ !!! Vui lòng nhập lại");
  }
}

document.getElementById("btnKetQua1").onclick = function () {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var diemThuNhat = Number(document.getElementById("monThi1").value);
  var diemThuHai = Number(document.getElementById("monThi2").value);
  var diemThuBa = Number(document.getElementById("monThi3").value);
  var diemUuTien = Number(document.getElementById("diemUuTien").value);
  var diemKhuVuc = Number(document.getElementById("khuVuc").value);
  var diemTongUuTien = diemUuTien + diemKhuVuc;
  var diemTongKet = diemTongUuTien + diemThuNhat + diemThuNhat + diemThuBa;

  xetDiemChuan(diemChuan);
  xetDiemThi(diemThuNhat, diemThuHai, diemThuBa);

  switch (diemUuTien) {
    case "2.5":
      if (diemKhuVuc === "A") {
        diemTongKet;
      } else if (diemKhuVuc === "B") {
        diemTongKet;
      } else {
        diemTongKet;
      }
      break;
    case "1.5":
      if (diemKhuVuc === "A") {
        diemTongKet;
      } else if (diemKhuVuc === "B") {
        diemTongKet;
      } else {
        diemTongKet;
      }
      break;
    case "1":
      if (diemKhuVuc === "A") {
        diemTongKet;
      } else if (diemKhuVuc === "B") {
        diemTongKet;
      } else {
        diemTongKet;
      }
      break;
  }

  if (
    diemTongKet >= diemChuan &&
    diemThuNhat < 0 &&
    diemThuHai < 0 &&
    diemThuBa < 0
  ) {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `Điểm của bạn là ${diemTongKet}. Bạn đã rớt`;
  } else {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `Điểm của bạn là ${diemTongKet}. Bạn đã đậu`;
  }
};

//------------------------------------Tính tiền điện------------------------------------------------

document.getElementById("btnKetQua3").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKW = Number(document.getElementById("soKW").value);
  var soTienDien;

  if (soKW < 0) {
    alert("Vui lòng nhập lại !!!");
  } else if (soKW > 350) {
    soTienDien =
      (soKW - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  } else if (soKW <= 50) {
    soTienDien = soKW * 500;
  } else if (soKW > 50 && soKW <= 100) {
    soTienDien = (soKW - 50) * 650 + 50 * 500;
  } else if (soKW > 100 && soKW <= 200) {
    soTienDien = (soKW - 100) * 850 + 650 * 50 + 500 * 50;
  } else if (soKW > 200 && soKW <= 350) {
    soTienDien = (soKW - 150) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
  }

  document.getElementById(
    "ketQua3"
  ).innerHTML = `${hoTen} đã tiêu thụ ${soTienDien.toLocaleString({
    style: "currency",
    currency: "VND",
  })}đ tiền điện`;
  // console.log(soKW);
};

//--------------------------------Tổng thu nhập-----------------------------------------
document.getElementById("btnKetQua4").onclick = function () {
  var hoTen1 = document.getElementById("hoTen1").value;
  var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
  var soNguoiPhuThuoc = Number(document.getElementById("nguoiPhuThuoc").value);
  var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  var thueThuNhapCaNhan;

  if (tongThuNhap < 0) {
    alert("Tổng thu nhập năm hoặc số người phụ thuộc chưa đúng !!!");
  } else if (thuNhapChiuThue > 960) {
    thueThuNhapCaNhan = 35;
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
    thueThuNhapCaNhan = 30;
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
    thueThuNhapCaNhan = 25;
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
    thueThuNhapCaNhan = 20;
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
    thueThuNhapCaNhan = 15;
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
    thueThuNhapCaNhan = 10;
  } else {
    thueThuNhapCaNhan = 5;
  }

  document.getElementById("ketQua4").innerHTML = `Thu Nhập Chịu Thuế là ${(
    thuNhapChiuThue * 1000000
  ).toLocaleString({
    style: "currency",
    currency: "VND",
  })} VNĐ <br>
  Thuế thu nhập cá nhân của ${hoTen1} là ${thueThuNhapCaNhan} %`;
};

//------------------------------------Tính tiền cáp------------------------------------------------

// tạo sự kiện khi thay đổi loại khách hàng hiện input
document.getElementById("loaiKH").addEventListener("change", function () {
  var selectedValue = document.getElementById("loaiKH").value;
  if (selectedValue === "DN") {
    document.getElementById("soKetNoi").style.display = "block";
  } else {
    document.getElementById("soKetNoi").style.display = "none";
  }
});

document.getElementById("btnKetQua5").onclick = function () {
  var maKH = document.getElementById("maKH").value;
  var kenhCaoCap = Number(document.getElementById("kenhCaoCap").value);
  var soKetNoi = Number(document.getElementById("ketNoi").value);
  var selectedValue = document.getElementById("loaiKH").value;
  var hoaDon;

  if (selectedValue === "ND") {
    hoaDon = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  } else {
    if (soKetNoi > 10) {
      hoaDon = 15 + (soKetNoi - 10) * 5 + 10 * 75 + 50 * kenhCaoCap;
    } else {
      hoaDon = 15 + soKetNoi * 75 + 50 * kenhCaoCap;
    }
  }

  document.getElementById(
    "ketQua5"
  ).innerHTML = `Mã Khách Hàng: ${maKH} <br> Loại Khách Hàng: ${selectedValue} <br> Hoá Đơn: ${hoaDon.toLocaleString(
    { style: "currency", currency: "USD" }
  )} $`;
};
// huhu
