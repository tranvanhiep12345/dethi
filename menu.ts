export class Menu{
    static listMenu(){
        console.log('Danh sách tác vụ bạn muốn thực hiện: ' +
                    '\n 1. Hiển thị danh sách người yêu' +
                    '\n 2. Tìm kiếm người yêu theo tên' +
                    '\n 3. Nhập người yêu mới' +
                    '\n 4. Chỉnh sửa thông tin người yêu theo id' +
                    '\n 5. Xóa người yêu theo id' +
                    '\n 6. Kết thúc chương trình'  )
    }
    static separates(){
        let sum: string = '-'
        for(let i=0; i < 162; i++){
            sum += '-'
        }
        console.log(sum)
    }
}
