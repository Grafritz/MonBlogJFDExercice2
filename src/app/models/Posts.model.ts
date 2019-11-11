export class Posts {
  newPost: () => number;

    constructor(
        public title: string,
        public content: string,
        public loveIts: number,
        public createdAt: string
    ) {}
}
