(function () {
  const grid = document.getElementById('grid');
  const q = document.getElementById('q');
  const count = document.getElementById('count');
  const noResults = document.getElementById('no-results');
  const roCollator = new Intl.Collator('ro', { sensitivity: 'base' });

  // Elemente modal
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalByline = document.getElementById('modalByline');
  const modalDescr = document.getElementById('modalDescr');
  const modalClose = document.getElementById('modalClose');

  // Filtre
  const authorChecks = Array.from(document.querySelectorAll('.f-author'));
  const genreChecks = Array.from(document.querySelectorAll('.f-genre'));

  const cards = () => Array.from(grid.children);

  function updateCount() {
    const visible = cards().filter(c => c.style.display !== 'none').length;
    count.textContent = `${visible} / ${cards().length} cărți vizibile`;
    noResults.style.display = (visible === 0) ? 'block' : 'none';
  }

  function currentFilters() {
    const A = authorChecks.filter(c => c.checked).map(c => c.value);
    const G = genreChecks.filter(c => c.checked).map(c => c.value);
    return { A, G };
  }

  function applyFiltersAndSearch() {
    const term = q.value.trim().toLowerCase();
    const { A, G } = currentFilters();

    cards().forEach(card => {
      const hay = (card.dataset.titlu + " " + card.dataset.autor + " " + card.dataset.editura + " " + card.dataset.gen).toLowerCase();
      const matchesTerm = (term === "" || hay.includes(term));
      const matchesAuthor = (A.length === 0 || A.includes(card.dataset.autor));
      const matchesGenre = (G.length === 0 || G.includes(card.dataset.gen));
      card.style.display = (matchesTerm && matchesAuthor && matchesGenre) ? "" : "none";
    });
    updateCount();
  }

  // Căutare și filtre
  q.addEventListener('input', applyFiltersAndSearch);
  authorChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
  genreChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
  const clearFiltersBtn = document.getElementById('clear-filters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      authorChecks.forEach(c => c.checked = false);
      genreChecks.forEach(c => c.checked = false);
      applyFiltersAndSearch();
    });
  }

  // Sortare (liste HTML)
  function sortBy(key, dir) {
    const arr = cards().slice();
    arr.sort((a, b) => {
      if (key === 'an') {
        const A = parseInt(a.dataset.an, 10);
        const B = parseInt(b.dataset.an, 10);
        return (dir === 'asc') ? (A - B) : (B - A);
      } else {
        const A = a.dataset[key] || '';
        const B = b.dataset[key] || '';
        const cmp = roCollator.compare(A, B);
        return (dir === 'asc') ? cmp : -cmp;
      }
    });
    arr.forEach(c => grid.appendChild(c)); // reordonare DOM
    updateCount();
  }

  document.querySelectorAll('.sort').forEach(li => {
    li.addEventListener('click', function () {
      document.querySelectorAll('.sort').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
      sortBy(this.dataset.key, this.dataset.dir);
    });
  });

  const resetBtn = document.getElementById('reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      q.value = '';
      q.dispatchEvent(new Event('input')); // declanșează filtrarea
      document.querySelectorAll('.sort').forEach(x => x.classList.remove('active'));
    });
  }

  // Detalii (modal) – click pe card
  function openModal() {
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showCardDetails(card) {
    modalTitle.textContent = card.dataset.titlu;
    modalByline.textContent = `${card.dataset.autor} • ${card.dataset.editura} • ${card.dataset.an} • ${card.dataset.gen}`;
    const img = card.querySelector('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalDescr.textContent = card.dataset.descr;
    openModal();
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    showCardDetails(card);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    showCardDetails(card);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  modalClose.addEventListener('click', closeModal);

  // Închide modalul cu ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Init
  applyFiltersAndSearch();
})();
