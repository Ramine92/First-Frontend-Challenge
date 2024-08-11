function ShowHiddenMessage(event) {
  var targetElement = event.target;
  var parentDiv = targetElement.parentNode.parentNode;
  var hiddenDiv = parentDiv.querySelector('div[id^="hidden-quest"]');
  var hiddenParagraph = hiddenDiv.querySelector('p');
  var morelessicon = targetElement;

  if (parentDiv.id === 'first-quest') {
    hiddenParagraph.innerHTML = `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`;
  } else if (parentDiv.id === 'Second-quest') {
    hiddenParagraph.innerHTML = `Yes, Frontend Mentor offers a range of challenges that are free to use, though there are also premium features available.`;
  } else if (parentDiv.id === 'Third-quest') {
    hiddenParagraph.innerHTML = `Yes, you can use Frontend Mentor projects in your portfolio. They're designed to help you build a strong portfolio to showcase your skills.`;
  } else if(parentDiv.id === 'Fourth-quest'){
    hiddenParagraph.innerHTML = `The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated "help" channel! If you haven't joined yet, you can <a href="https://discord.com/invite/UAfh3qzhYb" target='_blank'><strong>get an invite to our Discord server here.<strong></a>`;
  }

  if (hiddenDiv.style.display === "none" || hiddenDiv.style.display === "") {
      hiddenDiv.style.display = "block"; // Show the answer
      morelessicon.src = 'assets/images/icon-minus.svg'; // Change icon to minus
  } else {
      hiddenDiv.style.display = "none"; // Hide the answer
      morelessicon.src = 'assets/images/icon-plus.svg'; // Change icon back to plus
  }
}
