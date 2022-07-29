import fetch from "node-fetch";

function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                    if (response.status === 200) return response.json();
                    console.error("ERROR:", url, response.statusText);
                }
            )
            .then((data) => {
                resolve(data)
            });

    });

}

async function checkArea(urbId) {
    /// https://api.teleport.org/api/urban_areas/slug:aarhus/
    /// https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/
    const slug = urbId.match(/slug:[a-z-0-9()]+/gi);
    const res = await getData(`https://api.teleport.org/api/urban_areas/${slug}/scores/`);
    console.log(`Processing ${slug}: ${!!res}`);
    return !!res;
}


function makeList() {

}

async function getAllAreas() {
    const data = await getData("https://api.teleport.org/api/urban_areas");
    if (!data) return;
    const queue = data._links["ua:item"].concat();
    console.log(queue);
    return;
    const validAreas = [];
    for (const item of queue) {
        const valid = await checkArea(item.href);
        if (valid) validAreas.push(item);
    }
    console.log(validAreas.length, queue.length);
    console.log(validAreas)

}

getAllAreas();