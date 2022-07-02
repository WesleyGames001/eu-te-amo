const { keyboard, Key } = require('@nut-tree/nut-js');

async function wait(time) {
    return new Promise((res) => setTimeout(res, time))
}

async function start() {
    await wait(1000)

    keyboard.config.autoDelayMs = 1;

    for (let i = 78; i <= 1000; i++) {
        await keyboard.type(`EU TE AMO MEU AMOR <3 (${i} de 1000)`)
        await keyboard.type(Key.Enter)

        console.log(`A declaração ${i} foi enviada com sucesso!`)

        if (i % 100 == 0) await wait(500)
    }
}

start()
