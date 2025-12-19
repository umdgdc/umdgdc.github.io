// Components
const HEAD = "head";
const FOOTER = "footer";
const HEADER = "header";

function LoadComponent(elementID) {
    // Check for <?> element
    var element = document.getElementById(elementID);
    if (element == null)
        return;

    // Fetch html
    fetch("components/" + elementID + ".html")
        .then(r => r.text())
        .then(t => element.innerHTML = t)
        .then(() => {
            // special case for footer
            if (elementID == FOOTER)
            {
                var date = new Date();

                var copy = document.getElementById("cpr");
                var copy_txt = document.createTextNode("© UMDGDC " + date.getFullYear());
                copy.appendChild(copy_txt);

                // var update = document.getElementById("upd");
                // const options = { year: 'numeric', month: 'long', day: 'numeric' };
                // const formatted = date.toLocaleDateString('en-US', options);
                // var update_txt = document.createTextNode("This website was last updated on: " + formatted);
                // update.appendChild(update_txt);
            }
        });
}

// Load components
LoadComponent(HEAD);
LoadComponent(FOOTER);
LoadComponent(HEADER);