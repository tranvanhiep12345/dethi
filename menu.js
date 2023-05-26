"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.listMenu = function () {
        console.log('Danh sách tác vụ bạn muốn thực hiện: ' +
            '\n 1. Hiển thị danh sách người yêu' +
            '\n 2. Tìm kiếm người yêu theo tên' +
            '\n 3. Nhập người yêu mới' +
            '\n 4. Chỉnh sửa thông tin người yêu theo id' +
            '\n 5. Xóa người yêu theo id' +
            '\n 6. Kết thúc chương trình');
    };
    Menu.separates = function () {
        var sum = '-';
        for (var i = 0; i < 162; i++) {
            sum += '-';
        }
        console.log(sum);
    };
    return Menu;
}());
exports.Menu = Menu;
