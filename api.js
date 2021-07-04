const form = document.querySelector('#search');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    const list = document.createElement("ul");
    const list1 = document.createElement("li");
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const list2 = document.createElement("li")
    list1.appendChild(document.createTextNode(res.data.ticker.price));
    list2.appendChild(document.createTextNode(time));

    list.append(list1);
    list.append(list2);
    document.body.append(list);
    //console.log(list1.value);
    //console.log(time);
    //console.dir(list1);
})
