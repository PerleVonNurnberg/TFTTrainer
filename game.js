const BASE = 'https://ap.tft.tools/img/items_s14/';

const STAT_COLORS = {
  'Attack Damage':          '#E89A50',
  'Ability Power':          '#A07FE0',
  'Attack Speed':           '#B0D060',
  'Health':                 '#5CC890',
  'Armor':                  '#90B0C8',
  'Magic Resist':           '#50C8C8',
  'Critical Strike Chance': '#E8D050',
  'Damage Amp':             '#E87040',
  'Mana Regen':             '#60A0E8',
  'Omnivamp':               '#60D890',
  'Damage Reduction':       '#A0A8B0',
};

const COMPONENTS = [
  { id: 'BFSword',            name: 'B.F. Sword',            img: BASE + 'BFSword.png' },
  { id: 'RecurveBow',         name: 'Recurve Bow',           img: BASE + 'RecurveBow.png' },
  { id: 'NeedlesslyLargeRod', name: 'Needlessly Large Rod',  img: BASE + 'NeedlesslyLargeRod.png' },
  { id: 'TearOfTheGoddess',   name: 'Tear of the Goddess',   img: BASE + 'TearOfTheGoddess.png' },
  { id: 'ChainVest',          name: 'Chain Vest',            img: BASE + 'ChainVest.png' },
  { id: 'NegatronCloak',      name: 'Negatron Cloak',        img: BASE + 'NegatronCloak.png' },
  { id: 'GiantsBelt',         name: "Giant's Belt",          img: BASE + 'GiantsBelt.png' },
  { id: 'SparringGloves',     name: 'Sparring Gloves',       img: BASE + 'SparringGloves.png' },
];

// Stat shorthand: v = value string, l = label (must match a key in STAT_COLORS)
const ITEMS = [
  // B.F. Sword
  {
    id: 'Deathblade', name: 'Deathblade',
    img: BASE + 'Deathblade.png', components: ['BFSword', 'BFSword'],
    stats: [{ v: '+55%', l: 'Attack Damage' }, { v: '+10%', l: 'Damage Amp' }],
    desc: 'Grant 55% bonus Attack Damage. Gain 10% Damage Amp.',
  },
  {
    id: 'GiantSlayer', name: 'Giant Slayer',
    img: BASE + 'MadredsBloodrazor.png', components: ['BFSword', 'RecurveBow'],
    stats: [{ v: '+15%', l: 'Attack Damage' }, { v: '+15%', l: 'Attack Speed' }, { v: '+15', l: 'Ability Power' }, { v: '+15%', l: 'Damage Amp' }],
    desc: 'Gain 15% additional Damage Amp against Tanks.',
  },
  {
    id: 'HextechGunblade', name: 'Hextech Gunblade',
    img: BASE + 'HextechGunblade.png', components: ['BFSword', 'NeedlesslyLargeRod'],
    stats: [{ v: '+20%', l: 'Attack Damage' }, { v: '+20', l: 'Ability Power' }, { v: '+15%', l: 'Omnivamp' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Heal the lowest percent Health ally for 20% of damage dealt.',
  },
  {
    id: 'SpearOfShojin', name: 'Spear of Shojin',
    img: BASE + 'SpearOfShojin.png', components: ['BFSword', 'TearOfTheGoddess'],
    stats: [{ v: '+15%', l: 'Attack Damage' }, { v: '+15', l: 'Ability Power' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Attacks grant 5 bonus Mana.',
  },
  {
    id: 'EdgeOfNight', name: 'Edge of Night',
    img: BASE + 'GuardianAngel.png', components: ['BFSword', 'ChainVest'],
    stats: [{ v: '+10%', l: 'Attack Damage' }, { v: '+15%', l: 'Attack Speed' }, { v: '+10', l: 'Ability Power' }, { v: '+20', l: 'Armor' }],
    desc: 'At 60% Health, briefly become untargetable, shed negative effects, and heal 30% missing Health.',
  },
  {
    id: 'Bloodthirster', name: 'Bloodthirster',
    img: BASE + 'Bloodthirster.png', components: ['BFSword', 'NegatronCloak'],
    stats: [{ v: '+15%', l: 'Attack Damage' }, { v: '+15', l: 'Ability Power' }, { v: '+20', l: 'Magic Resist' }, { v: '+20%', l: 'Omnivamp' }],
    desc: 'Once per combat at 40% Health, gain a 25% max Health Shield that lasts up to 5 seconds.',
  },
  {
    id: 'SteraksGage', name: "Sterak's Gage",
    img: BASE + 'SteraksGage.png', components: ['BFSword', 'GiantsBelt'],
    stats: [{ v: '+45%', l: 'Attack Damage' }, { v: '+300', l: 'Health' }],
    desc: 'At 60% Health, gain a Shield equal to 40% of maximum Health that rapidly decays over 4 seconds.',
  },
  {
    id: 'InfinityEdge', name: 'Infinity Edge',
    img: BASE + 'InfinityEdge.png', components: ['BFSword', 'SparringGloves'],
    stats: [{ v: '+35%', l: 'Attack Damage' }, { v: '+35%', l: 'Critical Strike Chance' }],
    desc: 'Gain Precision. Ability damage can critically strike; additional Precision grants 10% Critical Strike Damage.',
  },
  // Recurve Bow
  {
    id: 'RedBuff', name: 'Red Buff',
    img: BASE + 'RapidFireCannon.png', components: ['RecurveBow', 'RecurveBow'],
    stats: [{ v: '+45%', l: 'Attack Speed' }, { v: '+6%', l: 'Damage Amp' }],
    desc: 'Attacks and Abilities 1% Burn and 33% Wound enemies for 5 seconds.',
  },
  {
    id: 'GuinsoosRageblade', name: "Guinsoo's Rageblade",
    img: BASE + 'GuinsoosRageblade.png', components: ['RecurveBow', 'NeedlesslyLargeRod'],
    stats: [{ v: '+10%', l: 'Attack Speed' }, { v: '+10', l: 'Ability Power' }],
    desc: 'Gain 7% stacking Attack Speed every second.',
  },
  {
    id: 'VoidStaff', name: 'Void Staff',
    img: BASE + 'StatikkShiv.png', components: ['RecurveBow', 'TearOfTheGoddess'],
    stats: [{ v: '+15%', l: 'Attack Speed' }, { v: '+35', l: 'Ability Power' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Damage from attacks and Abilities 30% Shred the target for 5 seconds. This effect does not stack. (Shred: Reduce Magic Resist)',
  },
  {
    id: 'TitansResolve', name: "Titan's Resolve",
    img: BASE + 'TitansResolve.png', components: ['RecurveBow', 'ChainVest'],
    stats: [{ v: '+10%', l: 'Attack Speed' }, { v: '+20', l: 'Armor' }],
    desc: 'Gain 2% Attack Damage and 2% Ability Power when attacking or taking damage, stacking up to 25 times. At full stacks, gain 10% Damage Amp and immunity to crowd control.',
  },
  {
    id: 'KrakensFury', name: "Kraken's Fury",
    img: BASE + 'RunaansHurricane.png', components: ['RecurveBow', 'NegatronCloak'],
    stats: [{ v: '+10%', l: 'Attack Damage' }, { v: '+10%', l: 'Attack Speed' }, { v: '+20', l: 'Magic Resist' }],
    desc: 'Attacks grant 3.5% stacking Attack Damage, up to 15 attacks. After 15 attacks, gain 15% Attack Speed.',
  },
  {
    id: 'NashorsTooth', name: "Nashor's Tooth",
    img: BASE + 'Leviathan.png', components: ['RecurveBow', 'GiantsBelt'],
    stats: [{ v: '+10%', l: 'Attack Speed' }, { v: '+15', l: 'Ability Power' }, { v: '+150', l: 'Health' }, { v: '+20%', l: 'Critical Strike Chance' }],
    desc: 'Attacks grant 2 bonus Mana, increased to 4 if they critically strike.',
  },
  {
    id: 'LastWhisper', name: 'Last Whisper',
    img: BASE + 'LastWhisper.png', components: ['RecurveBow', 'SparringGloves'],
    stats: [{ v: '+15%', l: 'Attack Damage' }, { v: '+20%', l: 'Attack Speed' }, { v: '+20%', l: 'Critical Strike Chance' }],
    desc: 'Damage from attacks and Abilities 30% Sunder the target for 3 seconds (non-stacking).',
  },
  // Needlessly Large Rod
  {
    id: 'RabadonsDeathcap', name: "Rabadon's Deathcap",
    img: BASE + 'RabadonsDeathcap.png', components: ['NeedlesslyLargeRod', 'NeedlesslyLargeRod'],
    stats: [{ v: '+55', l: 'Ability Power' }, { v: '+15%', l: 'Damage Amp' }],
    desc: 'Grant 55 bonus Ability Power. Gain an additional 15% of your total Ability Power.',
  },
  {
    id: 'ArchangelsStaff', name: "Archangel's Staff",
    img: BASE + 'ArchangelsStaff.png', components: ['NeedlesslyLargeRod', 'TearOfTheGoddess'],
    stats: [{ v: '+30', l: 'Ability Power' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Combat start: Gain 20% Ability Power every 5 seconds in combat.',
  },
  {
    id: 'Crownguard', name: 'Crownguard',
    img: BASE + 'Crownguard.png', components: ['NeedlesslyLargeRod', 'ChainVest'],
    stats: [{ v: '+20', l: 'Ability Power' }, { v: '+20', l: 'Armor' }, { v: '+100', l: 'Health' }],
    desc: 'Combat Start: Gain a 25% max Health Shield for 8 seconds. When it expires, gain 25% Ability Power.',
  },
  {
    id: 'IonicSpark', name: 'Ionic Spark',
    img: BASE + 'IonicSpark.png', components: ['NeedlesslyLargeRod', 'NegatronCloak'],
    stats: [{ v: '+15', l: 'Ability Power' }, { v: '+35', l: 'Magic Resist' }, { v: '+250', l: 'Health' }],
    desc: '30% Shred enemies within 2 hexes. When enemies cast an Ability, deal magic damage equal to 150% of the Mana spent.',
  },
  {
    id: 'Morellonomicon', name: 'Morellonomicon',
    img: BASE + 'Morellonomicon.png', components: ['NeedlesslyLargeRod', 'GiantsBelt'],
    stats: [{ v: '+20', l: 'Ability Power' }, { v: '+150', l: 'Health' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Attacks and Abilities deal 1% Burn and 33% Wound to enemies for 10 seconds.',
  },
  {
    id: 'JeweledGauntlet', name: 'Jeweled Gauntlet',
    img: BASE + 'JeweledGauntlet.png', components: ['NeedlesslyLargeRod', 'SparringGloves'],
    stats: [{ v: '+35', l: 'Ability Power' }, { v: '+35%', l: 'Critical Strike Chance' }],
    desc: 'Gain Precision. Ability damage can critically strike; additional Precision grants 10% Critical Strike Damage.',
  },
  // Tear of the Goddess
  {
    id: 'BlueBuff', name: 'Blue Buff',
    img: BASE + 'BlueBuff.png', components: ['TearOfTheGoddess', 'TearOfTheGoddess'],
    stats: [{ v: '+15%', l: 'Attack Damage' }, { v: '+15', l: 'Ability Power' }, { v: '+5%', l: 'Mana Regen' }],
    desc: 'Gain 10% additional Attack Damage and Ability Power from all sources.',
  },
  {
    id: 'ProtectorsVow', name: "Protector's Vow",
    img: BASE + 'FrozenHeart.png', components: ['TearOfTheGoddess', 'ChainVest'],
    stats: [{ v: '+25', l: 'Armor' }, { v: '+25', l: 'Magic Resist' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Combat Start: Gain 20 Mana. At 40% Health, gain 15 Mana and a Shield equal to 20% max Health.',
  },
  {
    id: 'AdaptiveHelm', name: 'Adaptive Helm',
    img: BASE + 'AdaptiveHelm.png', components: ['TearOfTheGoddess', 'NegatronCloak'],
    stats: [{ v: '+20', l: 'Magic Resist' }, { v: '+3%', l: 'Mana Regen' }],
    desc: 'Gain an additional 15% Mana from all sources. Tanks/Fighters gain 30 Armor and Magic Resist; other roles gain 10% Attack Damage and Ability Power.',
  },
  {
    id: 'SpiritVisage', name: 'Spirit Visage',
    img: BASE + 'Redemption.png', components: ['TearOfTheGoddess', 'GiantsBelt'],
    stats: [{ v: '+300', l: 'Health' }, { v: '+8%', l: 'Damage Reduction' }, { v: '+2%', l: 'Mana Regen' }],
    desc: 'Regenerate 2% of missing Health each second.',
  },
  {
    id: 'HandOfJustice', name: 'Hand of Justice',
    img: BASE + 'UnstableConcoction.png', components: ['TearOfTheGoddess', 'SparringGloves'],
    stats: [{ v: '+20%', l: 'Critical Strike Chance' }, { v: '+1%', l: 'Mana Regen' }],
    desc: 'Gain 15% Attack Damage/Ability Power and 12% Omnivamp. While above 50% Health, double the damage stats; while below 50%, double the Omnivamp.',
  },
  // Chain Vest
  {
    id: 'BrambleVest', name: 'Bramble Vest',
    img: BASE + 'BrambleVest.png', components: ['ChainVest', 'ChainVest'],
    stats: [{ v: '+50', l: 'Armor' }],
    desc: 'Gain 6% max Health. Take 5% reduced damage from attacks. When struck by any attack, deal 100 magic damage to adjacent enemies (2 second cooldown).',
  },
  {
    id: 'GargoyleStoneplate', name: 'Gargoyle Stoneplate',
    img: BASE + 'GargoyleStoneplate.png', components: ['ChainVest', 'NegatronCloak'],
    stats: [{ v: '+25', l: 'Armor' }, { v: '+25', l: 'Magic Resist' }, { v: '+100', l: 'Health' }],
    desc: 'Gain 10 Armor and 10 Magic Resist for each enemy targeting the holder.',
  },
  {
    id: 'SunfireCape', name: 'Sunfire Cape',
    img: BASE + 'RedBuff.png', components: ['ChainVest', 'GiantsBelt'],
    stats: [{ v: '+20', l: 'Armor' }, { v: '+150', l: 'Health' }],
    desc: 'Gain 8% max Health. Every 2 seconds, deal 1% Burn and 33% Wound to an enemy within 2 hexes for 10 seconds.',
  },
  {
    id: 'SteadfastHeart', name: 'Steadfast Heart',
    img: BASE + 'NightHarvester.png', components: ['ChainVest', 'SparringGloves'],
    stats: [{ v: '+20', l: 'Armor' }, { v: '+250', l: 'Health' }, { v: '+20%', l: 'Critical Strike Chance' }],
    desc: 'Gain 5% Durability. While above 50% Health, instead gain 15% Durability.',
  },
  // Negatron Cloak
  {
    id: 'DragonsClaw', name: "Dragon's Claw",
    img: BASE + 'DragonsClaw.png', components: ['NegatronCloak', 'NegatronCloak'],
    stats: [{ v: '+60', l: 'Magic Resist' }],
    desc: 'Gain 6% max Health. Every 2 seconds, heal 2.5% max Health.',
  },
  {
    id: 'Evenshroud', name: 'Evenshroud',
    img: BASE + 'SpectralGauntlet.png', components: ['NegatronCloak', 'GiantsBelt'],
    stats: [{ v: '+20', l: 'Magic Resist' }, { v: '+250', l: 'Health' }],
    desc: '30% Sunder enemies within 2 hexes. Gain 15 Armor and Magic Resist for the first 15 seconds of combat.',
  },
  {
    id: 'Quicksilver', name: 'Quicksilver',
    img: BASE + 'Quicksilver.png', components: ['NegatronCloak', 'SparringGloves'],
    stats: [{ v: '+15%', l: 'Attack Speed' }, { v: '+20', l: 'Magic Resist' }, { v: '+20%', l: 'Critical Strike Chance' }],
    desc: 'Combat Start: Gain immunity to crowd control for 18 seconds. Gain 3% stacking Attack Speed every second.',
  },
  // Giant's Belt
  {
    id: 'WarmogsArmor', name: "Warmog's Armor",
    img: BASE + 'WarmogsArmor.png', components: ['GiantsBelt', 'GiantsBelt'],
    stats: [{ v: '+500', l: 'Health' }],
    desc: 'Gain 18% max Health.',
  },
  {
    id: 'StrikersFlail', name: "Striker's Flail",
    img: BASE + 'PowerGauntlet.png', components: ['GiantsBelt', 'SparringGloves'],
    stats: [{ v: '+10%', l: 'Attack Speed' }, { v: '+150', l: 'Health' }, { v: '+20%', l: 'Critical Strike Chance' }, { v: '+10%', l: 'Damage Amp' }],
    desc: 'Critical Strikes grant 5% Damage Amp for 5 seconds, stacking up to 4 times.',
  },
  // Sparring Gloves
  {
    id: 'ThiefsGloves', name: "Thief's Gloves",
    img: BASE + 'ThiefsGloves.png', components: ['SparringGloves', 'SparringGloves'],
    stats: [{ v: '+150', l: 'Health' }, { v: '+20%', l: 'Critical Strike Chance' }],
    desc: 'Each round: Equip 2 random items. [Consumes 3 item slots.]',
  },
];

// ── Utilities ──────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getComp(id) { return COMPONENTS.find(c => c.id === id); }

function itemFromComponents(a, b) {
  const key = [a, b].sort().join('|');
  return ITEMS.find(item => [...item.components].sort().join('|') === key);
}

function clearSlot(i) {
  m1Slots[i] = null;
  const zone  = document.getElementById(i === 0 ? 'drop1' : 'drop2');
  const label = document.getElementById(`slot${i + 1}-label`);
  zone.innerHTML = '<span class="placeholder">Drop here</span>';
  zone.className = 'drop-zone';
  label.textContent = '';
}

// ── Tooltip ────────────────────────────────────────────────────────────────

const tooltip  = document.getElementById('item-tooltip');
const tipName  = tooltip.querySelector('.tooltip-name');
const tipStats = tooltip.querySelector('.tooltip-stats');
const tipDesc  = tooltip.querySelector('.tooltip-desc');

function showTooltip(e, item) {
  tipName.textContent = item.name;
  tipStats.innerHTML = item.stats.map(s => {
    const color = STAT_COLORS[s.l] || '#E8E0D0';
    return `<div class="tip-stat">
      <span class="tip-stat-val" style="color:${color}">${s.v}</span>
      <span class="tip-stat-lbl">${s.l}</span>
    </div>`;
  }).join('');
  tipDesc.textContent = item.desc;
  tooltip.hidden = false;
  placeTooltip(e.clientX, e.clientY);
}

function hideTooltip() { tooltip.hidden = true; }

function placeTooltip(cx, cy) {
  const tw = tooltip.offsetWidth;
  const th = tooltip.offsetHeight;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const ox = 16, oy = 12;
  tooltip.style.left = (cx + ox + tw > vw ? cx - ox - tw : cx + ox) + 'px';
  tooltip.style.top  = (cy + oy + th > vh ? cy - oy - th : cy + oy) + 'px';
}

document.addEventListener('mousemove', e => {
  if (!tooltip.hidden) placeTooltip(e.clientX, e.clientY);
});

function attachTooltip(el, item) {
  el.addEventListener('mouseenter', e => showTooltip(e, item));
  el.addEventListener('mouseleave', hideTooltip);
}

// ── State ──────────────────────────────────────────────────────────────────

let score = { correct: 0, total: 0, streak: 0 };
let mode = 1;
let currentItem = null;
let m1Slots = [null, null];
let m1Queue = [];
let dragSourceSlot = -1;
let m2Queue = [];
let answered = false;

// ── Score ──────────────────────────────────────────────────────────────────

function updateScore() {
  document.getElementById('score-display').textContent = `Score: ${score.correct} / ${score.total}`;
  document.getElementById('streak-display').textContent = `Streak: ${score.streak}`;
}

function recordResult(correct) {
  score.total++;
  if (correct) { score.correct++; score.streak++; }
  else { score.streak = 0; }
  updateScore();
}

// ── Mode switching ─────────────────────────────────────────────────────────

function setMode(m) {
  mode = m;
  hideTooltip();
  document.getElementById('mode1').classList.toggle('hidden', m !== 1);
  document.getElementById('mode2').classList.toggle('hidden', m !== 2);
  document.getElementById('tab-mode1').classList.toggle('active', m === 1);
  document.getElementById('tab-mode2').classList.toggle('active', m === 2);
  m === 1 ? nextMode1() : nextMode2();
}

// ── Mode 1: Item → Components ──────────────────────────────────────────────

function nextMode1() {
  if (!m1Queue.length) m1Queue = shuffle(ITEMS);
  currentItem = m1Queue.pop();
  m1Slots = [null, null];
  dragSourceSlot = -1;
  answered = false;
  hideTooltip();

  document.getElementById('m1-target-img').src = currentItem.img;
  document.getElementById('m1-target-img').alt = currentItem.name;
  document.getElementById('m1-target-name').textContent = currentItem.name;

  const targetEl = document.querySelector('.target-item');
  targetEl.onmouseenter = e => showTooltip(e, currentItem);
  targetEl.onmouseleave = hideTooltip;

  const feedback = document.getElementById('m1-feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';

  document.getElementById('m1-next').classList.add('hidden');
  document.getElementById('slot1-label').textContent = '';
  document.getElementById('slot2-label').textContent = '';

  const d1 = document.getElementById('drop1');
  const d2 = document.getElementById('drop2');
  d1.innerHTML = '<span class="placeholder">Drop here</span>';
  d2.innerHTML = '<span class="placeholder">Drop here</span>';
  d1.className = 'drop-zone';
  d2.className = 'drop-zone';
}

function checkMode1() {
  answered = true;
  const correct   = [...currentItem.components].sort();
  const given     = [...m1Slots].sort();
  const isCorrect = correct[0] === given[0] && correct[1] === given[1];

  recordResult(isCorrect);

  const feedback = document.getElementById('m1-feedback');
  const d1 = document.getElementById('drop1');
  const d2 = document.getElementById('drop2');

  if (isCorrect) {
    feedback.textContent = '✓ Correct!';
    feedback.className = 'feedback correct';
    d1.classList.add('correct');
    d2.classList.add('correct');
  } else {
    const built = itemFromComponents(m1Slots[0], m1Slots[1]);
    const c1 = getComp(currentItem.components[0]);
    const c2 = getComp(currentItem.components[1]);
    const builtMsg = built ? `You built ${built.name}! — ` : '';
    feedback.textContent = `✗  ${builtMsg}${currentItem.name} = ${c1.name} + ${c2.name}`;
    feedback.className = 'feedback wrong';
    d1.classList.add('wrong');
    d2.classList.add('wrong');
  }

  document.getElementById('m1-next').classList.remove('hidden');
}

function buildTray() {
  const tray = document.getElementById('component-tray');
  tray.innerHTML = '';
  COMPONENTS.forEach(comp => {
    const div = document.createElement('div');
    div.className = 'tray-item';
    div.draggable = true;
    div.dataset.compId = comp.id;
    div.innerHTML = `<img src="${comp.img}" alt="${comp.name}"><span class="tray-tooltip">${comp.name}</span>`;

    div.addEventListener('dragstart', e => {
      e.dataTransfer.setData('compId', comp.id);
      div.classList.add('dragging');
      hideTooltip();
    });
    div.addEventListener('dragend', () => div.classList.remove('dragging'));

    tray.appendChild(div);
  });
}

function setupDropZones() {
  ['drop1', 'drop2'].forEach((id, i) => {
    const zone  = document.getElementById(id);
    const label = document.getElementById(`slot${i + 1}-label`);

    zone.addEventListener('dragover', e => {
      e.preventDefault();
      if (!answered) zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', e => {
      if (zone.contains(e.relatedTarget)) return;
      zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      if (answered) return;

      const compId    = e.dataTransfer.getData('compId');
      const comp      = getComp(compId);
      const sourceSlot = dragSourceSlot;
      dragSourceSlot  = -1;

      // If dragged from the other slot, clear it
      if (sourceSlot !== -1 && sourceSlot !== i) clearSlot(sourceSlot);

      m1Slots[i] = compId;
      zone.innerHTML = `<img src="${comp.img}" alt="${comp.name}">`;
      zone.className = 'drop-zone';
      label.textContent = comp.name;

      const placedImg = zone.querySelector('img');
      placedImg.draggable = true;

      placedImg.addEventListener('dragstart', ev => {
        if (answered) { ev.preventDefault(); return; }
        ev.dataTransfer.setData('compId', comp.id);
        dragSourceSlot = i;
        // Defer the dim so the browser captures the ghost at full opacity first
        setTimeout(() => { placedImg.style.opacity = '0.25'; }, 0);
      });

      placedImg.addEventListener('dragend', () => {
        placedImg.style.opacity = '';
        // If drag ended without a valid drop, clear the slot
        if (dragSourceSlot === i) {
          clearSlot(i);
          dragSourceSlot = -1;
        }
      });

      if (m1Slots[0] && m1Slots[1]) checkMode1();
    });
  });
}

// ── Mode 2: Components → Item ──────────────────────────────────────────────

function nextMode2() {
  if (!m2Queue.length) m2Queue = shuffle(ITEMS);
  currentItem = m2Queue.pop();
  answered = false;
  hideTooltip();

  const [c1id, c2id] = currentItem.components;
  const c1 = getComp(c1id);
  const c2 = getComp(c2id);

  document.getElementById('m2-comp1-img').src = c1.img;
  document.getElementById('m2-comp1-img').alt = c1.name;
  document.getElementById('m2-comp1-name').textContent = c1.name;
  document.getElementById('m2-comp2-img').src = c2.img;
  document.getElementById('m2-comp2-img').alt = c2.name;
  document.getElementById('m2-comp2-name').textContent = c2.name;

  const feedback = document.getElementById('m2-feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';
  document.getElementById('m2-next').classList.add('hidden');

  const choices = buildMode2Choices(currentItem);
  const grid = document.getElementById('choices-grid');
  grid.innerHTML = '';

  choices.forEach(item => {
    const card = document.createElement('div');
    card.className = 'choice-card';
    card.dataset.itemId = item.id;
    card.innerHTML = `<img src="${item.img}" alt="${item.name}"><span class="choice-name">${item.name}</span>`;
    attachTooltip(card, item);
    card.addEventListener('click', () => {
      if (!answered) checkMode2(item.id, card);
    });
    grid.appendChild(card);
  });
}

function buildMode2Choices(correctItem) {
  const [c1, c2] = correctItem.components;

  const related = ITEMS.filter(item =>
    item.id !== correctItem.id &&
    (item.components.includes(c1) || item.components.includes(c2))
  );
  const unrelated = ITEMS.filter(item =>
    item.id !== correctItem.id &&
    !item.components.includes(c1) &&
    !item.components.includes(c2)
  );

  const distractors = [...shuffle(related).slice(0, 5), ...shuffle(unrelated)].slice(0, 5);
  return shuffle([correctItem, ...distractors]);
}

function checkMode2(selectedId, card) {
  answered = true;
  recordResult(selectedId === currentItem.id);

  document.querySelectorAll('.choice-card').forEach(c => c.classList.add('disabled'));

  const feedback = document.getElementById('m2-feedback');

  if (selectedId === currentItem.id) {
    card.classList.add('correct');
    feedback.textContent = '✓ Correct!';
    feedback.className = 'feedback correct';
  } else {
    card.classList.add('wrong');
    document.querySelector(`[data-item-id="${currentItem.id}"]`).classList.add('correct');
    feedback.textContent = `✗  The answer was ${currentItem.name}`;
    feedback.className = 'feedback wrong';
  }

  document.getElementById('m2-next').classList.remove('hidden');
}

// ── Init ───────────────────────────────────────────────────────────────────

buildTray();
setupDropZones();
updateScore();

document.getElementById('tab-mode1').addEventListener('click', () => setMode(1));
document.getElementById('tab-mode2').addEventListener('click', () => setMode(2));
document.getElementById('m1-next').addEventListener('click', nextMode1);
document.getElementById('m2-next').addEventListener('click', nextMode2);
document.getElementById('reset-btn').addEventListener('click', () => {
  score = { correct: 0, total: 0, streak: 0 };
  updateScore();
  mode === 1 ? nextMode1() : nextMode2();
});

nextMode1();
