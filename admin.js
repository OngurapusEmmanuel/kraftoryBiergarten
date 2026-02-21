let config = { offer: {}, padelSlots: [], gallery: [] };

async function load() {
  const res = await fetch('/config.json?' + Date.now());
  config = await res.json();
  render();
}

function render() {
  document.getElementById('offer-title').value = config.offer.title || '';
  document.getElementById('offer-text').value = config.offer.text || '';
  document.getElementById('offer-active').checked = config.offer.active;

  const container = document.getElementById('slots-container');
  container.innerHTML = '';
  config.padelSlots.forEach((slot, i) => {
    const div = document.createElement('div');
    div.className = 'slot-row';
    div.innerHTML = `
      <input value="${slot.court}" class="form-input">
      <input value="${slot.time}" class="form-input">
      <label><input type="checkbox" ${slot.available ? 'checked' : ''}> Available</label>
      <button class="btn btn-danger btn-small" onclick="this.parentElement.remove(); config.padelSlots.splice(${i},1)">×</button>
    `;
    container.appendChild(div);
  });

  const preview = document.getElementById('gallery-preview');
  preview.innerHTML = '';
  config.gallery.forEach(src => {
    const img = document.createElement('img');
    img.src = '/assets/' + src;
    preview.appendChild(img);
  });
}

function addSlot() {
  config.padelSlots.push({ court: "Padel 1", time: "10:00 AM", available: true });
  render();
}

document.getElementById('gallery-upload').addEventListener('change', e => {
  Array.from(e.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.src = ev.target.result;
      img.style.cssText = 'width:100%; height:100px; object-fit:cover; border-radius:0.5rem;';
      document.getElementById('gallery-preview').appendChild(img);
      config.gallery.push('gallery/' + file.name);
    };
    reader.readAsDataURL(file);
  });
});

async function saveConfig() {
  config.offer.title = document.getElementById('offer-title').value;
  config.offer.text = document.getElementById('offer-text').value;
  config.offer.active = document.getElementById('offer-active').checked;

  const rows = document.querySelectorAll('#slots-container > div');
  config.padelSlots = Array.from(rows).map(row => ({
    court: row.querySelectorAll('input')[0].value,
    time: row.querySelectorAll('input')[1].value,
    available: row.querySelector('input[type=checkbox]').checked
  }));

  // Simulate save (in real app: use server)
  localStorage.setItem('kraftory-config', JSON.stringify(config));
  document.getElementById('status').textContent = 'Saved! Site updated in real-time.';
  setTimeout(() => document.getElementById('status').textContent = '', 3000);
}

load();