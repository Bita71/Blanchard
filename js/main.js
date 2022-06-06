window.addEventListener('DOMContentLoaded', function () {

  // HEADER MENU

  let btnBurger = document.querySelector('#burger');
  let btnBurgerClose = document.querySelector('#burger-close');
  let menuHeader = document.querySelector('#header-menu');

  btnBurger.addEventListener('click', function () {
    btnBurgerClose.classList.toggle('is-active-burger');
    menuHeader.classList.toggle('is-active');
  })

  btnBurgerClose.addEventListener('click', function () {
    btnBurgerClose.classList.toggle('is-active-burger');
    menuHeader.classList.toggle('is-active');
  })

  let headerNavLinks = document.querySelectorAll('.header-nav-link');
  for (let link of headerNavLinks) {
    link.addEventListener('click', () => {
      btnBurgerClose.classList.toggle('is-active-burger');
      menuHeader.classList.toggle('is-active');
    })
  }

  // SEARCH MOBILE

  let formSearchMobile = document.querySelector('.header-search-mobile');
  let btnSearchMobile = document.querySelector('.search-button-mobile');
  let inputSearchMobile = document.querySelector('.header-input-mobile');
  let closeSearchMobile = document.querySelector('.search-mobile-close');
  let headerLogo = document.querySelector('.header-logo');


  btnSearchMobile.addEventListener('click', function () {
    btnSearchMobile.classList.add('is-open-button-search')
    formSearchMobile.classList.add('is-active-search-mobile');
    inputSearchMobile.classList.remove('is-close');
    closeSearchMobile.classList.remove('is-close');
    btnBurger.classList.add('is-close-burger-mobile')
    headerLogo.classList.add('is-close-logo-mobile')
    btnSearchMobile.blur();
  })

  closeSearchMobile.addEventListener('click', function () {
    btnSearchMobile.classList.remove('is-open-button-search')
    formSearchMobile.classList.remove('is-active-search-mobile');
    inputSearchMobile.classList.add('is-close');
    closeSearchMobile.classList.add('is-close');
    btnBurger.classList.remove('is-close-burger-mobile')
    headerLogo.classList.remove('is-close-logo-mobile')
  })

  document.addEventListener('click', function (e) {
    if (e.target.className != 'search-button-mobile is-open-button-search' && e.target.className != 'header-input-mobile' && e.target.className != 'search-mobile-close') {
      btnSearchMobile.classList.remove('is-open-button-search')
      formSearchMobile.classList.remove('is-active-search-mobile');
      inputSearchMobile.classList.add('is-close');
      closeSearchMobile.classList.add('is-close');
      btnBurger.classList.remove('is-close-burger-mobile')
      headerLogo.classList.remove('is-close-logo-mobile')
    }
  })


  // HEADER SELECT

  let btnList = document.querySelectorAll('.header-button');

  let dropList = document.querySelectorAll('.simplebar-content')


  function closeSelect(btn) {
    btn.classList.remove('is-active-select');
    btn.nextElementSibling.classList.remove('is-active');
  }

  function openSelect(btn) {
    btn.classList.add('is-active-select');
    btn.nextElementSibling.classList.add('is-active');
  }

  for (let btn of btnList) {
    btn.addEventListener('focus' || 'click', function () {
      for (let btnClose of btnList) {
        closeSelect(btnClose);
      }
      openSelect(btn);
    });


    for (let dropEl of dropList) {
      let lastChild = dropEl.lastElementChild;
      lastChild.addEventListener('blur', closeSelect(btn));
    }

    document.addEventListener('click', function (e) {
      if (e.target.className != ('header-button is-active-select' || 'simplebar-content')) {
        closeSelect(btn);
      }
    });
  }

  // SIMPLEBAR
  function createSimplebar(id) {
    new SimpleBar(document.getElementById(id), {
      autoHide: false,
      forceVisible: false,
      scrollbarMinSize: 28,
      scrollbarMaxSize: 220,
    });
  }

  createSimplebar("simple-1");
  createSimplebar("simple-2");
  createSimplebar("simple-3");
  createSimplebar("simple-4");
  createSimplebar("simple-5");

  // HEADER SEARCH

  let searchForm = document.querySelector('.header-search');
  let searchInput = document.querySelector('.header-search-input');
  let defPlaceholder = searchInput.placeholder;

  searchInput.addEventListener('focus', function () {
    searchForm.classList.add('is-focus');
    searchInput.placeholder = "";
  });

  searchInput.addEventListener('blur', function () {
    searchForm.classList.remove('is-focus');
    searchInput.placeholder = defPlaceholder;
  });

  document.addEventListener('click', function (e) {
    if (e.target.className != 'header-search-input') {
      searchForm.classList.remove('is-focus');
    }
  });

  // CUSTOM GALLERY SELECT

  const gallerySelect = document.querySelector('#gallerySelect');
  const choices = new Choices(gallerySelect, {
    position: 'bottom',
    searchEnable: false,
    shouldSort: false,
  });

  function clearSelectedElement() {
    let galleryOptionList = document.querySelectorAll('.choices__item--choice');
    for (let option of galleryOptionList) {
      option.classList.add('is-open');
      if (option.classList[2] === 'is-selected') {
        option.classList.add('is-close');
      }
    }
  }

  const gallerySelectChoices = document.querySelector('.choices');

  gallerySelectChoices.addEventListener('click', clearSelectedElement);

  // GALLERY SLIDER


  const swiper = new Swiper('.swiper-1', {
    slidesPerColumnFill: 'строка',
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    spaceBetween: 12,


    pagination: {
      el: '.pagination-1',
      type: 'fraction',
    },

    navigation: {
      disabledClass: 'button-disable',
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    breakpoints: {

      651: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1230: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },

    },
  });

  // GALLERY MODAL

  const modal = new GraphModal();

  let modalInfoArtsList = [
    {
      id: 'art-1',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-2',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-3',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-4',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-5',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-6',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-7',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-8',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-9',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-10',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-11',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-12',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-13',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-14',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-15',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-16',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-17',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-18',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-19',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-20',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-21',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-22',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-23',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-24',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-25',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-26',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-27',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-28',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-29',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    }, {
      id: 'art-30',
      authorName: 'Казимир Малевич',
      artName: '“Женщина с граблями”',
      years: '1931-1932',
      text: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
    },
  ]

  let gallerySLideList = document.querySelectorAll('.gallery-slide');
  let modalAuthorName = document.querySelector('.modal-info-author-name');
  let modalArtName = document.querySelector('.modal-info-art-name');
  let modalYears = document.querySelector('.modal-info-years');
  let modalText = document.querySelector('.modal-info-text');
  let modalImg = document.querySelector('.modal-img');


  for (let slide of gallerySLideList) {
    slide.addEventListener('click', () => {
      for (let art of modalInfoArtsList) {
        if (art.id === slide.id) {
          modalAuthorName.textContent = art.authorName;
          modalArtName.textContent = art.artName;
          modalYears.textContent = art.years;
          modalText.textContent = art.text;
          modalImg.className = `modal-img ${art.id}`;
        }
      }
    })
  }


  // TABS


  $(function () {
    $("#tabs").tabs({
      active: 2,
      hide: { effect: "fade", duration: 800 },
      show: { effect: "fade", duration: 800 },
    });
  });


  // ACCORDION

  let artistsFromFrance = [
    {
      fullName: "Жан Фуке",
      dateOfBorn: new Date("1415"),
      dateOfDeath: new Date("1481"),
      photo: "./img/catalog/artists/france/3.jpeg",
      textAboutArtist: "",
    },
  ]
  let artistsFromGermany = [
    {
      fullName: "Дин Чук",
      dateOfBorn: new Date("1415"),
      dateOfDeath: new Date("1481"),
      photo: "./img/catalog/artists/germany/4.jpg",
      textAboutArtist: "",
    },
  ]
  let artistsFromItaly = [
    {
      fullName: "Доменико Гирландайо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "./img/catalog/artists/italy/1.jpg",
      textAboutArtist: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
    },
    {
      fullName: "Бенедетто ди Биндо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Бергоньоне, Амброджо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Биссоло, Франческо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Больтраффио, Джованни",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Бонсиньори, Франческо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Боттичини, Рафаэлло",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Брамантино",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Бреа, Людовико",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Бьяджо д’Антонио Туччи",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Веккьетта",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Андреа Верроккьо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Беноццо Гоццоли",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Граначчи, Франческо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Грегорио ди Чекко",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Джованни да Удине",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Джованни ди Паоло",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Джорджоне",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Парентино, Бернардо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Пезеллино",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Пьетро Перуджино",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Перуцци, Бальдассаре",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Пизанелло",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },
    {
      fullName: "Пинтуриккьо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "",
      textAboutArtist: "",
    },


  ]
  let artistsFromRussia = [
    {
      fullName: "Доменко Гирландайо",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "./img/catalog/artists/russia/1.jpg",
      textAboutArtist: "",
    },
  ]
  let artistsFromBelgium = [
    {
      fullName: "Кун Дин",
      dateOfBorn: new Date("1448-6-2"),
      dateOfDeath: new Date("1494-1-11"),
      photo: "./img/catalog/artists/belgium/2.png",
      textAboutArtist: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).",
    },
  ]

  let artistsLists = [artistsFromFrance, artistsFromGermany, artistsFromItaly, artistsFromRussia, artistsFromBelgium];

  function addArtist(artist, list, id) {
    let listItem = document.createElement('li');
    let listItemLink = document.createElement('a');
    startArtist = "Доменико Гирландайо";

    listItem.classList.add('catalog-artists-item');
    listItemLink.classList.add('reset-link');
    listItemLink.classList.add('catalog-artists-link');

    listItemLink.href = `#${id}`;
    listItemLink.textContent = artist.fullName;
    if (artist.fullName === startArtist) {
      listItemLink.classList.add('catalog-artists-link-open');
      chooseArtist(findArtist(artist.fullName, artistsLists), infoPlace);
    }
    listItemLink.addEventListener('click', () => {
      let links = list.querySelectorAll('.catalog-artists-link')
      for (let link of links) {
        link.classList.remove('catalog-artists-link-open');
      }
      listItemLink.classList.add('catalog-artists-link-open');
      chooseArtist(findArtist(listItemLink.textContent, artistsLists), infoPlace);
      listItemLink.blur();
    })

    listItem.append(listItemLink);
    list.append(listItem);
  }

  function findArtist(name, lists) {
    for (let artistsList of lists) {
      let artist = artistsList.find(artist => artist.fullName === name)
      if (artist) {
        return artist;
      }
    }
  }

  function chooseArtist(artist, infoPlace) {
    let img = infoPlace.querySelector('.catalog-img');
    let name = infoPlace.querySelector('.catalog-artist-title');
    let date = infoPlace.querySelector('.catalog-artist-years');
    let text = infoPlace.querySelector('p');
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',]

    if (artist.photo !== "") {
      img.src = artist.photo;
    } else {
      img.src = "./img/catalog/artists/error.jpg"
    }
    if (artist.fullName !== "") {
      name.textContent = artist.fullName;
    } else {
      name.textContent = "Добавьте имя";
    }
    if (artist.dateOfBorn !== artist.dateOfDeath) {
      date.textContent = `${artist.dateOfBorn.getDate()} ${months[artist.dateOfBorn.getMonth()]} ${artist.dateOfBorn.getFullYear()} - ${artist.dateOfDeath.getDate()} ${months[artist.dateOfDeath.getMonth()]} ${artist.dateOfDeath.getFullYear()}`
    } else {
      date.textContent = "Добавьте годы жизни";
    }
    if (artist.textAboutArtist !== "") {
      text.textContent = artist.textAboutArtist;
    } else {
      text.textContent = "Добавьте описание";
    }
  }

  function paintLink(infoPlace, country) {
    if (country === 2) {
      return;
    }
    infoPlace.parentNode.querySelector('.catalog-artists-link').classList.add('catalog-artists-link-open')
    chooseArtist(findArtist(artistsLists[country][0].fullName, artistsLists), infoPlace);
  }

  let franceArtist = document.querySelector('#france').querySelector('.catalog-artist');
  let germanyArtist = document.querySelector('#germany').querySelector('.catalog-artist');
  let italyArtist = document.querySelector('#italy').querySelector('.catalog-artist');
  let russiaArtist = document.querySelector('#russia').querySelector('.catalog-artist');
  let belgiumArtist = document.querySelector('#belgium').querySelector('.catalog-artist');

  let franceAccordionLists = document.querySelector('#accordion-france').querySelectorAll('.catalog-artists-list');
  let germanyAccordionLists = document.querySelector('#accordion-germany').querySelectorAll('.catalog-artists-list');
  let italyAccordionLists = document.querySelector('#accordion-italy').querySelectorAll('.catalog-artists-list');
  let russiaAccordionLists = document.querySelector('#accordion-russia').querySelectorAll('.catalog-artists-list');
  let belgiumAccordionLists = document.querySelector('#accordion-belgium').querySelectorAll('.catalog-artists-list');

  let countriesAccrodions = [franceAccordionLists, germanyAccordionLists, italyAccordionLists, russiaAccordionLists, belgiumAccordionLists];
  let countryIndex = 0;

  let tabsList = document.querySelector('.catalog-tabs-list');
  let infoPlace = italyArtist;

  tabsList.addEventListener('click', (e) => {
    switch (e.target.hash) {
      case '#france':
        infoPlace = franceArtist;
        paintLink(infoPlace, 0);
        break;
      case '#germany':
        infoPlace = germanyArtist;
        paintLink(infoPlace, 1);

        break;
      case '#italy':
        infoPlace = italyArtist;
        paintLink(infoPlace, 2);

        break;
      case '#russia':
        infoPlace = russiaArtist;
        paintLink(infoPlace, 3);

        break;
      case '#belgium':
        infoPlace = belgiumArtist;
        paintLink(infoPlace, 4);

        break;
      default:
        break;
    }
  })

  let artistsId = ["artistFrance", "artistGermany", "artistItaly", "artistRussia", "artistBelgium"]
  for (let artistsList of artistsLists) {
    let artistsListSort = artistsList.sort((firstArtist, secondArtist) => {
      if (firstArtist.fullName < secondArtist.fullName) {
        return -1;
      } else if (firstArtist.fullName > secondArtist.fullName) {
        return 1;
      } else {
        return 0;
      }
    });
    let accordionLists = countriesAccrodions[countryIndex];
    let id = artistsId[countryIndex];

    for (let artist of artistsListSort) {
      let dateOfBorn = artist.dateOfBorn.getFullYear();
      if (dateOfBorn <= 1499) {
        addArtist(artist, accordionLists[0], id);
      } else if (dateOfBorn <= 1599) {
        addArtist(artist, accordionLists[1], id);
      } else if (dateOfBorn <= 1699) {
        addArtist(artist, accordionLists[2], id);
      } else if (dateOfBorn <= 1799) {
        addArtist(artist, accordionLists[3], id);
      } else if (dateOfBorn <= 1899) {
        addArtist(artist, accordionLists[4], id);
      } else if (dateOfBorn <= 1999) {
        addArtist(artist, accordionLists[5], id);
      } else if (dateOfBorn === 2000) {
        addArtist(artist, accordionLists[6], id);
      }
    }
    countryIndex = countryIndex + 1;
  }


  $(function () {
    $("#accordion-italy").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: { "header": "accordion-icon", "activeHeader": "accordion-icon-active" }
    });
    $("#accordion-russia").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: { "header": "accordion-icon", "activeHeader": "accordion-icon-active" }
    });
    $("#accordion-germany").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: { "header": "accordion-icon", "activeHeader": "accordion-icon-active" }
    });
    $("#accordion-france").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: { "header": "accordion-icon", "activeHeader": "accordion-icon-active" }
    });
    $("#accordion-belgium").accordion({
      collapsible: true,
      heightStyle: "content",
      icons: { "header": "accordion-icon", "activeHeader": "accordion-icon-active" }
    });
  });


  // EVENTS

  const eventsBtn = document.querySelector('.events-btn');
  const eventList = document.querySelector('.events-list');

  eventsBtn.addEventListener('click', () => {
    eventList.classList.add('events-open');
    eventsBtn.classList.add('is-close');
  });

  // EVENTS SWIPER
  let eventsItemList = document.querySelectorAll('.events-item');

  if (document.documentElement.clientWidth < 651) {
    for (let item of eventsItemList) {
      item.classList.add('swiper-slide');
    }
    const publicationsSwiper = new Swiper('.swiper-mobile-events', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 27,


      pagination: {
        el: '.pagination-events',
      },

    });
  }




  // PUBLICATIONS SELECT

  let publicationsFromTitle = document.querySelector('.publications-form-title');
  let publicationsItems = document.querySelectorAll('.publications-item');
  let publicationsInputList = document.querySelectorAll('.publications-checkbox');
  let publicationsBtnCLoseList = document.querySelectorAll('.publications-btn-checkbox-close');

  function checkCheckbox(list) {
    for (let item of list) {
      let input = item.querySelector('.publications-checkbox');
      if (input.checked) {
        item.classList.add('is-active');
        item.classList.add('publications-item-is-check');
      } else {
        item.classList.remove('is-active');
        item.classList.remove('publications-item-is-check');
      }
    }
  }

  for (let input of publicationsInputList) {
    input.addEventListener('click', () => {
      if (!input.checked & !publicationsFromTitle.className.includes('publications-form-title-open')) {
        checkCheckbox(publicationsItems);
      }
      if (input.checked) {
        input.parentNode.parentNode.classList.add('publications-item-is-check');
      } else {
        input.parentNode.parentNode.classList.remove('publications-item-is-check');
      }

    })
  }

  for (let btn of publicationsBtnCLoseList) {
    btn.addEventListener('click', () => {
      btn.previousElementSibling.querySelector('input').checked = false;
      btn.parentNode.classList.remove('publications-item-is-check');
      if (!publicationsFromTitle.className.includes('publications-form-title-open')) {
        checkCheckbox(publicationsItems);
      }
    })
  }

  checkCheckbox(publicationsItems);

  publicationsFromTitle.addEventListener('click', () => {
    publicationsFromTitle.classList.toggle('publications-form-title-open');
    if (publicationsFromTitle.className.includes('publications-form-title-open')) {
      for (let item of publicationsItems) {
        item.classList.add('is-active');
      }
    } else {
      checkCheckbox(publicationsItems);
    };

  });


  // PUBLICATIONS SWIPER

  if (document.documentElement.clientWidth > 650) {
    const publicationsSwiper = new Swiper('.swiper-2', {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,

      pagination: {
        el: '.pagination-2',
        type: 'fraction',
      },

      navigation: {
        disabledClass: 'button-disable',
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },

      breakpoints: {
        1230: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        }
      }
    });

  }


  // TOOLTIP

  const tooltips = document.querySelectorAll('.tooltip');
  if (document.documentElement.clientWidth <= 1024) {
    tippy(tooltips, {
      duration: [200, 200],
      maxWidth: 240,
      trigger: 'mouseenter click focus',
      hideOnClick: 'toggle',
      theme: 'myTooltip',
    });
  } else {
    tippy(tooltips, {
      duration: [200, 200],
      maxWidth: 264,
      trigger: 'mouseenter click focus',
      hideOnClick: 'toggle',
      theme: 'myTooltip',
    });
  }



  // PROJECTS SWIPER

  const projectsSwiper = new Swiper('.swiper-3', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 21,
    loop: true,

    navigation: {
      disabledClass: 'button-disable',
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    breakpoints: {

      651: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });

  // MAP


  ymaps.ready(init);
  function init() {

    var myMap = new ymaps.Map("map", {

      center: [55.755048513785745, 37.613239372852696],
      zoom: 14,
      controls: [],
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/contacts/point.svg',
      iconImageSize: [20, 20],
    });

    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
        top: '290px',
        left: 'auto',
        right: '11px'
      }
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      position: {
        top: '330px',
        left: 'auto',
        right: '11px',
      },
    });

    myMap.geoObjects.add(myPlacemark);


  }

  // CONTACTS FORM

  let selector = document.querySelector("input[type='tel']");
  let mask = new Inputmask("+7 (999) 999-99-99");

  mask.mask(selector);

  new JustValidate('.contacts-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      }
    },
    messages: {
      name: {
        required: 'Обязательное поле',
        minLength: 'Минимальная длина имени 3 символа',
      },
      tel: {
        required: 'Обязательное поле',
        function: 'Введите телефон корректно'
      },
    },
    submitHandler: function (form) {
      let formData = new FormData(form);
      let formSentBtn = document.querySelector('.contacts-form-btn');

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            formSentBtn.textContent = "Отправлено";
            formSentBtn.classList.add('form-btn-sent');
          }
        }
      }


      xhr.open('POST', '../php/mail.php', true);
      xhr.send(formData);

      form.reset();
    }
  });





  // SMOOTH SCROLL

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };


})
