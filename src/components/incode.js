import { apiKey, apiURL, apiConfigurationId } from '../constants.js';

export const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * You need to call this method before using the SDK. 
 * The method returns an instance of the SDK.
 * 
 * @returns Object: The SDK instance
 */
export const createOnBoarding = function () {
    const incodeConfig = {
        apiKey: apiKey,
        apiURL: apiURL,
        lang: 'es',
        encrypt: true,
    };
    return window.OnBoarding.create(incodeConfig);
}

/**
 * Initializes new onboarding session.
 * 
 * @param {*} onBoarding 
 * @returns Object: JSON object
 */
export const createSession = function (onBoarding) {
    return onBoarding.createSession("MX", null, {
        "configurationId": apiConfigurationId
    });
}

/**
 * This is almost the same as addGeolocation with the difference 
 * being that this will automatically ask the user for the coordinates.
 * 
 * @param {*} onBoarding 
 * @param {*} token 
 * @returns JSON object
 */
export const sendGeolocation = function (onBoarding, token) {
    return onBoarding.sendGeolocation({ token });
}

const showError = function (container) {
    container.innerHTML = `<p>Algún error...</p>`;
}

export const renderFrontIDCamera = async function (onBoarding, container, session) {
    await delay(5000);
    onBoarding.renderCamera("front", container, {
        onSuccess: (result) => {
            renderBackIDCamera(onBoarding, container, session)
        },
        onError: showError,
        numberOfTries: 3,
        token: session,
        showTutorial: true,
    });
}

export const renderBackIDCamera = function (onBoarding, container, session) {
    onBoarding.renderCamera("back", container, {
        onSuccess: (result) => {
            processId(onBoarding, container, session)
        },
        onError: showError,
        token: session,
        numberOfTries: 3,
        showTutorial: true,
    });
}

export const processId = function (onBoarding, container, session) {
    container.innerHTML = "<p>Cargando...</p>";
    onBoarding.processId({ token: session.token }).then(() => {
        container.innerHTML = "<p>Procesando...</p>";
        getOCRData(onBoarding, container, session);
    });
}

const getOCRData = async function (onBoarding, container, session) {
    const ocrData = await onBoarding.ocrData({ token: session });
    const { birthDate, name, address, gender } = ocrData;
    container.innerHTML = `<p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Año de nacimiento:</strong> ${birthDate}</p>
    <p><strong>Dirección:</strong> ${address}</p>
    <p><strong>Género:</strong> ${gender}</p>`;
    await delay(10000);
    renderPoa(onBoarding, container, session);
    return null;
}

const renderPoa = function (onBoarding, container, session) {
    onBoarding.renderCamera("document", container, {
        onSuccess: (result) => {
            renderSelfieCamera(onBoarding, container, session);
        },
        onError: showError,
        numberOfTries: 3,
        onLog: () => { },
        token: session,
        permissionBackgroundColor: "#696969",
        sendBase64: false,
        nativeCamera: false,
    });
}

const renderSelfieCamera = function (onBoarding, container, session) {
    onBoarding.renderCamera("selfie", container, {
        onSuccess: () => {
            renderFaceMatch(onBoarding, container, session);
        },
        onError: showError,
        token: session,
        numberOfTries: 3,
        showTutorial: true,
    });
}

const renderFaceMatch = function (onBoarding, container, session) {
    onBoarding.renderFaceMatch(container, {
        onSuccess: () => {
            renderSignature(onBoarding, container, session);
        },
        token: session,
    });
}

const renderSignature = function (onBoarding, container, session) {
    onBoarding.renderSignature(container, {
        onSuccess: renderVideoConference,
        token: session.token,
    });
}

const renderVideoConference = function (container) {
    onBoarding.renderConference(
        container,
        {
            token: session,
            showOTP: false,
        },
        {
            onSuccess: (status) => {
                console.log("success");
                container.innerHTML = `<p>Exitoso con estatus: ${status}</p>`;
            },
            onError: (error) => {
                console.log("error", error);
                container.innerHTML = `<p>Error con estatus: ${error}</p>`;
            },
            onLog: (...params) => console.log("onLog", ...params),
        }
    );
}