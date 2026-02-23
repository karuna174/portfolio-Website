function showInput() {
    document.getElementById("inputBox").style.display = "block";
    document.getElementById("skillInput").focus();
}

function addSkill() {
    let input = document.getElementById("skillInput");
    let skill = input.value.trim();

    if (skill === "") return;

    let newSkill = document.createElement("div");
    newSkill.textContent = skill;

    // Remove skill when clicked
    newSkill.onclick = function() {
        this.remove();
    };

    document.getElementById("skillList").appendChild(newSkill);

    input.value = "";
    document.getElementById("inputBox").style.display = "none";
}

// Add skill when pressing Enter
document.getElementById("skillInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addSkill();
    }
});