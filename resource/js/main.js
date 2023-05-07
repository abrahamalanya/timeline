// nav-timeline
const year = ['2022', '2023'];

function renderNavTimeline(index) {
  const navTimeline = document.querySelector('.nav-timeline ul');
  const html = `<li onclick="renderTimeline(${year[index]})">${year[index]}</li>`;
  navTimeline.innerHTML += html;
}

for (let i = 0; i < year.length; i++) {
  renderNavTimeline(i);
}

// content-timeline
function renderTimeline(year) {
  const contentTimeline = document.querySelector('.content-timeline');
  contentTimeline.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const timeline = data[i];
    if (timeline.year == year) {
      const html = `<div class="point" onclick="openModal(${i})">
                      <img src="${timeline.image}">
                    </div>`;
      contentTimeline.innerHTML += html;
    }
  }
}

// modal
const dialog = document.querySelector('#modal');

const openModal = (index) => {
  const text = data[index];
  const html = `<h3>${text.month}</h3>
                <p>${text.text}</p>
                <button onclick="closeModal()">Cerrar</button>`;
  dialog.innerHTML = html;
  dialog.showModal();
  dialog.classList.remove('d-none');
}

const closeModal = () => {
  dialog.close();
  dialog.classList.add('d-none');
}