function generateTitle() {

    let keyword = document.getElementById("keyword").value.trim();

    if (keyword === "") {
        alert("Please enter a keyword.");
        return;
    }

    let genre = document.getElementById("genre").value;

    let titles = [
        `The ${genre} ${keyword} Secretly Married the Poor Girl`,
        `The ${genre} ${keyword} Returned After Ten Years`,
        `The Hidden ${genre} ${keyword} Finally Revealed His Identity`,
        `The ${genre} ${keyword} Fell in Love With His Enemy`,
        `The ${genre} ${keyword} Was Actually a Billionaire`,
        `The Lost ${genre} ${keyword} Came Back for Revenge`,
        `The ${genre} ${keyword} Married a Stranger Overnight`,
        `The ${genre} ${keyword} Protected His Family in Secret`
    ];

    let random = Math.floor(Math.random() * titles.length);

    document.getElementById("result").innerHTML = titles[random];

    let description =
        "A shocking story about " + keyword +
        " filled with secrets, betrayal, romance, revenge, and unexpected twists that will keep you watching until the very end.";

    document.getElementById("description").innerHTML = description;
}

function copyResult() {

    let title = document.getElementById("result").innerText;
    let description = document.getElementById("description").innerText;

    let text = title + "\n\n" + description;

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(text).then(() => {
            alert("Copied!");
        });

    } else {

        let textArea = document.createElement("textarea");
        textArea.value = text;

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        textArea.remove();

        alert("Copied!");
    }

}