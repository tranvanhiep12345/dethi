export class GirlFriend{
    constructor(private idGirlFriend: string,
                private nameGirlFriend: string,
                private zodiacGirlFriend: string,
                private addressGirlFriend: string,
                private dateofBirth: number,
                private hobbiesGirlFriend: string) {
        this.idGirlFriend = idGirlFriend
        this.nameGirlFriend = nameGirlFriend
        this.zodiacGirlFriend = zodiacGirlFriend
        this.addressGirlFriend = addressGirlFriend
        this.dateofBirth = dateofBirth
        this.hobbiesGirlFriend = hobbiesGirlFriend
    }

    getIdGirlFriend(): string {
        return this.idGirlFriend;
    }

    setIdGirlFriend(value: string) {
        this.idGirlFriend = value;
    }

    getNameGirlFriend(): string {
        return this.nameGirlFriend;
    }

    setNameGirlFriend(value: string) {
        this.nameGirlFriend = value;
    }

    getZodiacGirlFriend(): string {
        return this.zodiacGirlFriend;
    }

    setZodiacGirlFriend(value: string) {
        this.zodiacGirlFriend = value;
    }

    getAddressGirlFriend(): string {
        return this.addressGirlFriend;
    }

    setAddressGirlFriend(value: string) {
        this.addressGirlFriend = value;
    }

    getDateofBirth(): number {
        return this.dateofBirth;
    }

    setDateofBirth(value: number) {
        this.dateofBirth = value;
    }

    getHobbiesGirlFriend(): string {
        return this.hobbiesGirlFriend;
    }

    setHobbiesGirlFriend(value: string) {
        this.hobbiesGirlFriend = value;
    }
}