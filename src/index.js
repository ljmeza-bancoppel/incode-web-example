import ThrowableDiagnostic from '@parcel/diagnostic';
import { createOnBoarding, createSession, sendGeolocation, renderFrontIDCamera } from './components/incode.js'
import { delay } from './components/pages.js';

import "./styles.css";

let onBoarding;
let session;

const container = document.getElementById("incode-container");

const app = function () {
  container.innerHTML = `<p>Creando la sesión...</p>`;
  try {
    onBoarding = createOnBoarding(); // initialize the instance
    /**
     * The Incode Web SDK components encapsulate different 
     * functionalities that use a common set of models that need to be pre-loaded.
     */
    onBoarding.warmup();
    createSession(onBoarding).then((session) => {
      container.innerHTML = `<h3>Sesión</h3>
      <p><strong>token:</strong> ${session.token}</p>
      <p><strong>interviewId:</strong> ${session.interviewId}</p>
      <p><strong>clientId:</strong> ${session.clientId}</p>`;

      sendGeolocation(onBoarding, session.token).then((res) => {
        container.innerHTML = `<h3>Ubicación</h3>
        <p><strong>Ubicación:</strong> ${res.location}</p>
        <p><strong>token:</strong> ${session.token}</p>`;
        renderFrontIDCamera(onBoarding, container, session);
      });
    });
  } catch (e) {
    console.dir(e);
    container.innerHTML = `<p>Something went wrong</p>`;
    throw e;
  }
}
document.addEventListener("DOMContentLoaded", app);
