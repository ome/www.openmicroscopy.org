$(document).foundation()

$(function () {
    // We don't want main menu top links to be 'active' as links
    // We can't replace the <a> because foundation uses them for collapsible menu on mobile
    // and we can't set href="#" since the travis build fails.
    $("#main-menu .has-submenu>a").click(event => event.preventDefault());
});


function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    // Place in the top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';

    textArea.value = text;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    var successful;
    try {
        successful = document.execCommand('copy');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);

    if (successful) {
        // show user that copying happened - update text on element (e.g. button)
        let target = event.target;
        let html = target.innerHTML;
        target.innerHTML = "Copied!"
        setTimeout(() => {
            // reset after 1 second
            target.innerHTML = html
        }, 1000)
    } else {
        console.log("Copying failed")
    }
}
