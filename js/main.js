
function updatedPortifolio(profileData) {
    const portifolio = document.getElementById('profile.portfolio')

    portifolio.innerHTML = profileData.portifolio.map((project) => {
        return `
            <li>
                <span class="title github">${project.name}</span>
                <a href="${project.git_url}" target="">teste</a>
             </li>
    `
    }).join('')

}


(async function () {

    const profileData = await fetchProfileData()

    console.log(profileData)

    updatedPortifolio(profileData);

})()