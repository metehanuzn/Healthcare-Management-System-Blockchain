async function redirectToDoctorsPage() {
    const doctorsPageURL = "doctorpanel.html";
    
    window.location.href = doctorsPageURL;

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
        const userAddress = accounts[0];
        displayDoctorInfo(userAddress); 
    }
}

function redirectToIndexPage() {
    const indexPageURL = "index.html";
    
    window.location.href = indexPageURL;
}

const connectButton = document.getElementById("connectButton");

connectButton.addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Metamask hesabı bağlandı!");
            redirectToDoctorsPage();
        } catch (error) {
            console.error("Metamask hesabı bağlanırken bir hata oluştu:", error);
        }
    } else {
        console.error("Metamask bulunamadı. Lütfen Metamask yükleyin veya açın.");
    }
});

