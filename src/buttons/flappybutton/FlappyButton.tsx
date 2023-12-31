import { Component } from "solid-js";

type Pipe = { x: number; y: number; height: number };

class Flap {
    public flappy: { x: number; y: number; velocity: number; width: number; height: number; } = { x: 10, y: 50, velocity: 0, width: 4, height: 4 };
    private worldHeight: number = 100;
    private worldWidth: number = 100;
    private readonly numPipes: number = 3;
    private readonly pipeWidth: number = 5;
    private readonly pipeGap: number = 25;
    private pipes: { x: number; topY: number; bottomY: number }[] = [];

    constructor() { }

    public generatePipes(): void {
        const initialX = this.worldWidth + 5;

        for (let i = 0; i < this.numPipes; i++) {
            const topY = Math.floor(Math.random() * (this.worldHeight - this.pipeGap - 1));
            const bottomY = topY + this.pipeGap;

            this.pipes.push({
                x: initialX + i * (this.worldWidth / this.numPipes),
                topY: topY,
                bottomY: bottomY,
            });
        }
    }

    public simulate(): { top: Pipe, bottom: Pipe }[] {
        const result: { top: Pipe, bottom: Pipe }[] = [];

        this.flappy.velocity = Math.max(this.flappy.velocity - 0.05, -1);
        this.flappy.y += this.flappy.velocity;

        for (const pipe of this.pipes) {
            pipe.x -= 0.5;

            if (pipe.x < -this.pipeWidth) {
                pipe.x = this.worldWidth;
                const topY = Math.floor(Math.random() * (this.worldHeight - this.pipeGap - 1));
                const bottomY = topY + this.pipeGap;
                pipe.topY = topY;
                pipe.bottomY = bottomY;
            }

            result.push({
                top: { x: pipe.x, y: 0, height: pipe.topY },
                bottom: { x: pipe.x, y: pipe.bottomY, height: this.worldHeight - pipe.bottomY }
            });
        }

        return result;
    }

    public flap() {
        this.flappy.velocity = Math.max(Math.min(this.flappy.velocity + 0.5, 2), 1);
    }
}

const game = new Flap();

// this following declaration is dumb but im too lazy to make it work properly

let started = false;
const butt = document.createElement('button');
butt.innerHTML = "bird";
butt.style.position = "absolute";
butt.style.width = "4vw";
butt.style.height = "4vh";
butt.style.left = "10%";
butt.style.bottom = "50%";
butt.classList.add("bg-yellow-400");

const pipesContainer = document.createElement('div');

const FlappyButton: Component = () => {
    const onClick = () => {
        if (started) game.flap();
        else start();
    };

    const start = () => {
        started = true;
        const root = document.getElementById('root');
        root.appendChild(butt);
        root.appendChild(pipesContainer);
        game.generatePipes();
        setInterval(() => {
            const pipes = game.simulate();
            console.log(pipes);
            let thisSucksSoBad = "";
            for (let pipe of pipes) {
                thisSucksSoBad += `<button style="position: absolute; left: ${pipe.top.x}vw; top: ${pipe.top.y}vh; height: ${pipe.top.height}vh; width: 5vw;" class="bg-green-400 pipe">top pipe</div>`;
                thisSucksSoBad += `<button style="position: absolute; left: ${pipe.bottom.x}vw; top: ${pipe.bottom.y}vh; height: ${pipe.bottom.height}vh; width: 5vw;" class="bg-green-400 pipe">bottom pipe</div>`;
            }
            pipesContainer.innerHTML = thisSucksSoBad;

            butt.style.bottom = `${game.flappy.y}vh`;
            butt.style.transform = `rotate(${-game.flappy.velocity * 20}deg)`;
            const pipeElements = document.querySelectorAll('[class*="pipe"]');

            const buttRect = butt.getBoundingClientRect();

            for (let pipe of pipeElements) {
                const pipeRect = pipe.getBoundingClientRect();
                if (
                    buttRect.top <= pipeRect.bottom &&
                    buttRect.bottom >= pipeRect.top &&
                    buttRect.left <= pipeRect.right &&
                    buttRect.right >= pipeRect.left
                ) fuckYou();
            }

            if (game.flappy.y > 100 || game.flappy.y < -game.flappy.height) fuckYou();
        }, 1000 / 30);
    };

    // player died, crash their tab
    const fuckYou = () => {
        const fuck = [...Array(2 ** 32 - 1)];
        const you = fuck.map(_ => Math.sqrt(Math.atan(Math.random() * 2 ** 32 - 1)));
        console.log([...Array(200).fill({ fuck, you })]); // extra fuck to whoever has their browser console open
        for (let fuck = 0; fuck < you.length; fuck++) alert(JSON.stringify({ fuck, you }));
        fuckYou();
    };

    return (
        <button onClick={onClick} class="bg-yellow-200">flap</button>
    );
};

export default FlappyButton;
