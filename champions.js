const PORTRAIT_BASE = 'https://cdn.metatft.com/file/metatft/champions/tft17_';

const CHAMPIONS = [
  // 1-cost
  { id: 'aatrox', name: 'Aatrox', img: 'Aatrox', cost: 1,
    traits: ['N.O.V.A.', 'Bastion'],
    ability: { name: 'Stellar Slash', desc: 'Heals and deals physical damage to the current target. N.O.V.A. bonus adds a cleave effect.' } },
  { id: 'briar', name: 'Briar', img: 'Briar', cost: 1,
    traits: ['Anima', 'Primordian', 'Rogue'],
    ability: { name: 'Fish Frenzy', desc: 'Gains attack speed based on missing health. Deals increased damage against tanky enemies.' } },
  { id: 'caitlyn', name: 'Caitlyn', img: 'Caitlyn', cost: 1,
    traits: ['N.O.V.A.', 'Fateweaver'],
    ability: { name: 'Aim For The Head', desc: 'Has a chance to fire an empowered headshot. Marks enemies to take bonus damage.' } },
  { id: 'chogath', name: "Cho'Gath", img: 'Chogath', cost: 1,
    traits: ['Dark Star', 'Brawler'],
    ability: { name: 'Accretion', desc: 'Deals magic damage and permanently increases max health. Gains extra health on kills.' } },
  { id: 'ezreal', name: 'Ezreal', img: 'Ezreal', cost: 1,
    traits: ['Timebreaker', 'Sniper'],
    ability: { name: 'Temporal Shot', desc: 'Fires an energy blast at the target. Earns drones every 8 takedowns that deal bonus damage.' } },
  { id: 'leona', name: 'Leona', img: 'Leona', cost: 1,
    traits: ['Arbiter', 'Vanguard'],
    ability: { name: 'Shield of Daybreak', desc: 'Grants a shield and stuns the target, dealing magic damage.' } },
  { id: 'lissandra', name: 'Lissandra', img: 'Lissandra', cost: 1,
    traits: ['Dark Star', 'Shepherd', 'Replicator'],
    ability: { name: 'Dark Matter', desc: 'Hurls a shard dealing magic damage, then explodes for additional damage to nearby enemies.' } },
  { id: 'nasus', name: 'Nasus', img: 'Nasus', cost: 1,
    traits: ['Space Groove', 'Vanguard'],
    ability: { name: "Groovin' Susan", desc: 'Temporarily transforms, gains max health, and deals magic damage to adjacent enemies.' } },
  { id: 'poppy', name: 'Poppy', img: 'Poppy', cost: 1,
    traits: ['Meeple', 'Bastion'],
    ability: { name: 'Huddle Up!', desc: 'Shields herself and nearby allies. Meep bonus adds an extra shield.' } },
  { id: 'reksai', name: "Rek'Sai", img: 'Reksai', cost: 1,
    traits: ['Primordian', 'Brawler'],
    ability: { name: 'Upheaval', desc: 'Heals, knocks up adjacent enemies, and deals magic damage.' } },
  { id: 'talon', name: 'Talon', img: 'Talon', cost: 1,
    traits: ['Stargazer', 'Rogue'],
    ability: { name: "Diviner's Judgment", desc: 'Causes the target to bleed, then leaps to the highest-health nearby enemy.' } },
  { id: 'teemo', name: 'Teemo', img: 'Teemo', cost: 1,
    traits: ['Space Groove', 'Shepherd'],
    ability: { name: 'Double Time', desc: 'Passive bonus magic damage with stacking poison. Gains a burst of attack speed on cast.' } },
  { id: 'twistedfate', name: 'Twisted Fate', img: 'TwistedFate', cost: 1,
    traits: ['Stargazer', 'Fateweaver'],
    ability: { name: "Fate's Gambit", desc: 'Draws a card that modifies damage dealt. Overkill damage bounces to the nearest enemy.' } },
  { id: 'veigar', name: 'Veigar', img: 'Veigar', cost: 1,
    traits: ['Meeple', 'Replicator'],
    ability: { name: 'Meepteor Shower', desc: 'Calls a meteor down on the target. Meep bonus adds additional mini-meteors.' } },

  // 2-cost
  { id: 'akali', name: 'Akali', img: 'Akali', cost: 2,
    traits: ['N.O.V.A.', 'Marauder'],
    ability: { name: 'Star Strike', desc: 'Repositions and throws a piercing kunai. Applies wound and bleed effects to targets hit.' } },
  { id: 'belveth', name: "Bel'Veth", img: 'Belveth', cost: 2,
    traits: ['Primordian', 'Challenger', 'Marauder'],
    ability: { name: 'Tidal Slashes', desc: 'Unleashes a rapid flurry of slashes at the target over a duration.' } },
  { id: 'gnar', name: 'Gnar', img: 'Gnar', cost: 2,
    traits: ['Meeple', 'Sniper'],
    ability: { name: 'Slingshot Maneuver', desc: 'Passively launches a boomerang every 5th attack. Meeps attack alongside the boomerang.' } },
  { id: 'gragas', name: 'Gragas', img: 'Gragas', cost: 2,
    traits: ['Psionic', 'Brawler'],
    ability: { name: 'Chemical Rage', desc: 'Heals over time, then damages and chills nearby enemies.' } },
  { id: 'gwen', name: 'Gwen', img: 'Gwen', cost: 2,
    traits: ['Space Groove', 'Rogue'],
    ability: { name: "Dance n' Dice", desc: 'Dashes and snips enemies with magic damage. Can chain into further attacks on kills.' } },
  { id: 'jax', name: 'Jax', img: 'Jax', cost: 2,
    traits: ['Stargazer', 'Bastion'],
    ability: { name: 'Counter Star-ike', desc: 'Enters a defensive stance reducing damage taken and granting a shield. Counters with a stun.' } },
  { id: 'jinx', name: 'Jinx', img: 'Jinx', cost: 2,
    traits: ['Anima', 'Challenger'],
    ability: { name: 'Explosive Attitude', desc: 'Fires a rocket barrage in a cone, dealing physical damage to all enemies hit.' } },
  { id: 'meepsie', name: 'Meepsie', img: 'Meepsie', cost: 2,
    traits: ['Meeple', 'Shepherd', 'Voyager'],
    ability: { name: 'Meep Impact', desc: 'Heals and slams the target. Creates meepwaves with reduced effects.' } },
  { id: 'milio', name: 'Milio', img: 'Milio', cost: 2,
    traits: ['Timebreaker', 'Fateweaver'],
    ability: { name: 'Mega Time Kick', desc: 'Kicks a ball with a bouncing mechanic whose power depends on luck.' } },
  { id: 'mordekaiser', name: 'Mordekaiser', img: 'Mordekaiser', cost: 2,
    traits: ['Dark Star', 'Conduit', 'Vanguard'],
    ability: { name: 'Indestructible', desc: 'Gains a large shield, channels damage over a duration, then heals from the remaining shield.' } },
  { id: 'pantheon', name: 'Pantheon', img: 'Pantheon', cost: 2,
    traits: ['Timebreaker', 'Brawler', 'Replicator'],
    ability: { name: 'Advanced Defences', desc: 'Gains a shield and increased durability. Deals damage in a cone over a duration.' } },
  { id: 'pyke', name: 'Pyke', img: 'Pyke', cost: 2,
    traits: ['Psionic', 'Voyager'],
    ability: { name: 'Marked for Death', desc: 'Throws a harpoon to pull an enemy forward, then teleports behind them for a cleave attack.' } },
  { id: 'zoe', name: 'Zoe', img: 'Zoe', cost: 2,
    traits: ['Arbiter', 'Conduit'],
    ability: { name: 'Paddle Star', desc: 'Fires a paddle star with a redirect mechanic that hits multiple targets.' } },

  // 3-cost
  { id: 'aurora', name: 'Aurora', img: 'Aurora', cost: 3,
    traits: ['Anima', 'Voyager'],
    ability: { name: 'Hopped-Up Hacks', desc: 'Opens a rift hacking enemies. Hacked targets store incoming damage and release it as true damage.' } },
  { id: 'diana', name: 'Diana', img: 'Diana', cost: 3,
    traits: ['Arbiter', 'Challenger'],
    ability: { name: 'Pale Cascade', desc: 'Passive bonus magic damage on attacks. Gains a shield and summons rotating orbs on cast.' } },
  { id: 'fizz', name: 'Fizz', img: 'Fizz', cost: 3,
    traits: ['Meeple', 'Rogue'],
    ability: { name: 'Meep Bait', desc: 'Dashes through the target dealing damage. Every third cast summons a giant mega meep.' } },
  { id: 'illaoi', name: 'Illaoi', img: 'Illaoi', cost: 3,
    traits: ['Anima', 'Vanguard', 'Shepherd'],
    ability: { name: 'Test of Spirit', desc: 'Gains a shield and drains health from nearby enemies, then slams for area damage.' } },
  { id: 'kaisa', name: "Kai'Sa", img: 'Kaisa', cost: 3,
    traits: ['Dark Star', 'Rogue'],
    ability: { name: 'Bullet Cluster', desc: 'Passive mana gain on takedowns. Fires a cluster of missiles in a radius around the target.' } },
  { id: 'lulu', name: 'Lulu', img: 'Lulu', cost: 3,
    traits: ['Stargazer', 'Replicator'],
    ability: { name: "It's Raining Stars", desc: 'Calls down objects dealing damage with effects that vary based on constellation alignment.' } },
  { id: 'maokai', name: 'Maokai', img: 'Maokai', cost: 3,
    traits: ['N.O.V.A.', 'Brawler'],
    ability: { name: 'Grasp of Convergence', desc: 'Passive increased max health. Vines converge to stun enemies. N.O.V.A. adds a dragon wave.' } },
  { id: 'missfortune', name: 'Miss Fortune', img: 'MissFortune', cost: 3,
    traits: ['Gun Goddess'],
    ability: { name: 'Gun Goddess Arsenal', desc: 'Player chooses a combat mode: Conduit, Challenger, or Replicator, each with unique effects.' } },
  { id: 'ornn', name: 'Ornn', img: 'Ornn', cost: 3,
    traits: ['Space Groove', 'Bastion'],
    ability: { name: 'Disco Inferno', desc: 'Forges an item, then shields and breathes fire. Gains a groove bonus after the shield expires.' } },
  { id: 'rhaast', name: 'Rhaast', img: 'Rhaast', cost: 3,
    traits: ['Redeemer'],
    ability: { name: 'Divine Scythe', desc: 'Gains durability and healing. Slashes forward, knocking back all enemies hit.' } },
  { id: 'samira', name: 'Samira', img: 'Samira', cost: 3,
    traits: ['Space Groove', 'Sniper'],
    ability: { name: 'Jump and Jive', desc: 'Passive shots knock up enemies. Active fires a volley that knocks up the primary target.' } },
  { id: 'urgot', name: 'Urgot', img: 'Urgot', cost: 3,
    traits: ['Mecha', 'Brawler', 'Marauder'],
    ability: { name: 'Unstoppable Dreadnought', desc: 'Passive proximity blasts. Shields and repositions, resetting ability cooldowns.' } },
  { id: 'viktor', name: 'Viktor', img: 'Viktor', cost: 3,
    traits: ['Psionic', 'Conduit'],
    ability: { name: 'Psionic Storm', desc: 'Channels an expanding psionic storm that follows and damages all enemies inside.' } },

  // 4-cost
  { id: 'aurelionsol', name: 'Aurelion Sol', img: 'AurelionSol', cost: 4,
    traits: ['Mecha', 'Conduit'],
    ability: { name: 'Deathbeam', desc: 'Channels a focused beam toward the target. Damage is reduced as it pierces through enemies and ignores magic resistance.' } },
  { id: 'corki', name: 'Corki', img: 'Corki', cost: 4,
    traits: ['Meeple', 'Fateweaver'],
    ability: { name: 'Asteroid Blaster', desc: 'Strafes and unleashes a barrage of missiles with a chance for mega missiles. Meep launches additional explosives.' } },
  { id: 'mightymech', name: 'The Mighty Mech', img: 'Galio', cost: 4,
    traits: ['Mecha', 'Voyager'],
    ability: { name: 'Gravity Matrix', desc: 'Enters a defensive stance attracting and absorbing projectiles. Releases a powerful shockwave on exit.' } },
  { id: 'karma', name: 'Karma', img: 'Karma', cost: 4,
    traits: ['Dark Star', 'Voyager'],
    ability: { name: 'Singularity', desc: 'Gathers black hole force that splits damage across nearby enemies. The primary target takes additional damage.' } },
  { id: 'kindred', name: 'Kindred', img: 'Kindred', cost: 4,
    traits: ['N.O.V.A.', 'Challenger'],
    ability: { name: 'Cosmic Pursuit', desc: 'Passive marks stack and trigger Wolf to consume the target. Active fires a pursuing arrow. N.O.V.A. adds amplification.' } },
  { id: 'leblanc', name: 'LeBlanc', img: 'Leblanc', cost: 4,
    traits: ['Arbiter', 'Shepherd'],
    ability: { name: 'Fracture Reality', desc: 'Passive magic damage on attacks. Summons clones that attack enemies and fire bolts.' } },
  { id: 'masteryi', name: 'Master Yi', img: 'MasterYi', cost: 4,
    traits: ['Psionic', 'Marauder'],
    ability: { name: 'Psi Strikes', desc: 'Passive double slash bonus. Enters a psi-state with omnivamp and psychic energy projections.' } },
  { id: 'nami', name: 'Nami', img: 'Nami', cost: 4,
    traits: ['Space Groove', 'Replicator'],
    ability: { name: 'Bubble Pop', desc: 'Tosses a bubble that explodes, sending damaging water globs across the board. Gains a groove bonus on cast.' } },
  { id: 'nunu', name: 'Nunu & Willump', img: 'Nunu', cost: 4,
    traits: ['Stargazer', 'Vanguard'],
    ability: { name: 'Calamity', desc: 'Gains a shield, then summons an astrolabe that impacts twice, dealing damage and knocking up enemies.' } },
  { id: 'rammus', name: 'Rammus', img: 'Rammus', cost: 4,
    traits: ['Meeple', 'Bastion'],
    ability: { name: 'Gravitational Spin', desc: 'Gains a shield and strikes in a line. Meeps reduce incoming damage and retaliate against attackers.' } },
  { id: 'riven', name: 'Riven', img: 'Riven', cost: 4,
    traits: ['Timebreaker', 'Rogue'],
    ability: { name: 'Time Warp', desc: 'Hybrid scaling. Dashes with a shield and slashes. Every third cast launches a powerful energy wave.' } },
  { id: 'tahmkench', name: 'Tahm Kench', img: 'TahmKench', cost: 4,
    traits: ['Oracle', 'Brawler'],
    ability: { name: 'Tongue Lash', desc: 'Passive shield from healing. Heals, then lashes all enemies within range.' } },
  { id: 'xayah', name: 'Xayah', img: 'Xayah', cost: 4,
    traits: ['Stargazer', 'Sniper'],
    ability: { name: 'Stellar Ricochet', desc: 'Passive bouncing attacks. Active boosts attack speed, then recalls feathers through enemies.' } },

  // 5-cost
  { id: 'bard', name: 'Bard', img: 'Bard', cost: 5,
    traits: ['Meeple', 'Conduit'],
    ability: { name: 'Ultra Friendly Object', desc: 'Summons a UFO that deals damage with a chance to abduct defeated enemies. Meep bonus grants extra meeps.' } },
  { id: 'blitzcrank', name: 'Blitzcrank', img: 'Blitzcrank', cost: 5,
    traits: ['Party Animal', 'Space Groove', 'Vanguard'],
    ability: { name: 'Party Crasher', desc: 'Passive electric bolts. Summons a disco ball and knocks up the target into it. Groove bonus scales with hits.' } },
  { id: 'fiora', name: 'Fiora', img: 'Fiora', cost: 5,
    traits: ['Divine Duelist', 'Anima', 'Marauder'],
    ability: { name: 'Perfect Bladework', desc: 'Passive vital reveals and dashing attacks. Active strikes a vital with a quick dash and emits a healing aura.' } },
  { id: 'graves', name: 'Graves', img: 'Graves', cost: 5,
    traits: ['Factory New'],
    ability: { name: 'Collateral Damage', desc: 'Passive cone projectiles on each attack. Fires an explosive shell with a large area-of-effect blast.' } },
  { id: 'jhin', name: 'Jhin', img: 'Jhin', cost: 5,
    traits: ['Dark Star', 'Eradicator', 'Sniper'],
    ability: { name: 'Space Opera', desc: 'Fixed attack speed that converts bonus attack speed into damage. Spectral hands fire and pierce through enemies on the fourth shot.' } },
  { id: 'morgana', name: 'Morgana', img: 'Morgana', cost: 5,
    traits: ['Dark Lady'],
    ability: { name: 'Dark Form', desc: 'Passive healing from ability damage. Transforms with a shield and tethers enemies, dealing massive damage when the transformation ends.' } },
  { id: 'shen', name: 'Shen', img: 'Shen', cost: 5,
    traits: ['Bulwark', 'Bastion'],
    ability: { name: 'Reality Tear', desc: 'Passive stacking magic damage that becomes true damage. Shields and slices, altering nearby attack speeds.' } },
  { id: 'sona', name: 'Sona', img: 'Sona', cost: 5,
    traits: ['Commander', 'Psionic', 'Shepherd'],
    ability: { name: 'Psionic Crush', desc: 'Hurls debris at targets. Every fifth cast rips debris together and crushes them for massive damage.' } },
  { id: 'vex', name: 'Vex', img: 'Vex', cost: 5,
    traits: ['Doomer'],
    ability: { name: 'Lend Me a Hand, Shadow!', desc: 'Shadow passively strikes nearby enemies. Active empowers Shadow for enhanced strikes.' } },
  { id: 'zed', name: 'Zed', img: 'Zed', cost: 5,
    traits: ['Galaxy Hunter'],
    ability: { name: 'Quantum Clone', desc: 'Creates a clone with reduced health behind the target. The clone inherits items and can itself create another clone.' } },
];

const ALL_TRAITS = [
  'Anima', 'Arbiter', 'Bastion', 'Brawler', 'Bulwark', 'Challenger',
  'Commander', 'Conduit', 'Dark Lady', 'Dark Star', 'Divine Duelist',
  'Doomer', 'Eradicator', 'Factory New', 'Fateweaver', 'Galaxy Hunter',
  'Gun Goddess', 'Marauder', 'Mecha', 'Meeple', 'N.O.V.A.', 'Oracle',
  'Party Animal', 'Primordian', 'Psionic', 'Redeemer', 'Replicator',
  'Rogue', 'Shepherd', 'Sniper', 'Space Groove', 'Stargazer',
  'Timebreaker', 'Vanguard', 'Voyager'
];

const COST_COLORS = { 1: '#8e8e8e', 2: '#27a56a', 3: '#1d6bcc', 4: '#9b46c5', 5: '#c89b2a' };

// ── State ──
let cScore = { correct: 0, total: 0, streak: 0 };
let cMode = 4;
let queues = { 1: [], 2: [], 3: [], 4: [] };
let currentChamp = null;
let answered = false;
let m3Selected = new Set();

// ── Utilities ──

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextFromQueue(q) {
  if (queues[q].length === 0) queues[q] = shuffle([...CHAMPIONS]);
  return queues[q].pop();
}

function pick4(correct) {
  const others = CHAMPIONS.filter(c => c.id !== correct.id);
  return shuffle([correct, ...shuffle(others).slice(0, 3)]);
}

function portraitUrl(champ) {
  return PORTRAIT_BASE + champ.img.toLowerCase() + '.png';
}

function costBadge(cost) {
  return `<span class="cost-badge" style="background:${COST_COLORS[cost]}">${cost}★</span>`;
}

function updateScoreDisplay() {
  document.getElementById('score-display').textContent = `Score: ${cScore.correct} / ${cScore.total}`;
  document.getElementById('streak-display').textContent = `Streak: ${cScore.streak}`;
}

function recordAnswer(correct) {
  cScore.total++;
  if (correct) { cScore.correct++; cScore.streak++; }
  else { cScore.streak = 0; }
  updateScoreDisplay();
}

function setFeedback(elId, text, type) {
  const el = document.getElementById(elId);
  el.textContent = text;
  el.className = 'feedback' + (type ? ' ' + type : '');
}

// ── Mode 1: Ability → Champion ──

function nextM1() {
  answered = false;
  currentChamp = nextFromQueue(1);

  document.getElementById('m1-ability-name').textContent = currentChamp.ability.name;
  document.getElementById('m1-ability-desc').textContent = currentChamp.ability.desc;
  setFeedback('m1-feedback', '', '');
  document.getElementById('m1-next').classList.add('hidden');

  const choices = pick4(currentChamp);
  const grid = document.getElementById('m1-choices');
  grid.innerHTML = '';

  choices.forEach(champ => {
    const card = document.createElement('div');
    card.className = 'portrait-card';
    card.dataset.id = champ.id;
    card.innerHTML = `
      <img src="${portraitUrl(champ)}" alt="${champ.name}" onerror="this.parentElement.style.background='var(--surface3)'">
      <div class="card-name">${champ.name}${costBadge(champ.cost)}</div>
    `;
    card.addEventListener('click', () => checkM1(champ.id, grid));
    grid.appendChild(card);
  });
}

function checkM1(chosenId, grid) {
  if (answered) return;
  answered = true;
  const correct = chosenId === currentChamp.id;
  recordAnswer(correct);

  Array.from(grid.children).forEach(c => {
    if (c.dataset.id === currentChamp.id) c.classList.add('correct');
    if (c.dataset.id === chosenId && !correct) c.classList.add('wrong');
    c.classList.add('disabled');
  });

  setFeedback('m1-feedback', correct ? 'Correct!' : `That ability belongs to ${currentChamp.name}`, correct ? 'correct' : 'wrong');
  document.getElementById('m1-next').classList.remove('hidden');
}

// ── Mode 2: Champion → Ability ──

function nextM2() {
  answered = false;
  currentChamp = nextFromQueue(2);

  document.getElementById('m2-portrait').src = portraitUrl(currentChamp);
  document.getElementById('m2-portrait').alt = currentChamp.name;
  document.getElementById('m2-name').innerHTML = currentChamp.name + costBadge(currentChamp.cost);
  setFeedback('m2-feedback', '', '');
  document.getElementById('m2-next').classList.add('hidden');

  const choices = pick4(currentChamp);
  const grid = document.getElementById('m2-choices');
  grid.innerHTML = '';

  choices.forEach(champ => {
    const card = document.createElement('div');
    card.className = 'ability-card';
    card.dataset.id = champ.id;
    card.innerHTML = `
      <div class="card-ability-name">${champ.ability.name}</div>
      <div class="card-ability-desc">${champ.ability.desc}</div>
    `;
    card.addEventListener('click', () => checkM2(champ.id, grid));
    grid.appendChild(card);
  });
}

function checkM2(chosenId, grid) {
  if (answered) return;
  answered = true;
  const correct = chosenId === currentChamp.id;
  recordAnswer(correct);

  Array.from(grid.children).forEach(c => {
    if (c.dataset.id === currentChamp.id) c.classList.add('correct');
    if (c.dataset.id === chosenId && !correct) c.classList.add('wrong');
    c.classList.add('disabled');
  });

  setFeedback('m2-feedback', correct ? 'Correct!' : `Correct ability: ${currentChamp.ability.name}`, correct ? 'correct' : 'wrong');
  document.getElementById('m2-next').classList.remove('hidden');
}

// ── Mode 3: Champion → Traits ──

function nextM3() {
  answered = false;
  m3Selected.clear();
  currentChamp = nextFromQueue(3);

  document.getElementById('m3-portrait').src = portraitUrl(currentChamp);
  document.getElementById('m3-portrait').alt = currentChamp.name;
  document.getElementById('m3-name').innerHTML = currentChamp.name + costBadge(currentChamp.cost);
  setFeedback('m3-feedback', '', '');
  document.getElementById('m3-next').classList.add('hidden');
  document.getElementById('m3-submit').classList.remove('hidden');

  const correctSet = new Set(currentChamp.traits);
  const distractors = shuffle(ALL_TRAITS.filter(t => !correctSet.has(t)));
  const numExtra = Math.max(5, 8 - currentChamp.traits.length);
  const displayTraits = shuffle([...currentChamp.traits, ...distractors.slice(0, numExtra)]);

  const container = document.getElementById('m3-traits');
  container.innerHTML = '';
  displayTraits.forEach(trait => {
    const chip = document.createElement('div');
    chip.className = 'trait-chip';
    chip.textContent = trait;
    chip.addEventListener('click', () => {
      if (answered) return;
      if (m3Selected.has(trait)) { m3Selected.delete(trait); chip.classList.remove('selected'); }
      else { m3Selected.add(trait); chip.classList.add('selected'); }
    });
    container.appendChild(chip);
  });
}

function checkM3() {
  if (answered) return;
  answered = true;

  const correctSet = new Set(currentChamp.traits);
  let allCorrect = true;

  document.querySelectorAll('#m3-traits .trait-chip').forEach(chip => {
    const trait = chip.textContent;
    chip.classList.remove('selected');
    chip.classList.add('disabled');

    if (correctSet.has(trait)) {
      if (m3Selected.has(trait)) chip.classList.add('correct');
      else { chip.classList.add('missed'); allCorrect = false; }
    } else if (m3Selected.has(trait)) {
      chip.classList.add('wrong');
      allCorrect = false;
    }
  });

  recordAnswer(allCorrect);
  document.getElementById('m3-submit').classList.add('hidden');
  setFeedback('m3-feedback',
    allCorrect ? 'Correct!' : `Correct traits: ${currentChamp.traits.join(', ')}`,
    allCorrect ? 'correct' : 'wrong');
  document.getElementById('m3-next').classList.remove('hidden');
}

// ── Mode 4: Portrait → Name ──

function nextM4() {
  answered = false;
  currentChamp = nextFromQueue(4);

  document.getElementById('m4-portrait').src = portraitUrl(currentChamp);
  document.getElementById('m4-portrait').alt = '?';
  setFeedback('m4-feedback', '', '');
  document.getElementById('m4-next').classList.add('hidden');

  const choices = pick4(currentChamp);
  const grid = document.getElementById('m4-choices');
  grid.innerHTML = '';

  choices.forEach(champ => {
    const card = document.createElement('div');
    card.className = 'name-card';
    card.dataset.id = champ.id;
    card.innerHTML = champ.name + costBadge(champ.cost);
    card.addEventListener('click', () => checkM4(champ.id, grid));
    grid.appendChild(card);
  });
}

function checkM4(chosenId, grid) {
  if (answered) return;
  answered = true;
  const correct = chosenId === currentChamp.id;
  recordAnswer(correct);

  Array.from(grid.children).forEach(c => {
    if (c.dataset.id === currentChamp.id) c.classList.add('correct');
    if (c.dataset.id === chosenId && !correct) c.classList.add('wrong');
    c.classList.add('disabled');
  });

  setFeedback('m4-feedback',
    correct ? 'Correct!' : `That's ${currentChamp.name}`,
    correct ? 'correct' : 'wrong');
  document.getElementById('m4-next').classList.remove('hidden');
}

// ── Mode switching ──

function switchMode(newMode) {
  document.getElementById(`mode${cMode}`).classList.add('hidden');
  document.getElementById(`tab-m${cMode}`).classList.remove('active');
  cMode = newMode;
  document.getElementById(`mode${cMode}`).classList.remove('hidden');
  document.getElementById(`tab-m${cMode}`).classList.add('active');
  loadCurrent();
}

function loadCurrent() {
  if (cMode === 1) nextM1();
  else if (cMode === 2) nextM2();
  else if (cMode === 3) nextM3();
  else nextM4();
}

// ── Init ──

function init() {
  [1, 2, 3, 4].forEach(m => {
    document.getElementById(`tab-m${m}`).addEventListener('click', () => switchMode(m));
  });

  document.getElementById('m1-next').addEventListener('click', nextM1);
  document.getElementById('m2-next').addEventListener('click', nextM2);
  document.getElementById('m3-submit').addEventListener('click', checkM3);
  document.getElementById('m3-next').addEventListener('click', nextM3);
  document.getElementById('m4-next').addEventListener('click', nextM4);

  document.getElementById('reset-btn').addEventListener('click', () => {
    cScore = { correct: 0, total: 0, streak: 0 };
    updateScoreDisplay();
    loadCurrent();
  });

  nextM4();
}

document.addEventListener('DOMContentLoaded', init);
