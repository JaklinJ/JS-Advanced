function attachEventsListeners() {

    let daysField = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');
    let hoursField = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesField = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsField = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysConvert);
    hoursBtn.addEventListener('click', hoursConvert);
    minutesBtn.addEventListener('click', minutesConvert);
    secondsBtn.addEventListener('click', secondsConvert);

    function daysConvert() {
        let days = daysField.value;
        hoursField.value = days*24;
        minutesField.value = (days * 24) * 60;
        secondsField.value = ((days * 24) * 60) * 60;
    }
    function hoursConvert() {
        let hours = hoursField.value;
        daysField.value = hours / 24;
        minutesField.value = hours * 60;
        secondsField.value = ((hours * 60) * 60);
    }
    function minutesConvert() {
        let minutes = minutesField.value;
        secondsField.value = minutes * 60;
        hoursField.value = minutes / 60;
        daysField.value = (minutes / 60) / 24;
    }
    function secondsConvert() {
        let seconds = secondsField.value;
        minutesField.value = seconds / 60;
        hoursField.value = (seconds / 60) / 60;
        daysField.value = ((seconds / 60) / 60) / 24;
    }
}
