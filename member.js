function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.options[skillsMember.selectedIndex].value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberOption = document.createElement("option");
    skillsMemberOption.value = skillsMemberValue;
    skillsMemberOption.text = skillsMemberText;
    skills.appendChild(skillsMemberOption);
    skillsMember.remove(skillsMember.selectedIndex);
}