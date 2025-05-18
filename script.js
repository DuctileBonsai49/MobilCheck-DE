window.onload = () => {
  const anbieterSelect = document.getElementById("anbieter");
  const problemSelect = document.getElementById("problem");

  anbieterListe.forEach(anbieter => {
    let opt = document.createElement("option");
    opt.value = anbieter;
    opt.textContent = anbieter;
    anbieterSelect.appendChild(opt);
  });

  problemListe.forEach(problem => {
    let opt = document.createElement("option");
    opt.value = problem;
    opt.textContent = problem;
    problemSelect.appendChild(opt);
  });
};

function zeigeLoesung() {
  const anbieter = document.getElementById("anbieter").value;
  const problem = document.getElementById("problem").value;
  const key = `${anbieter}|${problem}`;
  const output = document.getElementById("loesung");

  if (loesungen[key]) {
    output.innerHTML = `<h3>Lösung für ${anbieter} – ${problem}</h3><p>${loesungen[key].replace(/\n/g, "<br>")}</p>`;
  } else {
    output.innerHTML = `<p>Leider haben wir noch keine Lösung für diese Kombination. Melde uns das Problem!</p>`;
  }
}