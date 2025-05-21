document.addEventListener('DOMContentLoaded', () => {
  const previous = {}, news = [];
  let index = 0;

  const fetchData = () => {
    fetch('http://szuflandia.pjwstk.edu.pl/~ppisarski/zad8/dane.php')
      .then(res => res.json())
      .then(data => {
        if (data?.stock) updateStocks(data.stock);
        if (data?.news) news[0] = data.news;
      });
  };

  const updateStocks = stocks => {
    const tbody = document.querySelector('#stock-table tbody');
    tbody.innerHTML = '';
    for (const [s, c] of Object.entries(stocks)) {
      const change = previous[s] === undefined ? 'same' : c > previous[s] ? 'up' : c < previous[s] ? 'down' : 'same';
      previous[s] = c;
      tbody.innerHTML += `
        <tr>
          <td>${s}</td>
          <td>${c.toFixed(2)}</td>
          <td class="${change}">${change === 'up' ? '▲' : change === 'down' ? '▼' : '—'}</td>
        </tr>`;
    }
  };

  setInterval(() => {
    const n = document.getElementById('news');
    if (news.length) n.textContent = news[index++ % news.length];
  }, 3000);

  fetchData();
  setInterval(fetchData, 5000);
});
