"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageGirlFriend = void 0;
var girlfriend_1 = require("./girlfriend");
var ManageGirlFriend = /** @class */ (function () {
    function ManageGirlFriend(listGirlFriend) {
        if (listGirlFriend === void 0) { listGirlFriend = []; }
        this.listGirlFriend = listGirlFriend;
        this.listGirlFriend.push(new girlfriend_1.GirlFriend('1', 'Huyen', 'Xu nu', 'Vinh Phuc', 2001, 'Doc sach'));
        this.listGirlFriend.push(new girlfriend_1.GirlFriend('2', 'Yen', 'Su tu', 'Ha Noi', 2002, 'Lam tho'));
    }
    ManageGirlFriend.prototype.getListGirlFriend = function () {
        return this.listGirlFriend;
    };
    ManageGirlFriend.prototype.setListGirlFriend = function (value) {
        this.listGirlFriend = value;
    };
    ManageGirlFriend.prototype.displayGirlFriend = function () {
        if (this.getListGirlFriend().length == 0) {
            console.table('Không có dữ liệu');
        }
        else {
            console.table(this.getListGirlFriend());
        }
    };
    ManageGirlFriend.prototype.findGirlFriend = function (value) {
        this.getListGirlFriend().map(function (index) {
            if (index.getNameGirlFriend() === value) {
                console.log("Ten: ".concat(index.getNameGirlFriend(), " - ID: ").concat(index.getIdGirlFriend(), " - Zodiac: ").concat(index.getZodiacGirlFriend(), " - Address: ").concat(index.getAddressGirlFriend(), " - Year Of Birth: ").concat(index.getDateofBirth()));
            }
            else {
                console.log('Không có dữ liệu phù hợp');
            }
        });
    };
    ManageGirlFriend.prototype.addNewGirlFriend = function (value) {
        var _this = this;
        this.getListGirlFriend().map(function (index) {
            if (index.getIdGirlFriend() !== value.getIdGirlFriend()) {
                _this.getListGirlFriend().push(value);
            }
            else {
                console.log('Id người yêu này đã tồn tại');
            }
        });
    };
    ManageGirlFriend.prototype.editProfileGirlFriend = function (value, name, zodiac, address, year, hobbies) {
        this.getListGirlFriend().map(function (index) {
            if (+index.getIdGirlFriend() === value) {
                index.setNameGirlFriend(name);
                index.setZodiacGirlFriend(zodiac);
                index.setAddressGirlFriend(address);
                index.setDateofBirth(year);
                index.setHobbiesGirlFriend(hobbies);
            }
            else {
                console.log('Không tồn  tại  người yêu cần  cập nhật');
            }
        });
    };
    ManageGirlFriend.prototype.deleteGirlFriend = function (value) {
        var _this = this;
        var item = false;
        this.getListGirlFriend().map(function (index) {
            if (+index.getIdGirlFriend() === value) {
                _this.setListGirlFriend(_this.getListGirlFriend().filter(function (item) { return +item.getIdGirlFriend() !== value; }));
                item = true;
            }
            if (item) {
                console.log('Đã xóa thành công');
            }
            else {
                console.log('Không tồn tại  người yêu cần xoá');
            }
        });
    };
    return ManageGirlFriend;
}());
exports.ManageGirlFriend = ManageGirlFriend;
