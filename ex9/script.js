/**
 * 長庚大學 Lab9 腳本 [cite: 1008]
 * 功能：呼叫 Flickr API 並動態生成照片牆
 */

function getFlickrImg() {
    // 講義提供之 Flickr API 網址 
    const apiKey = 'ca370d51a054836007519a00ff4ce59e';
    const listUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=10&format=json&nojsoncallback=1`;

    // 使用 Fetch API 取得資料 [cite: 411]
    fetch(listUrl)
        .then(response => {
            if (!response.ok) throw Error(response.statusText); // 錯誤處理 [cite: 762-763]
            return response.json();
        })
        .then(data => {
            // 分析 Flickr 回傳的 JSON [cite: 1010]
            const photos = data.photos.photo;
            add_new_img(photos); // 呼叫呈現函式 [cite: 253]
        })
        .catch(error => {
            console.log('喔不！發生問題了：\n', error);
        });
}

function add_new_img(dataset) {
    const gal = document.getElementById("gallery");
    gal.innerHTML = ""; // 每次點擊先清空舊照片

    dataset.forEach(item => {
        // 組合 Flickr 圖片網址：https://live.staticflickr.com/{server}/{id}_{secret}_{size}.jpg
        const imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_q.jpg`;
        
        // 建立 img 元件 [cite: 382]
        const img = document.createElement("img");
        img.setAttribute("src", imgUrl);
        
        // 將照片加入牆中 [cite: 383]
        gal.appendChild(img);
    });
}