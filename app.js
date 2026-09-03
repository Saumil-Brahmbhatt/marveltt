const rawOrder = `Blade
Blade II
Blade: Trinity
Blade: The Series (Season 1)
Hulk (2003)
Daredevil (2003)
Elektra
The Punisher (2004)
Punisher: War Zone
Man-Thing
Ghost Rider
Ghost Rider: Spirit of Vengeance
Fantastic Four (2005)
Fantastic Four: Rise of the Silver Surfer
Fantastic Four (2015)
Spider-Man
Spider-Man 2
Spider-Man 3
The Amazing Spider-Man
The Amazing Spider-Man 2
Madame Web
Venom
Venom: Let There Be Carnage
Morbius
Kraven the Hunter
Venom: The Last Dance
X-Men: First Class
X-Men Origins: Wolverine
X-Men
X2: X-Men United
X-Men: The Last Stand
The Wolverine
X-Men: Days of Future Past
X-Men: Apocalypse
Dark Phoenix
The New Mutants
The Gifted (Season 1 & 2)
Legion (Seasons 1, 2 & 3)
Deadpool
Deadpool 2
Logan
Captain America: The First Avenger
Marvel One-Shot: Agent Carter
Agent Carter (Season 1 & 2)
Captain Marvel
Iron Man
Iron Man 2
The Incredible Hulk
The Consultant
A Funny Thing Happened on the Way to Thor's Hammer
Thor
The Avengers
Item 47
Iron Man 3
All Hail the King
Agents of S.H.I.E.L.D. (Season 1)
Thor: The Dark World
Captain America: The Winter Soldier
Agents of S.H.I.E.L.D. (Season 2)
Guardians of the Galaxy
I Am Groot (Season 1 & 2)
Guardians of the Galaxy Vol. 2
Daredevil (Season 1)
Jessica Jones (Season 1)
Avengers: Age of Ultron
WHiH Newsfront (Season 1)
Ant-Man
Agents of S.H.I.E.L.D. (Season 3)
Daredevil (Season 2)
WHiH Newsfront (Season 2)
Captain America: Civil War
Black Widow
Black Panther
Spider-Man: Homecoming
Luke Cage (Season 1)
Iron Fist (Season 1)
The Defenders (Season 1)
The Punisher (Season 1)
Doctor Strange
Cloak & Dagger (Season 1)
Inhumans (Season 1)
Agents of S.H.I.E.L.D. (Season 4)
Agents of S.H.I.E.L.D.: Slingshot
Runaways (Seasons 1, 2 & 3)
Jessica Jones (Season 2)
Luke Cage (Season 2)
Iron Fist (Season 2)
Daredevil (Season 3)
The Punisher (Season 2)
Jessica Jones (Season 3)
Cloak & Dagger (Season 2)
Helstrom (Season 1)
Team Thor
Team Thor: Part 2
Team Darryl
Thor: Ragnarok
Agents of S.H.I.E.L.D. (Season 5)
Ant-Man and the Wasp
Avengers: Infinity War
Avengers: Endgame
Agents of S.H.I.E.L.D. (Season 6 & 7)
Loki (Season 1)
What If...? (Season 1)
Spider-Man: Into the Spider-Verse
Spider-Man: Across the Spider-Verse
Spider-Noir (Season 1)
X-Men '97 (Season 1 & 2)
WandaVision (Season 1)
The Falcon and the Winter Soldier (Season 1)
Peter's To-Do List
Spider-Man: Far From Home
The Daily Bugle (Season 1 & 2)
Spider-Man: No Way Home
Eternals
Shang-Chi and the Legend of the Ten Rings
Hawkeye (Season 1)
Doctor Strange: Multiverse of Madness
Moon Knight (Season 1)
Ms. Marvel (Season 1)
Thor: Love and Thunder
Black Panther: Wakanda Forever
Werewolf by Night
GOTG Holiday Special
Ant-Man and the Wasp: Quantumania
Guardians of the Galaxy Vol. 3
Secret Invasion (Season 1)
The Marvels
Loki (Season 2)
What If...? (Season 2 & 3)
Marvel Zombies
Deadpool & Wolverine
She-Hulk (Season 1)
Echo (Season 1)
Daredevil: Born Again (Season 1)
Agatha All Along (Season 1)
Ironheart (Season 1)
Eyes of Wakanda (Season 1)
Your Friendly Neighborhood Spider-Man (Season 1)
Wonder Man (Season 1)
Daredevil: Born Again (Season 2)
VisionQuest (Season 1)
Captain America: Brave New World
Thunderbolts*
The Fantastic Four: First Steps
The Punisher: One Last Kill
Spider-Man: Brand New Day
AVENGERS: DOOMSDAY`;

const divisions = ['All divisions', 'Avengers', 'X-Men', 'Spider-Verse', 'Fantastic Four', 'Cosmic', 'Knights / Street-Level', 'Midnight Sons / Supernatural'];
const divisionRanges = { Avengers:[40,116], 'X-Men':[26,39], 'Spider-Verse':[15,25], 'Fantastic Four':[12,15], Cosmic:[55,59], 'Knights / Street-Level':[5,11], 'Midnight Sons / Supernatural':[9,11] };
const episodeCounts = { 'Blade: The Series':13, 'The Gifted':29, Legion:27, 'Agent Carter':18, 'Agents of S.H.I.E.L.D.':136, 'I Am Groot':10, Daredevil:13, 'Jessica Jones':13, 'Luke Cage':13, 'Iron Fist':13, 'The Defenders':8, 'The Punisher':13, 'Cloak & Dagger':10, Runaways:33, Helstrom:10, Loki:12, 'What If...?':26, 'WHiH Newsfront':8, "X-Men '97":20, WandaVision:9, 'The Falcon and the Winter Soldier':6, 'The Daily Bugle':8, Hawkeye:6, 'Moon Knight':6, 'Ms. Marvel':6, 'Secret Invasion':6, 'She-Hulk':9, Echo:5, 'Daredevil: Born Again':18, 'Agatha All Along':9, Ironheart:6, 'Eyes of Wakanda':4, 'Your Friendly Neighborhood Spider-Man':10, 'Wonder Man':8, VisionQuest:8, 'Spider-Noir':8, 'Marvel Zombies':4 };
const seriesPattern = /\(Season|\(Seasons|\bSeries\b|Newsfront|Helstrom|Inhumans|Runaways|Legion|Loki|What If|Marvel Zombies|WandaVision|Falcon and the Winter Soldier|Hawkeye|Moon Knight|Ms\. Marvel|She-Hulk|Echo|Agatha|Ironheart|Eyes of Wakanda|Friendly Neighborhood|Wonder Man|VisionQuest|Daredevil: Born Again|Agent Carter|Agents of S\.H\.I\.E\.L/;
const getEpisodeCount = title => { const key = Object.keys(episodeCounts).find(candidate => title.startsWith(candidate)); return key ? episodeCounts[key] : 8; };
const items = rawOrder.split('\n').map((title,index) => ({ id:`${index}-${title}`, title:title.trim(), index, type:seriesPattern.test(title) ? 'series' : 'movie', episodes:seriesPattern.test(title) ? getEpisodeCount(title) : 0 }));
const state = JSON.parse(localStorage.getItem('marvel-watch-progress') || '{}'); let activeType='all'; let activeDivision='All divisions'; let query='';
const episodeList = item => Array.isArray(state[item.id]) ? state[item.id] : [];
const isWatched = item => item.type === 'movie' ? state[item.id] === true : episodeList(item).length >= item.episodes;
const save = () => { localStorage.setItem('marvel-watch-progress', JSON.stringify(state)); render(); };
const divisionMatch = item => { if (activeDivision === 'All divisions') return true; const [start,end] = divisionRanges[activeDivision]; return item.index >= start && item.index <= end; };
const visibleItems = () => items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) && (activeType === 'all' || item.type === activeType) && divisionMatch(item));
function renderTabs() { document.getElementById('division-tabs').innerHTML = divisions.map(name => `<button class="${name === activeDivision ? 'active' : ''}" data-division="${name}">${name}</button>`).join(''); }
function render() {
  renderTabs(); const watched=items.filter(isWatched).length; const percent=items.length ? Math.round(watched/items.length*100) : 0;
  document.getElementById('all-count').textContent=items.length; document.getElementById('movie-count').textContent=items.filter(item=>item.type==='movie').length; document.getElementById('series-count').textContent=items.filter(item=>item.type==='series').length; document.getElementById('watched-count').textContent=watched; document.getElementById('remaining-count').textContent=items.length-watched; document.getElementById('progress-percent').textContent=`${percent}%`; document.getElementById('progress-bar').style.width=`${percent}%`; document.getElementById('progress-copy').textContent=`${watched} of ${items.length} titles watched`;
  const list=visibleItems(); document.getElementById('empty-state').hidden=list.length>0; document.getElementById('catalog').innerHTML=list.map((item,position) => { const seen=episodeList(item); const complete=isWatched(item); const count=item.type==='movie'?(complete?'Watched':'Not watched'):`${seen.length} / ${item.episodes}`; return `<article class="item" data-id="${item.id}" style="animation-delay:${Math.min(position,15)*18}ms"><div class="title-wrap"><span class="order">${String(item.index+1).padStart(2,'0')}</span><div><div class="title">${item.title}</div><div class="type-label">${item.type==='movie'?'Film':'Series'}</div></div></div><div class="type-label">${item.type==='movie'?'Feature':'Episodes'}</div><div class="progress-label">${count}</div><div class="action">${item.type==='movie'?`<button class="check-button ${complete?'watched':''}" data-action="movie" aria-label="Mark ${item.title} ${complete?'unwatched':'watched'}">✓</button>`:`<button class="open-button" data-action="toggle">Episodes ↗</button>`}</div>${item.type==='series'?`<div class="episode-panel"><header><span>Select episodes seen</span><span>${seen.length} of ${item.episodes} complete</span></header><div class="episodes">${Array.from({length:item.episodes},(_,i)=>`<button class="episode ${seen.includes(i+1)?'seen':''}" data-action="episode" data-episode="${i+1}">${i+1}</button>`).join('')}</div></div>`:''}</article>`; }).join('');
}
document.addEventListener('click', event => { const typeButton=event.target.closest('[data-type]'); if(typeButton){ activeType=typeButton.dataset.type; document.querySelectorAll('[data-type]').forEach(button=>button.classList.toggle('active',button===typeButton)); render(); return; } const divisionButton=event.target.closest('[data-division]'); if(divisionButton){ activeDivision=divisionButton.dataset.division; render(); return; } const row=event.target.closest('.item'); if(!row)return; const item=items.find(entry=>entry.id===row.dataset.id); if(event.target.closest('[data-action="movie"]')){ state[item.id]=!isWatched(item); save(); } else if(event.target.closest('[data-action="toggle"]')){ row.classList.toggle('expanded'); event.target.textContent=`${row.classList.contains('expanded')?'Close':'Episodes'} ↗`; } else if(event.target.closest('[data-action="episode"]')){ const episode=Number(event.target.closest('[data-action="episode"]').dataset.episode); const seen=episodeList(item); state[item.id]=seen.includes(episode)?seen.filter(number=>number<episode):Array.from({length:episode},(_,index)=>index+1); save(); requestAnimationFrame(()=>document.querySelector(`[data-id="${CSS.escape(item.id)}"]`)?.classList.add('expanded')); } });
document.getElementById('search').addEventListener('input', event => { query=event.target.value; render(); }); document.getElementById('reset-button').addEventListener('click',()=>{ if(confirm('Reset all watch progress?')){ Object.keys(state).forEach(key=>delete state[key]); save(); } }); render();