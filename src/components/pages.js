import { delay, renderFrontIDCamera } from './incode.js'

export const renderWelcomePage = async function (onBoarding, container, session) {
    container.innerHTML = "<p>Página de inicio...</p>";
    await delay(5000);
    renderFrontIDCamera(onBoarding, container, session);
}
