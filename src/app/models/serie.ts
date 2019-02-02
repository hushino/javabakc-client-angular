export class Serie {
    id: string;
    title: string;
    type: string;
    synopsis: string;
    frontimage: string;
    fechadeFinalizacion: string;
    fechadeEmision: string;
    backgroundimage: string;
    state: string;
    tags: string[];
    episode: string[];

    constructor(id = '', title = '', type = '', synopsis = '', frontimage = '', fechadeFinalizacion = '',
        fechadeEmision = '', backgroundimage = '', state = '', tags = [''], episode = [''],

    ) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.synopsis = synopsis;
        this.frontimage = frontimage;
        this.fechadeFinalizacion = fechadeFinalizacion;
        this.fechadeEmision = fechadeEmision;
        this.backgroundimage = backgroundimage;
        this.state = state;
        this.tags = tags;
        this.episode = episode;
    }


}
