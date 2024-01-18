document
  .getElementById("excuseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("personName").value;
    const activity = document.getElementById("activity").value;
    const category = document.getElementById("category").value;
    const excuse = generateExcuse(name, activity, category);
    document.getElementById("excuse").innerText = excuse;
  });

function generateExcuse(name, activity, category) {
  const excuses = {
    health: [
      "odkrył(a), że jest uczulony(a) na odpowiedzialność",
      "ma poważny przypadek 'nie dzisiaj-itozy'",
      "przypadkowo przykleił(a) rękę do czoła",
      "został(a) zdiagnozowany(a) z poważnym przypadkiem lenistwa",
      "zdrowi po operacji plastycznej, są teraz nierozpoznawalnie leniwi"
    ],
    family: [
      "musi uczestniczyć w pogrzebie swojej złotej rybki",
      "rozwiązuje rodzinny spór o pilota do telewizora",
      "pomaga wujkowi w walce z ninja",
      "odkrył(a), że został(a) adoptowany(a) przez rodzinę wiewiórek",
      "uczestniczy w rodzinnej zbiórce, która jest tylko nim/nią w pokoju z lustrem"
    ],
    work: [
      "utknął(a) na spotkaniu z wyimaginowanym przyjacielem",
      "negocjuje traktat pokojowy między długopisami a ołówkami na swoim biurku",
      "jest w podróży służbowej do Trójkąta Bermudzkiego",
      "ma do czynienia z lawiną papierów, dosłownie jest pod nią pogrzebany(a)",
      "ma kryzys w pracy związany z inwazją niewidzialnych kosmitów"
    ],
    transport: [
      "czeka na tankowanie swojej latającej świni",
      "utknął(a) w pętli czasowej w drodze",
      "próbuje teleportować się, ale zgubił(a) instrukcję",
      "aktualnie kłóci się z jego/jej GPS",
      "ściga się ze ślimakiem i przegrywa"
    ],
    pet: [
      "ma do czynienia z kryzysem tożsamości swojego kota",
      "uczy swojego psa fizyki kwantowej",
      "musi wybailować swojego chomika z więzienia, znowu",
      "uczestniczy w sesji terapeutycznej dla swojej złotej rybki, która boi się wody",
      "negocjuje rozejm w trwającej wojnie między jego/jej kotem a tosterem"
    ]
  };

  const categoryExcuses = excuses[category];
  const randomExcuse =
    categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)];
  return `${name} nie może uczestniczyć w ${activity}, ponieważ ${randomExcuse}.`;
}
// JavaScript Document