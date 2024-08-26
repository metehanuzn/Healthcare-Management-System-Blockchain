const contractAddress = '0x0b38243Dbaf897307c0042b730eEa486bC6b39fE';
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "aktiflikDurumu",
        "type": "bool"
      }
    ],
    "name": "DoktorDurumuGuncellendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "uzmanlikAlani",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      }
    ],
    "name": "DoktorEklendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "uzmanlikAlani",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      }
    ],
    "name": "DoktorGuncellendi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "adres",
        "type": "address"
      }
    ],
    "name": "DoktorSilindi",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "doktorAdresleri",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "doktorSayisi",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "doktorlar",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "soyad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "uzmanlikAlani",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "adres",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "aktif",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_soyad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_uzmanlikAlani",
        "type": "string"
      }
    ],
    "name": "doktorEkle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_adres",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_ad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_soyad",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_uzmanlikAlani",
        "type": "string"
      }
    ],
    "name": "doktorGuncelle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_aktiflikDurumu",
        "type": "bool"
      }
    ],
    "name": "doktorDurumunuGuncelle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getDoktorAdresleri",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_adres",
        "type": "address"
      }
    ],
    "name": "doktoruSil",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let web3;
let doctorContract;

async function loadDoctorInfo() {
    const doctorInfoDiv = document.getElementById('doctorInfo');
    doctorInfoDiv.innerHTML = 'Doktor bilgileri yükleniyor...';

    const accounts = await web3.eth.getAccounts();
    const currentAddress = accounts[0];

    const doctor = await doctorContract.methods.doktorlar(currentAddress).call();

    if (doctor.id != 0) {
        doctorInfoDiv.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Doktor ID: ${doctor.id}</h5>
                    <p class="card-text">Ad: ${doctor.ad}</p>
                    <p class="card-text">Soyad: ${doctor.soyad}</p>
                    <p class="card-text">Uzmanlık Alanı: ${doctor.uzmanlikAlani}</p>
                    <p class="card-text">Adres: ${doctor.adres}</p>
                    <p class="card-text">Aktiflik Durumu: <span id="activeStatus">${doctor.aktif ? 'Aktif' : 'Pasif'}</span></p>
                </div>
            </div>
        `;
        document.getElementById('toggleActiveStatus').style.display = 'block';
    } else {
        doctorInfoDiv.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Doktor bilgisi bulunamadı.
            </div>
        `;
        document.getElementById('toggleActiveStatus').style.display = 'none';
    }
}

async function toggleActiveStatus() {
    const accounts = await web3.eth.getAccounts();
    const currentAddress = accounts[0];

    const doctor = await doctorContract.methods.doktorlar(currentAddress).call();

    const newStatus = !doctor.aktif;

    await doctorContract.methods.doktorDurumunuGuncelle(newStatus)
        .send({ from: currentAddress })
        .on('receipt', receipt => {
            console.log('Aktiflik durumu güncellendi', receipt);
            loadDoctorInfo();
        })
        .on('error', error => {
            console.error('Aktiflik durumu güncellenirken hata oluştu', error);
        });
}

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            doctorContract = new web3.eth.Contract(contractABI, contractAddress);
            loadDoctorInfo();
        } catch (error) {
            console.error("Kullanıcı hesap erişimini reddetti.");
        }
    } else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        doctorContract = new web3.eth.Contract(contractABI, contractAddress);
        loadDoctorInfo();
    } else {
        console.log('Ethereum tarayıcısı tespit edilmedi. MetaMask kullanmayı düşünmelisiniz!');
    }

    document.getElementById('toggleActiveStatus').addEventListener('click', toggleActiveStatus);
});