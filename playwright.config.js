/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    webServer: {
        command: 'npm run build && npm run preview',
        port: 21002
    }
};

export default config;
