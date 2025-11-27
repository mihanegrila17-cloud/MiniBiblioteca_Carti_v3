(function () {
  const books = [
    {
      titlu: 'Crimă și pedeapsă',
      autor: 'F.M. Dostoievski',
      editura: 'Polirom',
      an: 1866,
      gen: 'Psihologic',
      descr: 'Vinovăție, ispășire și dileme morale în Petersburgul secolului XIX.',
      descriereLunga: 'Vinovăție, ispășire și dileme morale în Petersburgul secolului XIX sa zicem ca asta e descriere lunga.',
      overlay: 'Vinovăție, ispășire și dileme morale în Petersburg.',
      img: 'img/Crima.jpeg',
      link: 'https://ro.wikipedia.org/wiki/Crim%C4%83_%C8%99i_pedeaps%C4%83'
    },
    {
      titlu: 'Dune',
      autor: 'Frank Herbert',
      editura: 'Nemira',
      an: 1965,
      gen: 'SF',
      descr: 'Politică, ecologie și destin pe planeta Arrakis.',
      descriereLunga: 'Politică, ecologie și destin pe planeta Arrakis.',
      overlay: 'Politică, ecologie și destin pe Arrakis.',
      img: 'img/Dune.jpeg',
      link: 'https://ro.wikipedia.org/wiki/Dune_(roman)'
    },
    {
      titlu: 'Harry Potter și Piatra Filozofală',
      autor: 'J.K. Rowling',
      editura: 'Arthur',
      an: 1997,
      gen: 'Fantasy',
      descr: 'Primul an la Hogwarts: prietenie, curaj și magie.',
      descriereLunga: 'Primul an la Hogwarts: prietenie, curaj și magie.',
      overlay: 'Primul an la Hogwarts: magie, prietenie, pericol.',
      img: 'img/HarruPotter1.jpeg',
      link: 'https://ro.wikipedia.org/wiki/Harry_Potter_%C8%99i_Piatra_Filozofal%C4%83'
    },
    {
      titlu: 'Mândrie și prejudecată',
      autor: 'Jane Austen',
      editura: 'Litera',
      an: 1813,
      gen: 'Clasic',
      descr: 'Dragoste, maniere și statut social în Anglia regency.',
      descriereLunga: 'Dragoste, maniere și statut social în Anglia regency.',
      overlay: 'Dragoste și maniere în societatea engleză.',
      img: 'img/Mandrie_si_prejudecata.png',
      link: 'https://ro.wikipedia.org/wiki/M%C3%A2ndrie_%C8%99i_prejudecat%C4%83'
    },
    {
      titlu: 'Micul Prinț',
      autor: 'Antoine de Saint-Exupéry',
      editura: '—',
      an: 1943,
      gen: 'Ficțiune',
      descr: 'O poveste tandră despre prietenie, sens și imaginație.',
      descriereLunga: 'O poveste tandră despre prietenie, sens și imaginație.',
      overlay: 'O meditație tandră despre prietenie și sens.',
      img: 'img/MiculPrint.jpeg',
      link: 'https://ro.wikipedia.org/wiki/Micul_Pr%C3%AEn%C8%9B'
    },
    {
      titlu: 'Moromeții',
      autor: 'Marin Preda',
      editura: 'Cartea Românească',
      an: 1955,
      gen: 'Clasic RO',
      descr: 'Satul românesc între tradiție, umor și transformare.',
      descriereLunga: 'Satul românesc între tradiție, umor și transformare.',
      overlay: 'Satul românesc între tradiție și schimbare.',
      img: 'img/Morometii.jpeg',
      link: 'https://ro.wikipedia.org/wiki/Morome%C8%9Bii'
    },
    {
      titlu: '1984',
      autor: 'George Orwell',
      editura: 'Cartex',
      an: 1949,
      gen: 'Distopie',
      descr: 'Un avertisment despre totalitarism, supraveghere și limbaj.',
      descriereLunga: 'Un avertisment despre totalitarism, supraveghere și limbaj.',
      overlay: 'Distopie despre supraveghere și libertate.',
      img: 'img/Orwel.png',
      link: 'https://ro.wikipedia.org/wiki/1984_(roman)'
    },
    {
      titlu: 'Sapiens',
      autor: 'Yuval Noah Harari',
      editura: 'Polirom',
      an: 2011,
      gen: 'Istorie',
      descr: 'Cum miturile, banii și tehnologia au modelat societatea umană.',
      descriereLunga: 'Cum miturile, banii și tehnologia au modelat societatea umană.',
      overlay: 'O istorie captivantă a speciei umane.',
      img: 'img/Sapiens.jpg',
      link: 'https://ro.wikipedia.org/wiki/Sapiens._Scurt%C4%83_istorie_a_omenirii'
    }
  ];

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
  const modalLink = document.getElementById('modalLink');

  // Filtre (populate dinamic)
  const authorFilterList = document.getElementById('authorFilters');
  const genreFilterList = document.getElementById('genreFilters');
  let authorChecks = [];
  let genreChecks = [];

  const cards = () => Array.from(grid.querySelectorAll('.card'));

  function renderBooks() {
    grid.innerHTML = '';
    books.forEach(book => {
      const card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;
      card.dataset.titlu = book.titlu;
      card.dataset.autor = book.autor;
      card.dataset.editura = book.editura;
      card.dataset.an = String(book.an);
      card.dataset.gen = book.gen;
      card.dataset.descr = book.descr;
      card.dataset.descriereLunga = book.descriereLunga || book.descr;
      card.dataset.link = book.link || '';

      card.innerHTML = `
        <div class="cover-wrap">
          <img src="${book.img}" alt="${book.titlu}">
          <div class="overlay"><p>${book.overlay || book.descr}</p></div>
        </div>
        <div class="meta">
          <h3 class="title">${book.titlu}</h3>
          <div class="byline">${book.autor} <span class="muted">• ${book.editura}</span></div>
          <div class="tags"><span class="tag">${book.an}</span><span class="tag">${book.gen}</span></div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderFilterList(target, className, values) {
    const uniqueSorted = Array.from(new Set(values)).sort(roCollator.compare);
    target.innerHTML = uniqueSorted.map(val =>
      `<li><label><input type="checkbox" class="${className}" value="${val}"> ${val}</label></li>`
    ).join('');
    return Array.from(target.querySelectorAll('input'));
  }

  function renderFilters() {
    authorChecks = renderFilterList(authorFilterList, 'f-author', books.map(b => b.autor));
    genreChecks = renderFilterList(genreFilterList, 'f-genre', books.map(b => b.gen));
    authorChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
    genreChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
  }

  function updateCount() {
    const visible = cards().filter(c => c.style.display !== 'none').length;
    count.textContent = `${visible} / ${cards().length} carti vizibile`;
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
      const hay = (card.dataset.titlu + ' ' + card.dataset.autor + ' ' + card.dataset.editura + ' ' + card.dataset.gen).toLowerCase();
      const matchesTerm = (term === '' || hay.includes(term));
      const matchesAuthor = (A.length === 0 || A.includes(card.dataset.autor));
      const matchesGenre = (G.length === 0 || G.includes(card.dataset.gen));
      card.style.display = (matchesTerm && matchesAuthor && matchesGenre) ? '' : 'none';
    });
    updateCount();
  }

  // Cautare si filtre
  q.addEventListener('input', applyFiltersAndSearch);
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
      q.dispatchEvent(new Event('input')); // declanseaza filtrarea
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
    modalDescr.textContent = card.dataset.descriereLunga || card.dataset.descr;

    if (card.dataset.link) {
      modalLink.href = card.dataset.link;
      modalLink.style.display = 'inline-flex';
    } else {
      modalLink.removeAttribute('href');
      modalLink.style.display = 'none';
    }

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

  // Inchide modalul cu ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Init
  renderBooks();
  renderFilters();
  applyFiltersAndSearch();
})();
