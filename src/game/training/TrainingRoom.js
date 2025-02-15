import {
    Scene
} from 'phaser';

export class TrainingRoom extends Scene {
    constructor() {
        super('TrainingRoom')
    }

    preload() {
        this.load.image("training-bg", "assets/BookshelfBackground.png");
        this.load.image("book1", "assets/Book1.png")
        this.load.image("book2", "assets/Book2.png")
        this.load.image("book3", "assets/Book3.png")
        this.load.image("book4", "assets/Book4.png")

       
    }

    create() {

        this.add.image(512, 384, 'training-bg');
        const book1 = this.add.image(16,40, "book1").setOrigin(0).setInteractive().setName("book1");
        const book2 = this.add.image(72,29, "book2").setOrigin(0).setInteractive().setName("book2");
        const book3 = this.add.image(127,54, "book3").setOrigin(0).setInteractive().setName("book3");
        const book4 = this.add.image(199, 32, "book4").setOrigin(0).setInteractive().setName("book4");
       
        this.input.on('gameobjectover', (pointer, gameObject) => {
            gameObject.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        })

        this.input.on('gameobjectdown', (pointer, gameObject) => {
            this.scene.start('TempScene', {txt: gameObject.name})
        })

        const gameObjects = [book1, book2, book3, book4];

        gameObjects.forEach((obj) => {
            obj.on('pointerout', () => {
                obj.clearTint();
            });
        });

        // same logic le tyo description change garne halne

        var key_ESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        key_ESC.on('down', () => {
            this.scene.start("Game");

        })



    }
    update() {

    }
}