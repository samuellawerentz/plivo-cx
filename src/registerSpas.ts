import { registerApplication, start } from "single-spa"

const spas = {
    service: "@plivo-cx/service",
    engage: "@plivo-cx/engage",
}

export async function registerSpas() {
    for (const [k, v] of Object.entries(spas)) {
        registerApplication({
            name: k,
            activeWhen: `/${k}`,
            app: () => import(/* @vite-ignore */ v)
        });
    }
}

export function runSpas() {
    start();
}
