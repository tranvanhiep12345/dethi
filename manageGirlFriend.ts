import {GirlFriend} from "./girlfriend";
export class ManageGirlFriend{
    constructor(private listGirlFriend: GirlFriend[] = []) {
        this.listGirlFriend.push(new GirlFriend('1','Huyen','Xu nu','Vinh Phuc',2001,'Doc sach'))
        this.listGirlFriend.push(new GirlFriend('2','Yen','Su tu','Ha Noi',2002,'Lam tho'))
    }

    getListGirlFriend(): GirlFriend[] {
        return this.listGirlFriend;
    }

    setListGirlFriend(value: GirlFriend[]) {
        this.listGirlFriend = value;
    }
    displayGirlFriend(){
        if(this.getListGirlFriend().length == 0){
            console.table('Không có dữ liệu')
        } else{
            console.table(this.getListGirlFriend())
        }
    }
    findGirlFriend(value: string){
        this.getListGirlFriend().map(index =>{
            if(index.getNameGirlFriend() === value){
                console.log(`Ten: ${index.getNameGirlFriend()} - ID: ${index.getIdGirlFriend()} - Zodiac: ${index.getZodiacGirlFriend()} - Address: ${index.getAddressGirlFriend()} - Year Of Birth: ${index.getDateofBirth()}`)
            } else {
                console.log('Không có dữ liệu phù hợp')
            }
        })
    }
    addNewGirlFriend(value: GirlFriend){
        let item = false
        this.getListGirlFriend().map(index => {
            if(index.getIdGirlFriend() === value.getIdGirlFriend()) {
                item = true
            }
        })
        if(!item){
            console.log('Them thanh cong')
            this.getListGirlFriend().push(value)

        } else{
            console.log('Id đã có')
        }
    }
    editProfileGirlFriend(value: number, name: string, zodiac: string, address: string, year: number, hobbies: string ){
        this.getListGirlFriend().map(index =>{
            if(+index.getIdGirlFriend() === value){
                index.setNameGirlFriend(name)
                index.setZodiacGirlFriend(zodiac)
                index.setAddressGirlFriend(address)
                index.setDateofBirth(year)
                index.setHobbiesGirlFriend(hobbies)
            } else{
                console.log('Không tồn  tại  người yêu cần  cập nhật')
            }
        })
    }
    deleteGirlFriend(value: number){
        let item = false
        this.getListGirlFriend().map(index =>{
            if(+index.getIdGirlFriend() === value){
                this.setListGirlFriend(this.getListGirlFriend().filter(item => +item.getIdGirlFriend() !== value))
                item = true
            }
            if(item){
                console.log('Đã xóa thành công')
            } else {
                console.log('Không tồn tại  người yêu cần xoá')
            }
        })
    }
}