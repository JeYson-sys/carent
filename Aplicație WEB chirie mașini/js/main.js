  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const greeting = document.createElement('p');
    const hour = new Date().getHours();

    if (hour < 12) {
      greeting.textContent = 'Bună dimineața! Închiriați mașina perfectă pentru ziua de azi.';
    } else if (hour < 18) {
      greeting.textContent = 'Bună ziua! Găsiți vehiculul potrivit pentru această după-amiază.';
    } else {
      greeting.textContent = 'Bună seara! Relaxați-vă și planificați călătoria perfectă.';
    }

    greeting.style.fontWeight = 'bold';
    greeting.style.color = '#4caf50';
    container.prepend(greeting);
  });

  const advantages = [
    'Flotă variată de mașini pentru toate preferințele',
    'Tarife competitive și transparente',
    'Rezervare simplă și rapidă online',
    'Asistență clienți disponibilă 24/7',
    'Servicii de livrare și ridicare la locație',
  ];

  let index = 0;
  const carouselText = document.getElementById('carouselText');

  function showAdvantage() {
    carouselText.textContent = advantages[index];
    index = (index + 1) % advantages.length;
  }

  setInterval(showAdvantage, 3000); // Schimbă avantajele la fiecare 3 secunde
  showAdvantage(); // Afișează primul avantaj imediat

  