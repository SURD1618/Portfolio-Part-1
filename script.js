function openResumePopup() {
  document.getElementById("resumePopup").style.display = "flex";
}

function closeResumePopup() {
  document.getElementById("resumePopup").style.display = "none";
}



window.onscroll = function () {
  const goUpBtn = document.getElementById("goUpBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
};

// Scroll to top when the button is clicked
document.getElementById("goUpBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



var modal = document.getElementById("publicationModal");
var span = document.getElementsByClassName("close")[0];

var publications = {
  publication1: {
    imgSrc: "images/NCIIISCSIT.jpg",
    title: "An Answer to All the WH Questions of Cyber Security",
    url: "https://ijsrcseit.com/home/issue/view/article.php?id=CSEIT218216",
    publisher: "IJSRCSEIT Publisher",
    date: "March 2021",
    description:
      "This paper explores the significance of cybersecurity in a digital world where data safety is a growing concern. Despite investments, cybercrimes continue to rise. The paper questions whether cybersecurity is solely the government's responsibility or if citizens should also play a role. It aims to provide answers to these issues, emphasizing the shared responsibility of protecting data in an internet-dependent society.",
  },
  publication2: {
    imgSrc: "images/submissionproof.png",
    title:
      "Smart Contract Based e-Voting System with Selfdestruction for Security in Blockchain",
    url: "#",
    publisher: "IJEECS Publisher (Pending Publication)",
    date: "Expected Publication: April 2024",
    description:
      "This article addresses challenges in e-Voting systems, emphasizing security, transparency, and data protection through blockchain technology. It proposes an Ethereum-based system using smart contracts and Proof of Authority (PoA) for secure, efficient elections. The system also ensures voter anonymity through vote destruction, safeguarding democratic principles.",
  },
};

function openModal(publicationId) {
  var publication = publications[publicationId];
  document.querySelector(".publication-img").src = publication.imgSrc;
  document.getElementById("publicationTitle").textContent = publication.title;
  document.getElementById("publicationURL").textContent = publication.url;
  document.getElementById("publicationURL").href = publication.url;
  document.getElementById("publicationPublisher").textContent =
    publication.publisher;
  document.getElementById("publicationDate").textContent = publication.date;
  document.getElementById("publicationDescription").textContent =
    publication.description;
  modal.style.display = "block";
}

document.getElementById("publication1").onclick = function () {
  openModal("publication1");
};
document.getElementById("publication2").onclick = function () {
  openModal("publication2");
};

// Close modal when clicking on 'x'
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
