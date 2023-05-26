"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var girlfriend_1 = require("./girlfriend");
var manageGirlFriend_1 = require("./manageGirlFriend");
var menu_1 = require("./menu");
var readLine = require('readline-sync');
var listGirlFriend = new manageGirlFriend_1.ManageGirlFriend([]);
var choice;
var start = true;
while (start) {
    menu_1.Menu.listMenu();
    choice = +readLine.question('Nhap tac vu muon thuc hien: ');
    switch (choice) {
        case 1:
            listGirlFriend.displayGirlFriend();
            menu_1.Menu.separates();
            break;
        case 2:
            listGirlFriend.getListGirlFriend().map(function (index) {
                if (index.getNameGirlFriend() === readLine.question('Nhap ten ban gai muon tim: ')) {
                    listGirlFriend.findGirlFriend(index.getNameGirlFriend());
                }
            });
            menu_1.Menu.separates();
            break;
        case 3:
            for (var i = 0; i < +readLine.question('Nhap so luong nguoi yeu muon tao: '); i++) {
                var girlFriend = new girlfriend_1.GirlFriend(readLine.question('Nhap id nguoi yeu moi: '), readLine.question('Nhap ten nguoi yeu moi: '), readLine.question('Nhap cung hoang dao cua nguoi yeu moi: '), readLine.question('Nhap que quan cua nguoi yeu moi: '), readLine.question('Nhap nam sinh cua nguoi yeu moi: '), readLine.question('Nhap so thich cua nguoi yeu moi: '));
                listGirlFriend.addNewGirlFriend(girlFriend);
            }
            menu_1.Menu.separates();
            break;
        case 4:
            listGirlFriend.editProfileGirlFriend(+readLine.question('Nhap id nguoi yeu muon chinh sua: '), readLine.question('Nhap ten nguoiyeu moi: '), readLine.question('Nhap cung hoang dao cua nguoi yeu moi:'), readLine.question('Nhap que quan cua nguoi yeu moi: '), +readLine.question('Nhap nam sinh cua nguoi yeu moi: '), readLine.question('Nhap so thich cua nguoi yeu moi: '));
            menu_1.Menu.separates();
            break;
        case 5:
            listGirlFriend.deleteGirlFriend(+readLine.question('Nhap id nguoi yeu muon xoa: '));
            menu_1.Menu.separates();
            break;
        case 6:
            start = false;
            break;
    }
}
