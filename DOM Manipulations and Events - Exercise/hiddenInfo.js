function lockedProfile() {
    let main = document.getElementById('main');
    main.addEventListener('click', onClick);

    function onClick(event) {
        let btn = event.target;
        if (btn.tagName == "BUTTON") {
            let profile = btn.parentElement;
            const isNotLocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;
            if(isNotLocked) {
                const hiddenInfo = Array.from(profile.getElementsByTagName('div'))
                .find(d => d.id.includes('HiddenFields'));

                btn.textContent = btn.textContent == "Show more" ? 'Hide it' : 'Show more';
                hiddenInfo.style.display = hiddenInfo.style.display == 'block' ? '' : 'block';
            }
        }
    }

}
