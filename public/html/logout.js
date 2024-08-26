// MetaMask'ın yüklü olup olmadığını kontrol edin
if (typeof window.ethereum !== 'undefined') {
    // MetaMask events
    ethereum.on('accountsChanged', (accounts) => {
        // Eğer hesaplar boşsa, kullanıcı cüzdandan çıkış yapmış demektir
        if (accounts.length === 0) {
            // login.html sayfasına yönlendirin
            window.location.href = 'login.html';
        }
    });
} else {
    console.log('MetaMask is not installed.');
}
