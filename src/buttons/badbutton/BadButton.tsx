import { Component, onMount } from "solid-js";
import bad from "./car_hitting_a_razer_keyboard_at_230kmph.mp3";
import normal from "./normal.png";
import lyrics from "./lyrics";

const badbuttons = [];
let data: Object = null;
let canstart = false;
const loops = 16 * 16; // this looks close enough to 4:3

const BadButton: Component = () => {
    const onClick = () => {
        if (!canstart) return anim();
        let badactualbutton = document.getElementById('badactualbutton') as HTMLButtonElement;
        badactualbutton.disabled = true;

        let audio = new Audio(bad);
        audio.volume = 0.2;
        audio.play();

        let start = Date.now();

        let interval = setInterval(() => {
            const time = (Date.now() - start);
            const frame = Math.floor(time / (1000 / 30));

            const lyric = (lyrics.findLast(v => (v[0] as number) < time) || [0, 'Playing', 'Playing']).slice(1) as string[];

            badactualbutton.innerHTML = lyric[0] == lyric[1] ? lyric[0] : lyric[0] + '<br />' + lyric[1];

            const pixels = data[frame];
            if (typeof pixels == 'undefined') return clearInterval(interval);

            for (let i = 0; i < loops; i++) {
                badbuttons[i].disabled = pixels[i] == 1 ? true : false;
            }
        }, 1000 / 30); // 30 fps
    };

    const anim = async () => {
        if (badbuttons.length > 0) return;
        let badbutton = document.getElementById('badbutton');
        let badactualbutton = document.getElementById('badactualbutton');

        // play a cool animation to entertain the user while the data hopefully finishes loading
        for (let i = 0; i < loops; i++) {
            setTimeout(() => {
                let button: HTMLButtonElement = document.createElement('button');
                button.innerText = "bad";
                button.style.transition = '0.033s';
                button.classList.add('badbutton');
                badbuttons.push(button);
                badbutton.appendChild(button);

                button.onclick = () => window.location.href = normal;
                setTimeout(() => {
                    button.disabled = true;
                    button.onclick = null;
                }, 2 * 5 * 16);

                if (i % 16 == 15) badbutton.appendChild(document.createElement('br'));
            }, 5 * i);
        }

        setTimeout(() => {
            badactualbutton.innerHTML = "Start";
            // hopefully everything is loaded by now, idk what happens if it's not so let's just hope it never happens
            canstart = true;
        }, 5 * loops + 500);

        // this is done like this purely so that it sucks and that it's more complicated
        // i know i could've just moved the fetch into the onclick function, but i wanted to make my life more miserable.
        data = await fetch('./badbutton/frames.json').then(a => a.json());
        fetch(bad); // this sucks but it loads it beforehand so whatever
    }

    return (
        <span id="badbutton">
            <style>{`
                .badbutton:disabled {
                    background-color: #333;
                    color: #eee;
                }
            `}</style>
            <button onClick={onClick} class="bg-red-200" id="badactualbutton">Bad Button</button><br />
        </span>
    );
};

export default BadButton;
