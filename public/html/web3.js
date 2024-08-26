
  window.addEventListener('DOMContentLoaded', async () => {
    // Metamask'ın Ethereum sağlayıcısını kontrol et
    if (window.ethereum) {
      // Metamask'a bağlan
      window.web3 = new Web3(ethereum);
      try {
        // Metamask kullanıcısının cüzdan adresini al
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const currentAccount = accounts[0];
  
        // Cüzdan adresini HTML içeriğine yerleştir
        document.getElementById('cuzdan-adresi').innerText = currentAccount;
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Metamask bulunamadı! Lütfen Metamask kurulu olduğundan emin olun.');
    }
  });