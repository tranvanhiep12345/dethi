import {GirlFriend} from "./girlfriend";
import {ManageGirlFriend} from "./manageGirlFriend";
import {Menu} from "./menu";
let readLine = require('readline-sync')

let listGirlFriend = new ManageGirlFriend([])
let choice
let start = true

while(start){
    Menu.listMenu()
    choice = +readLine.question('Nhap tac vu muon thuc hien: ')
    switch (choice){
        case 1:
            listGirlFriend.displayGirlFriend()
            Menu.separates()
            break
        case 2:
            listGirlFriend.getListGirlFriend().map(index =>{
                if(index.getNameGirlFriend() === readLine.question('Nhap ten ban gai muon tim: ')){
                    listGirlFriend.findGirlFriend(index.getNameGirlFriend())
                }
            })
            Menu.separates()
            break
        case 3:
            let count = +readLine.question('Nhap so luong nguoi yeu muon tao: ')
            for(let i=0; i < count; i++){
                let girlFriend = new GirlFriend(readLine.question('Nhap id nguoi yeu moi: '),
                                                 readLine.question('Nhap ten nguoi yeu moi: '),
                                                 readLine.question('Nhap cung hoang dao cua nguoi yeu moi: '),
                                                 readLine.question('Nhap que quan cua nguoi yeu moi: '),
                                                +readLine.question('Nhap nam sinh cua nguoi yeu moi: '),
                                                 readLine.question('Nhap so thich cua nguoi yeu moi: ')
                )
                listGirlFriend.addNewGirlFriend(girlFriend)
            }
            Menu.separates()
            break
        case 4:
            listGirlFriend.editProfileGirlFriend(readLine.question('Nhap id nguoi yeu muon chinh sua: '),
                                                  readLine.question('Nhap ten nguoiyeu moi: '),
                                                  readLine.question('Nhap cung hoang dao cua nguoi yeu moi:'),
                                                  readLine.question('Nhap que quan cua nguoi yeu moi: '),
                                                 +readLine.question('Nhap nam sinh cua nguoi yeu moi: '),
                                                  readLine.question('Nhap so thich cua nguoi yeu moi: '))
            Menu.separates()
            break
        case 5:
            listGirlFriend.deleteGirlFriend(+readLine.question('Nhap id nguoi yeu muon xoa: '))
            Menu.separates()
            break
        case 6:
            start = false
            break
    }
}
