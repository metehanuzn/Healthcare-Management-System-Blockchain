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
  
  async function addDoctor(event) {
    event.preventDefault();

    const ad = document.getElementById('addAd').value;
    const soyad = document.getElementById('addSoyad').value;
    const uzmanlikAlani = document.getElementById('addUzmanlikAlani').value;
    const accounts = await web3.eth.getAccounts();

    doctorContract.methods.doktorEkle(ad, soyad, uzmanlikAlani)
        .send({ from: accounts[0] })
        .on('receipt', receipt => {
            console.log('Doctor added', receipt);
            listDoctors();  
        })
        .on('error', error => {
            console.error('Error adding doctor', error);
        });
}
  
async function updateDoctor(event) {
  event.preventDefault();

  const adres = document.getElementById('updateAddress').value;
  const ad = document.getElementById('updateAd').value;
  const soyad = document.getElementById('updateSoyad').value;
  const uzmanlikAlani = document.getElementById('updateUzmanlikAlani').value;

  const accounts = await web3.eth.getAccounts();

  doctorContract.methods.doktorGuncelle(adres, ad, soyad, uzmanlikAlani)
      .send({ from: accounts[0] })
      .on('receipt', receipt => {
          console.log('Doctor updated', receipt);
          listDoctors(); 
      })
      .on('error', error => {
          console.error('Error updating doctor', error);
      });
}
  
async function listDoctors() {
  const doctorList = document.getElementById('doctorList');
  doctorList.innerHTML = '';  

  const doctorAddresses = await doctorContract.methods.getDoktorAdresleri().call();
  const addedAddresses = new Set();  

  for (let i = 0; i < doctorAddresses.length; i++) {
      const doctorAddress = doctorAddresses[i];
      
      if (addedAddresses.has(doctorAddress)) {
          continue;  
      }

      const doctor = await doctorContract.methods.doktorlar(doctorAddress).call();

      if (doctor.id != 0) {
          const doctorElement = document.createElement('div');
          doctorElement.innerHTML = `
              <p>Doktor ID: ${doctor.id}</p>
              <p>Ad: ${doctor.ad}</p>
              <p>Soyad: ${doctor.soyad}</p>
              <p>Uzmanlık Alanı: ${doctor.uzmanlikAlani}</p>
              <p>Adres: ${doctor.adres}</p>
              <p>Aktiflik Durumu: ${doctor.aktif ? 'Aktif' : 'Pasif'}</p>
              <hr>
          `;
          doctorList.appendChild(doctorElement);
          addedAddresses.add(doctorAddress); 
      }
  }
}

  async function deleteDoctor(event) {
    event.preventDefault();

    const adres = document.getElementById('deleteAddress').value;
    const accounts = await web3.eth.getAccounts();

    doctorContract.methods.doktoruSil(adres)
        .send({ from: accounts[0] })
        .on('receipt', receipt => {
            console.log('Doctor deleted', receipt);
            listDoctors();
        })
        .on('error', error => {
            console.error('Error deleting doctor', error);
        });
}

  function removeDoctorFromList(adres) {
    const doctorElement = document.getElementById(adres);
    if (doctorElement) {
        doctorElement.remove();
    }
}
  
  window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            doctorContract = new web3.eth.Contract(contractABI, contractAddress);
            listDoctors(); 
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        doctorContract = new web3.eth.Contract(contractABI, contractAddress);
        listDoctors(); 
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    document.getElementById('addDoctorForm').addEventListener('submit', async (event) => {
        await addDoctor(event);
        listDoctors(); 
    });
    
    document.getElementById('updateDoctorForm').addEventListener('submit', async (event) => {
        await updateDoctor(event);
        listDoctors(); 
    });

    document.getElementById('deleteDoctorForm').addEventListener('submit', async (event) => {
      await deleteDoctor(event);
      listDoctors(); 
  });
});