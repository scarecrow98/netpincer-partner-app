export class PartnerRegistration {
    name: string = 'xy fogadó';
    description: string = 'Lorem ipsum dolor sit amet';
    partner_type_id: number = 2;
    color_style: string = '#eb4034';
    city: string = 'Dunaföldvár';
    post_code: number = 7020;
    street: string = 'Kossuth utca 32.';
    delivery_fee: number = 340;
    courier_share_percent: number = 12;
    email: string = 'email@gmail.com';
    password: string = 'asdasdasd';
    password_again: string = 'asdasdasd';
    open_times: PartnerOpenTimeItem[] = [
        new PartnerOpenTimeItem('mon', 'Hétfő'),
        new PartnerOpenTimeItem('tue', 'Kedd'),
        new PartnerOpenTimeItem('wed', 'Szerda'),
        new PartnerOpenTimeItem('thu', 'Csütörtök'),
        new PartnerOpenTimeItem('fri', 'Péntek'),
        new PartnerOpenTimeItem('sat', 'Szombat'),
        new PartnerOpenTimeItem('sun', 'Vasárnap')
    ];
}

export class PartnerOpenTimeItem {
    display_day: string;
    day: string;
    from: string = '11:00';
    to: string = '22:00';
    closed: boolean = false;

    constructor(day: string, display_day: string)  {
        this.display_day = display_day;
        this.day = day;
    }
}