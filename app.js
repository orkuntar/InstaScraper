async function getResponse() {
const url = 'https://instagram130.p.rapidapi.com/account-info?username='+username.value;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'KEY HERE',
		'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
	}
};

try {
    const response = await fetch(url, options)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
         const followers = (data['edge_followed_by']);
         JSON.stringify(followers)
         pEl;
      })
	
} catch (error) {
	console.error(error);
}
}
const pEl = document.getElementById('followerCount'.innerText);
const inputEl = document.getElementById('username').value;
const inputBtn = document.getElementById('inputBtn');
inputBtn.addEventListener('click', getResponse());
