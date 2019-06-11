export class Produit {
    constructor(
        public id: number,
        public titre: string,
        public synopsis: string,
        public fileName: string,
        public time: number,
    ) { }
}